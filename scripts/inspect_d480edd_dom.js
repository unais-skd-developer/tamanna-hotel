const fs = require('fs');
const html = fs.readFileSync('scripts/pages/standard-room-hinjawadi-pune.html', 'utf8');

const lastPos = html.lastIndexOf('d480edd');
console.log(html.slice(lastPos - 800, lastPos + 800));

