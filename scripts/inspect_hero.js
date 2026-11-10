const fs = require('fs');
const html = fs.readFileSync('scripts/pages/standard-room-hinjawadi-pune.html', 'utf8');

// Find the hero container
const heroIdx = html.indexOf('Executive-Room1-4-scaled.jpg');
console.log('Hero image index:', heroIdx);
if (heroIdx !== -1) {
  console.log('Surrounding 2000 chars:');
  console.log(html.slice(heroIdx - 500, heroIdx + 1500));
}

