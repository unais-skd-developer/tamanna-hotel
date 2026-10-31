import fs from 'fs';
import path from 'path';

const pages = [
  { name: 'home', url: 'https://tamannahotels.com/' },
  { name: 'grand-tamanna', url: 'https://tamannahotels.com/hotels-hinjawadi-pune/' },
  { name: 'premier-tamanna', url: 'https://tamannahotels.com/premier-tamanna-hotel-hinjawadi-pune/' },
  { name: 'bizz-tamanna', url: 'https://tamannahotels.com/bizz-tamanna-hotel-hinjawadi-pune/' },
  { name: 'executive-tamanna', url: 'https://tamannahotels.com/executive-tamanna-hotel-hinjawadi-pune/' },
  { name: 'shree-inn', url: 'https://tamannahotels.com/shree-inn-by-tamanna-hotel-hinjawadi-pune/' },
  { name: 'imperial-tamanna', url: 'https://tamannahotels.com/best-hotels-chikhali-pune/' },
  { name: 'daily-baker', url: 'https://tamannahotels.com/top-cake-shop-hinjawadi-pune/' },
  { name: 'about-us', url: 'https://tamannahotels.com/best-hotels-pune/' },
  { name: 'contact-us', url: 'https://tamannahotels.com/hotel-near-pune/' },
  { name: 'hotels', url: 'https://tamannahotels.com/best-hotel-for-stay-pune/' },
  { name: 'restaurants', url: 'https://tamannahotels.com/restaurant-in-pune/' },
  { name: 'wedding-party-venues', url: 'https://tamannahotels.com/top-wedding-party-venues-pune/' },
  { name: 'offers', url: 'https://tamannahotels.com/offers/' },
  { name: 'gallery', url: 'https://tamannahotels.com/gallery/' },
  { name: 'blogs', url: 'https://tamannahotels.com/blogs/' },
];

fs.mkdirSync('scripts/pages', { recursive: true });

async function crawl() {
  const summary = [];
  for (const p of pages) {
    console.log(`Fetching ${p.name} (${p.url})...`);
    try {
      const res = await fetch(p.url, { headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' } });
      const html = await res.text();
      fs.writeFileSync(`scripts/pages/${p.name}.html`, html);

      const titleMatch = html.match(/<title>(.*?)<\/title>/i);
      const title = titleMatch ? titleMatch[1] : '';

      // Find all h1, h2, h3
      const headings = [...html.matchAll(/<(h[1-3])[^>]*>([\s\S]*?)<\/\1>/gi)]
        .map(m => ({ tag: m[1], text: m[2].replace(/<[^>]+>/g, '').trim().replace(/\s+/g, ' ') }))
        .filter(h => h.text && !h.text.includes('casino') && !h.text.includes('Actualités'));

      // Find images
      const imgRegex = /<img[^>]+src=["']([^"']+)["'][^>]*>/gi;
      let imgMatch;
      const images = [];
      while ((imgMatch = imgRegex.exec(html)) !== null) {
        if (!imgMatch[1].includes('casino') && !imgMatch[1].includes('avatar')) {
          images.push(imgMatch[1]);
        }
      }

      summary.push({
        name: p.name,
        url: p.url,
        title,
        headingsCount: headings.length,
        headings: headings.slice(0, 15),
        imagesCount: images.length,
        imageSample: images.slice(0, 8)
      });
      console.log(`Saved ${p.name}.html (${html.length} bytes, title: "${title}")`);
    } catch (err) {
      console.error(`Failed ${p.name}:`, err.message);
    }
  }

  fs.writeFileSync('scripts/pages_summary.json', JSON.stringify(summary, null, 2));
  console.log('Saved pages_summary.json');
}

crawl();
