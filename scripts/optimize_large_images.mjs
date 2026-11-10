import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const siteDir = path.join(process.cwd(), 'public/images/site');
const backupDir = path.join(siteDir, '_raw');

if (!fs.existsSync(backupDir)) {
  fs.mkdirSync(backupDir, { recursive: true });
}

async function optimizeImages() {
  const files = fs.readdirSync(siteDir);
  
  for (const file of files) {
    const filePath = path.join(siteDir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) continue;
    
    // Process files > 500KB or key homepage images
    const ext = path.extname(file).toLowerCase();
    if (!['.jpg', '.jpeg', '.png'].includes(ext)) continue;

    const isLarge = stat.size > 500 * 1024;
    const isTarget = [
      'Exterior-1.jpg',
      'Reception-Lobby.jpg',
      'Exterior-2.jpg',
      'Suite-Room-Black-2-scaled.jpg',
      'Premier-Room-6-scaled.jpg',
      'curated-bg.jpg',
      'Nirvana-Lounge-Bar2-scaled.jpg',
      'Exterior-1-scaled.jpg',
      'Reception-Lobby-scaled.jpg',
      'Reception-scaled.jpg',
      'Reception-Area-scaled.jpg'
    ].includes(file);

    if (isLarge || isTarget) {
      console.log(`Optimizing ${file} (${(stat.size / 1024 / 1024).toFixed(2)} MB)...`);
      
      const backupPath = path.join(backupDir, file);
      if (!fs.existsSync(backupPath)) {
        fs.copyFileSync(filePath, backupPath);
      }

      try {
        const image = sharp(backupPath);
        const metadata = await image.metadata();

        const maxDim = 1920;
        let resizeOptions = {};
        if (metadata.width > maxDim || metadata.height > maxDim) {
          if (metadata.width >= metadata.height) {
            resizeOptions = { width: maxDim, withoutEnlargement: true };
          } else {
            resizeOptions = { height: maxDim, withoutEnlargement: true };
          }
        }

        // Generate optimized WebP
        const baseName = path.basename(file, ext);
        const webpPath = path.join(siteDir, `${baseName}.webp`);
        await sharp(backupPath)
          .resize(resizeOptions)
          .webp({ quality: 82, effort: 4 })
          .toFile(webpPath);

        // Replace original with optimized JPEG / PNG
        const tempPath = path.join(siteDir, `_temp_${file}`);
        if (ext === '.png') {
          await sharp(backupPath)
            .resize(resizeOptions)
            .png({ quality: 85, compressionLevel: 8 })
            .toFile(tempPath);
        } else {
          await sharp(backupPath)
            .resize(resizeOptions)
            .jpeg({ quality: 82, progressive: true, mozjpeg: true })
            .toFile(tempPath);
        }

        fs.copyFileSync(tempPath, filePath);
        fs.unlinkSync(tempPath);

        const newStat = fs.statSync(filePath);
        const webpStat = fs.statSync(webpPath);
        console.log(`  ✓ ${file}: ${(stat.size / 1024 / 1024).toFixed(2)} MB -> ${(newStat.size / 1024).toFixed(1)} KB (WebP: ${(webpStat.size / 1024).toFixed(1)} KB)`);
      } catch (err) {
        console.error(`  ✗ Error optimizing ${file}:`, err.message);
      }
    }
  }
  console.log('Image optimization complete!');
}

optimizeImages();

