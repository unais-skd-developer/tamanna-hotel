import fs from 'fs';

const html = fs.readFileSync('scripts/home.html', 'utf-8');

// Find all header and nav elements
const navs = html.match(/<nav[^>]*>[\s\S]*?<\/nav>/gi) || [];
console.log('--- NAVS ---');
navs.forEach((nav, i) => {
  console.log(`Nav ${i + 1}:`);
  const links = [...nav.matchAll(/<a[^>]+href=["']([^"']*)["'][^>]*>([\s\S]*?)<\/a>/gi)];
  links.forEach(l => {
    console.log(`  ${l[2].replace(/<[^>]+>/g, '').trim()} => ${l[1]}`);
  });
});

// Find sections in main/body
const sections = [...html.matchAll(/<section[^>]*class=["']([^"']*)["'][^>]*>/gi)].map(m => m[1]);
console.log('\n--- SECTIONS ---');
console.log(sections);

