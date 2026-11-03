import fs from 'fs';
const html = fs.readFileSync('scripts/home.html', 'utf-8');

const idx = html.indexOf('repocean-slider-main-v2');
const slice = html.slice(idx, idx + 25000);

const regex = /<span itemprop="name">([^<]+)<\/span>/g;
let m;
while ((m = regex.exec(slice)) !== null) {
  console.log(m[1]);
}

