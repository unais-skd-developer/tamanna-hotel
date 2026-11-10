const fs = require('fs');
const html = fs.readFileSync('scripts/pages/standard-room-hinjawadi-pune.html', 'utf8');

// Find all paragraphs in main content
const pMatches = html.match(/<p>([\s\S]*?)<\/p>/gi) || [];
console.log('Paragraphs:');
pMatches.forEach((p, idx) => {
  const clean = p.replace(/<[^>]+>/g, '').trim();
  if (clean.length > 30) {
    console.log(`P${idx + 1}: ${clean}\n`);
  }
});

