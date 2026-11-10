import fs from 'fs';

const html = fs.readFileSync('scripts/pages/restaurants.html', 'utf8');

// Find all headings
const headings = [...html.matchAll(/<h2 class="ekit-heading--title elementskit-section-title ">([\s\S]*?)<\/h2>/g)].map(m => m[1].replace(/<[^>]+>/g, '').trim());
console.log('All headings:', headings);

// Find banner background
const bannerBg = html.match(/background-image:url\("([^"]+)"\)/);
console.log('First BG (Banner):', bannerBg ? bannerBg[1] : 'none');

// Find all background images
const allBgs = [...html.matchAll(/\.elementor-element-([a-f0-9]+)[^{]*\{[^}]*background-image:url\("([^"]+)"\)/g)].map(m => ({
  id: m[1],
  url: m[2]
}));
console.log('All BGs:', allBgs);

