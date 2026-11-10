import fs from 'fs';

const html = fs.readFileSync('scripts/pages/wedding-party-venues.html', 'utf8');

const images = [
  '15.jpg',
  'Eternity-Banquet3-1-scaled.jpg',
  '3rd-Floor-Banquet2-1-scaled.jpg',
  'Pool-Sode-area3-1-scaled.jpg',
  'Board-Room1-1-scaled.jpg',
  'Premier-Tamanna-Hotel-meeting-hall-photo-4.webp',
  'bizz-laurel.webp',
  'Highland2-1-scaled.jpg',
  'Maple-Conference-Room-3-scaled.jpg',
  'Oak-Party-Hall-1-scaled.jpg',
  'ITH-084.webp',
  'Sammelan-Banquet-3.jpg'
];

images.forEach(img => {
  const pos = html.indexOf(img);
  console.log(`Image ${img} found at index ${pos}`);
  const snippet = html.slice(Math.max(0, pos - 150), Math.min(html.length, pos + 150));
  console.log('Snippet:', snippet.replace(/\s+/g, ' '));
});

