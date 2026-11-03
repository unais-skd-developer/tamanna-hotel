import fs from 'fs';
const html = fs.readFileSync('scripts/home.html', 'utf-8');

const regexes = [/ARUN RAVEENDRAN/i, /Mohamed/i, /Food was warm/i, /great choice for business trips/i];
for (const r of regexes) {
  const m = html.match(r);
  if (m) {
    console.log('Found:', m[0], 'at index:', m.index);
    console.log(html.slice(Math.max(0, m.index - 200), m.index + 800));
    break;
  }
}

