import fs from 'fs';
const html = fs.readFileSync('scripts/home.html', 'utf-8');

const idx = html.indexOf('data-id="65a97fc"');
console.log(html.slice(idx, idx + 3000));

