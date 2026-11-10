import fs from 'fs';

fs.readdirSync('scripts/pages').forEach(f => {
  if (!f.endsWith('.html')) return;
  const h = fs.readFileSync('scripts/pages/' + f, 'utf8');
  const m = h.match(/class="elementor-element elementor-element-([a-f0-9]+)[^"]*e-parent[^"]*"[^>]*>[\s\S]*?<h2 class="ekit-heading--title elementskit-section-title ">([^<]+)<\/h2>/i);
  if (m) {
    const id = m[1];
    const title = m[2].trim();
    const bg = h.match(new RegExp(id + '[^{]*\\{[^}]*background-image:url\\("([^"]+)"', 'i'));
    const hgt = h.match(new RegExp(id + '[^{]*\\{[^}]*--min-height:([^;]+);', 'i'));
    console.log(f, 'Title:', title, 'Height:', hgt ? hgt[1] : 'none', 'BG:', bg ? bg[1].split('/').pop() : 'none');
  }
});

