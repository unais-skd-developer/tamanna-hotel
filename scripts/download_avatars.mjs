import fs from 'fs';
import https from 'https';

const avatars = [
  {
    name: 'avatar_kalyan.jpg',
    url: 'https://lh3.googleusercontent.com/a-/ALV-UjUiQTviRX6zu9OOZho1lAQqcx2hUkdD80Ir_loeH4a6bbB5KPDTEg=s120-c-rp-mo-ba12-br100'
  },
  {
    name: 'avatar_chinar.jpg',
    url: 'https://lh3.googleusercontent.com/a-/ALV-UjWyrAvfYpD3AhCiTz3r4A_w9Ue0J_UKsTZDhyDxov0pNLDQ4BFF=s120-c-rp-mo-ba12-br100'
  },
  {
    name: 'avatar_mansi.jpg',
    url: 'https://lh3.googleusercontent.com/a/ACg8ocItxqiCGWMEUG855A71bZ4oNiSVY3lyv1aDF9bEh6xmnx39U5w=s120-c-rp-mo-br100'
  },
  {
    name: 'avatar_khanindra.jpg',
    url: 'https://lh3.googleusercontent.com/a/ACg8ocJshN5WM2b56uRNxCHfJH41Tre2eECFFPgaVSM2LXNbZlkqcQ=s120-c-rp-mo-br100'
  },
  {
    name: 'avatar_chandrashekhar.jpg',
    url: 'https://lh3.googleusercontent.com/a/ACg8ocIYaq0CosXkxb-df4LoKeg4ukjqeqWxMOZqCvYs3d6t2baRQQ=s120-c-rp-mo-br100'
  }
];

for (const a of avatars) {
  const dest = 'public/images/site/' + a.name;
  https.get(a.url, (res) => {
    if (res.statusCode === 200) {
      const file = fs.createWriteStream(dest);
      res.pipe(file);
      file.on('finish', () => {
        file.close();
        console.log('Downloaded', a.name);
      });
    }
  }).on('error', (e) => console.log('Error', a.name, e.message));
}

