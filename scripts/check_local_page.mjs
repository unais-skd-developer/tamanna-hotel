async function check() {
  try {
    const res = await fetch('http://localhost:3000/top-restaurant-hinjawadi-pune');
    console.log('Status:', res.status);
    const text = await res.text();
    // Look for Next.js error or title or stack
    const title = text.match(/<title>([^<]*)<\/title>/i)?.[1];
    console.log('Title:', title);
    const errorMatch = text.match(/<pre[^>]*>([\s\S]*?)<\/pre>/i) || text.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
    if (errorMatch) {
      console.log('Error/Body preview:', errorMatch[1].slice(0, 1000));
    }
  } catch (e) {
    console.error('Fetch error:', e.message);
  }
}
check();
