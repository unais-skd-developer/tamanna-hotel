import fs from 'fs';
const html = fs.readFileSync('scripts/home.html', 'utf-8');

const idx = 461615;
// Find container start
const containerStart = html.lastIndexOf('<div class="elementor-element', idx - 500);
const containerEnd = html.indexOf('</div>\n\t\t\t\t</div>\n\t\t</div>', idx + 1000);
const slice = html.slice(containerStart, idx + 10000);

const authorRegex = /<strong class="elementskit-author-name">([^<]+)<\/strong>[\s\S]*?<p>([\s\S]*?)<\/p>/g;
let m;
console.log('--- ALL TESTIMONIALS ---');
while ((m = authorRegex.exec(slice)) !== null) {
  console.log('Author:', m[1].trim());
  console.log('Text:', m[2].trim());
  console.log('------------------------');
}

