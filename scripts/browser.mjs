import { chromium } from 'playwright';
import { existsSync } from 'node:fs';

export async function launchBrowser() {
  const candidates = [process.env.PDF_BROWSER_PATH, 'C:/Program Files/Google/Chrome/Application/chrome.exe', 'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe'];
  const executablePath = candidates.find((path) => path && existsSync(path));
  return chromium.launch({ headless: true, ...(executablePath ? { executablePath } : {}) });
}
