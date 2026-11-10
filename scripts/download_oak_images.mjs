import fs from 'fs';
import path from 'path';

const url = 'https://tamannahotels.com/wp-content/uploads/2025/09/Oak-Party-Hall1-1-scaled.jpg';
const dest = path.join('public/images/site', 'Oak-Party-Hall1-1-scaled.jpg');

async function run() {
  console.log(`Downloading ${url}...`);
  try {
    const res = await fetch(url);
    if (res.ok) {
      const buf = Buffer.from(await res.arrayBuffer());
      fs.writeFileSync(dest, buf);
      console.log(`Saved ${dest} (${buf.length} bytes)`);
    } else {
      console.log(`Failed: ${res.status}`);
    }
  } catch (e) {
    console.log(`Error: ${e.message}`);
  }
}

run();

