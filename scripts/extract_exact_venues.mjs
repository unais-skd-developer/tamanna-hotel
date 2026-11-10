import fs from 'fs';

const html = fs.readFileSync('scripts/pages/wedding-party-venues.html', 'utf8');

const venueTitles = [
  'Bli',
  'ETER',
  'BANQUET HALL',
  'POOL SIDE',
  'Board room',
  'Conference Hall',
  'lau',
  'High',
  'Ma',
  'O',
  'The Celebration Lounge',
  'The Royal Banquets'
];

// Let's inspect the hero banner first
const heroIdx = html.indexOf('Wedding &amp; party venue');
const heroChunk = html.slice(Math.max(0, heroIdx - 2000), heroIdx + 1000);
const heroBg = heroChunk.match(/background-image:url\("?([^"\)\s]+)"?\)/);
console.log('HERO BANNER BG:', heroBg ? heroBg[1] : 'NONE');

console.log('\n--- EXTRACTING ALL 12 VENUES ---');

const venues = [];

venueTitles.forEach((vt, i) => {
  const pos = html.indexOf(vt, i > 0 ? html.indexOf(venueTitles[i-1]) + 50 : 0);
  const nextPos = i < venueTitles.length - 1 
    ? html.indexOf(venueTitles[i+1], pos + 50) 
    : html.indexOf('Reach Out', pos);
  
  const chunk = html.slice(Math.max(0, pos - 2000), nextPos);

  // Heading details: ElementsKit section title
  const h2Match = chunk.match(/<h2[^>]*class="[^"]*elementskit-section-title[^"]*"[^>]*>([\s\S]*?)<\/h2>/);
  const rawH2 = h2Match ? h2Match[1] : '';
  
  // Look for <span> tags inside rawH2 to determine two-tone splitting
  // e.g. <span style="font-weight: 400">...</span> or similar
  const spans = [...rawH2.matchAll(/<span[^>]*>([\s\S]*?)<\/span>/g)].map(s => s[1].trim());

  // Hotel Tag
  const hotelTagMatch = chunk.match(/<span class="elementor-icon-list-text">([^<]*(?:Tamanna|Hotel)[^<]*)<\/span>/);
  const hotelTag = hotelTagMatch ? hotelTagMatch[1].trim() : '';

  // Description
  const descMatch = chunk.match(/<div class="elementor-widget-container">\s*<p>([\s\S]*?)<\/p>/);
  const desc = descMatch ? descMatch[1].replace(/<[^>]+>/g, '').trim() : '';

  // Image (look for background-image in chunk)
  const bgMatches = [...chunk.matchAll(/background-image:url\("?([^"\)\s]+)"?\)/g)];
  const imgUrl = bgMatches.length > 0 ? bgMatches[0][1] : '';

  // Icon list items (features & address)
  const items = [...chunk.matchAll(/<li class="elementor-icon-list-item[^"]*">([\s\S]*?)<\/li>/g)]
    .map(it => it[1].replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim());

  // Buttons
  const buttons = [...chunk.matchAll(/<a class="elementor-button[^"]*" href="([^"]+)">[\s\S]*?<span class="elementor-button-text">([^<]+)<\/span>/g)]
    .map(b => ({ text: b[2].trim(), href: b[1] }));

  venues.push({
    index: i + 1,
    search: vt,
    rawH2: rawH2.replace(/\s+/g, ' ').trim(),
    spans,
    hotelTag,
    imgUrl,
    desc,
    items,
    buttons
  });
});

console.log(JSON.stringify(venues, null, 2));
fs.writeFileSync('scripts/venues_extracted.json', JSON.stringify(venues, null, 2));

