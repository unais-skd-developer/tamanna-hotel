import fs from 'fs';

const html = fs.readFileSync('scripts/pages/wedding-party-venues.html', 'utf8');

// Find all image URLs or background-images in the whole HTML
const imgTags = [...html.matchAll(/<img[^>]+src="([^">]+)"/g)].map(m => m[1]);
console.log('All <img> tags count:', imgTags.length);
console.log('Sample img tags:', imgTags.slice(0, 15));

const bgUrls = [...html.matchAll(/background-image:\s*url\("?([^"\)\s]+)"?\)/g)].map(m => m[1]);
console.log('All bgUrls count:', bgUrls.length);
console.log('Unique bgUrls:', [...new Set(bgUrls)]);

// Also let's check for Bliss:
const blissPos = html.indexOf('small-party-banquet-hall-hinjawadi-pune');
console.log('Bliss pos:', blissPos);
const blissContext = html.slice(blissPos - 1500, blissPos + 1000);
console.log('BLISS CONTEXT:');
console.log(blissContext);

