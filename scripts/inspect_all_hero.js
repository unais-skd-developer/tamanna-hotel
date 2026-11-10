const fs = require('fs');
const html = fs.readFileSync('scripts/pages/standard-room-hinjawadi-pune.html', 'utf8');

let pos = 0;
while ((pos = html.indexOf('47152bd', pos)) !== -1) {
  console.log('Pos:', pos);
  console.log(html.slice(pos - 100, pos + 300));
  pos += 7;
}

