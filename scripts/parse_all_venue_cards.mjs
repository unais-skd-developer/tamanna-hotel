import fs from 'fs';

const html = fs.readFileSync('scripts/pages/wedding-party-venues.html', 'utf8');

// Hero section analysis
const heroSection = html.slice(0, 50000);
const heroBg = heroSection.match(/background-image:url\("([^"]+)"\)/);
console.log('HERO BG:', heroBg ? heroBg[1] : 'NONE');

// Let's find all instances of elementor sections/columns containing venue cards
// Notice buttons have "ENQUIRE NOW" and "VIEW MORE"
const enquireMatches = [...html.matchAll(/ENQUIRE NOW/g)];
console.log(`Found ${enquireMatches.length} 'ENQUIRE NOW' occurrences.`);

// Let's inspect around each "ENQUIRE NOW"
enquireMatches.forEach((m, idx) => {
  const pos = m.index;
  // Let's find the card chunk starting from previous background-image or section
  const start = Math.max(0, pos - 5000);
  const end = Math.min(html.length, pos + 1000);
  const chunk = html.slice(start, end);

  // Background image for this card
  const bgs = [...chunk.matchAll(/background-image:url\("([^"]+)"\)/g)];
  const lastBg = bgs.length > 0 ? bgs[bgs.length - 1][1] : 'NONE';

  // Headings in this chunk
  const h2s = [...chunk.matchAll(/<h2[^>]*class="[^"]*(?:elementskit-section-title|elementor-heading-title)[^"]*"[^>]*>([\s\S]*?)<\/h2>/g)]
    .map(h => h[1].replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim());

  // Hotel tag
  const hotelTags = [...chunk.matchAll(/<span class="elementor-icon-list-text">([^<]*(?:Tamanna|Hotel)[^<]*)<\/span>/g)]
    .map(t => t[1].trim());

  // Paragraph
  const pMatch = chunk.match(/<div class="elementor-widget-container">\s*<p>([\s\S]*?)<\/p>/);
  const desc = pMatch ? pMatch[1].replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim() : 'NONE';

  // Icon list items (features & address)
  const items = [...chunk.matchAll(/<li class="elementor-icon-list-item[^"]*">([\s\S]*?)<\/li>/g)]
    .map(it => it[1].replace(/<[^>]+>/g, '').trim());

  // Buttons
  const btns = [...chunk.matchAll(/<a class="elementor-button[^"]*" href="([^"]+)">[\s\S]*?<span class="elementor-button-text">([^<]+)<\/span>/g)]
    .map(b => ({ text: b[2].trim(), href: b[1] }));

  console.log(`\n=================== CARD ${idx + 1} ===================`);
  console.log('Heading(s):', h2s);
  console.log('Hotel Tag:', hotelTags);
  console.log('BG Image:', lastBg);
  console.log('Description:', desc.slice(0, 100));
  console.log('Items:', items);
  console.log('Buttons:', btns);
});

