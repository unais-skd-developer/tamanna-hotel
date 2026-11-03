import fs from 'fs';
const html = fs.readFileSync('scripts/home.html', 'utf-8');

const regexes = [/enjoy your stay/i, /relaxing holiday/i, /Top 100 SME/i, /MICE Award/i];
for (const r of regexes) {
  const m = html.match(r);
  if (m) {
    console.log('Found:', m[0], 'at', m.index);
    console.log(html.slice(Math.max(0, m.index - 500), m.index + 1000));
    break;
  }
}

