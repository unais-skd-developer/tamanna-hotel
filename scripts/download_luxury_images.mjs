import fs from 'fs';
import path from 'path';

const targets = [
  'unnamed-23.webp',
  'unnamed-23-300x169.webp',
  'Exec.webp',
  'Exec-300x177.webp',
  'unnamed-24.webp',
  'unnamed-24-169x300.webp',
  'unnamed-25.webp',
  'unnamed-25-300x225.webp',
  'unnamed-26.webp',
  'unnamed-26-300x169.webp',
  'unnamed-27.webp',
  'unnamed-27-300x169.webp',
  'unnamed-28.webp',
  'unnamed-28-300x154.webp',
  'unnamed-29.webp',
  'unnamed-29-300x169.webp',
  'unnamed-30.webp',
  'unnamed-30-300x169.webp'
];

async function run() {
  for (const t of targets) {
    const dest = path.join('public/images/site', t);
    if (fs.existsSync(dest) && fs.statSync(dest).size > 1000) {
      console.log('Already have', t);
      continue;
    }
    const url = `https://tamannahotels.com/wp-content/uploads/2025/07/${t}`;
    try {
      const res = await fetch(url);
      if (res.ok) {
        const buf = Buffer.from(await res.arrayBuffer());
        fs.writeFileSync(dest, buf);
        console.log(`Downloaded ${t} (${buf.length} bytes)`);
      } else {
        console.log(`Failed ${t}: ${res.status}`);
      }
    } catch (e) {
      console.log(`Error ${t}: ${e.message}`);
    }
  }
}

run();

