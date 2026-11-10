const fs = require('fs');
const html = fs.readFileSync('scripts/pages/standard-room-hinjawadi-pune.html', 'utf8');

// Find all css for the right column and getaway card
const getawayIdx = html.indexOf('Book your perfect getaway now!');
console.log('Getaway index:', getawayIdx);

// Look around getawayIdx for classes
const snippet = html.slice(getawayIdx - 1000, getawayIdx + 1000);
console.log('Snippet around getaway:');
console.log(snippet);

// Find element IDs in snippet
const ids = snippet.match(/elementor-element-[a-z0-9]+/g) || [];
console.log('IDs in snippet:', ids);

for (const id of new Set(ids)) {
  const reg = new RegExp('\\.' + id + '[^{]*\\{[^}]*\\}', 'g');
  const matches = html.match(reg) || [];
  matches.forEach(m => console.log(m));
}

