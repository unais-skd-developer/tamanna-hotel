const fs = require('fs');
const html = fs.readFileSync('scripts/pages/standard-room-hinjawadi-pune.html', 'utf8');

const pos = html.indexOf('d480edd');
console.log('Context of d480edd:');
console.log(html.slice(pos - 1000, pos + 1000));

