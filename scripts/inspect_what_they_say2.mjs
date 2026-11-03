import fs from 'fs';

const html = fs.readFileSync('scripts/home.html', 'utf-8');

const idx = html.indexOf('0ac3936');
if (idx !== -1) {
  console.log(html.slice(idx - 200, idx + 2500));
} else {
  console.log('not found');
}

