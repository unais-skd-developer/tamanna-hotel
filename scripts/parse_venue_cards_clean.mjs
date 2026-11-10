import fs from 'fs';

const html = fs.readFileSync('scripts/pages/wedding-party-venues.html', 'utf8');

const slugs = [
  { slug: 'small-party-banquet-hall-hinjawadi-pune', name: 'Bliss', img: '/images/site/15.jpg' },
  { slug: 'ac-halls-hinjawadi-pune', name: 'Eternity', img: '/images/site/Eternity-Banquet3-1-scaled.jpg' },
  { slug: 'best-banquet-hall-hinjawadi-pune', name: 'Banquet Hall', img: '/images/site/3rd-Floor-Banquet2-1-scaled.jpg' },
  { slug: 'hotels-with-poolside-hinjawadi-pune', name: 'Pool Side Party', img: '/images/site/Pool-Sode-area3-1-scaled.jpg' },
  { slug: 'small-meeting-hall-hinjawadi-pune', name: 'Board Room', img: '/images/site/Board-Room1-1-scaled.jpg' },
  { slug: 'conference-hall-for-100-persons-hinjawadi-pune', name: 'Conference Hall', img: '/images/site/Premier-Tamanna-Hotel-meeting-hall-photo-4.webp' },
  { slug: 'top-banquet-hall-hinjawadi-pune', name: 'Laurel', img: '/images/site/bizz-laurel.webp' },
  { slug: 'top-open-air-banquet-halls-hinjawadi-pune', name: 'Highland', img: '/images/site/Highland2-1-scaled.jpg' },
  { slug: 'best-meeting-hall-hinjawadi-pune', name: 'Maple', img: '/images/site/Maple-Conference-Room-3-scaled.jpg' },
  { slug: 'corporate-meeting-hall-hinjawadi-pune', name: 'Oak', img: '/images/site/Oak-Party-Hall-1-scaled.jpg' },
  { slug: 'the-celebration-lounge', name: 'The Celebration Lounge', img: '/images/site/ITH-084.webp' },
  { slug: 'banquet-hall-chinchwad-pune', name: 'The Royal Banquets', img: '/images/site/Sammelan-Banquet-3.jpg' }
];

const cards = [];

slugs.forEach((item, idx) => {
  const slugPos = html.indexOf(item.slug);
  const prevSlugPos = idx === 0 ? html.indexOf('Wedding &amp; party venue', 300000) : html.indexOf(slugs[idx - 1].slug);
  
  // The card content is between prevSlugPos (or section start) and slugPos
  const cardHtml = html.slice(prevSlugPos, slugPos + 800);

  // Heading: ekit-heading--title or elementskit-section-title
  const h2Match = cardHtml.match(/<h2[^>]*class="[^"]*(?:elementskit-section-title|elementor-heading-title)[^"]*"[^>]*>([\s\S]*?)<\/h2>/);
  const rawH2 = h2Match ? h2Match[1] : '';

  // Hotel location tag (above heading)
  const hotelMatches = [...cardHtml.matchAll(/<span class="elementor-icon-list-text">([^<]*(?:Tamanna|Hotel)[^<]*)<\/span>/g)].map(m => m[1].trim());
  // Usually the first or second one is the property name
  const hotelTag = hotelMatches.find(t => t.includes('Hotel')) || '';

  // Description
  const pMatches = [...cardHtml.matchAll(/<div class="elementor-widget-container">\s*<p>([\s\S]*?)<\/p>/g)].map(m => m[1].replace(/<[^>]+>/g, '').trim());
  const desc = pMatches.length > 0 ? pMatches[pMatches.length - 1] : '';

  // Icon items
  const items = [...cardHtml.matchAll(/<li class="elementor-icon-list-item[^"]*">([\s\S]*?)<\/li>/g)]
    .map(it => it[1].replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim())
    .filter(t => !t.includes('Reservations:') && !t.includes('Email :') && !t.includes('Tamanna Hotels |'));

  // Address is usually the last item
  cards.push({
    index: idx + 1,
    name: item.name,
    img: item.img,
    slug: item.slug,
    rawH2: rawH2.replace(/\s+/g, ' ').trim(),
    hotelTag,
    desc,
    items
  });
});

console.log(JSON.stringify(cards, null, 2));
fs.writeFileSync('scripts/venue_cards_clean.json', JSON.stringify(cards, null, 2));

