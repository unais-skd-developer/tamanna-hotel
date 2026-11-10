const fs = require('fs');
const html = fs.readFileSync('scripts/pages/standard-room-hinjawadi-pune.html', 'utf8');

const bodyIdx = html.indexOf('elementor-element-47152bd');
if (bodyIdx !== -1) {
  console.log('Second occurrence:');
  const second = html.indexOf('elementor-element-47152bd', bodyIdx + 50);
  console.log(html.slice(second - 100, second + 1500));
}

