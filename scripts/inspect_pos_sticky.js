const fs = require('fs');
const html = fs.readFileSync('scripts/pages/standard-room-hinjawadi-pune.html', 'utf8');

const reg = /\.sticky\s*\{([^}]*)\}/g;
let m;
while ((m = reg.exec(html)) !== null) {
  console.log('Match:', m[0]);
}

// Also check position: sticky
const posReg = /[^{}]*position\s*:\s*sticky[^{}]*\{[^}]*\}/gi;
while ((m = posReg.exec(html)) !== null) {
  console.log('Pos sticky rule:', m[0]);
}

