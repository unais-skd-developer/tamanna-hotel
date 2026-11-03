import fs from 'fs';
const html = fs.readFileSync('scripts/home.html', 'utf-8');

const idx = html.indexOf('elementskit-watermark-icon');
console.log(html.slice(idx, idx + 300));

