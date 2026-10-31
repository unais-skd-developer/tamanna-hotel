import fs from 'fs';

// Let's inspect the footer in home.html
const html = fs.readFileSync('scripts/home.html', 'utf-8');

// Find footer
const footerMatch = html.match(/<footer[\s\S]*?<\/footer>/i);
if (footerMatch) {
  console.log('Footer length:', footerMatch[0].length);
  fs.writeFileSync('scripts/footer.html', footerMatch[0]);
  console.log('Saved footer.html');
} else {
  console.log('No <footer> tag, looking for elementor footer...');
  const elementorFooters = html.match(/elementor-location-footer[\s\S]*?<\/div>\s*<\/div>\s*<\/div>/i);
  // Let's search for "Quick Links" or "Reach Out"
  const idx = html.indexOf('Quick Links');
  if (idx !== -1) {
    const footerSlice = html.slice(idx - 1000, idx + 4000);
    fs.writeFileSync('scripts/footer_snippet.html', footerSlice);
    console.log('Saved footer_snippet.html');
  }
}

// Find all CSS stylesheet URLs
const cssUrls = [...html.matchAll(/href=["'](https?:\/\/[^"']+\.css[^"']*)["']/gi)].map(m => m[1]);
console.log('\n--- CSS URLs ---', cssUrls.length);
cssUrls.forEach(u => console.log(u));

