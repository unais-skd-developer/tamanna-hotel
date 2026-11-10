const fs = require('fs');
const html = fs.readFileSync('scripts/pages/standard-room-hinjawadi-pune.html', 'utf8');

const idMatch = html.match(/class="[^"]*elementor-element-([^" ]*)[^"]*elementor-widget-heading"[^>]*>[\s\S]*?Booking Of Hotel Rooms/);
if (idMatch) {
  const id = idMatch[1];
  console.log('Call button element ID:', id);
  const reg = new RegExp('\\.elementor-element-' + id + '[^{]*\\{[^}]*\\}', 'g');
  console.log(html.match(reg));
}

