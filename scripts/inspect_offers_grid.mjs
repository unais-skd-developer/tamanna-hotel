import fs from 'fs';

const html = fs.readFileSync('scripts/pages/offers.html', 'utf8');

// Find the section containing the offers
const startIdx = html.indexOf('PHOTO-2024-05-07');
const context = html.slice(Math.max(0, startIdx - 1500), startIdx + 3000);
console.log('Section structure:');
console.log(context.slice(0, 1000));

// Find all image tags and their parent anchors/classes
const imgMatches = [...html.matchAll(/<div[^>]*class="[^"]*elementor-widget-image[^"]*"[^>]*>([\s\S]*?)<\/div>\s*<\/div>/g)];
console.log('\nWidget image blocks count:', imgMatches.length);
imgMatches.forEach((m, idx) => {
  const content = m[1];
  const srcMatch = content.match(/src="([^"]+)"/);
  const hrefMatch = content.match(/href="([^"]+)"/);
  console.log(`Image ${idx + 1}:`, {
    src: srcMatch ? srcMatch[1].split('/').pop() : 'none',
    href: hrefMatch ? hrefMatch[1] : 'none'
  });
});

