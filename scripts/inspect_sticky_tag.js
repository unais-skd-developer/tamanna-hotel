const fs = require('fs');
const html = fs.readFileSync('scripts/pages/standard-room-hinjawadi-pune.html', 'utf8');

const pos = html.lastIndexOf('d480edd');
console.log(html.slice(pos - 100, pos + 400));

