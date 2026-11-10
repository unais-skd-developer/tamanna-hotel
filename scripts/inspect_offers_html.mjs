import fs from 'fs';

const html = fs.readFileSync('scripts/pages/offers.html', 'utf8');
console.log('HTML length:', html.length);

// Hero background image
const heroBg = html.match(/background-image:url\("?([^"\)\s]+)"?\)/g);
console.log('Hero backgrounds:', heroBg);

// Look for image tags in content
const imgs = [...html.matchAll(/<img[^>]+src="([^">]+)"/g)].map(m => m[1]);
console.log('All <img> tags count:', imgs.length);
console.log('All <img> tags:', imgs);

// Look for links and containers
const links = [...html.matchAll(/<a[^>]+href="([^">]+)"[^>]*>([\s\S]*?)<\/a>/g)].map(m => ({
  href: m[1],
  text: m[2].replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim()
}));
console.log('Sample links:', links.slice(0, 15));

