import { mkdir, readdir, copyFile, unlink } from 'node:fs/promises';
import { resolve } from 'node:path';
import { launchBrowser } from './browser.mjs';
import { serveBuild } from './static-server.mjs';

const server = await serveBuild();
let browser;
try {
  browser = await launchBrowser();
  const page = await browser.newPage();
  await mkdir('dist/exports', { recursive: true });
  const entries = (await readdir('dist/activity', { withFileTypes: true })).filter((entry) => entry.isDirectory());
  const jobs = [
    { route: '/print/', filename: 'kobe-vandenberghe-portfolio.pdf', title: 'Kobe Vandenberghe · Portfolio' },
    ...entries.map((entry) => ({ route: `/activity/${entry.name}/`, filename: `activity-${entry.name}.pdf`, title: 'Kobe Vandenberghe · Activity' })),
  ];
  for (const job of jobs) {
    const response = await page.goto(`${server.origin}${server.prefix}${job.route}`, { waitUntil: 'networkidle' });
    if (!response?.ok()) throw new Error(`Could not render ${job.route}`);
    await page.evaluate(async () => {
      await document.fonts.ready;
      await Promise.all([...document.images].map((image) => image.decode()));
    });
    await page.pdf({
      path: resolve('dist/exports', job.filename), format: 'A4', printBackground: true, preferCSSPageSize: true,
      displayHeaderFooter: true, headerTemplate: '<span></span>',
      footerTemplate: `<div style="width:100%;margin:0 16mm;font-family:Arial,sans-serif;font-size:8px;color:#52525b;display:flex;justify-content:space-between"><span>${job.title}</span><span><span class="pageNumber"></span> / <span class="totalPages"></span></span></div>`,
    });
    console.log(`PDF: ${job.filename}`);
  }
  // Keep generated downloads available in Astro's development server, too.
  // These are ignored build products, not separately authored content.
  await mkdir('public/exports', { recursive: true });
  const currentFiles = new Set(jobs.map((job) => job.filename));
  for (const directory of ['dist/exports', 'public/exports']) {
    for (const filename of await readdir(directory)) {
      if (filename.endsWith('.pdf') && !currentFiles.has(filename)) await unlink(resolve(directory, filename));
    }
  }
  for (const job of jobs) await copyFile(resolve('dist/exports', job.filename), resolve('public/exports', job.filename));
} finally {
  await browser?.close();
  await server.close();
}
