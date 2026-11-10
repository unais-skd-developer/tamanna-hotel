const fs = require('fs');
const html = fs.readFileSync('scripts/pages/standard-room-hinjawadi-pune.html', 'utf8');

const start = html.indexOf('<div class="elementor-element elementor-element-69f1b14');
console.log('Start pos:', start);
const end = html.indexOf('elementor-element-75b9e10', start); // before gallery
console.log(html.slice(start, start + 8000));

