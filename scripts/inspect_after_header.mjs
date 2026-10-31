import fs from 'fs';

const html = fs.readFileSync('scripts/home.html', 'utf-8');

const bodyIdx = html.indexOf('<body');
const headerIdx = html.indexOf('</header>');
console.log('bodyIdx:', bodyIdx, 'headerIdx:', headerIdx);

if (headerIdx !== -1) {
  console.log('--- CONTENT AFTER </header> (first 3000 chars) ---');
  console.log(html.slice(headerIdx, headerIdx + 3000));
}

