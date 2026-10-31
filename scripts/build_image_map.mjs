import fs from 'fs';
import path from 'path';

const siteImages = fs.readdirSync('public/images/site');
console.log(`Total images in public/images/site: ${siteImages.length}`);

// Let's create an index mapping original URLs to local paths
const urlMap = {};
for (const img of siteImages) {
  // original URL ended with this filename
  urlMap[img] = `/images/site/${img}`;
}

fs.writeFileSync('scripts/image_map.json', JSON.stringify(urlMap, null, 2));
console.log('Saved scripts/image_map.json');

