import fs from 'fs';
const html = fs.readFileSync('scripts/home.html', 'utf-8');

const idx = html.indexOf('repocean-slider-main-v2');
const slice = html.slice(idx, idx + 10000);

const reviewItemRegex = /<div class="user-name">([^<]+)<\/div>[\s\S]*?<div class="review-date">([^<]+)<\/div>[\s\S]*?<div class="review-text">([\s\S]*?)<\/div>/g;
let m;
while ((m = reviewItemRegex.exec(slice)) !== null) {
  console.log('User:', m[1].trim(), 'Date:', m[2].trim());
  console.log('Text:', m[3].replace(/<[^>]+>/g, '').trim().slice(0, 150));
  console.log('---');
}
