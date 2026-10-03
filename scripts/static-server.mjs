import { createServer } from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import { resolve, extname, sep } from 'node:path';

const mime = { '.html': 'text/html; charset=utf-8', '.css': 'text/css', '.js': 'text/javascript', '.pdf': 'application/pdf', '.svg': 'image/svg+xml', '.png': 'image/png', '.jpg': 'image/jpeg', '.webp': 'image/webp' };

export async function serveBuild(base = process.env.BASE_PATH || '/') {
  const root = resolve('dist');
  const prefix = `/${base.replace(/^\/+|\/+$/g, '')}`.replace(/\/$/, '');
  const server = createServer(async (request, response) => {
    try {
      let path = decodeURIComponent(new URL(request.url || '/', 'http://localhost').pathname);
      if (prefix && path !== prefix && !path.startsWith(`${prefix}/`)) { response.writeHead(404).end(); return; }
      path = path.slice(prefix.length);
      let file = resolve(root, `.${path || '/'}`);
      if (file !== root && !file.startsWith(`${root}${sep}`)) { response.writeHead(403).end(); return; }
      if ((await stat(file)).isDirectory()) file = resolve(file, 'index.html');
      const body = await readFile(file);
      response.writeHead(200, { 'Content-Type': mime[extname(file)] || 'application/octet-stream' });
      response.end(body);
    } catch { response.writeHead(404).end('Not found'); }
  });
  await new Promise((done) => server.listen(0, '127.0.0.1', done));
  const origin = `http://127.0.0.1:${server.address().port}`;
  return { origin, prefix, close: () => new Promise((done) => server.close(done)) };
}
