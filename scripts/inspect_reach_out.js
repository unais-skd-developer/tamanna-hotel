const fs = require('fs');
const html = fs.readFileSync('scripts/pages/standard-room-hinjawadi-pune.html', 'utf8');

const pos = html.indexOf('REACH OUT');
console.log('Reach Out pos:', pos);
if (pos !== -1) {
  console.log(html.slice(pos - 1000, pos + 2500));
}

