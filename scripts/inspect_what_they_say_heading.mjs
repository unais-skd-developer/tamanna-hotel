import fs from 'fs';
const html = fs.readFileSync('scripts/home.html', 'utf-8');

const idx = html.indexOf('consistently rated among the top hotels in Pune');
const start = html.lastIndexOf('<section', idx) !== -1 ? html.lastIndexOf('<section', idx) : html.lastIndexOf('<div class="elementor-element', idx - 1000);
console.log(html.slice(start, idx + 200));

