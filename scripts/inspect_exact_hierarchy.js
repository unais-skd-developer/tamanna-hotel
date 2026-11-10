const fs = require('fs');
const html = fs.readFileSync('scripts/pages/standard-room-hinjawadi-pune.html', 'utf8');

// Find all top-level containers inside the main content
const mainMatch = html.match(/class="[^"]*elementor-element-69f1b14[^"]*"[\s\S]*?class="[^"]*elementor-element-ed56c14/);
if (mainMatch) {
  console.log('Main section length:', mainMatch[0].length);
  // print all immediate children of 69f1b14
  const childRegex = /<div class="elementor-element elementor-element-([a-z0-9]+)[^"]* e-con-full[^"]* e-child"/g;
  let m;
  while ((m = childRegex.exec(mainMatch[0])) !== null) {
    console.log('Child:', m[1]);
  }
}

