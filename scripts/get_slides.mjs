import fs from 'fs';

const html = fs.readFileSync('scripts/home.html', 'utf-8');

const startIdx = html.indexOf('class="elementor-element elementor-element-9d3277c');
const endIdx = html.indexOf('class="elementor-element elementor-element-c3bddb5'); // next section is Our Gallery

if (startIdx !== -1 && endIdx !== -1) {
  const widgetHtml = html.slice(startIdx, endIdx);
  const titles = [...widgetHtml.matchAll(/class="bdt-panel-slide-title[^"]*">([\s\S]*?)<\/h3>/gi)].map(m => m[1].trim());
  const images = [...widgetHtml.matchAll(/url\((https?:[^)]+)\)/gi)].map(m => m[1]);
  const links = [...widgetHtml.matchAll(/class="bdt-panel-slide-link[^"]*"\s+href="([^"]+)"/gi)].map(m => m[1]);
  console.log(`Found ${titles.length} slides:`);
  titles.forEach((t, i) => {
    console.log(`[${i+1}] "${t}"`);
    console.log(`     Image: ${images[i]}`);
    console.log(`     Link:  ${links[i]}`);
  });
}
