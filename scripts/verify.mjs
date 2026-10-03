import assert from 'node:assert/strict';
import { readFile, readdir, mkdir } from 'node:fs/promises';
import { launchBrowser } from './browser.mjs';
import { serveBuild } from './static-server.mjs';

const server = await serveBuild();
let browser;
try {
  browser = await launchBrowser();
  const page = await browser.newPage();
  const errors = [];
  page.on('pageerror', (error) => errors.push(error.message));
  const articles = (await readdir('dist/activity', { withFileTypes: true })).filter((entry) => entry.isDirectory());
  const routes = ['/', '/about/', '/activity/', ...articles.map((entry) => `/activity/${entry.name}/`), '/404.html', '/print/'];
  const checked = new Set();
  await mkdir('tmp/qa', { recursive: true });

  for (const route of routes) {
    for (const width of [1440, 390, 320]) {
      await page.setViewportSize({ width, height: 1000 });
      const response = await page.goto(`${server.origin}${server.prefix}${route}`, { waitUntil: 'networkidle' });
      assert(response?.ok(), `${route} must load`);
      assert.equal(await page.locator('html').getAttribute('lang'), 'en');
      assert.equal(await page.locator('h1').count(), 1, `${route} needs one main heading`);
      assert(await page.title(), `${route} needs a title`);
      assert(await page.locator('meta[name="description"]').getAttribute('content'));
      if (route === '/print/') {
        assert.equal(await page.locator('.snapshot-interests .focus-item').count(), 3, 'Portfolio PDF source must include homepage interests');
        assert.equal(await page.locator('.snapshot-index').count(), 1, 'Portfolio PDF source must include the activity index');
        assert.equal(await page.locator('.snapshot-index li').count(), articles.length, 'Activity index must include every published article');
        assert.equal(await page.locator('.snapshot-article').count(), articles.length, 'Portfolio PDF source must include every published article');
      }
      const overflow = await page.evaluate(() => document.documentElement.scrollWidth > innerWidth + 1);
      assert(!overflow, `${route} overflows at ${width}px`);
      const urls = await page.locator('a[href], link[href], img[src], script[src]').evaluateAll((elements) => elements.map((el) => el.getAttribute('href') || el.getAttribute('src')));
      for (const href of urls) {
        if (!href || /^(https?:|mailto:|data:)/.test(href)) continue;
        const url = new URL(href, page.url());
        if (url.hash) {
          const target = await page.locator(`[id="${decodeURIComponent(url.hash.slice(1))}"]`).count();
          assert(target, `Missing anchor ${href} in ${route}`);
        }
        url.hash = '';
        if (checked.has(url.href)) continue;
        const result = await page.request.get(url.href);
        assert(result.ok(), `Broken resource ${url.href}`);
        checked.add(url.href);
      }
      if (route === '/' || route === '/about/' || route === '/activity/' || route.startsWith('/activity/') && route !== '/activity/') {
        await page.screenshot({ path: `tmp/qa/${route.replace(/[^a-z0-9]+/gi, '-') || 'home'}-${width}.png`, fullPage: true });
      }
    }
  }

  await page.goto(`${server.origin}${server.prefix}/`);
  await page.keyboard.press('Tab');
  assert.equal(await page.locator(':focus').innerText(), 'Skip to content');
  await page.keyboard.press('Enter');
  assert.equal(await page.evaluate(() => document.activeElement?.id), 'main');
  assert.equal(await page.locator('a[href*="/portfolio/"]').count(), 0);
  assert.equal((await page.request.get(`${server.origin}${server.prefix}/portfolio/`)).status(), 404);
  assert.equal((await page.request.get(`${server.origin}${server.prefix}/projects/`)).status(), 404);
  await page.emulateMedia({ reducedMotion: 'reduce' });
  const transition = await page.locator('.wordmark').evaluate((el) => getComputedStyle(el).transitionDuration);
  assert.equal(transition, '0s');
  for (const route of ['/', '/about/', '/activity/']) {
    await page.setViewportSize({ width: 390, height: 900 });
    await page.goto(`${server.origin}${server.prefix}${route}`);
    await page.evaluate(() => { document.documentElement.style.fontSize = '200%'; });
    assert(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth + 1), `${route} must support 200% text enlargement`);
  }
  await page.goto(`${server.origin}${server.prefix}/print/`);
  await page.emulateMedia({ media: 'print' });
  const pageBreaks = await page.locator('.snapshot-about, .snapshot-index, .snapshot-article').evaluateAll((elements) => elements.map((element) => getComputedStyle(element).breakBefore));
  assert(pageBreaks.length >= 3, 'Portfolio PDF source must have page boundaries between site pages');
  assert(pageBreaks.every((breakBefore) => breakBefore === 'page'), 'Each portfolio section must start on a new PDF page');
  for (const filename of await readdir('dist/exports')) {
    const bytes = await readFile(`dist/exports/${filename}`);
    assert.equal(bytes.subarray(0, 5).toString(), '%PDF-');
    assert(bytes.length > 5000, `${filename} should contain a rendered document`);
  }
  assert.deepEqual(await readFile('CV.pdf'), await readFile('dist/cv/kobe-vandenberghe-cv.pdf'));
  assert.equal(errors.length, 0, errors.join('\n'));
  console.log(`Verified ${routes.length} routes at desktop, mobile, and 320px; ${checked.size} resources; keyboard access; reduced motion; 200% text; PDFs; unchanged CV.`);
} finally {
  await browser?.close();
  await server.close();
}
