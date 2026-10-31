import fs from 'fs';

const html = fs.readFileSync('scripts/home.html', 'utf-8');

const idx = html.indexOf('class="elementor-element elementor-element-9d3277c');
if (idx !== -1) {
  const slice = html.slice(idx, idx + 8000);
  fs.writeFileSync('scripts/panel_slider.html', slice);
  console.log('Saved panel_slider.html');
}
