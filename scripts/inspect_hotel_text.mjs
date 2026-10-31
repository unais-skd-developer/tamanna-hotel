import fs from 'fs';

function dumpSections(file) {
  const html = fs.readFileSync('scripts/pages/' + file + '.html', 'utf-8');
  console.log(`\n================== ${file} ==================`);
  
  // Find all text-editor widgets
  const matches = [...html.matchAll(/<div class="elementor-widget-container">([\s\S]*?)<\/div>/gi)];
  matches.forEach((m, idx) => {
    const text = m[1].replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
    if (text.length > 50 && !text.includes('Actualités') && !text.includes('casino') && !text.includes('menu-item') && !text.includes('Reservations:')) {
      console.log(`[#${idx}] ${text.slice(0, 160)}...`);
    }
  });
}

dumpSections('grand-tamanna');
dumpSections('about-us');
dumpSections('contact-us');
