import fs from 'fs';

const html = fs.readFileSync('scripts/pages/wedding-party-venues.html', 'utf8');

// The 12 venues in order:
// 1. Bliss (15.jpg)
// 2. Eternity (Eternity-Banquet3-1-scaled.jpg)
// 3. Banquet Hall (3rd-Floor-Banquet2-1-scaled.jpg)
// 4. Pool Side Party (Pool-Sode-area3-1-scaled.jpg)
// 5. Board Room (Board-Room1-1-scaled.jpg)
// 6. Conference Hall (Premier-Tamanna-Hotel-meeting-hall-photo-4.webp)
// 7. Laurel (bizz-laurel.webp)
// 8. Highland (Highland2-1-scaled.jpg)
// 9. Maple (Maple-Conference-Room-3-scaled.jpg)
// 10. Oak (Oak-Party-Hall-1-scaled.jpg)
// 11. The Celebration Lounge (ITH-084.webp)
// 12. The Royal Banquets (Sammelan-Banquet-3.jpg)

const venueKeys = [
  { name: 'Bliss', img: '15.jpg' },
  { name: 'Eternity', img: 'Eternity-Banquet3-1-scaled.jpg' },
  { name: 'Banquet Hall', img: '3rd-Floor-Banquet2-1-scaled.jpg' },
  { name: 'Pool Side Party', img: 'Pool-Sode-area3-1-scaled.jpg' },
  { name: 'Board Room', img: 'Board-Room1-1-scaled.jpg' },
  { name: 'Conference Hall', img: 'Premier-Tamanna-Hotel-meeting-hall-photo-4.webp' },
  { name: 'Laurel', img: 'bizz-laurel.webp' },
  { name: 'Highland', img: 'Highland2-1-scaled.jpg' },
  { name: 'Maple', img: 'Maple-Conference-Room-3-scaled.jpg' },
  { name: 'Oak', img: 'Oak-Party-Hall-1-scaled.jpg' },
  { name: 'The Celebration Lounge', img: 'ITH-084.webp' },
  { name: 'The Royal Banquets', img: 'Sammelan-Banquet-3.jpg' }
];

const results = [];

venueKeys.forEach((vk, idx) => {
  const imgPos = html.indexOf(vk.img);
  // Get text between this image and the next image or reach out
  const nextImgPos = idx < venueKeys.length - 1 ? html.indexOf(venueKeys[idx + 1].img, imgPos + 50) : html.indexOf('Reach Out', imgPos);
  const block = html.slice(imgPos, nextImgPos > 0 ? nextImgPos : imgPos + 10000);

  // Heading
  const h2Match = block.match(/<h2[^>]*class="[^"]*elementskit-section-title[^"]*"[^>]*>([\s\S]*?)<\/h2>/);
  const rawH2 = h2Match ? h2Match[1] : '';

  // Hotel Tag (usually above heading in an icon list)
  const hotelMatches = [...block.matchAll(/<span class="elementor-icon-list-text">([^<]*(?:Tamanna|Hotel)[^<]*)<\/span>/g)].map(m => m[1].trim());
  const hotelTag = hotelMatches.length > 0 ? hotelMatches[0] : '';

  // Description
  const pMatch = block.match(/<div class="elementor-widget-container">\s*<p>([\s\S]*?)<\/p>/);
  const desc = pMatch ? pMatch[1].replace(/<[^>]+>/g, '').trim() : '';

  // Icon items
  const items = [...block.matchAll(/<li class="elementor-icon-list-item[^"]*">([\s\S]*?)<\/li>/g)]
    .map(it => it[1].replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim());

  // Links
  const links = [...block.matchAll(/<a class="elementor-button[^"]*" href="([^"]+)">[\s\S]*?<span class="elementor-button-text">([^<]+)<\/span>/g)]
    .map(b => ({ text: b[2].trim(), href: b[1] }));

  results.push({
    venue: vk.name,
    img: `/images/site/${vk.img}`,
    rawH2: rawH2.replace(/\s+/g, ' ').trim(),
    hotelTag,
    desc,
    items,
    links
  });
});

console.log(JSON.stringify(results, null, 2));
fs.writeFileSync('scripts/venue_cards_final.json', JSON.stringify(results, null, 2));

