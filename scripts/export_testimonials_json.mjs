import fs from 'fs';
const html = fs.readFileSync('scripts/home.html', 'utf-8');

const idx = 461615;
const containerStart = html.lastIndexOf('<div class="elementor-element elementor-element-89e8816', idx);
const endIdx = html.indexOf('</div>\n\t\t\t\t</div>\n\t\t</div>', idx + 20000);
const slice = html.slice(containerStart, endIdx);

const authorRegex = /<strong class="elementskit-author-name">([^<]+)<\/strong>[\s\S]*?<p>([\s\S]*?)<\/p>/g;
let m;
const list = [];
while ((m = authorRegex.exec(slice)) !== null) {
  list.push({
    author: m[1].trim(),
    text: m[2].trim().replace(/&amp;/g, '&').replace(/&#039;/g, "'")
  });
}

console.log(JSON.stringify(list, null, 2));

