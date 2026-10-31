import fs from 'fs';

const html = fs.readFileSync('scripts/home.html', 'utf-8');

const idx = html.indexOf('Book Your');
if (idx !== -1) {
  console.log('--- BEFORE BOOK YOUR ---');
  console.log(html.slice(idx - 2500, idx));
  console.log('--- AFTER BOOK YOUR ---');
  console.log(html.slice(idx, idx + 2000));
}
