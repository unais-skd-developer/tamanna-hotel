import fs from 'fs';

function extractHotelDetails(pageName) {
  const html = fs.readFileSync(`scripts/pages/${pageName}.html`, 'utf-8');

  // Title
  const titleMatch = html.match(/<title>(.*?)<\/title>/i);
  
  // Headings
  const headings = [...html.matchAll(/<(h[1-4])[^>]*>([\s\S]*?)<\/\1>/gi)]
    .map(m => m[2].replace(/<[^>]+>/g, '').trim())
    .filter(t => t && !t.includes('casino') && !t.includes('Actualités'));

  // Video
  const vidMatch = html.match(/background_video_link&quot;:&quot;([^&]+)&quot;/i);
  const video = vidMatch ? vidMatch[1].replace(/\\\//g, '/') : null;

  // Text paragraphs
  const paragraphs = [...html.matchAll(/<p[^>]*>([\s\S]*?)<\/p>/gi)]
    .map(m => m[1].replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim())
    .filter(p => p.length > 30 && !p.includes('casino') && !p.includes('Actualités'));

  // Images
  const imgs = [...new Set([...html.matchAll(/src=["']([^"']+\.(?:jpg|png|webp))["']/gi)].map(m => m[1]))]
    .filter(s => s.includes('/wp-content/uploads/') && !s.includes('avatar') && !s.includes('casino'));

  return {
    pageName,
    title: titleMatch ? titleMatch[1] : '',
    video,
    headings,
    paragraphs,
    imgs
  };
}

const hotelPages = ['grand-tamanna', 'premier-tamanna', 'bizz-tamanna', 'executive-tamanna', 'shree-inn', 'imperial-tamanna', 'daily-baker'];
const allHotels = hotelPages.map(extractHotelDetails);
fs.writeFileSync('scripts/hotels_extracted_data.json', JSON.stringify(allHotels, null, 2));
console.log('Saved hotels_extracted_data.json');

