import fs from 'fs';

const html = fs.readFileSync('scripts/pages/offers.html', 'utf8');

const imgIdx = html.indexOf('PHOTO-2024-05-07');
console.log(html.slice(imgIdx - 800, imgIdx + 200));

