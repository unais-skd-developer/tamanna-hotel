import fs from 'fs';
const html = fs.readFileSync('scripts/home.html', 'utf-8');

const idx = 418568;
const containerStart = html.lastIndexOf('<div class="elementor-element', idx - 50);
console.log('Container tag:', html.slice(containerStart, containerStart + 400));

