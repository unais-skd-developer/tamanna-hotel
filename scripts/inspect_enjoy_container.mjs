import fs from 'fs';
const html = fs.readFileSync('scripts/home.html', 'utf-8');

const idx = 418568;
const containerStart = html.lastIndexOf('<div class="elementor-element', idx);
console.log('Container start:', html.slice(containerStart - 100, idx + 100));

