import fs from 'fs';

const html = fs.readFileSync('scripts/home.html', 'utf-8');

const idx = html.indexOf('Book Your');
if (idx !== -1) {
  const formHtml = html.slice(idx - 200, idx + 3500);
  fs.writeFileSync('scripts/booking_bar.html', formHtml);
  console.log('Saved booking_bar.html');
}
