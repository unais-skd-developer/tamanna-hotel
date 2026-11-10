const fs = require('fs');
const html = fs.readFileSync('scripts/pages/standard-room-hinjawadi-pune.html', 'utf8');

const pos = html.indexOf('02066935000/02066539888');
console.log(html.slice(pos - 300, pos + 400));

