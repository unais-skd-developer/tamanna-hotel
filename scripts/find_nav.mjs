import fs from 'fs';
const html = fs.readFileSync('scripts/home.html', 'utf-8');
let idx = 0;
while ((idx = html.indexOf('bdt-navigation-prev', idx + 1)) !== -1) {
  console.log(html.slice(idx - 50, idx + 250));
}

