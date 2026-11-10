import { MenuCategory, ONLINE_ORDER_MENU } from "./restaurantMenuData";
import { GRAND_ONLINE_ORDER_MENU } from "./grandRestaurantMenuData";

export interface RestaurantDetail {
  slug: string;
  hotelName: string;
  navbarLogo: string;
  banner: {
    bgImage: string;
    tag: string;
    titleLight: string;
    titleBold: string;
    description: string;
    capacity: string;
    cuisine: string;
  };
  restaurantInfo: {
    location: string;
    capacity: string;
    cuisineType: string;
    service: string;
    hours: string;
    hoursLabel?: string;
  };
  whyChoose: {
    items: Array<{
      iconType: "utensils" | "wine" | "users" | "clock" | "mapPin" | "star";
      title: string;
      desc: string;
    }>;
  };
  findUs: {
    mapIframe: string;
    bookingTitle: string;
    restaurantName: string;
    email: string;
    phone: string;
  };
  gallery: {
    titleLight: string;
    titleBold: string;
    images: Array<{
      src: string;
      alt: string;
    }>;
  };
  footer: {
    logoSrc: string;
    activeLink: string;
    phone: string;
    email: string;
    tagline?: string;
    roomBookingPhone?: string;
    banquetBookingPhone?: string;
  };
  menu?: {
    titleLight: string;
    titleBold: string;
    categories: MenuCategory[];
  };
}

export const RESTAURANT_DETAILS: Record<string, RestaurantDetail> = {
  // 1. Premier Tamanna Hotel Restaurant (from user screenshot)
  "best-multi-cuisine-restaurant-hinjawadi-pune": {
    slug: "best-multi-cuisine-restaurant-hinjawadi-pune",
    hotelName: "Premier Tamanna Hotel",
    navbarLogo: "/images/site/2-6-1.png",
    banner: {
      bgImage: "/images/site/Restaurant4-1-scaled.jpg",
      tag: "Premier Tamanna Hotel",
      titleLight: "ELEVATED DINING ",
      titleBold: "EXPERIENCE",
      description:
        "Premier Destination For Culinary Excellence. Ideal For Birthday Parties, Get-Togethers With Complete Music System For Your Celebrations.",
      capacity: "Capacity: 100 Persons",
      cuisine: "Multi Cuisine Restaurant & Bar",
    },
    restaurantInfo: {
      location: "Premier Tamanna Hotel",
      capacity: "100 Persons",
      cuisineType: "Multi Cuisine",
      service: "Restaurant & Bar",
      hours: "12noon – 11:30pm",
    },
    whyChoose: {
      items: [
        {
          iconType: "utensils",
          title: "MULTI CUISINE EXCELLENCE",
          desc: "Savor Authentic Flavors From Around The World, Crafted By Our Expert Chefs",
        },
        {
          iconType: "wine",
          title: "PREMIUM BAR",
          desc: "Extensive Collection Of Wines, Spirits, And Signature Cocktails",
        },
        {
          iconType: "users",
          title: "LARGE CAPACITY",
          desc: "Accommodate Up To 100 Guests For Any Special Occasion",
        },
        {
          iconType: "clock",
          title: "ALL DAY DINING",
          desc: "Open Daily From 12noon – 11:30pm For Your Convenience",
        },
        {
          iconType: "mapPin",
          title: "PRIME LOCATION",
          desc: "Located In The Prestigious Premier Tamanna Hotel",
        },
        {
          iconType: "star",
          title: "PREMIUM SERVICE",
          desc: "Exceptional Hospitality And Fine Dining Experience",
        },
      ],
    },
    findUs: {
      mapIframe:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3781.654347209172!2d73.73179267595556!3d18.59074098251649!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bb45beff4543%3A0x6b77ddf404a55850!2sPremier%20Tamanna%20Hotel!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
      bookingTitle: "BOOKING",
      restaurantName: "MULTI CUISINE RESTAURANT",
      email: "Premier@tamannahotels.com",
      phone: "020 66535400 / 7507772182",
    },
    gallery: {
      titleLight: "OUR ",
      titleBold: "GALLERY",
      images: [
        {
          src: "/images/site/Premier-Restaurant1.webp",
          alt: "Best Multi-Cuisine Restaurant in Hinjawadi Pune",
        },
        {
          src: "/images/site/Premier-restaurant2.webp",
          alt: "Best Multi-Cuisine Restaurant near Hinjawadi Pune",
        },
        {
          src: "/images/site/Premier-restaurant3.webp",
          alt: "Hinjawadi Multi-Cuisine Dining",
        },
        {
          src: "/images/site/Premier-restaurant5.webp",
          alt: "Top Multi-Cuisine Restaurant Pune",
        },
        {
          src: "/images/site/Premier-restaurant6.webp",
          alt: "Hinjawadi Pune Fine Dining",
        },
        {
          src: "/images/site/Premier-restaurant7.webp",
          alt: "Best Multi-Cuisine Food Hinjawadi",
        },
        {
          src: "/images/site/Breakfast-Buffet-scaled.jpg",
          alt: "Popular Restaurants in Hinjawadi Phase 2",
        },
      ],
    },
    footer: {
      logoSrc: "/images/site/2-6-1.png",
      activeLink: "Premier Tamanna",
      phone: "020 66535400 / 7507772182",
      email: "Premier@tamannahotels.com",
    },
  },

  // 2. Executive Tamanna Hotel Restaurant (from user screenshot)
  "top-multi-cuisine-restaurant-bar-hinjawadi-pune": {
    slug: "top-multi-cuisine-restaurant-bar-hinjawadi-pune",
    hotelName: "Executive Tamanna Hotel",
    navbarLogo: "/images/site/4-3-2.png",
    banner: {
      bgImage: "/images/site/MultiCuisine-Restaurant-3-scaled.jpg",
      tag: "Executive Tamanna Hotel",
      titleLight: "MULTI CUISINE ",
      titleBold: "RESTAURANT",
      description:
        "Celebrate In Style At Executive Tamanna Hotel Perfect For Birthdays And Get-Togethers, With Great Food, Warm Hospitality, And A Full Music System For Unforgettable Moments. Luxury Dining Experience With Perfect Taste.",
      capacity: "Capacity: 110 Persons",
      cuisine: "Multi Cuisine Restaurant & Bar",
    },
    restaurantInfo: {
      location: "Executive Tamanna Hotel",
      capacity: "110 Persons",
      cuisineType: "Multi Cuisine",
      service: "Restaurant & Bar",
      hours: "12noon – 11:30pm",
    },
    whyChoose: {
      items: [
        {
          iconType: "utensils",
          title: "MULTI CUISINE EXCELLENCE",
          desc: "Savor Authentic Flavors From Around The World, Crafted By Our Expert Chefs",
        },
        {
          iconType: "wine",
          title: "PREMIUM BAR",
          desc: "Extensive Collection Of Wines, Spirits, And Signature Cocktails",
        },
        {
          iconType: "users",
          title: "LARGE CAPACITY & OUTDOOR SEATING",
          desc: "Accommodate Up To 110 Guests With Both Indoor And Open-Air Seating Options For Special Occasions.",
        },
        {
          iconType: "clock",
          title: "ALL DAY DINING",
          desc: "Open Daily From 12noon – 11:30pm For Your Convenience",
        },
        {
          iconType: "mapPin",
          title: "PRIME LOCATION",
          desc: "Located In The Prestigious Executive Tamanna Hotel",
        },
        {
          iconType: "star",
          title: "PREMIUM SERVICE",
          desc: "Exceptional Hospitality And Fine Dining Experience",
        },
      ],
    },
    findUs: {
      mapIframe:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3781.6521360124843!2d73.73021197595556!3d18.590840982516413!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bb45beff4543%3A0x861ca3950ef4ad45!2sExecutive%20Tamanna%20Hotel!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
      bookingTitle: "BOOKING",
      restaurantName: "MULTI CUISINE RESTAURANT & BAR",
      email: "info@tamannahotels.com",
      phone: "020 66755500 / 7507039775",
    },
    gallery: {
      titleLight: "OUR ",
      titleBold: "GALLERY",
      images: [
        {
          src: "/images/site/Executive-Restaurant-Outdoor-web.jpg",
          alt: "Executive Tamanna Multi Cuisine Restaurant Outdoor Seating",
        },
        {
          src: "/images/site/Executive-Restaurant-Indoor.jpg",
          alt: "Executive Tamanna Multi Cuisine Restaurant Dining Hall",
        },
      ],
    },
    footer: {
      logoSrc: "/images/site/4-3-2.png",
      activeLink: "Executive Tamanna",
      phone: "02066755500 / 7507039775",
      email: "info@tamannahotels.com",
    },
    menu: {
      titleLight: "OUR MENU FOR ",
      titleBold: "ONLINE ORDER",
      categories: ONLINE_ORDER_MENU,
    },
  },

  // 3. Bizz Tamanna Hotel Restaurant (from earlier screenshot)
  "best-restaurants-hinjawadi-pune": {
    slug: "best-restaurants-hinjawadi-pune",
    hotelName: "Bizz Tamanna Hotel",
    navbarLogo: "/images/site/9-2-1.png",
    banner: {
      bgImage: "/images/site/bizz-r.webp",
      tag: "Bizz Tamanna Hotel",
      titleLight: "TALK ABOUT ",
      titleBold: "MULTI CUISINE",
      description:
        "Bizz Tamanna Restaurant Delights Guests With Authentic Flavors, Warm Hospitality, Elegant Ambiance, And Unforgettable Dining Experiences Crafted With Passion.",
      capacity: "Capacity: 100 Persons",
      cuisine: "Multi Cuisine Restaurant & Bar",
    },
    restaurantInfo: {
      location: "Bizz Tamanna Hotel",
      capacity: "100 Persons",
      cuisineType: "Multi Cuisine",
      service: "Restaurant & Bar",
      hours: "12noon – 11:30pm",
    },
    whyChoose: {
      items: [
        {
          iconType: "utensils",
          title: "MULTI CUISINE EXCELLENCE",
          desc: "Savor Authentic Flavors From Around The World, Crafted By Our Expert Chefs",
        },
        {
          iconType: "wine",
          title: "PREMIUM BAR",
          desc: "Extensive Collection Of Wines, Spirits, And Signature Cocktails",
        },
        {
          iconType: "users",
          title: "LARGE CAPACITY",
          desc: "Accommodate Up To 100 Guests For Any Special Occasion",
        },
        {
          iconType: "clock",
          title: "ALL DAY DINING",
          desc: "Open Daily From 12noon – 11:30pm For Your Convenience",
        },
        {
          iconType: "mapPin",
          title: "PRIME LOCATION",
          desc: "Located In The Prestigious Bizz Tamanna Hotel",
        },
        {
          iconType: "star",
          title: "PREMIUM SERVICE",
          desc: "Exceptional Hospitality And Fine Dining Experience",
        },
      ],
    },
    findUs: {
      mapIframe:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3781.564757577533!2d73.73021197595562!3d18.593652982513904!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bbbe01524e9f%3A0xa5e1e127394c8e76!2sBizz%20Tamanna%20Hotel!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
      bookingTitle: "BOOKING",
      restaurantName: "TALK ABOUT MULTI CUISINE RESTAURANTS AND BAR",
      email: "info@tamannahotels.com",
      phone: "020 66539888 / 7507039775",
    },
    gallery: {
      titleLight: "OUR ",
      titleBold: "GALLERY",
      images: [
        {
          src: "/images/site/bizz-r.webp",
          alt: "Bizz Tamanna Restaurant Dining Hall",
        },
        {
          src: "/images/site/Restaurant2.jpg",
          alt: "Talk About Multi Cuisine Restaurant Seating",
        },
        {
          src: "/images/site/Restaurant-1st-Floor1-1-scaled.jpg",
          alt: "Bizz Tamanna Restaurant Tables & Ambiance",
        },
        {
          src: "/images/site/Restauranr1.jpg",
          alt: "Talk About Multi Cuisine Modern Lighting & Interior",
        },
        {
          src: "/images/site/Restaurant1.jpg",
          alt: "Bizz Tamanna Multi Cuisine Bar & Dining",
        },
        {
          src: "/images/site/MultiCuisine-Restaurant-3-scaled.jpg",
          alt: "Bizz Tamanna Fine Dining Experience",
        },
      ],
    },
    footer: {
      logoSrc: "/images/site/9-2-1.png",
      activeLink: "Bizz Tamanna",
      phone: "02066539888 / 7058688563",
      email: "info@tamannahotels.com",
    },
  },

  // 4. Grand Tamanna Hotel Restaurant (Around The World)
  "best-restaurants-bars-hinjawadi-pune": {
    slug: "best-restaurants-bars-hinjawadi-pune",
    hotelName: "Grand Tamanna Hotel",
    navbarLogo: "/images/site/10-2.png",
    banner: {
      bgImage: "/images/site/Restaurant1-scaled.jpg",
      tag: "Grand Tamanna Hotel",
      titleLight: "AROUND THE ",
      titleBold: "WORLD",
      description:
        "Experience Culinary Excellence From Every Corner Of The Globe In Our Sophisticated Multi-Cuisine Restaurant & Bar.",
      capacity: "Capacity: 100 Persons",
      cuisine: "Multi Cuisine Restaurant & Bar",
    },
    restaurantInfo: {
      location: "Grand Tamanna Hotel",
      capacity: "110 Persons",
      cuisineType: "Multi Cuisine",
      service: "Restaurant & Bar",
      hours: "12noon – 11:30pm",
    },
    whyChoose: {
      items: [
        {
          iconType: "utensils",
          title: "MULTI CUISINE EXCELLENCE",
          desc: "Savor Authentic Flavors From Around The World, Crafted By Our Expert Chefs",
        },
        {
          iconType: "wine",
          title: "PREMIUM BAR",
          desc: "Extensive Collection Of Wines, Spirits, And Signature Cocktails",
        },
        {
          iconType: "users",
          title: "LARGE CAPACITY",
          desc: "Accommodate Up To 110 Guests For Any Special Occasion",
        },
        {
          iconType: "clock",
          title: "ALL DAY DINING",
          desc: "Open Daily From 12noon – 11:30pm For Your Convenience",
        },
        {
          iconType: "mapPin",
          title: "PRIME LOCATION",
          desc: "Located In The Prestigious Grand Tamanna Hotel",
        },
        {
          iconType: "star",
          title: "PREMIUM SERVICE",
          desc: "Exceptional Hospitality And Fine Dining Experience",
        },
      ],
    },
    findUs: {
      mapIframe:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3781.4589252327426!2d73.71761667595576!3d18.598440982510255!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bbaf689d0b67%3A0x6b4f7ceec1cb4fa3!2sGrand%20Tamanna%20Hotel!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
      bookingTitle: "BOOKING",
      restaurantName: "AROUND THE WORLD MULTI CUISINE RESTAURANT",
      email: "Grand@tamannahotels.com",
      phone: "020 66935000 / 7507772159",
    },
    gallery: {
      titleLight: "OUR ",
      titleBold: "GALLERY",
      images: [
        {
          src: "/images/site/grand-restaurant1-scaled.avif",
          alt: "Around The World Multi Cuisine Dining Hall",
        },
        {
          src: "/images/site/grand-restaurant2-scaled.avif",
          alt: "Around The World Long Table Family Dining",
        },
        {
          src: "/images/site/grand-restaurant3-300x200.avif",
          alt: "Around The World Buffet Counter & Decor",
        },
        {
          src: "/images/site/grand-restaurant4-scaled.avif",
          alt: "Grand Tamanna Spacious Restaurant Interior",
        },
        {
          src: "/images/site/grand-restaurant5-scaled.avif",
          alt: "Multi Cuisine Appetizers and Drinks",
        },
        {
          src: "/images/site/grand-restaurant6.avif",
          alt: "Gourmet Dish at Around The World",
        },
        {
          src: "/images/site/grand-restaurant7.avif",
          alt: "Tandoori Specialties Hinjawadi",
        },
        {
          src: "/images/site/grand-restaurant8-scaled.avif",
          alt: "Private Dining Area at Grand Tamanna",
        },
        {
          src: "/images/site/grand-restaurant9.avif",
          alt: "Around The World Elegant Seating",
        },
        {
          src: "/images/site/Restaurant1-scaled.jpg",
          alt: "Around The World Reception Counter",
        },
        {
          src: "/images/site/Reception-Lobby-scaled.jpg",
          alt: "Grand Tamanna Chandelier Lobby",
        },
        {
          src: "/images/site/Private-Dining-scaled.jpg",
          alt: "Private VIP Dining Suite Grand Tamanna",
        },
      ],
    },
    footer: {
      logoSrc: "/images/site/10-2.png",
      activeLink: "Grand Tamanna",
      phone: "02066935000 / 7058688561",
      email: "Grand@tamannahotels.com",
    },
    menu: {
      titleLight: "OUR MENU FOR ",
      titleBold: "ONLINE ORDER",
      categories: GRAND_ONLINE_ORDER_MENU,
    },
  },

  // 5. Imperial Tamanna Hotel Restaurant (Urban Platter)
  "multi-cuisine-restaurant-chinchwad-pune": {
    slug: "multi-cuisine-restaurant-chinchwad-pune",
    hotelName: "Imperial Tamanna Hotel",
    navbarLogo: "/images/site/64.png",
    banner: {
      bgImage: "/images/site/ITH-025.webp",
      tag: "Imperial Tamanna Hotel",
      titleLight: "URBAN ",
      titleBold: "PLATTER",
      description:
        "Experience Culinary Excellence From Every Corner Of The Globe In Our Sophisticated Multi-Cuisine Restaurant & Bar.",
      capacity: "Capacity: 80 Persons",
      cuisine: "Multi Cuisine Restaurant & Bar",
    },
    restaurantInfo: {
      location: "Imperial Tamanna Hotel",
      capacity: "80 Persons",
      cuisineType: "Multi Cuisine",
      service: "Restaurant & Bar",
      hours: "12noon – 11:30pm",
    },
    whyChoose: {
      items: [
        {
          iconType: "utensils",
          title: "MULTI CUISINE EXCELLENCE",
          desc: "Savor Authentic Flavors From Around The World, Crafted By Our Expert Chefs",
        },
        {
          iconType: "wine",
          title: "PREMIUM BAR",
          desc: "Extensive Collection Of Wines, Spirits, And Signature Cocktails",
        },
        {
          iconType: "users",
          title: "LARGE CAPACITY",
          desc: "Accommodate Up To 80 Guests For Any Special Occasion",
        },
        {
          iconType: "clock",
          title: "ALL DAY DINING",
          desc: "Open Daily From 12noon – 11:30pm For Your Convenience",
        },
        {
          iconType: "mapPin",
          title: "PRIME LOCATION",
          desc: "Located In The Prestigious Imperial Tamanna Hotel",
        },
        {
          iconType: "star",
          title: "PREMIUM SERVICE",
          desc: "Exceptional Hospitality And Fine Dining Experience",
        },
      ],
    },
    findUs: {
      mapIframe:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3779.882914101458!2d73.80556277595738!3d18.67067088245591!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b8004f2f4e0f%3A0xe543e26cf85ca709!2sImperial%20Tamanna%20Hotel!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
      bookingTitle: "BOOKING",
      restaurantName: "URBAN PLATTER MULTI CUISINE RESTAURANT & BAR",
      email: "Imperial@tamannahotels.com",
      phone: "70288 84317 / 70288 84371",
    },
    gallery: {
      titleLight: "OUR ",
      titleBold: "GALLERY",
      images: [
        {
          src: "/images/site/ITH-088.webp",
          alt: "Urban Platter Restaurant Hallway & Entrance",
        },
        {
          src: "/images/site/ITH-030.webp",
          alt: "Urban Platter Restaurant Dining Hall",
        },
        {
          src: "/images/site/ITH-031.webp",
          alt: "Urban Platter Elegant Glass Entrance",
        },
        {
          src: "/images/site/ITH-026.webp",
          alt: "Urban Platter Window Seating Area",
        },
        {
          src: "/images/site/ITH-025.webp",
          alt: "Urban Platter Spacious Restaurant Hall",
        },
        {
          src: "/images/site/ITH-028.webp",
          alt: "Urban Platter Wall Art Dining Tables",
        },
        {
          src: "/images/site/ITH-035.webp",
          alt: "Urban Platter Table Setup with Place Mats",
        },
        {
          src: "/images/site/ITH-029.webp",
          alt: "Urban Platter Buffet Counters & Lighting",
        },
        {
          src: "/images/site/ITH-032.webp",
          alt: "Urban Platter Restaurant and Bar Chinchwad",
        },
      ],
    },
    footer: {
      logoSrc: "/images/site/64.png",
      activeLink: "Imperial Tamanna",
      phone: "70288 84375",
      email: "Imperial@tamannahotels.com",
      tagline:
        "Urban Platter Is A Stylish Multi-Cuisine Restaurant And Bar With A Seating Capacity Of 80 Guests,",
      roomBookingPhone: "70288 84375",
      banquetBookingPhone: "70288 84317 / 70288 84371",
    },
    menu: {
      titleLight: "OUR MENU FOR ",
      titleBold: "ONLINE ORDER",
      categories: GRAND_ONLINE_ORDER_MENU,
    },
  },

  // 6. South Indian Cuisine Cafeteria - Executive Tamanna Hotel
  "top-restaurant-hinjawadi-pune": {
    slug: "top-restaurant-hinjawadi-pune",
    hotelName: "Executive Tamanna Hotel",
    navbarLogo: "/images/site/4-3-2.png",
    banner: {
      bgImage: "/images/site/blur-coffee-shop-interior-scaled.jpg",
      tag: "Executive Tamanna Hotel",
      titleLight: "SOUTH INDIAN ",
      titleBold: "CUISINE CAFETERIA",
      description:
        "The Cafeteria At Executive Tamanna Hotel Offers A Cozy Setting With A Range Of Indian And Continental Snacks, Perfect For Quick Bites Or Casual Meetings.",
      capacity: "Capacity: 110 Persons",
      cuisine: "South Indian Snacks & Cafe",
    },
    restaurantInfo: {
      location: "Executive Tamanna Hotel",
      capacity: "110 Persons",
      cuisineType: "South Indian Snacks & Cafe",
      service: "Cafeteria",
      hours: "7.30AM To 10.30AM",
      hoursLabel: "Buffet Breakfast",
    },
    whyChoose: {
      items: [
        {
          iconType: "star",
          title: "PREMIUM CUISINE",
          desc: "South Indian Snacks & Cafe",
        },
        {
          iconType: "mapPin",
          title: "PRIME LOCATION",
          desc: "Located In The Prestigious Executive Tamanna Hotel",
        },
        {
          iconType: "users",
          title: "LARGE CAPACITY",
          desc: "Capacity Upto 110 Persons",
        },
      ],
    },
    findUs: {
      mapIframe:
        "https://maps.google.com/maps?hl=en&ie=UTF8&ll=18.5857239,73.732367&spn=18.5857239,73.732367&q=Executive%20Tamanna%20Hotel&t=m&z=17&output=embed&iwloc",
      bookingTitle: "BOOKING",
      restaurantName: "SOUTH INDIAN CUISINE CAFETERIA",
      email: "info@tamannahotels.com",
      phone: "020 66751900 / 7507772159",
    },
    gallery: {
      titleLight: "OUR ",
      titleBold: "GALLERY",
      images: [
        {
          src: "/images/site/56.jpg",
          alt: "Executive cafeteria in Hinjawadi Pune",
        },
        {
          src: "/images/site/cafe1.webp",
          alt: "Top Restaurant in Hinjawadi Pune",
        },
        {
          src: "/images/site/cafe2.webp",
          alt: "Top Restaurant near Hinjawadi Pune",
        },
        {
          src: "/images/site/Cateteria-scaled.jpg",
          alt: "Executive Tamanna Cafeteria Seating",
        },
      ],
    },
    footer: {
      logoSrc: "/images/site/4-3-2.png",
      activeLink: "Executive Tamanna",
      phone: "02066751900 / 9156828482",
      email: "info@tamannahotels.com",
      roomBookingPhone: "02066935000/ 02066539888/ 02066751900",
      banquetBookingPhone: "7507772159/ 02066935000/ 02069525400",
    },
  },
};
