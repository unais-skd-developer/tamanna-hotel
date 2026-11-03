import fs from 'fs';
const html = fs.readFileSync('scripts/home.html', 'utf-8');

const idx = html.indexOf('data-id="3361427"');
console.log(html.slice(idx - 1500, idx));

