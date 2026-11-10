import fs from 'fs';

const content = fs.readFileSync('scripts/pages/wedding-party-venues.html', 'utf8');

const blissIdx = content.indexOf('BLI');
console.log('Bliss context:');
console.log(content.slice(Math.max(0, blissIdx - 100), blissIdx + 400));

const eterIdx = content.indexOf('ETER');
console.log('Eternity context:');
console.log(content.slice(Math.max(0, eterIdx - 100), eterIdx + 400));

// Find all headings
const headings = content.match(/<h2[^>]*class="[^"]*elementskit-section-title[^"]*"[\s\S]*?<\/h2>/gi);
console.log('All venue titles:');
console.log(headings);

