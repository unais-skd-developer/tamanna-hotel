const fs = require('fs');
const html = fs.readFileSync('scripts/pages/standard-room-hinjawadi-pune.html', 'utf8');

const start = html.indexOf('elementor-element-69f1b14');
const end = html.indexOf('elementor-element-ed56c14');
const section = html.slice(start, end);

// Let's print the opening tags of the direct structure
const lines = section.split('\n');
lines.forEach(l => {
  if (l.includes('<div class="elementor-element') || l.includes('class="ekit-heading') || l.includes('Room Feature') || l.includes('BOOK YOUR PERFECT') || l.includes('0139029')) {
    console.log(l.trim());
  }
});

