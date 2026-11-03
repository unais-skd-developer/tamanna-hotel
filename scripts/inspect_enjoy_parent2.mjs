import fs from 'fs';
const html = fs.readFileSync('scripts/home.html', 'utf-8');

const idx = html.indexOf('data-id="dfcb9ee"');
const parentContainer = html.lastIndexOf('<div class="elementor-element', idx - 100);
console.log('Parent Container tag:', html.slice(parentContainer, parentContainer + 400));

