import fs from 'fs';

const html = fs.readFileSync('scripts/pages/wedding-party-venues.html', 'utf8');

// Bliss
const blissIdx = html.indexOf('small-party-banquet-hall-hinjawadi-pune');
const blissChunk = html.slice(blissIdx - 3000, blissIdx + 500);

const blissH2 = blissChunk.match(/<h2[^>]*class="[^"]*elementskit-section-title[^"]*"[^>]*>([\s\S]*?)<\/h2>/);
console.log('Bliss H2:', blissH2 ? blissH2[1] : 'NONE');

const blissDesc = blissChunk.match(/<div class="elementor-widget-container">\s*<p>([\s\S]*?)<\/p>/);
console.log('Bliss Desc:', blissDesc ? blissDesc[1] : 'NONE');

const blissItems = [...blissChunk.matchAll(/<li class="elementor-icon-list-item[^"]*">([\s\S]*?)<\/li>/g)].map(m => m[1].replace(/<[^>]+>/g, '').trim());
console.log('Bliss Items:', blissItems);

// Poolside
const poolIdx = html.indexOf('hotels-with-poolside-hinjawadi-pune');
const poolChunk = html.slice(poolIdx - 3000, poolIdx + 500);
const poolDesc = poolChunk.match(/<div class="elementor-widget-container">\s*<p>([\s\S]*?)<\/p>/);
console.log('Pool Desc:', poolDesc ? poolDesc[1] : 'NONE');
const poolItems = [...poolChunk.matchAll(/<li class="elementor-icon-list-item[^"]*">([\s\S]*?)<\/li>/g)].map(m => m[1].replace(/<[^>]+>/g, '').trim());
console.log('Pool Items:', poolItems);

