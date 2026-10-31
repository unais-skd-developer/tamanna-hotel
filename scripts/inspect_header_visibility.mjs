import fs from 'fs';

const html = fs.readFileSync('scripts/header.html', 'utf-8');

const containers = [...html.matchAll(/<div class="elementor-element elementor-element-([a-z0-9]+)\s+([^"]*e-con[^"]*)"/gi)];
containers.forEach(c => {
  const id = c[1];
  const classes = c[2];
  // check visibility settings
  const hiddenMatch = classes.match(/elementor-hidden-[a-z]+/g);
  console.log(`Container ${id}: classes="${classes}" hidden="${hiddenMatch ? hiddenMatch.join(' ') : 'none'}"`);
});
