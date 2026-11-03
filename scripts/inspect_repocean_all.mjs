import fs from 'fs';
const html = fs.readFileSync('scripts/home.html', 'utf-8');

const idx = html.indexOf('repocean-slider-main-v2');
const slice = html.slice(idx, idx + 15000);

const reviewRegex = /<span itemprop="name">([^<]+)<\/span>[\s\S]*?<p>([^<]+)<\/p>[\s\S]*?itemprop="reviewBody"><p>([^<]+)<\/p>/g;
let m;
while ((m = reviewRegex.exec(slice)) !== null) {
  console.log('Author:', m[1], 'Date:', m[2]);
  console.log('Text:', m[3]);
  console.log('---');
}
