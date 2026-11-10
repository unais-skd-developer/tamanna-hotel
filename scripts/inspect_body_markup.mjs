import fs from 'fs';

const html = fs.readFileSync('scripts/pages/offers.html', 'utf8');

const matches = [...html.matchAll(/PHOTO-2024-05-07/g)];
console.log('Matches at:', matches.map(m => m.index));

if (matches.length > 1) {
  const bodyIdx = matches[1].index;
  console.log('Context around body occurrence:');
  console.log(html.slice(bodyIdx - 800, bodyIdx + 400));
}

