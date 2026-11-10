const fs = require('fs');
const html = fs.readFileSync('scripts/pages/standard-room-hinjawadi-pune.html', 'utf8');

const stickyMatches = [];
const reg = /[^}]*sticky[^{]*\{[^}]*\}/g;
let m;
while ((m = reg.exec(html)) !== null) {
  stickyMatches.push(m[0]);
}
console.log('Sticky CSS rules:');
stickyMatches.forEach(s => console.log(s.slice(0, 300)));

