import fs from 'fs';

const files = [
  'grand-tamanna',
  'premier-tamanna',
  'bizz-tamanna',
  'executive-tamanna',
  'shree-inn',
  'imperial-tamanna',
  'daily-baker',
  'about-us',
  'contact-us',
  'hotels',
  'restaurants',
  'wedding-party-venues',
  'offers',
  'gallery',
  'blogs'
];

for (const f of files) {
  const html = fs.readFileSync('scripts/pages/' + f + '.html', 'utf-8');
  const vidMatch = html.match(/background_video_link&quot;:&quot;([^&]+)&quot;/i);
  
  // Find first big image or hero title
  const titleMatch = html.match(/<h[12][^>]*>([\s\S]*?)<\/h[12]>/i);
  const title = titleMatch ? titleMatch[1].replace(/<[^>]+>/g, '').trim() : '';

  console.log(`${f}: video=${vidMatch ? vidMatch[1].replace(/\\\//g, '/') : 'none'} | title="${title}"`);
}
