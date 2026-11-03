import fs from 'fs';
const html = fs.readFileSync('scripts/home.html', 'utf-8');

const idx = html.indexOf('elementskit-testimonial-slider');
console.log(html.slice(idx, idx + 1000));

