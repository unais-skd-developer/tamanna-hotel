const fs = require('fs');
const html = fs.readFileSync('scripts/pages/standard-room-hinjawadi-pune.html', 'utf8');

// check gallery
const galleryMatches = html.match(/eael-gallery-grid[\s\S]*?<\/div>\s*<\/div>\s*<\/div>/);
if (galleryMatches) {
  console.log('Gallery found!');
}

// Search for all images in the file with their context
const imgRegex = /<img[^>]+src=["']([^"']+)["'][^>]*alt=["']([^"']*)["'][^>]*>/g;
let m;
while ((m = imgRegex.exec(html)) !== null) {
  console.log('IMG:', m[1], '| ALT:', m[2]);
}

// Search for background-image in the file
const bgRegex = /background-image:url\(["']?([^"')]+)["']?\)/g;
while ((m = bgRegex.exec(html)) !== null) {
  console.log('BG:', m[1]);
}

