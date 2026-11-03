import fs from 'fs';
const html = fs.readFileSync('scripts/home.html', 'utf-8');

const regex = /gallery/gi;
let m;
while ((m = regex.exec(html)) !== null) {
  if (html.slice(m.index - 50, m.index + 100).includes('heading') || html.slice(m.index - 50, m.index + 100).includes('<h2')) {
    console.log(html.slice(m.index - 100, m.index + 200));
  }
}

