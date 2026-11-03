import fs from 'fs';
const html = fs.readFileSync('scripts/home.html', 'utf-8');

const idx = html.indexOf('repocean-slider-main-v2');
const slice = html.slice(idx, idx + 12000);

const regex = /<div class="slider-box"[\s\S]*?<img decoding="async" src="([^"]*)"[^>]*alt="Reviewer Image"[\s\S]*?<span itemprop="name">([^<]*)<\/span>[\s\S]*?<div class="profile-date"><p>([^<]*)<\/p>[\s\S]*?<div class="description[^"]*"[^>]*><p>([^<]*)<\/p>/g;

let m;
while ((m = regex.exec(slice)) !== null) {
  console.log({
    img: m[1],
    name: m[2],
    date: m[3],
    text: m[4]
  });
}

