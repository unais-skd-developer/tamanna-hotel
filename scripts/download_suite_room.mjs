import fs from 'fs';
import https from 'https';

const url = 'https://tamannahotels.com/wp-content/uploads/2025/09/Suite-Room-Black-2-scaled.jpg';
const dest = 'public/images/site/Suite-Room-Black-2-scaled.jpg';

const file = fs.createWriteStream(dest);
https.get(url, (res) => {
  if (res.statusCode === 200) {
    res.pipe(file);
    file.on('finish', () => {
      file.close();
      console.log('Downloaded Suite-Room-Black-2-scaled.jpg, size:', fs.statSync(dest).size);
    });
  } else {
    console.log('Failed:', res.statusCode);
  }
}).on('error', (err) => console.error(err.message));
