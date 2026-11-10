import fs from 'fs';

const html = fs.readFileSync('scripts/pages/wedding-party-venues.html', 'utf8');

console.log('HTML size:', html.length);

// Hero title search
const heroMatch = html.match(/<h[12][^>]*class="[^"]*(?:title|heading)[^"]*"[^>]*>([\s\S]*?)<\/h[12]>/g);
if (heroMatch) {
  console.log('Top headings:');
  heroMatch.slice(0, 5).forEach(h => console.log('  ', h.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim()));
}

// Find hero background image
const heroBg = html.match(/background-image:url\("?([^"\)\s]+)"?\)/g);
if (heroBg) {
  console.log('First few background images:');
  heroBg.slice(0, 5).forEach(b => console.log('  ', b));
}

// Search for titles in venue cards
// In the user's images:
// BLISS, ETERNITY, BANQUET HALL, POOL SIDE PARTY, BOARD ROOM, CONFERENCE HALL, LAUREL, HIGHLAND, MAPLE, OAK, THE CELEBRATION LOUNGE, THE ROYAL BANQUETS
const venueNames = [
  'BLISS',
  'ETERNITY',
  'BANQUET HALL',
  'POOL SIDE',
  'BOARD ROOM',
  'CONFERENCE',
  'LAUREL',
  'HIGHLAND',
  'MAPLE',
  'OAK',
  'CELEBRATION',
  'ROYAL BANQUET'
];

venueNames.forEach(v => {
  const idx = html.search(new RegExp(v, 'i'));
  console.log(`Found "${v}" at index:`, idx);
});

