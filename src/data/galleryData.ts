export interface GalleryItem {
  id: number;
  category: string;
  thumbnail: string;
  fullImage: string;
  alt: string;
}

export const GALLERY_CATEGORIES = [
  "ALL",
  "GRAND TAMANNA",
  "PREMIER TAMANNA",
  "BIZZ TAMANNA",
  "EXECUTIVE TAMANNA",
  "SHREE INN BY TAMANNA",
  "DAILY BAKER",
  "IMPERIAL TAMANNA",
] as const;

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    "id": 1,
    "category": "GRAND TAMANNA",
    "thumbnail": "/images/site/grand-tamanna-300x200.webp",
    "fullImage": "/images/site/grand-tamanna.webp",
    "alt": "GRAND TAMANNA Gallery Image 1"
  },
  {
    "id": 2,
    "category": "PREMIER TAMANNA",
    "thumbnail": "/images/site/44646687_0-300x258.jpg",
    "fullImage": "/images/site/44646687_0.jpg",
    "alt": "PREMIER TAMANNA Gallery Image 2"
  },
  {
    "id": 3,
    "category": "BIZZ TAMANNA",
    "thumbnail": "/images/site/Overview-300x177.jpg",
    "fullImage": "/images/site/Overview.jpg",
    "alt": "Top Business Hotels in Hinjawadi Near IT Park"
  },
  {
    "id": 4,
    "category": "EXECUTIVE TAMANNA",
    "thumbnail": "/images/site/12989608-300x188.jpg",
    "fullImage": "/images/site/12989608.jpg",
    "alt": "Best Luxury Hotels in Hinjawadi Pune"
  },
  {
    "id": 5,
    "category": "SHREE INN BY TAMANNA",
    "thumbnail": "/images/site/Exterior-1-scaled-1-300x200.jpg",
    "fullImage": "/images/site/Exterior-1-scaled-1-300x200.jpg",
    "alt": "SHREE INN BY TAMANNA Gallery Image 5"
  },
  {
    "id": 6,
    "category": "GRAND TAMANNA",
    "thumbnail": "/images/site/grand-restaurant3-scaled-1-300x200.avif",
    "fullImage": "/images/site/grand-restaurant3-scaled-1-300x200.avif",
    "alt": "GRAND TAMANNA Gallery Image 6"
  },
  {
    "id": 7,
    "category": "GRAND TAMANNA",
    "thumbnail": "/images/site/Premier-restaurant3-300x200.webp",
    "fullImage": "/images/site/Premier-restaurant3-300x200.webp",
    "alt": "Best Restaurants in Hinjawadi Phase 1"
  },
  {
    "id": 8,
    "category": "GRAND TAMANNA",
    "thumbnail": "/images/site/grand-restaurant9-300x225.avif",
    "fullImage": "/images/site/grand-restaurant9-300x225.avif",
    "alt": "Best South Indian Restaurants in Hinjawadi Pune"
  },
  {
    "id": 9,
    "category": "GRAND TAMANNA",
    "thumbnail": "/images/site/unnamed-3-300x225.webp",
    "fullImage": "/images/site/unnamed-3-300x225.webp",
    "alt": "GRAND TAMANNA Gallery Image 9"
  },
  {
    "id": 10,
    "category": "GRAND TAMANNA",
    "thumbnail": "/images/site/premimum-room-grand-300x225.webp",
    "fullImage": "/images/site/premimum-room-grand-300x225.webp",
    "alt": "GRAND TAMANNA Gallery Image 10"
  },
  {
    "id": 11,
    "category": "GRAND TAMANNA",
    "thumbnail": "/images/site/15-300x199.jpg",
    "fullImage": "/images/site/15.jpg",
    "alt": "Best Banquet Halls in Hinjawadi Pune for Weddings"
  },
  {
    "id": 12,
    "category": "GRAND TAMANNA",
    "thumbnail": "/images/site/Nirvana-2-1-scaled-1-300x200.jpg",
    "fullImage": "/images/site/Nirvana-2-1-scaled-1-300x200.jpg",
    "alt": "Best Hotels Near Balewadi Sports Complex"
  },
  {
    "id": 13,
    "category": "GRAND TAMANNA",
    "thumbnail": "/images/site/Nirvana-5-scaled-1-300x200.jpg",
    "fullImage": "/images/site/Nirvana-5-scaled-1-300x200.jpg",
    "alt": "Top Multi-Cuisine Restaurants in Hinjawadi Pune"
  },
  {
    "id": 14,
    "category": "PREMIER TAMANNA",
    "thumbnail": "/images/site/Premier-Tamanna-Hotel-meeting-hall-photo-4-300x199.webp",
    "fullImage": "/images/site/Premier-Tamanna-Hotel-meeting-hall-photo-4.webp",
    "alt": "Top Conference Halls in Hinjawadi Pune"
  },
  {
    "id": 15,
    "category": "PREMIER TAMANNA",
    "thumbnail": "/images/site/Premier-Tamanna-conference-hall-3-300x199.webp",
    "fullImage": "/images/site/Premier-Tamanna-conference-hall-3-300x199.webp",
    "alt": "PREMIER TAMANNA Gallery Image 15"
  },
  {
    "id": 16,
    "category": "PREMIER TAMANNA",
    "thumbnail": "/images/site/Premier-Tamanna-Hotel-Board-room-photo-2-300x199.webp",
    "fullImage": "/images/site/Premier-Tamanna-Hotel-Board-room-photo-2.webp",
    "alt": "PREMIER TAMANNA Gallery Image 16"
  },
  {
    "id": 17,
    "category": "PREMIER TAMANNA",
    "thumbnail": "/images/site/Premier-Tamanna-Hotel-twin-sharing-room-photo-3-300x200.webp",
    "fullImage": "/images/site/Premier-Tamanna-Hotel-twin-sharing-room-photo-3-300x200.webp",
    "alt": "PREMIER TAMANNA Gallery Image 17"
  },
  {
    "id": 18,
    "category": "PREMIER TAMANNA",
    "thumbnail": "/images/site/2021-04-03-1-1-300x225.webp",
    "fullImage": "/images/site/2021-04-03-1-1-300x225.webp",
    "alt": "PREMIER TAMANNA Gallery Image 18"
  },
  {
    "id": 19,
    "category": "PREMIER TAMANNA",
    "thumbnail": "/images/site/Suite-Room-109-scaled-1-300x200.jpg",
    "fullImage": "/images/site/Suite-Room-109-scaled-1-300x200.jpg",
    "alt": "Best Hotels near Rajiv Gandhi Infotech Park Hinjawadi"
  },
  {
    "id": 20,
    "category": "PREMIER TAMANNA",
    "thumbnail": "/images/site/Premier-Restaurant1-300x200.webp",
    "fullImage": "/images/site/Premier-Restaurant1-300x200.webp",
    "alt": "Top Family Restaurants in Hinjawadi Pune"
  },
  {
    "id": 21,
    "category": "PREMIER TAMANNA",
    "thumbnail": "/images/site/Premier-restaurant2-300x200.webp",
    "fullImage": "/images/site/Premier-restaurant2.webp",
    "alt": "Best Restaurants in Hinjawadi Phase 3"
  },
  {
    "id": 22,
    "category": "PREMIER TAMANNA",
    "thumbnail": "/images/site/Premier-restaurant7-300x225.webp",
    "fullImage": "/images/site/Premier-restaurant7-300x225.webp",
    "alt": "Best Restaurants in Hinjawadi Phase 3"
  },
  {
    "id": 23,
    "category": "BIZZ TAMANNA",
    "thumbnail": "/images/site/unnamed-21-300x225.webp",
    "fullImage": "/images/site/unnamed-21-300x225.webp",
    "alt": "BIZZ TAMANNA Gallery Image 23"
  },
  {
    "id": 24,
    "category": "BIZZ TAMANNA",
    "thumbnail": "/images/site/unnamed-22-300x200.webp",
    "fullImage": "/images/site/unnamed-22-300x200.webp",
    "alt": "BIZZ TAMANNA Gallery Image 24"
  },
  {
    "id": 25,
    "category": "BIZZ TAMANNA",
    "thumbnail": "/images/site/unnamed-20-300x168.webp",
    "fullImage": "/images/site/unnamed-20-300x168.webp",
    "alt": "BIZZ TAMANNA Gallery Image 25"
  },
  {
    "id": 26,
    "category": "BIZZ TAMANNA",
    "thumbnail": "/images/site/unnamed-18-300x225.webp",
    "fullImage": "/images/site/unnamed-18-300x225.webp",
    "alt": "BIZZ TAMANNA Gallery Image 26"
  },
  {
    "id": 27,
    "category": "BIZZ TAMANNA",
    "thumbnail": "/images/site/unnamed-17-300x225.webp",
    "fullImage": "/images/site/unnamed-17-300x225.webp",
    "alt": "BIZZ TAMANNA Gallery Image 27"
  },
  {
    "id": 28,
    "category": "BIZZ TAMANNA",
    "thumbnail": "/images/site/bizz-laurel-300x169.webp",
    "fullImage": "/images/site/bizz-laurel.webp",
    "alt": "BIZZ TAMANNA Gallery Image 28"
  },
  {
    "id": 29,
    "category": "BIZZ TAMANNA",
    "thumbnail": "/images/site/highland-1-300x225.webp",
    "fullImage": "/images/site/highland-1-300x225.webp",
    "alt": "BIZZ TAMANNA Gallery Image 29"
  },
  {
    "id": 30,
    "category": "EXECUTIVE TAMANNA",
    "thumbnail": "/images/site/58-300x201.jpg",
    "fullImage": "/images/site/58-300x201.jpg",
    "alt": "EXECUTIVE TAMANNA Gallery Image 30"
  },
  {
    "id": 31,
    "category": "EXECUTIVE TAMANNA",
    "thumbnail": "/images/site/Executive-Tamanna-Building-1-scaled-1-300x200.jpg",
    "fullImage": "/images/site/Executive-Tamanna-Building-1-scaled-1-300x200.jpg",
    "alt": "Top Budget Hotels in Hinjawadi"
  },
  {
    "id": 32,
    "category": "EXECUTIVE TAMANNA",
    "thumbnail": "/images/site/Executive-Room-5-scaled-1-300x200.jpg",
    "fullImage": "/images/site/Executive-Room-5-scaled-1-300x200.jpg",
    "alt": "EXECUTIVE TAMANNA Gallery Image 32"
  },
  {
    "id": 33,
    "category": "EXECUTIVE TAMANNA",
    "thumbnail": "/images/site/Executive-Room1-3-scaled-1-300x200.jpg",
    "fullImage": "/images/site/Executive-Room1-3-scaled-1-300x200.jpg",
    "alt": "EXECUTIVE TAMANNA Gallery Image 33"
  },
  {
    "id": 34,
    "category": "EXECUTIVE TAMANNA",
    "thumbnail": "/images/site/upscalemedia-transformed-5-300x201.jpg",
    "fullImage": "/images/site/upscalemedia-transformed-5-300x201.jpg",
    "alt": "EXECUTIVE TAMANNA Gallery Image 34"
  },
  {
    "id": 35,
    "category": "EXECUTIVE TAMANNA",
    "thumbnail": "/images/site/61-1-300x201.jpg",
    "fullImage": "/images/site/61-1-300x201.jpg",
    "alt": "EXECUTIVE TAMANNA Gallery Image 35"
  },
  {
    "id": 36,
    "category": "EXECUTIVE TAMANNA",
    "thumbnail": "/images/site/Cateteria-1-1-scaled-1-300x200.jpg",
    "fullImage": "/images/site/Cateteria-1-1-scaled-1-300x200.jpg",
    "alt": "EXECUTIVE TAMANNA Gallery Image 36"
  },
  {
    "id": 37,
    "category": "SHREE INN BY TAMANNA",
    "thumbnail": "/images/site/PHOTO-2022-03-24-13-23-35-300x225.webp",
    "fullImage": "/images/site/PHOTO-2022-03-24-13-23-35-300x225.webp",
    "alt": "SHREE INN BY TAMANNA Gallery Image 37"
  },
  {
    "id": 38,
    "category": "SHREE INN BY TAMANNA",
    "thumbnail": "/images/site/PHOTO-2022-03-24-13-23-36-300x225.webp",
    "fullImage": "/images/site/PHOTO-2022-03-24-13-23-36-300x225.webp",
    "alt": "SHREE INN BY TAMANNA Gallery Image 38"
  },
  {
    "id": 39,
    "category": "SHREE INN BY TAMANNA",
    "thumbnail": "/images/site/unnamed-36-225x300.webp",
    "fullImage": "/images/site/unnamed-36-225x300.webp",
    "alt": "SHREE INN BY TAMANNA Gallery Image 39"
  },
  {
    "id": 40,
    "category": "SHREE INN BY TAMANNA",
    "thumbnail": "/images/site/unnamed-35-225x300.webp",
    "fullImage": "/images/site/unnamed-35-225x300.webp",
    "alt": "SHREE INN BY TAMANNA Gallery Image 40"
  },
  {
    "id": 41,
    "category": "SHREE INN BY TAMANNA",
    "thumbnail": "/images/site/unnamed-34-225x300.webp",
    "fullImage": "/images/site/unnamed-34-225x300.webp",
    "alt": "SHREE INN BY TAMANNA Gallery Image 41"
  },
  {
    "id": 42,
    "category": "DAILY BAKER",
    "thumbnail": "/images/site/64-300x225.jpg",
    "fullImage": "/images/site/64.jpg",
    "alt": "DAILY BAKER Gallery Image 42"
  },
  {
    "id": 43,
    "category": "DAILY BAKER",
    "thumbnail": "/images/site/2023-06-22-1-225x300.webp",
    "fullImage": "/images/site/2023-06-22-1-225x300.webp",
    "alt": "DAILY BAKER Gallery Image 43"
  },
  {
    "id": 44,
    "category": "DAILY BAKER",
    "thumbnail": "/images/site/2023-07-05-225x300.webp",
    "fullImage": "/images/site/2023-07-05-225x300.webp",
    "alt": "DAILY BAKER Gallery Image 44"
  },
  {
    "id": 45,
    "category": "DAILY BAKER",
    "thumbnail": "/images/site/2023-06-22-264x300.webp",
    "fullImage": "/images/site/2023-06-22-264x300.webp",
    "alt": "DAILY BAKER Gallery Image 45"
  },
  {
    "id": 46,
    "category": "DAILY BAKER",
    "thumbnail": "/images/site/2023-07-05-1-225x300.webp",
    "fullImage": "/images/site/2023-07-05-1-225x300.webp",
    "alt": "DAILY BAKER Gallery Image 46"
  },
  {
    "id": 47,
    "category": "IMPERIAL TAMANNA",
    "thumbnail": "/images/site/WhatsApp-Image-2026-06-01-at-14.30.42.jpeg",
    "fullImage": "/images/site/WhatsApp-Image-2026-06-01-at-14.30.42.jpeg",
    "alt": "IMPERIAL TAMANNA Gallery Image 47"
  },
  {
    "id": 48,
    "category": "IMPERIAL TAMANNA",
    "thumbnail": "/images/site/WhatsApp-Image-2026-06-01-at-14.34.12-300x169.jpeg",
    "fullImage": "/images/site/WhatsApp-Image-2026-06-01-at-14.34.12-300x169.jpeg",
    "alt": "IMPERIAL TAMANNA Gallery Image 48"
  },
  {
    "id": 49,
    "category": "IMPERIAL TAMANNA",
    "thumbnail": "/images/site/WhatsApp-Image-2026-06-01-at-14.26.54-300x169.jpeg",
    "fullImage": "/images/site/WhatsApp-Image-2026-06-01-at-14.26.54-300x169.jpeg",
    "alt": "IMPERIAL TAMANNA Gallery Image 49"
  },
  {
    "id": 50,
    "category": "IMPERIAL TAMANNA",
    "thumbnail": "/images/site/WhatsApp-Image-2026-06-01-at-14.29.31-300x169.jpeg",
    "fullImage": "/images/site/WhatsApp-Image-2026-06-01-at-14.29.31-300x169.jpeg",
    "alt": "IMPERIAL TAMANNA Gallery Image 50"
  },
  {
    "id": 51,
    "category": "IMPERIAL TAMANNA",
    "thumbnail": "/images/site/WhatsApp-Image-2026-06-01-at-14.28.33-300x169.jpeg",
    "fullImage": "/images/site/WhatsApp-Image-2026-06-01-at-14.28.33-300x169.jpeg",
    "alt": "IMPERIAL TAMANNA Gallery Image 51"
  },
  {
    "id": 52,
    "category": "IMPERIAL TAMANNA",
    "thumbnail": "/images/site/WhatsApp-Image-2026-06-01-at-14.27.07-300x169.jpeg",
    "fullImage": "/images/site/WhatsApp-Image-2026-06-01-at-14.27.07-300x169.jpeg",
    "alt": "IMPERIAL TAMANNA Gallery Image 52"
  },
  {
    "id": 53,
    "category": "IMPERIAL TAMANNA",
    "thumbnail": "/images/site/WhatsApp-Image-2026-06-01-at-14.29.32-300x169.jpeg",
    "fullImage": "/images/site/WhatsApp-Image-2026-06-01-at-14.29.32-300x169.jpeg",
    "alt": "IMPERIAL TAMANNA Gallery Image 53"
  },
  {
    "id": 54,
    "category": "IMPERIAL TAMANNA",
    "thumbnail": "/images/site/ITH-030-300x200.webp",
    "fullImage": "/images/site/ITH-030-300x200.webp",
    "alt": "IMPERIAL TAMANNA Gallery Image 54"
  },
  {
    "id": 55,
    "category": "IMPERIAL TAMANNA",
    "thumbnail": "/images/site/ITH-036-300x200.webp",
    "fullImage": "/images/site/ITH-036-300x200.webp",
    "alt": "IMPERIAL TAMANNA Gallery Image 55"
  },
  {
    "id": 56,
    "category": "IMPERIAL TAMANNA",
    "thumbnail": "/images/site/ITH-0732-300x200.webp",
    "fullImage": "/images/site/ITH-0732-300x200.webp",
    "alt": "IMPERIAL TAMANNA Gallery Image 56"
  },
  {
    "id": 57,
    "category": "IMPERIAL TAMANNA",
    "thumbnail": "/images/site/ITH-1052-200x300.webp",
    "fullImage": "/images/site/ITH-1052-200x300.webp",
    "alt": "IMPERIAL TAMANNA Gallery Image 57"
  },
  {
    "id": 58,
    "category": "IMPERIAL TAMANNA",
    "thumbnail": "/images/site/ITH-0381-300x200.webp",
    "fullImage": "/images/site/ITH-0381-300x200.webp",
    "alt": "IMPERIAL TAMANNA Gallery Image 58"
  },
  {
    "id": 59,
    "category": "IMPERIAL TAMANNA",
    "thumbnail": "/images/site/ITH-0932-300x203.webp",
    "fullImage": "/images/site/ITH-0932-300x203.webp",
    "alt": "IMPERIAL TAMANNA Gallery Image 59"
  }
];
