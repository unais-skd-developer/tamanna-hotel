import fs from 'fs';
const html = fs.readFileSync('scripts/home.html', 'utf-8');

const idx = html.indexOf('data-id="89e8816"');
// Let's find the parent container
const parentStart = html.lastIndexOf('class="elementor-element', idx - 10);
console.log('Parent HTML preview:');
console.log(html.slice(parentStart - 300, parentStart + 800));
