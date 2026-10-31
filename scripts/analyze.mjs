import fs from 'fs';

async function main() {
  const res = await fetch('https://tamannahotels.com/');
  const html = await res.text();
  fs.writeFileSync('scripts/home.html', html);
  console.log('Saved home.html, size:', html.length);

  // Extract navigation items
  const menuMatches = html.match(/<nav[\s\S]*?<\/nav>/gi) || [];
  console.log(`Found ${menuMatches.length} nav elements`);
  
  // Extract all links
  const regex = /<a\s+[^>]*href=["']([^"']*)["'][^>]*>([\s\S]*?)<\/a>/gi;
  let match;
  const links = [];
  while ((match = regex.exec(html)) !== null) {
    const href = match[1];
    const text = match[2].replace(/<[^>]+>/g, '').trim().replace(/\s+/g, ' ');
    links.push({ href, text });
  }

  console.log(`Found ${links.length} links on homepage`);
  
  // Categorize links
  const navLinks = links.filter(l => l.text && !l.href.startsWith('#') && !l.href.startsWith('tel:') && !l.href.startsWith('mailto:'));
  console.log('Sample links:');
  const seen = new Set();
  for (const l of navLinks) {
    const key = `${l.text} -> ${l.href}`;
    if (!seen.has(key)) {
      seen.add(key);
      console.log(key);
    }
  }
}

main().catch(console.error);

