export interface RoomInfo {
  name: string;
  size?: string;
  description: string;
  image: string;
  features: string[];
}

export interface AmenityInfo {
  title: string;
  iconName?: string;
}

export interface DiningVenue {
  name: string;
  tagline?: string;
  description: string;
  image: string;
  capacity?: string;
  cuisine?: string;
}

export interface EventVenue {
  name: string;
  tagline?: string;
  description: string;
  image: string;
  capacity?: string;
}

export interface HotelDetail {
  slug: string;
  name: string;
  heroVideoId?: string;
  heroImage: string;
  tagline: string;
  shortDesc: string;
  fullDesc: string;
  address: string;
  phone: string;
  reservationPhone: string;
  email: string;
  rating: number;
  rooms: RoomInfo[];
  dining: DiningVenue[];
  venues: EventVenue[];
  amenities: string[];
  gallery: string[];
}

export const HOTELS_MAP: Record<string, HotelDetail> = {
  "hotels-hinjawadi-pune": {
    slug: "hotels-hinjawadi-pune",
    name: "Grand Tamanna Hotel",
    heroVideoId: "SRm0n8tPhAk",
    heroImage: "/images/site/Exterior.jpg",
    tagline: "The Flagship Luxury Hotel in Hinjawadi IT Park",
    shortDesc: "Grand Tamanna stands as a flagship property of Tamanna Hotels and is one of the most sought-after hotels in Hinjawadi Pune. Perfectly located in the heart of the IT hub, Grand Tamanna blends premium hospitality, modern comfort, and versatile event venues.",
    fullDesc: "Grand Tamanna stands as a flagship property of Tamanna Hotels and is one of the most sought-after hotels in Hinjawadi Pune. Perfectly located in the heart of the IT hub, Grand Tamanna blends premium hospitality, modern comfort, and versatile event venues. Whether you are traveling for business, leisure, or hosting grand social occasions, this hotel offers thoughtfully designed accommodations and world-class service.\n\nGuests can enjoy fine dining at 'Around The World', a multi-cuisine restaurant with a capacity of up to 110 guests. For more intimate gatherings, the Nirvana Lounge Bar offers a stylish ambiance to unwind. The hotel features 46 spacious premium rooms and 1 luxurious suite, each designed with elegant interiors, a king-size bed, mini fridge, LED TV, and complimentary Wi-Fi.\n\nFor outdoor lovers, the poolside rooftop party area on the 8th floor offers a mesmerizing open-sky view, perfect for evening celebrations. Additional amenities include a fitness gym, business center, elevator, travel desk, laundry service, and ample private parking.",
    address: "Hinjawadi Phase 1, Rajiv Gandhi Infotech Park, Hinjawadi, Pune, Maharashtra 411057",
    phone: "020 66935000",
    reservationPhone: "7058688561",
    email: "Grand@tamannahotels.com",
    rating: 4.8,
    rooms: [
      {
        name: "PREMIUM ROOM",
        size: "320 sq. ft.",
        description: "Forty-six spacious 320 sq. ft. premium rooms equipped with plush king bedding, executive work desk, smart LED TV, mini fridge, tea/coffee maker, and modern ensuite bathroom.",
        image: "/images/site/Executive-Room-scaled.jpg",
        features: ["King Size Bed", "320 sq ft", "Free High-Speed Wi-Fi", "Smart LED TV", "Mini Fridge", "Electronic Safe", "24/7 Room Service"],
      },
      {
        name: "SUITE ROOM",
        size: "600 sq. ft.",
        description: "One lavish Presidential-grade Suite Room featuring an expansive master bedroom with a dedicated living salon and a luxurious bathtub ensuite.",
        image: "/images/site/Premier-Room-6-scaled.jpg",
        features: ["Master Bedroom & Salon", "Luxury Bathtub", "Complimentary Breakfast", "Mini Bar", "VIP Turndown Service", "Express Check-in"],
      },
    ],
    dining: [
      {
        name: "Around The World Multi-Cuisine Restaurant",
        description: "Signature fine dining restaurant accommodating up to 110 guests, serving authentic North Indian, South Indian, Oriental, and Continental gourmet delicacies.",
        image: "/images/site/highland.webp",
        capacity: "110 Guests",
        cuisine: "Multi-Cuisine (Indian, Chinese, Continental)",
      },
      {
        name: "Nirvana Lounge Bar",
        description: "Chic and ambient cocktail lounge featuring curated artisanal spirits, craft beverages, and gourmet bar snacks in an upscale music lounge setting.",
        image: "/images/site/pool2.webp",
        capacity: "60 Guests",
        cuisine: "Cocktails, Finger Food & Bar Bites",
      },
    ],
    venues: [
      {
        name: "Bliss Banquet",
        description: "Air-conditioned banquet venue equipped with acoustic audio-visual technology, ideal for corporate conferences, seminars, and wedding banquets.",
        image: "/images/site/LAUREL-1.webp",
        capacity: "150 - 200 Guests",
      },
      {
        name: "Eternity Banquet Hall",
        description: "Expansive celebration hall designed for grand weddings, anniversary parties, award nights, and gala receptions.",
        image: "/images/site/bizz-laurel-300x169.webp",
        capacity: "250 - 350 Guests",
      },
      {
        name: "Poolside Rooftop Party Area",
        description: "Situated on the 8th floor under the open sky with panoramic skyline views of Hinjawadi IT Park. Perfect for cocktail receptions and evening celebrations.",
        image: "/images/site/pool2.webp",
        capacity: "100 Guests",
      },
    ],
    amenities: [
      "46 Premium Rooms & 1 Suite",
      "Fine Dining Multi-Cuisine Restaurant",
      "Nirvana Lounge Bar",
      "Poolside Rooftop Party Venue",
      "Fully Equipped Fitness Gym",
      "Air-Conditioned Banquet Halls",
      "Travel Desk & Rent-A-Car",
      "In-House Laundry Services",
      "Elevator Access & Business Center",
      "Complimentary High-Speed Wi-Fi",
      "Private Vehicle Parking",
      "24-Hour Front Desk & Security",
    ],
    gallery: [
      "/images/site/Exterior.jpg",
      "/images/site/Executive-Room-scaled.jpg",
      "/images/site/Premier-Room-6-scaled.jpg",
      "/images/site/highland.webp",
      "/images/site/pool2.webp",
      "/images/site/Lobby2-scaled.jpg",
      "/images/site/LAUREL-1.webp",
    ],
  },

  "premier-tamanna-hotel-hinjawadi-pune": {
    slug: "premier-tamanna-hotel-hinjawadi-pune",
    name: "Premier Tamanna Hotel",
    heroVideoId: "tqUky4DlAxw",
    heroImage: "/images/site/Bizz-Tamanna-Reception-1-1024x601.jpg",
    tagline: "Striking Contemporary Elegance & Executive Comfort",
    shortDesc: "Welcome to Premier Tamanna Hotel in Hinjawadi Pune, a perfect blend of elegance, comfort, and functionality. Strategically located in the IT hub of Pune, this hotel caters to business travelers, families, and leisure seekers alike.",
    fullDesc: "Welcome to Premier Tamanna Hotel in Hinjawadi Pune, a perfect blend of elegance, comfort, and functionality. Strategically located in the IT hub of Pune, this hotel caters to business travelers, families, and leisure seekers alike. Featuring distinctive modern architecture and state-of-the-art conference facilities, Premier Tamanna ensures an exceptional stay.\n\nEnjoy lavish accommodations in our Premium and Suite Rooms, accompanied by high-speed business workstations, fine culinary options, executive board rooms on the 2nd floor, and flexible conference halls holding up to 100 persons.",
    address: "Hinjawadi Phase 1, Near Embassy TechZone, Hinjawadi, Pune 411057",
    phone: "020 66751900",
    reservationPhone: "020 66935000",
    email: "Premier@tamannahotels.com",
    rating: 4.9,
    rooms: [
      {
        name: "PREMIUM ROOM",
        size: "340 sq. ft.",
        description: "Refined aesthetic with plush bedding, large windows, work desk, high-speed Wi-Fi, and soundproofing for undisturbed rest.",
        image: "/images/site/Premier-Room-6-scaled.jpg",
        features: ["Premium Bedding", "Ergonomic Desk", "LED TV with Satellite Channels", "Complimentary Wi-Fi", "Tea/Coffee Maker"],
      },
      {
        name: "SUITE ROOM",
        size: "620 sq. ft.",
        description: "Elevated luxury suite with private lounge parlor, bath tub, and complimentary premium breakfast buffet.",
        image: "/images/site/Apartment-Room1-1-scaled.jpg",
        features: ["Living Area & Master Bed", "Bathtub Ensuite", "Express Check-in", "Daily Mineral Water", "Iron & Board"],
      },
    ],
    dining: [
      {
        name: "Premier Multi-Cuisine Dining",
        description: "Extensive breakfast spreads, business lunch buffets, and à la carte dinners crafted with fresh local ingredients.",
        image: "/images/site/highland.webp",
        capacity: "90 Guests",
        cuisine: "Continental, Pan-Asian, North & South Indian",
      },
    ],
    venues: [
      {
        name: "Board Room (2nd Floor)",
        description: "Executive boardroom with conference table, projector, video conferencing, and high-speed Wi-Fi.",
        image: "/images/site/LAUREL-1.webp",
        capacity: "15 - 20 Pax",
      },
      {
        name: "Conference Hall (100 Pax)",
        description: "Spacious corporate event hall with theater and cluster setup options for company seminars.",
        image: "/images/site/bizz-laurel-300x169.webp",
        capacity: "100 Pax",
      },
      {
        name: "Conference Hall (30 Pax)",
        description: "Mid-sized conference facility suited for team trainings, workshops, and business discussions.",
        image: "/images/site/LAUREL-1.webp",
        capacity: "30 Pax",
      },
    ],
    amenities: [
      "Designer Premium Rooms & Suites",
      "Executive Board Room on 2nd Floor",
      "100 Pax & 30 Pax Conference Halls",
      "Multi-Cuisine Restaurant",
      "Airport & Tech Park Transfers",
      "High-Speed Leased Line Wi-Fi",
      "Daily Housekeeping & Laundry",
      "Business Center & Print Station",
      "Doctor on Call",
      "24/7 Security & CCTV Surveillance",
    ],
    gallery: [
      "/images/site/Bizz-Tamanna-Reception-1-1024x601.jpg",
      "/images/site/Premier-Room-6-scaled.jpg",
      "/images/site/Apartment-Room1-1-scaled.jpg",
      "/images/site/highland.webp",
      "/images/site/Lobby2-scaled.jpg",
    ],
  },

  "bizz-tamanna-hotel-hinjawadi-pune": {
    slug: "bizz-tamanna-hotel-hinjawadi-pune",
    name: "Bizz Tamanna Hotel",
    heroVideoId: "mYhQOwZbsdo",
    heroImage: "/images/site/bizz-r.webp",
    tagline: "Tailored for the Corporate & Long-Stay Professional",
    shortDesc: "Welcome to Bizz Tamanna Hotel in Hinjawadi Pune, a contemporary hotel designed to meet the evolving needs of today’s corporate and long-stay guests. Located in the heart of Pune’s IT corridor.",
    fullDesc: "Welcome to Bizz Tamanna Hotel in Hinjawadi Pune, a contemporary hotel designed to meet the evolving needs of today’s corporate and long-stay guests. Located in the heart of Pune’s IT corridor, Bizz Tamanna offers executive rooms, apartment-style rooms with extended-stay conveniences, Highland Restaurant, and Laurel celebration hall.",
    address: "Hinjawadi Phase 1, Opposite IT Park, Hinjawadi, Pune 411057",
    phone: "020 66539888",
    reservationPhone: "020 66935000",
    email: "Info@tamannahotels.com",
    rating: 4.7,
    rooms: [
      {
        name: "EXECUTIVE ROOM",
        size: "300 sq. ft.",
        description: "Engineered for corporate efficiency with comfortable beds, dedicated workspace, and high-speed Wi-Fi.",
        image: "/images/site/Executive-Room-scaled.jpg",
        features: ["Work Desk", "Fast Wi-Fi", "Air Conditioning", "LCD TV", "In-Room Tea/Coffee"],
      },
      {
        name: "APARTMENT ROOM",
        size: "550 sq. ft.",
        description: "Ideal for long stays and project consultants, featuring living room space and microwave/kitchenette amenities.",
        image: "/images/site/Apartment-Room1-1-scaled.jpg",
        features: ["Kitchenette Area", "Living Room", "Extended Stay Discounts", "Daily Laundry", "Refrigerator"],
      },
    ],
    dining: [
      {
        name: "Highland Restaurant",
        description: "Popular multi-cuisine dining spot offering hearty breakfast buffets and corporate lunch combos.",
        image: "/images/site/highland.webp",
        capacity: "80 Guests",
        cuisine: "Multi-Cuisine Buffet & À La Carte",
      },
    ],
    venues: [
      {
        name: "Laurel Hall",
        description: "Versatile indoor hall suited for corporate gatherings, team seminars, and private celebrations.",
        image: "/images/site/LAUREL-1.webp",
        capacity: "120 Guests",
      },
    ],
    amenities: [
      "Executive & Apartment-Style Rooms",
      "Highland Restaurant & Bar",
      "Laurel Banquet & Meeting Hall",
      "High-Speed Leased Line Internet",
      "Express Check-in & Check-out",
      "24-Hour Room Service",
      "Free Private Parking",
      "Laundry & Dry Cleaning",
    ],
    gallery: [
      "/images/site/bizz-r.webp",
      "/images/site/Executive-Room-scaled.jpg",
      "/images/site/Apartment-Room1-1-scaled.jpg",
      "/images/site/highland.webp",
      "/images/site/LAUREL-1.webp",
    ],
  },

  "executive-tamanna-hotel-hinjawadi-pune": {
    slug: "executive-tamanna-hotel-hinjawadi-pune",
    name: "Executive Tamanna Hotel",
    heroVideoId: "XxSH9usBf4E",
    heroImage: "/images/site/Exterior.jpg",
    tagline: "Corporate Haven in Hinjawadi Phase 2",
    shortDesc: "Executive Tamanna Hotel offers specialized business accommodations in Hinjawadi Phase 2, with modern executive and luxury rooms, South Indian cafeteria, and Maple & Oak banquet halls.",
    fullDesc: "Executive Tamanna Hotel is tailored for business travelers and teams visiting Hinjawadi Phase 2 IT enterprises. Offering a comfortable ambiance, dedicated workstations, authentic South Indian Cafeteria, and two well-appointed halls (Maple and Oak) for meetings and social functions.",
    address: "Hinjawadi Phase 2, IT Corridor, Hinjawadi, Pune 411057",
    phone: "020 66935000",
    reservationPhone: "7507772159",
    email: "Info@tamannahotels.com",
    rating: 4.6,
    rooms: [
      {
        name: "EXECUTIVE ROOM",
        size: "300 sq. ft.",
        description: "Air-conditioned rooms with modern furnishings, plush bedding, and dedicated desk space for work.",
        image: "/images/site/Executive-Room-scaled.jpg",
        features: ["Workstation", "Free Wi-Fi", "LED TV", "Tea/Coffee Maker", "Hot Water 24/7"],
      },
      {
        name: "LUXURY ROOM",
        size: "420 sq. ft.",
        description: "Spacious corner room with added comfort, king bed, sitting lounge, and city view windows.",
        image: "/images/site/Premier-Room-6-scaled.jpg",
        features: ["King Bed", "Sitting Area", "Complimentary Breakfast", "Mini Fridge", "Electronic Safe"],
      },
    ],
    dining: [
      {
        name: "South Indian Cuisine Cafeteria",
        description: "Famous for crisp dosas, steaming idlis, authentic filter coffee, and daily business thalis.",
        image: "/images/site/highland.webp",
        capacity: "60 Guests",
        cuisine: "South Indian & Regional Specialties",
      },
    ],
    venues: [
      {
        name: "Maple Hall",
        description: "Fully air-conditioned corporate and social event space with modern audiovisual aids.",
        image: "/images/site/LAUREL-1.webp",
        capacity: "100 Guests",
      },
      {
        name: "Oak Hall",
        description: "Intimate meeting room for corporate presentations, board discussions, and workshops.",
        image: "/images/site/bizz-laurel-300x169.webp",
        capacity: "50 Guests",
      },
    ],
    amenities: [
      "Executive & Luxury Rooms",
      "Authentic South Indian Cafeteria",
      "Maple & Oak Banquet Venues",
      "Fast Free Wi-Fi",
      "Business Print & Copy Station",
      "Secure Parking Space",
      "Daily Housekeeping",
      "24/7 Front Desk",
    ],
    gallery: [
      "/images/site/Exterior.jpg",
      "/images/site/Executive-Room-scaled.jpg",
      "/images/site/Premier-Room-6-scaled.jpg",
      "/images/site/LAUREL-1.webp",
      "/images/site/Lobby2-scaled.jpg",
    ],
  },

  "shree-inn-by-tamanna-hotel-hinjawadi-pune": {
    slug: "shree-inn-by-tamanna-hotel-hinjawadi-pune",
    name: "Shree Inn by Tamanna Hotel",
    heroVideoId: "5wLmHWC0hZ8",
    heroImage: "/images/site/Reception-scaled.jpg",
    tagline: "Warm Boutique Hospitality & Essential Comfort",
    shortDesc: "Shree Inn by Tamanna Hotel in Hinjawadi Pune is a well-planned, value-based property catering to business travelers, short-stay guests, and individuals looking for essential comfort at an affordable price point.",
    fullDesc: "Shree Inn by Tamanna Hotel in Hinjawadi Pune is a well-planned, value-based property catering to business travelers, short-stay guests, and individuals looking for essential comfort at an affordable price point. Known for cleanliness, attentive service, and home-like atmosphere.",
    address: "Hinjawadi Main Road, Hinjawadi Phase 1, Pune 411057",
    phone: "020 66935000",
    reservationPhone: "020 66751900",
    email: "Info@tamannahotels.com",
    rating: 4.7,
    rooms: [
      {
        name: "EXECUTIVE ROOMS",
        size: "280 sq. ft.",
        description: "Cozy, hygienic rooms with comfortable beds, air conditioning, modern attached bathroom, and complimentary Wi-Fi.",
        image: "/images/site/Executive-Room-scaled.jpg",
        features: ["Clean Linens & King Bed", "Free Wi-Fi", "Air Conditioning", "Intercom", "24/7 Room Service"],
      },
    ],
    dining: [
      {
        name: "Shree Inn Dining",
        description: "Delicious pure vegetarian and multi-cuisine breakfast and meal options prepared fresh.",
        image: "/images/site/highland.webp",
        capacity: "45 Guests",
        cuisine: "Indian Home-Style Delicacies",
      },
    ],
    venues: [],
    amenities: [
      "Value-Driven Executive Rooms",
      "Free High-Speed Wi-Fi",
      "Daily Housekeeping",
      "24-Hour Front Desk Support",
      "Hot & Cold Running Water",
      "Room Service",
      "Dedicated Parking Area",
    ],
    gallery: [
      "/images/site/Reception-scaled.jpg",
      "/images/site/Executive-Room-scaled.jpg",
      "/images/site/Lobby2-scaled.jpg",
      "/images/site/Exterior.jpg",
    ],
  },

  "best-hotels-chikhali-pune": {
    slug: "best-hotels-chikhali-pune",
    name: "Imperial Tamanna Hotel",
    heroVideoId: "mYhQOwZbsdo",
    heroImage: "/images/site/Exterior.jpg",
    tagline: "Chikhali - Chinchwad Premier Destination for Stays & Celebrations",
    shortDesc: "Imperial Tamanna Hotel in Chikhali Pune delivers upscale rooms, Urban Platter Multi-Cuisine Restaurant & Bar, The Celebration Lounge, and The Royal Banquets.",
    fullDesc: "Imperial Tamanna Hotel is a prominent hospitality destination in Chikhali, Chinchwad, and Bhosari MIDC industrial belt. Designed for travelers seeking luxury accommodations and magnificent event venues for weddings, grand social gatherings, and corporate conventions.\n\nFeaturing Urban Platter Multi Cuisine Restaurant & Bar, Royal Banquets, Celebration Lounge, and luxurious Executive, Suite, and Deluxe rooms.",
    address: "Spine Road, Chikhali, Chinchwad, Pune 411062",
    phone: "020 66935000",
    reservationPhone: "7507772159",
    email: "Imperial@tamannahotels.com",
    rating: 4.8,
    rooms: [
      {
        name: "EXECUTIVE ROOM",
        size: "320 sq. ft.",
        description: "Smartly styled executive room with top-notch bedding, contemporary bathroom, and fast Wi-Fi.",
        image: "/images/site/Executive-Room-scaled.jpg",
        features: ["Work Desk", "Wi-Fi", "Satellite TV", "Mini Fridge", "Room Service"],
      },
      {
        name: "DELUXE ROOM",
        size: "380 sq. ft.",
        description: "Spacious deluxe room with premium interiors, comfortable couch, and panoramic urban view.",
        image: "/images/site/Premier-Room-6-scaled.jpg",
        features: ["King Bed", "City View", "Complimentary Breakfast", "Electronic Safe", "Coffee Maker"],
      },
      {
        name: "SUITE ROOM",
        size: "650 sq. ft.",
        description: "Grand suite room with separate living room, plush lounge furniture, and indulgent bathtub ensuite.",
        image: "/images/site/Apartment-Room1-1-scaled.jpg",
        features: ["Separate Living Lounge", "Bathtub Ensuite", "VIP Welcome Drink", "Turn-Down Service"],
      },
    ],
    dining: [
      {
        name: "Urban Platter Multi-Cuisine Restaurant & Bar",
        description: "Vibrant dining venue serving extensive Indian, Chinese, and Continental menus with an expansive bar list.",
        image: "/images/site/highland.webp",
        capacity: "120 Guests",
        cuisine: "Multi-Cuisine & Premium Bar",
      },
    ],
    venues: [
      {
        name: "The Royal Banquets",
        description: "Massive pillar-free banquet hall ideal for grand weddings, receptions, and large conferences.",
        image: "/images/site/bizz-laurel-300x169.webp",
        capacity: "400 - 500 Guests",
      },
      {
        name: "The Celebration Lounge",
        description: "Chic lounge venue for cocktail parties, birthday bashes, and corporate networking dinners.",
        image: "/images/site/LAUREL-1.webp",
        capacity: "100 Guests",
      },
    ],
    amenities: [
      "Executive, Deluxe & Suite Rooms",
      "Urban Platter Restaurant & Bar",
      "The Royal Banquets (500 Pax)",
      "The Celebration Lounge",
      "Ample Parking with Valet Option",
      "High-Speed Wi-Fi",
      "Elevator & Wheelchair Access",
      "24/7 Security & CCTV",
    ],
    gallery: [
      "/images/site/Exterior.jpg",
      "/images/site/Executive-Room-scaled.jpg",
      "/images/site/Premier-Room-6-scaled.jpg",
      "/images/site/Apartment-Room1-1-scaled.jpg",
      "/images/site/LAUREL-1.webp",
      "/images/site/highland.webp",
    ],
  },

  "top-cake-shop-hinjawadi-pune": {
    slug: "top-cake-shop-hinjawadi-pune",
    name: "Daily Baker",
    heroImage: "/images/daily_baker.jpg",
    tagline: "Freshly Baked Confections, Artisan Pastries & Customized Cakes",
    shortDesc: "Daily Baker by Tamanna Hotels is the premier bakery and cake shop in Hinjawadi Pune, known for artisanal pastries, celebratory cakes, fresh breads, and gourmet bakery snacks.",
    fullDesc: "Daily Baker by Tamanna Hotels has been serving the Hinjawadi community with oven-fresh delights for years. With counters across Phase 1 and Phase 2, we craft bespoke cakes for birthdays, weddings, anniversaries, corporate milestones, along with artisan cookies, brownies, croissants, and savories.\n\nEvery product is prepared daily with the finest ingredients and utmost hygienic standards.",
    address: "Daily Baker Counters: Hinjawadi Phase 1 & Phase 2, Pune",
    phone: "020 66935000",
    reservationPhone: "7507772159",
    email: "Info@tamannahotels.com",
    rating: 4.9,
    rooms: [],
    dining: [
      {
        name: "Daily Baker Counter Phase 1",
        description: "Oven-fresh artisan cakes, cupcakes, pastries, savories, and customized celebration cakes.",
        image: "/images/daily_baker.jpg",
        cuisine: "Cakes, Pastries, Bakery & Desserts",
      },
      {
        name: "Daily Baker Counter Phase 2",
        description: "Grab-and-go fresh snacks, patties, cookies, birthday cakes, and coffee.",
        image: "/images/daily_baker.jpg",
        cuisine: "Bakes, Snacks & Beverage",
      },
    ],
    venues: [],
    amenities: [
      "100% Fresh Daily Baking",
      "Egg & Eggless Cake Varieties",
      "Customized Themed & Wedding Cakes",
      "Online Delivery via Orders.tamannahotels.com",
      "Hygienic Baking Kitchen",
      "Corporate Bulk Orders",
    ],
    gallery: [
      "/images/daily_baker.jpg",
      "/images/site/Exterior.jpg",
      "/images/site/highland.webp",
    ],
  },
};

export const RESTAURANTS_DATA = [
  {
    name: "Around The World Multi-Cuisine Restaurant",
    hotel: "Grand Tamanna Hotel",
    slug: "hotels-hinjawadi-pune",
    description: "Step into a world of culinary variety where each meal tells a story of freshness and quality. Guests can savor North Indian specialties, South Indian classics, Oriental dishes, and Continental delicacies.",
    image: "/images/gallery_dining.jpg",
    timing: "7:00 AM - 11:30 PM",
    capacity: "110 Guests",
    highlights: ["Extensive Buffet & À La Carte", "Live Cooking Counters", "Family Friendly Seating", "Signature Cocktails"],
  },
  {
    name: "Nirvana Lounge Bar",
    hotel: "Grand Tamanna Hotel",
    slug: "hotels-hinjawadi-pune",
    description: "An upscale, contemporary lounge featuring ambient lighting, signature cocktails, single malts, and delectable finger foods.",
    image: "/images/site/pool2.webp",
    timing: "5:00 PM - 12:30 AM",
    capacity: "60 Guests",
    highlights: ["Artisanal Cocktails", "Lounge Music", "Private Booths", "Bar Snacks Menu"],
  },
  {
    name: "Highland Restaurant",
    hotel: "Bizz Tamanna Hotel",
    slug: "bizz-tamanna-hotel-hinjawadi-pune",
    description: "Corporate favorite serving hearty buffet breakfast, business lunch combos, and soothing dinner spreads.",
    image: "/images/site/highland.webp",
    timing: "7:30 AM - 11:00 PM",
    capacity: "80 Guests",
    highlights: ["Executive Buffets", "Fast Service", "Healthy Breakfast Options", "Private Dining Section"],
  },
  {
    name: "Talk About Multi-Cuisine Restaurant & Bar",
    hotel: "Tamanna Hotels",
    slug: "restaurant-in-pune",
    description: "Lively restaurant with vibrant ambiance, delicious curries, sizzlers, pizzas, and mocktails for group gatherings.",
    image: "/images/site/LAUREL-1.webp",
    timing: "11:00 AM - 11:30 PM",
    capacity: "90 Guests",
    highlights: ["Weekend Buffets", "Screening Events", "Craft Mocktails", "Tandoori Platters"],
  },
  {
    name: "South Indian Cuisine Cafeteria",
    hotel: "Executive Tamanna Hotel",
    slug: "executive-tamanna-hotel-hinjawadi-pune",
    description: "Traditional authentic South Indian breakfast and meals, filter coffee, crisp vadas, dosas, and daily specials.",
    image: "/images/site/highland.webp",
    timing: "7:00 AM - 10:00 PM",
    capacity: "60 Guests",
    highlights: ["Pure Vegetarian Options", "Filter Kaapi", "Quick Counter Service", "Pocket Friendly"],
  },
  {
    name: "Urban Platter Multi-Cuisine Restaurant",
    hotel: "Imperial Tamanna Hotel",
    slug: "best-hotels-chikhali-pune",
    description: "Spacious restaurant serving Indian, Chinese, and Continental menus with an expansive bar list in Chikhali Chinchwad.",
    image: "/images/site/highland.webp",
    timing: "11:30 AM - 11:30 PM",
    capacity: "120 Guests",
    highlights: ["Full Bar Service", "Family Dining Hall", "Corporate Luncheons", "Celebration Dining"],
  },
  {
    name: "Daily Baker",
    hotel: "Tamanna Hotels Hub",
    slug: "top-cake-shop-hinjawadi-pune",
    description: "Artisan confectionery producing daily fresh breads, birthday cakes, custom designer cakes, and French pastries.",
    image: "/images/daily_baker.jpg",
    timing: "9:00 AM - 10:30 PM",
    capacity: "Counter / Takeaway / Dine-in",
    highlights: ["Custom Birthday Cakes", "Eggless Options", "Oven Fresh Breads", "Online Ordering"],
  },
];

export const VENUES_DATA = [
  {
    name: "Bliss Banquet",
    hotel: "Grand Tamanna Hotel",
    slug: "hotels-hinjawadi-pune",
    capacity: "150 - 200 Guests",
    description: "Refined banquet venue ideal for weddings, engagement ceremonies, seminars, and product launches.",
    image: "/images/gallery_banquet.jpg",
    features: ["Fully Air-Conditioned", "A/V Equipment", "Custom Catering", "Decor Assistance"],
  },
  {
    name: "Eternity Banquet Hall",
    hotel: "Grand Tamanna Hotel",
    slug: "hotels-hinjawadi-pune",
    capacity: "250 - 350 Guests",
    description: "Grand ballroom with magnificent chandeliers and high ceilings, ideal for weddings and milestone receptions.",
    image: "/images/site/bizz-laurel-300x169.webp",
    features: ["Grand Chandelier Lighting", "Stage & Green Room", "Banquet Buffet Setup", "Valet Parking"],
  },
  {
    name: "Poolside Rooftop Party Area",
    hotel: "Grand Tamanna Hotel",
    slug: "hotels-hinjawadi-pune",
    capacity: "100 Guests",
    description: "Scenic 8th floor rooftop venue under the stars with cool evening breeze and panoramic Hinjawadi views.",
    image: "/images/site/pool2.webp",
    features: ["Open Sky Terrace", "Poolside Deck", "Barbecue & Bar Setup", "Sound System"],
  },
  {
    name: "Board Room (2nd Floor)",
    hotel: "Premier Tamanna Hotel",
    slug: "premier-tamanna-hotel-hinjawadi-pune",
    capacity: "15 - 20 Pax",
    description: "High-level corporate boardroom with presentation display and ergonomic executive swivel chairs.",
    image: "/images/site/LAUREL-1.webp",
    features: ["LED Projector & Screen", "High-Speed Wi-Fi", "Conference Phone", "Tea/Coffee Service"],
  },
  {
    name: "Conference Halls (100 Pax & 30 Pax)",
    hotel: "Premier Tamanna Hotel",
    slug: "premier-tamanna-hotel-hinjawadi-pune",
    capacity: "30 - 100 Pax",
    description: "Versatile corporate halls suitable for seminars, corporate training programs, and annual general meetings.",
    image: "/images/site/LAUREL-1.webp",
    features: ["Flexible Seating Layouts", "Wireless Microphones", "Podium", "Breakout Space"],
  },
  {
    name: "Laurel Hall",
    hotel: "Bizz Tamanna Hotel",
    slug: "bizz-tamanna-hotel-hinjawadi-pune",
    capacity: "120 Guests",
    description: "Contemporary hall customized for company town halls, birthday parties, and corporate dinner celebrations.",
    image: "/images/site/LAUREL-1.webp",
    features: ["Central AC", "Projector Setup", "Buffet Area", "Stage Setup"],
  },
  {
    name: "Maple & Oak Halls",
    hotel: "Executive Tamanna Hotel",
    slug: "executive-tamanna-hotel-hinjawadi-pune",
    capacity: "50 - 100 Guests",
    description: "Dual conference and banquet rooms in Phase 2 for tech enterprise workshops and social events.",
    image: "/images/site/bizz-laurel-300x169.webp",
    features: ["Phase 2 Location", "Soundproof Walls", "Custom Buffet Menus", "Wi-Fi"],
  },
  {
    name: "The Royal Banquets",
    hotel: "Imperial Tamanna Hotel",
    slug: "best-hotels-chikhali-pune",
    capacity: "400 - 500 Guests",
    description: "One of Pimpri-Chinchwad’s premier wedding halls with massive capacity, grand stage, and dedicated dining space.",
    image: "/images/site/bizz-laurel-300x169.webp",
    features: ["Pillarless Architecture", "500 Guest Capacity", "Bridal Suites", "Ample Car Parking"],
  },
  {
    name: "The Celebration Lounge",
    hotel: "Imperial Tamanna Hotel",
    slug: "best-hotels-chikhali-pune",
    capacity: "100 Guests",
    description: "Chic lounge setup for cocktail evenings, bachelorette events, and private dinner celebrations.",
    image: "/images/site/LAUREL-1.webp",
    features: ["Mood Lighting", "Bar Service", "Music System", "Finger Food Counters"],
  },
];

export const AWARDS_DATA = [
  {
    year: "2019",
    title: "India MICE Award 2019",
    subtitle: "Best Meetings Hotel (Western India)",
    description: "Conferred to Tamanna Hotels for exceptional standards in MICE tourism, conferences, and corporate hospitality in Western India.",
  },
  {
    year: "2017",
    title: "Winner of India's Top 100 SME in 2017",
    subtitle: "National SME Excellence",
    description: "Recognized among India's Top 100 Small and Medium Enterprises for sustainable growth, innovation, and outstanding guest satisfaction.",
  },
  {
    year: "2015",
    title: "Best Canteen Award 2015",
    subtitle: "Infosys Pune DC",
    description: "Awarded by Infosys Limited Pune Development Center for culinary quality, strict hygiene, and reliable cafeteria services.",
  },
  {
    year: "2012",
    title: "Leaders of Tomorrow Award 2012",
    subtitle: "ET NOW (Times Group)",
    description: "Featured on national television on English Business TV channel ET NOW as an inspiring leader in Indian hospitality.",
  },
  {
    year: "2010",
    title: "All India Business & Community Award",
    subtitle: "Tourism Excellence",
    description: "Honored for groundbreaking contributions to the tourism and hospitality infrastructure of Hinjawadi IT corridor.",
  },
  {
    year: "2010",
    title: "Appreciation Award",
    subtitle: "Federation of Hotels & Restaurants Associations of India (FHRAI)",
    description: "Official recognition from India's apex hospitality body for consistent service excellence and ethical hospitality practices.",
  },
];

export const OFFERS_DATA = [
  {
    title: "Special Online Booking Discount",
    hotel: "Executive Tamanna Hotel",
    image: "/images/site/Online-Discount-Coupon-Executive.jpg",
    description: "Get exclusive direct booking discounts on Executive Rooms and Suites when reserving via our official portal.",
    badge: "Direct Booking Offer",
  },
  {
    title: "Nirvana Lounge Party Package",
    hotel: "Grand Tamanna Hotel",
    image: "/images/site/Nirvana_banner_27_6_2024_page-0001.jpg",
    description: "Exciting party packages for corporate milestones, birthdays, and weekend celebrations with curated menus.",
    badge: "Party Special",
  },
  {
    title: "Corporate Extended Stay Package",
    hotel: "Tamanna Hotels Group",
    image: "/images/site/PHOTO-2024-05-07-18-58-48.jpg",
    description: "Special long-stay tariffs with complimentary laundry, daily buffet breakfast, and high-speed Wi-Fi.",
    badge: "Long Stay",
  },
  {
    title: "Weekend Getaway & Banquet Deal",
    hotel: "All Tamanna Properties",
    image: "/images/site/Tamanna_standy-5x3_29_aug_2025-1.png",
    description: "Special weekend staycation deals with complimentary food & beverage credits and flexible checkout.",
    badge: "Weekend Special",
  },
];

export const BLOGS_DATA = [
  {
    id: "b1",
    title: "Accommodation in Hinjawadi Pune: What Should You Look For?",
    category: "Hotel Guide",
    date: "October 2026",
    image: "/images/site/Executive-Room-scaled.jpg",
    excerpt: "Finding the right accommodation near Rajiv Gandhi Infotech Park requires checking high-speed internet, proximity to tech campuses, and quality dining.",
    content: "When choosing accommodation in Hinjawadi Pune, corporate travelers must prioritize strategic location near major tech parks like Infosys, Wipro, and Cognizant. High-speed leased-line internet, comfortable workstations, 24/7 dining, and seamless airport connectivity are critical. Tamanna Hotels provides the ideal blend across Phase 1, Phase 2, and nearby Chikhali.",
  },
  {
    id: "b2",
    title: "Hotels in Hinjawadi, Pune: A Practical Guide for Business & Leisure Travellers",
    category: "Travel Guide",
    date: "October 2026",
    image: "/images/site/Premier-Room-6-scaled.jpg",
    excerpt: "Comprehensive insights on choosing the best hotel in Hinjawadi whether you are attending multi-day conferences or holidaying with family.",
    content: "Hinjawadi is no longer just an IT park; it is a bustling urban zone with luxury stays, fine restaurants, and lively nightlife. Grand Tamanna and Premier Tamanna lead the market with state-of-the-art conference halls, swimming pool decks, and award-winning dining.",
  },
  {
    id: "b3",
    title: "What to Look for When Booking a Hotel Near Hinjawadi IT Park",
    category: "Tips & Advice",
    date: "September 2026",
    image: "/images/site/Exterior.jpg",
    excerpt: "Key factors to consider including in-room workspaces, commute times during peak traffic, and flexible checkout policies.",
    content: "Traffic in Hinjawadi during peak commute hours can be taxing. Staying directly inside Phase 1 or Phase 2 ensures you can walk or take a 2-minute drive to your office. Tamanna Hotels offers properties at prime intersections across the park.",
  },
  {
    id: "b4",
    title: "Best Bars with Dance Floor & Lounge in Hinjawadi Pune",
    category: "Nightlife & Dining",
    date: "September 2026",
    image: "/images/site/pool2.webp",
    excerpt: "Discover the top weekend nightlife hotspots, rooftop cocktail bars, and DJ lounges in Hinjawadi.",
    content: "Nirvana Lounge Bar at Grand Tamanna offers an electrifying combination of artisanal cocktails, open terrace pool breeze, and ambient dance music, making it the preferred weekend spot for Hinjawadi professionals.",
  },
  {
    id: "b5",
    title: "Best Corporate Meeting Halls in Hinjewadi Pune for Conferences & Events",
    category: "Corporate Events",
    date: "August 2026",
    image: "/images/site/LAUREL-1.webp",
    excerpt: "Explore meeting rooms and boardrooms equipped with modern audio-visual technology for 10 to 500 guests.",
    content: "With over 10 versatile banquet and conference halls across Grand Tamanna, Premier Tamanna, Bizz Tamanna, and Imperial Tamanna, our team specializes in organizing flawless corporate AGM, team offsites, and seminars.",
  },
  {
    id: "b6",
    title: "Best Wedding Venues & AC Banquet Halls in Hinjawadi Pune",
    category: "Weddings",
    date: "August 2026",
    image: "/images/site/bizz-laurel-300x169.webp",
    excerpt: "Planning your dream wedding in Pune? Eternity Banquet and The Royal Banquets provide opulent pillarless event spaces.",
    content: "From exquisite floral decorations and royal catering to comfortable room blocks for outstation guests, Tamanna Hotels brings two decades of event expertise to make your wedding day unforgettable.",
  },
  {
    id: "b7",
    title: "Top Multi-Cuisine Restaurants in Hinjawadi, Pune",
    category: "Food & Dining",
    date: "July 2026",
    image: "/images/site/highland.webp",
    excerpt: "A culinary tour of Around The World restaurant, Highland, and authentic South Indian delicacies.",
    content: "Dining in Hinjawadi is defined by variety. Whether you are craving North Indian butter chicken, fresh seafood, Chinese sizzlers, or hot dosas, Tamanna Hotels' dining venues deliver exceptional quality and hygiene.",
  },
  {
    id: "b8",
    title: "Imperial Tamanna Hotel Chikhali Chinchwad: The Industrial Hub Landmark",
    category: "Hotel Spotlight",
    date: "July 2026",
    image: "/images/site/Exterior.jpg",
    excerpt: "Connecting Bhosari MIDC, Chikhali, and Chinchwad with luxury stays and mega wedding halls.",
    content: "Imperial Tamanna is strategically positioned on Spine Road, providing seamless access to Pune-Mumbai Expressway and prime industrial plants. Featuring Urban Platter Restaurant and The Royal Banquets.",
  },
];

