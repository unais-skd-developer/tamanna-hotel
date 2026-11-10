const fs = require('fs');
const html = fs.readFileSync('scripts/pages/standard-room-hinjawadi-pune.html', 'utf8');

const idx = 328579;
console.log('Surrounding footer markup before Reach Out:');
console.log(html.slice(idx - 1500, idx));

