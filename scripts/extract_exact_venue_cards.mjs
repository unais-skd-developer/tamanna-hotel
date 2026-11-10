import fs from 'fs';

const html = fs.readFileSync('scripts/pages/wedding-party-venues.html', 'utf8');

// The 12 view more links correspond exactly to the 12 venue cards!
const viewMoreLinks = [
  'small-party-banquet-hall-hinjawadi-pune',
  'ac-halls-hinjawadi-pune',
  'best-banquet-hall-hinjawadi-pune',
  'hotels-with-poolside-hinjawadi-pune',
  'small-meeting-hall-hinjawadi-pune',
  'conference-hall-for-100-persons-hinjawadi-pune',
  'top-banquet-hall-hinjawadi-pune',
  'top-open-air-banquet-halls-hinjawadi-pune',
  'best-meeting-hall-hinjawadi-pune',
  'corporate-meeting-hall-hinjawadi-pune',
  'the-celebration-lounge',
  'banquet-hall-chinchwad-pune'
];

const cards = [];

viewMoreLinks.forEach((slug, idx) => {
  const linkPos = html.indexOf(slug);
  // The card section starts well before the linkPos
  // Let's find the elementor container or section for this card
  const chunkBefore = html.slice(Math.max(0, linkPos - 4000), linkPos);
  const chunkAfter = html.slice(linkPos, linkPos + 1000);
  const chunk = chunkBefore + chunkAfter;

  // Background image
  // In elementor layout, the left column has background-image
  const bgMatches = [...chunkBefore.matchAll(/background-image:url\("?([^"\)\s]+)"?\)/g)];
  // We want the last background-image before this card's text, or the one belonging to this card
  let bgImg = '';
  if (bgMatches.length > 0) {
    // pick the last one that isn't a general elementor graphic
    bgImg = bgMatches[bgMatches.length - 1][1];
  }

  // Heading: ElementsKit section title
  const h2Matches = [...chunkBefore.matchAll(/<h2[^>]*class="[^"]*elementskit-section-title[^"]*"[^>]*>([\s\S]*?)<\/h2>/g)];
  const lastH2 = h2Matches.length > 0 ? h2Matches[h2Matches.length - 1][1] : '';

  // Hotel tag
  const hotelMatches = [...chunkBefore.matchAll(/<span class="elementor-icon-list-text">([^<]*(?:Tamanna|Hotel)[^<]*)<\/span>/g)];
  const hotelTag = hotelMatches.length > 0 ? hotelMatches[hotelMatches.length - 1][1].trim() : '';

  // Paragraph description
  const pMatches = [...chunkBefore.matchAll(/<div class="elementor-widget-container">\s*<p>([\s\S]*?)<\/p>/g)];
  const desc = pMatches.length > 0 ? pMatches[pMatches.length - 1][1].replace(/<[^>]+>/g, '').trim() : '';

  // Icon list items in the card
  // Let's find the icon list between lastH2 and linkPos
  const subChunk = chunkBefore.slice(chunkBefore.lastIndexOf('<h2'));
  const items = [...subChunk.matchAll(/<li class="elementor-icon-list-item[^"]*">([\s\S]*?)<\/li>/g)]
    .map(it => it[1].replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim());

  cards.push({
    index: idx + 1,
    slug,
    lastH2: lastH2.replace(/\s+/g, ' ').trim(),
    hotelTag,
    bgImg,
    desc,
    items
  });
});

console.log(JSON.stringify(cards, null, 2));
fs.writeFileSync('scripts/venue_cards_precise.json', JSON.stringify(cards, null, 2));

