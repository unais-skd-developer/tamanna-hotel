const fs = require('fs');
// Let's check the size and details of media_1794047328623_15b4c7d9.png
const stat = fs.statSync('C:/Users/unais-work/.gemini/antigravity/brain/df460143-f6ef-4a56-a852-7eca5c822104/.user_uploaded/media_1794047328623_15b4c7d9.png');
console.log('Image 2 size:', stat.size);

