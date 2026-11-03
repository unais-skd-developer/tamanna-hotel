import fs from 'fs';

const html = fs.readFileSync('scripts/home.html', 'utf-8');

const idx = html.indexOf('STYLE YOUR');
if (idx !== -1) {
  console.log(html.slice(idx - 1000, idx + 2000));
} else {
  console.log('not found');
}

