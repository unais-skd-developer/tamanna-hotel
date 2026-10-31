import fs from 'fs';

const html = fs.readFileSync('scripts/home.html', 'utf-8');

function printWidget(id) {
  const idx = html.indexOf(id);
  console.log(`\n================== WIDGET ${id} ==================`);
  if (idx !== -1) {
    console.log(html.slice(idx, idx + 2500));
  }
}

printWidget('89e8816');
printWidget('49e6c2a');
