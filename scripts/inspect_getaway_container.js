const fs = require('fs');
const html = fs.readFileSync('scripts/pages/standard-room-hinjawadi-pune.html', 'utf8');

const idIdx = html.indexOf('86811e5');
console.log(html.slice(idIdx - 1000, idIdx + 200));

