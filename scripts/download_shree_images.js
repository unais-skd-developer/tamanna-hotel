const fs = require('fs');
const path = require('path');
const https = require('https');

const files = [
  'https://tamannahotels.com/wp-content/uploads/2025/09/Executive-Room1-4-scaled.jpg',
  'https://tamannahotels.com/wp-content/uploads/2025/07/shree-in.jpg',
  'https://tamannahotels.com/wp-content/uploads/2025/08/Executive-Room-3.jpg',
  'https://tamannahotels.com/wp-content/uploads/2025/08/Executive-Room1-2.jpg',
  'https://tamannahotels.com/wp-content/uploads/2025/08/Executive-Room2.jpg',
  'https://tamannahotels.com/wp-content/uploads/2025/08/Executive-Room3.jpg',
  'https://tamannahotels.com/wp-content/uploads/2025/07/PHOTO-2022-03-24-13-23-35.webp',
  'https://tamannahotels.com/wp-content/uploads/2025/07/unnamed-32.webp',
  'https://tamannahotels.com/wp-content/uploads/2025/07/9acc225c-c7a3-4a29-9f10-ed7c8e3e839e-scaled.jpg'
];

async function checkAndDownload() {
  for (const url of files) {
    const filename = path.basename(new URL(url).pathname);
    const localPath = path.join('public', 'images', 'site', filename);
    if (fs.existsSync(localPath)) {
      console.log('Exists:', filename, 'size:', fs.statSync(localPath).size);
    } else {
      console.log('Downloading:', filename);
      await download(url, localPath);
    }
  }
}

function download(url, dest) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return download(res.headers.location, dest).then(resolve).catch(reject);
      }
      if (res.statusCode !== 200) {
        console.error('Failed to download', url, res.statusCode);
        return resolve();
      }
      const stream = fs.createWriteStream(dest);
      res.pipe(stream);
      stream.on('finish', () => {
        stream.close();
        console.log('Downloaded:', dest, fs.statSync(dest).size);
        resolve();
      });
      stream.on('error', (err) => {
        console.error('Error writing', dest, err);
        resolve();
      });
    }).on('error', (err) => {
      console.error('Error fetching', url, err);
      resolve();
    });
  });
}

checkAndDownload();

