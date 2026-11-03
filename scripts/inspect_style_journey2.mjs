import fs from 'fs';

const html = fs.readFileSync('scripts/home.html', 'utf-8');

const idx = html.indexOf('53ded85');
if (idx !== -1) {
  // find the html markup of data-id="53ded85"
  const m = html.indexOf('data-id="53ded85"');
  if (m !== -1) {
    console.log(html.slice(m, m + 400));
  }
}
