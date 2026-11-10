const fs = require('fs');
const html = fs.readFileSync('scripts/pages/standard-room-hinjawadi-pune.html', 'utf8');

const listMatches = html.match(/<li class="elementor-icon-list-item[^"]*"[\s\S]*?<\/li>/gi) || [];
console.log('Icon list items:');
listMatches.forEach((item, idx) => {
  const icon = (item.match(/class="([^"]*)"/) || [])[1];
  const text = item.replace(/<[^>]+>/g, '').trim();
  console.log(`${idx + 1}: ${text} (${icon})`);
});

