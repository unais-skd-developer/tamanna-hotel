import fs from 'fs';
const html = fs.readFileSync('scripts/home.html', 'utf-8');

const idx = html.indexOf('Our Gallery');
if (idx !== -1) {
  console.log(html.slice(idx - 300, idx + 400));
} else {
  console.log('not found');
}

