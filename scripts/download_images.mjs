import fs from 'fs';
import path from 'path';

const imgList = JSON.parse(fs.readFileSync('scripts/extracted_images.json', 'utf-8'));
const targetDir = 'public/images/site';
fs.mkdirSync(targetDir, { recursive: true });

async function downloadAll() {
  console.log(`Starting download of ${imgList.length} images...`);
  let downloaded = 0;
  let failed = 0;

  for (let i = 0; i < imgList.length; i++) {
    const url = imgList[i];
    const filename = path.basename(new URL(url).pathname);
    const targetPath = path.join(targetDir, filename);

    if (fs.existsSync(targetPath) && fs.statSync(targetPath).size > 0) {
      downloaded++;
      continue;
    }

    try {
      const res = await fetch(url, {
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'
        }
      });
      if (!res.ok) {
        failed++;
        continue;
      }
      const buffer = Buffer.from(await res.arrayBuffer());
      fs.writeFileSync(targetPath, buffer);
      downloaded++;
      if (downloaded % 20 === 0 || i === imgList.length - 1) {
        console.log(`Progress: ${downloaded}/${imgList.length} downloaded (${failed} failed)`);
      }
    } catch (e) {
      failed++;
    }
  }

  console.log(`Finished downloading. Total: ${downloaded}, Failed: ${failed}`);
}

downloadAll();
