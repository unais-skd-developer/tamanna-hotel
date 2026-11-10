const fs = require('fs');
const html = fs.readFileSync('scripts/pages/standard-room-hinjawadi-pune.html', 'utf8');

const listMatches = html.match(/<li class="elementor-icon-list-item[^"]*"[\s\S]*?<\/li>/gi) || [];
for (let i = 3; i < 9; i++) {
  console.log(`=== Item ${i + 1} ===\n`, listMatches[i]);
}

