const fs = require('fs');
const html = fs.readFileSync('scripts/pages/standard-room-hinjawadi-pune.html', 'utf8');

const ids = ['938e30a', 'd480edd', '86811e5'];
for (const id of ids) {
  const reg = new RegExp('\\.elementor-element-' + id + '[^{]*\\{[^}]*\\}', 'g');
  console.log(`=== ID: ${id} ===`);
  (html.match(reg) || []).forEach(m => console.log(m));
}

