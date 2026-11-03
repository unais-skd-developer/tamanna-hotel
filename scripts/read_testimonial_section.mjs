import fs from 'fs';
const html = fs.readFileSync('scripts/home.html', 'utf-8');

const idx = html.indexOf('data-id="89e8816"');
const slice = html.slice(idx, idx + 12000);

const authorRegex = /<strong class="elementskit-author-name">([^<]+)<\/strong>[\s\S]*?<p>([\s\S]*?)<\/p>/g;
let m;
while ((m = authorRegex.exec(slice)) !== null) {
  console.log('Author:', m[1]);
  console.log('Review:', m[2].trim());
  console.log('---');
}
