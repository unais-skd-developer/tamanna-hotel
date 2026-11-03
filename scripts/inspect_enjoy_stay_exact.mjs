import fs from 'fs';
const html = fs.readFileSync('scripts/home.html', 'utf-8');

const idx = html.indexOf('ENJOY YOUR STAY AT OUR HOTEL');
if (idx !== -1) {
  console.log(html.slice(idx - 1000, idx + 2500));
} else {
  console.log('Not found');
}

