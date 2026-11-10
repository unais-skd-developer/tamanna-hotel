const fs = require('fs');
const html = fs.readFileSync('scripts/pages/standard-room-hinjawadi-pune.html', 'utf8');

// Hero section
const heroMatch = html.match(/<section[^>]*class="[^"]*elementor-top-section[^"]*"[^>]*>[\s\S]*?<\/section>/);
console.log('=== HERO / TOP CONTAINER ===');
// Find containers
const containers = html.match(/<div class="elementor-element elementor-element-[^"]* e-con-[^"]* e-con e-parent"[\s\S]*?<\/div>\s*<\/div>\s*<\/div>/g) || [];
console.log('Parent containers count:', containers.length);

// Let's print the gallery HTML and scripts
const galleryRegex = /class="[^"]*eael-filter-gallery-container[^"]*"[\s\S]*?<\/div>\s*<\/div>\s*<\/div>/;
const galleryHtml = html.match(galleryRegex);
if (galleryHtml) {
  console.log('=== GALLERY HTML (first 1000 chars) ===');
  console.log(galleryHtml[0].slice(0, 1000));
}

// Find gallery items
const itemRegex = /<div class="eael-gallery-grid-item[\s\S]*?<\/div>\s*<\/div>\s*<\/div>/g;
const items = html.match(itemRegex) || [];
console.log('Gallery items count:', items.length);
items.forEach((item, idx) => {
  const src = (item.match(/src="([^"]+)"/) || [])[1];
  const alt = (item.match(/alt="([^"]+)"/) || [])[1];
  console.log(`Item ${idx + 1}: src=${src}, alt=${alt}`);
});

