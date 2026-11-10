const fs = require('fs');
const html = fs.readFileSync('scripts/pages/standard-room-hinjawadi-pune.html', 'utf8');

const m = html.match(/Reach Out|Quick Links|9156832283/i);
console.log('Match:', m);
if (m) {
  const idx = m.index;
  console.log(html.slice(idx - 500, idx + 1500));
}

