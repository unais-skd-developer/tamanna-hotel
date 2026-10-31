import fs from 'fs';

const html = fs.readFileSync('scripts/home.html', 'utf-8');

const idx = html.indexOf('id="enquire"');
if (idx !== -1) {
  console.log(html.slice(Math.max(0, idx - 4000), idx));
}
