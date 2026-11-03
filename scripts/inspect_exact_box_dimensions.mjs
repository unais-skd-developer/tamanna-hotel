import fs from 'fs';
const html = fs.readFileSync('scripts/home.html', 'utf-8');

const idx = html.indexOf('data-id="89e8816"');
const parentContainer = html.lastIndexOf('class="elementor-element', idx - 50);
console.log('Parent Container markup:');
console.log(html.slice(parentContainer - 400, idx + 300));

