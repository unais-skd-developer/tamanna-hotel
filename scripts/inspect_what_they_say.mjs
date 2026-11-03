import fs from 'fs';

const html = fs.readFileSync('scripts/home.html', 'utf-8');

const idx = html.indexOf('What They say about us');
if (idx !== -1) {
  console.log(html.slice(idx - 500, idx + 4000));
} else {
  console.log('not found');
}

