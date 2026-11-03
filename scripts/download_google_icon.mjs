import fs from 'fs';
import https from 'https';

const url = 'https://tamannahotels.com/wp-content/plugins/widgets-for-google-reviews-and-ratings/public/css/images/Google_icon.svg';
const dest = 'public/images/site/Google_icon.svg';

https.get(url, (res) => {
  if (res.statusCode === 200) {
    const file = fs.createWriteStream(dest);
    res.pipe(file);
    file.on('finish', () => {
      file.close();
      console.log('Downloaded Google_icon.svg');
    });
  } else {
    console.log('Status:', res.statusCode);
  }
}).on('error', (e) => console.log(e.message));

