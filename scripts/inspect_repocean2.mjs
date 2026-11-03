import fs from 'fs';
const html = fs.readFileSync('scripts/home.html', 'utf-8');

const idx = html.indexOf('repocean-slider-main-v2');
console.log(html.slice(idx, idx + 4000));
