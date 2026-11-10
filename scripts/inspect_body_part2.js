const fs = require('fs');
const html = fs.readFileSync('scripts/pages/standard-room-hinjawadi-pune.html', 'utf8');

const start = html.indexOf('elementor-element-a46cfae');
console.log(html.slice(start, start + 4000));

