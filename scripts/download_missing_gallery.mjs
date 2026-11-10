import fs from 'fs';
import https from 'https';

const urls = [
  { url: 'https://tamannahotels.com/wp-content/uploads/2025/07/Premier-Restaurant1.webp', path: './public/images/site/Premier-Restaurant1.webp' },
  { url: 'https://tamannahotels.com/wp-content/uploads/2025/07/unnamed-14.webp', path: './public/images/site/unnamed-14.webp' }
];

urls.forEach(({ url, path }) => {
  https.get(url, (res) => {
    if (res.statusCode === 200) {
      const file = fs.createWriteStream(path);
      res.pipe(file);
      file.on('finish', () => console.log('Downloaded', path));
    } else {
      console.log('Failed', url, res.statusCode);
    }
  }).on('error', (err) => console.log('Error', url, err.message));
});
