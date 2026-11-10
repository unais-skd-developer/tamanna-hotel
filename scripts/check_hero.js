const fs = require('fs');

const h = fs.readFileSync('scripts/live_homepage.html', 'utf8');
const css = fs.readFileSync('scripts/live_site_styles.css', 'utf8');

const idx = h.indexOf('xdLrGdl_zqs');
console.log('Video index:', idx);
if (idx !== -1) {
  const start = h.lastIndexOf('<div class="elementor-element', idx);
  console.log('Snippet:');
  console.log(h.substring(start - 200, idx + 400));

  // Find container ID
  const m = h.substring(start, idx).match(/elementor-element-([a-z0-9]+)/);
  if (m) {
    const id = m[1];
    console.log('Video container ID:', id);
    const re = new RegExp(`\\.elementor-element-${id}[^{]*\\{[^}]+\\}`, 'g');
    console.log('CSS:', css.match(re));
  }
}

