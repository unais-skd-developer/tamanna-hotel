import fs from 'fs';
const html = fs.readFileSync('scripts/home.html', 'utf-8');

const idx = html.indexOf('data-id="3361427"');
const endIdx = html.indexOf('class="elementor-element', idx + 4000);
console.log(html.slice(idx, idx + 4000));

