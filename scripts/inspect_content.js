const fs = require('fs');
const html = fs.readFileSync('scripts/pages/standard-room-hinjawadi-pune.html', 'utf8');

const pos = html.indexOf('elementor-element-69f1b14');
console.log(html.slice(pos, pos + 5000));

