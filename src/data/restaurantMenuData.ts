export interface MenuItem {
  name: string;
  price: string;
  desc?: string;
  addUrl?: string;
}

export interface MenuCategory {
  category: string;
  items: MenuItem[];
}

export const ONLINE_ORDER_MENU: MenuCategory[] = [
  {
    "category": "(Special Menu)",
    "items": [
      {
        "name": "CHOCOLATE LAVA CAKE",
        "price": "150",
        "desc": "",
        "addUrl": "https://orders.tamannahotels.com/"
      },
      {
        "name": "TAMANNA SPECIAL PAV BHAJI",
        "price": "150",
        "desc": "",
        "addUrl": "https://orders.tamannahotels.com/"
      },
      {
        "name": "TANDOORI CHICKEN DRUM STICK",
        "price": "400",
        "desc": "",
        "addUrl": "https://orders.tamannahotels.com/"
      },
      {
        "name": "PANEER NAWABI TIKKA",
        "price": "370",
        "desc": "",
        "addUrl": "https://orders.tamannahotels.com/"
      }
    ]
  },
  {
    "category": "(Soups - Veg)",
    "items": [
      {
        "name": "TOMATO DHANYA SHORBA",
        "price": "150",
        "desc": "Traditional home style tomato soup",
        "addUrl": "https://orders.tamannahotels.com/"
      },
      {
        "name": "DAL PUDINA SHORBA",
        "price": "150",
        "desc": "Traditional home style lentil and mint soup",
        "addUrl": "https://orders.tamannahotels.com/"
      },
      {
        "name": "BABYCORN MUSHROOM SOUP",
        "price": "150",
        "desc": "A spicy and tangy soup with babycorn and mushroom",
        "addUrl": "https://orders.tamannahotels.com/"
      },
      {
        "name": "VEGETABLE MANCHOW SOUP",
        "price": "150",
        "desc": "A spicy and tangy soup with vegetables",
        "addUrl": "https://orders.tamannahotels.com/"
      },
      {
        "name": "VEGETABLE HOT AND SOUR SOUP",
        "price": "150",
        "desc": "Mix vegetable flavored with soya sauce and vinegar",
        "addUrl": "https://orders.tamannahotels.com/"
      },
      {
        "name": "SWEET CORN SOUP",
        "price": "150",
        "desc": "A popular oriental sweet soup prepared with corn",
        "addUrl": "https://orders.tamannahotels.com/"
      },
      {
        "name": "ALMOND SOUP",
        "price": "180",
        "desc": "Rich creamy flavoured soup topped with almond",
        "addUrl": "https://orders.tamannahotels.com/"
      },
      {
        "name": "VEG PEPPER LEMON SOUP",
        "price": "150",
        "desc": "Delicately aromatized vegetable lemon soup",
        "addUrl": "https://orders.tamannahotels.com/"
      },
      {
        "name": "CREAM OF TOMATO SOUP",
        "price": "150",
        "desc": "Rich creamy flavored soup",
        "addUrl": "https://orders.tamannahotels.com/"
      },
      {
        "name": "CREAM OF SPINACH SOUP",
        "price": "150",
        "desc": "Rich creamy flavored soup",
        "addUrl": "https://orders.tamannahotels.com/"
      },
      {
        "name": "CREAM OF MUSHROOM SOUP",
        "price": "150",
        "desc": "Rich creamy flavored soup",
        "addUrl": "https://orders.tamannahotels.com/"
      },
      {
        "name": "VEG MINESTRONE SOUP",
        "price": "150",
        "desc": "Mix vegetables in aromatized liquid garnished with pasta and grated cheese",
        "addUrl": "https://orders.tamannahotels.com/"
      },
      {
        "name": "TALUMEIN SOUP",
        "price": "170",
        "desc": "Mushroom, star vegetables and noodles",
        "addUrl": "https://orders.tamannahotels.com/"
      }
    ]
  },
  {
    "category": "(Soups - Non Veg)",
    "items": [
      {
        "name": "CHICKEN GOLI SHORBA",
        "price": "160",
        "desc": "Traditional home style chicken soup",
        "addUrl": "https://orders.tamannahotels.com/"
      },
      {
        "name": "MUTTON JAHANGIRI SHORBA",
        "price": "200",
        "desc": "Traditional home style meat soup",
        "addUrl": "https://orders.tamannahotels.com/"
      },
      {
        "name": "SEA FOOD SOUP",
        "price": "200",
        "desc": "Mix sea food aromatized soup",
        "addUrl": "https://orders.tamannahotels.com/"
      },
      {
        "name": "CHICKEN MANCHOW SOUP",
        "price": "160",
        "desc": "Chicken flavored with soya sauce and vinegar",
        "addUrl": "https://orders.tamannahotels.com/"
      },
      {
        "name": "CHICKEN HOT AND SOUR SOUP",
        "price": "160",
        "desc": "Chicken spicy and sour taste",
        "addUrl": "https://orders.tamannahotels.com/"
      },
      {
        "name": "CHICKEN LEMON PEPPER SOUP",
        "price": "160",
        "desc": "Delicately aromatized lemon flavoured soup",
        "addUrl": "https://orders.tamannahotels.com/"
      },
      {
        "name": "CHICKEN WONTON SOUP",
        "price": "200",
        "desc": "Chicken stuffed in pancake sheets and flavored with spices",
        "addUrl": "https://orders.tamannahotels.com/"
      },
      {
        "name": "CHICKEN CLEAR SOUP",
        "price": "160",
        "desc": "Delicately aromatized chicken soup",
        "addUrl": "https://orders.tamannahotels.com/"
      },
      {
        "name": "LUNG FUNG SOUP",
        "price": "220",
        "desc": "Prawns, chicken with thick soup, medium spicy",
        "addUrl": "https://orders.tamannahotels.com/"
      },
      {
        "name": "CHICKEN MINESTRONE SOUP",
        "price": "200",
        "desc": "Mix vegetable and chicken in aromatized liquid garnished with macaroni pasta and grated cheese",
        "addUrl": "https://orders.tamannahotels.com/"
      }
    ]
  },
  {
    "category": "(Salads)",
    "items": [
      {
        "name": "GARDEN FRESH SALAD",
        "price": "100",
        "desc": "Fresh cucumber, carrot, tomato",
        "addUrl": "https://orders.tamannahotels.com/"
      },
      {
        "name": "COLESLAW SALAD",
        "price": "150",
        "desc": "Cabbage, carrot, capsicum, onion mixed with mayonnaise dressing",
        "addUrl": "https://orders.tamannahotels.com/"
      },
      {
        "name": "ORIENTAL SALAD",
        "price": "150",
        "desc": "Shredded cabbage, carrot, green onion, tomatoes, capsicum",
        "addUrl": "https://orders.tamannahotels.com/"
      },
      {
        "name": "RUSSIAN SALAD",
        "price": "170",
        "desc": "Cubes of potato, french beans, carrot and green peas in creamy mayonnaise dressing",
        "addUrl": "https://orders.tamannahotels.com/"
      },
      {
        "name": "WALDORF SALAD",
        "price": "180",
        "desc": "Apple, celery and mayonnaise + walnuts",
        "addUrl": "https://orders.tamannahotels.com/"
      },
      {
        "name": "GREEK SALAD",
        "price": "170",
        "desc": "Tomatoes, cucumber, onion, green pepper and cottage cheese",
        "addUrl": "https://orders.tamannahotels.com/"
      },
      {
        "name": "VEGETABLE RAITA",
        "price": "125",
        "desc": "",
        "addUrl": "https://orders.tamannahotels.com/"
      },
      {
        "name": "BOONDI RAITA",
        "price": "125",
        "desc": "",
        "addUrl": "https://orders.tamannahotels.com/"
      },
      {
        "name": "PINEAPPLE RAITA",
        "price": "125",
        "desc": "",
        "addUrl": "https://orders.tamannahotels.com/"
      },
      {
        "name": "ALOO PUDINA RAITA",
        "price": "125",
        "desc": "",
        "addUrl": "https://orders.tamannahotels.com/"
      },
      {
        "name": "SWEET CURD",
        "price": "110",
        "desc": "",
        "addUrl": "https://orders.tamannahotels.com/"
      }
    ]
  },
  {
    "category": "(Starters - Veg)",
    "items": [
      {
        "name": "ROYAL VEGETABLE PLATTER",
        "price": "720",
        "desc": "Paneer, mushroom, vegetables, babycorn, veg seekh kabab, aloo bharwan, tandoori gobi",
        "addUrl": "https://orders.tamannahotels.com/"
      },
      {
        "name": "PANEER MALAI KEBAB",
        "price": "345",
        "desc": "Chunks of cottage cheese marinated in curds, spices, cooked in tandoor",
        "addUrl": "https://orders.tamannahotels.com/"
      },
      {
        "name": "PANEER CHEESE KEBAB",
        "price": "345",
        "desc": "Cottage cheese flavored with spices, tandoor cooked, finished with grated cheese",
        "addUrl": "https://orders.tamannahotels.com/"
      },
      {
        "name": "TANDOORI MUSHROOM",
        "price": "320",
        "desc": "Mushroom marinated in spices and cooked in tandoor",
        "addUrl": "https://orders.tamannahotels.com/"
      },
      {
        "name": "PANEER TIKKA",
        "price": "320",
        "desc": "Homemade cottage cheese spiced and cooked in tandoor",
        "addUrl": "https://orders.tamannahotels.com/"
      },
      {
        "name": "PANEER PAKODA",
        "price": "300",
        "desc": "Cottage cheese coated with gram flour batter and deep fried",
        "addUrl": "https://orders.tamannahotels.com/"
      },
      {
        "name": "PANEER SAKHI",
        "price": "320",
        "desc": "Batter fried paneer tossed with onion, capsicum, curry leaves, celery, chilli sauce",
        "addUrl": "https://orders.tamannahotels.com/"
      },
      {
        "name": "VEGETABLE SEEKH KABAB",
        "price": "265",
        "desc": "Minced vegetable cooked in tandoor",
        "addUrl": "https://orders.tamannahotels.com/"
      },
      {
        "name": "VEG THAI SPICE",
        "price": "290",
        "desc": "Fried mixed veg tossed in sesame and schezwan sauce",
        "addUrl": "https://orders.tamannahotels.com/"
      },
      {
        "name": "VEGETABLE 65",
        "price": "245",
        "desc": "Assorted vegetables batter fried and tempered",
        "addUrl": "https://orders.tamannahotels.com/"
      },
      {
        "name": "HARA BHARA KABAB",
        "price": "245",
        "desc": "Minced vegetable seasoned and deep fried",
        "addUrl": "https://orders.tamannahotels.com/"
      },
      {
        "name": "CRISPY FRIED BABYCORN",
        "price": "245",
        "desc": "Babycorn coated with cornflour and deep fried",
        "addUrl": "https://orders.tamannahotels.com/"
      },
      {
        "name": "ALOO CORN TIKKI",
        "price": "215",
        "desc": "Mashed potatoes with corn, croquette sized, deep fried",
        "addUrl": "https://orders.tamannahotels.com/"
      },
      {
        "name": "ASSORTED VEG PAKODA",
        "price": "170",
        "desc": "Assorted vegetables coated with gram flour batter and deep fried",
        "addUrl": "https://orders.tamannahotels.com/"
      },
      {
        "name": "VEG GREEN GARLIC DRY",
        "price": "245",
        "desc": "",
        "addUrl": "https://orders.tamannahotels.com/"
      },
      {
        "name": "MUSHROOM GREEN GARLIC DRY",
        "price": "245",
        "desc": "",
        "addUrl": "https://orders.tamannahotels.com/"
      },
      {
        "name": "BABYCORN GARLIC DRY",
        "price": "245",
        "desc": "",
        "addUrl": "https://orders.tamannahotels.com/"
      },
      {
        "name": "COTTAGE CHEESE HUNAN STYLE",
        "price": "340",
        "desc": "Batter fried paneer tossed in Hunan style",
        "addUrl": "https://orders.tamannahotels.com/"
      },
      {
        "name": "PANEER CHILLY",
        "price": "320",
        "desc": "Paneer tossed with green chillies and capsicum",
        "addUrl": "https://orders.tamannahotels.com/"
      },
      {
        "name": "VEGETABLE MANCHURIAN",
        "price": "265",
        "desc": "Minced vegetable balls in Chinese style",
        "addUrl": "https://orders.tamannahotels.com/"
      },
      {
        "name": "VEGETABLE CRISPY",
        "price": "265",
        "desc": "Assorted vegetables seasoned and crispy fried",
        "addUrl": "https://orders.tamannahotels.com/"
      },
      {
        "name": "VEGETABLE SPRING ROLL",
        "price": "265",
        "desc": "Shredded vegetables rolled in pancake and deep fried",
        "addUrl": "https://orders.tamannahotels.com/"
      }
    ]
  },
  {
    "category": "(Veg Main Course)",
    "items": [
      {
        "name": "TAMANNA SPECIAL",
        "price": "330",
        "desc": "Mixed vegetables, mushrooms, babycorns, paneer coated with gramflour and deep fried with onion based gravy",
        "addUrl": "https://orders.tamannahotels.com/"
      },
      {
        "name": "VEG THAIMA",
        "price": "295",
        "desc": "Mixed vegetables covered with fried papad and finished with tomato gravy",
        "addUrl": "https://orders.tamannahotels.com/"
      },
      {
        "name": "VEG NIZAMI KOFTA",
        "price": "295",
        "desc": "Dumpling made with cottage cheese and spinach served with mint flavoured rich cashewnut gravy",
        "addUrl": "https://orders.tamannahotels.com/"
      },
      {
        "name": "PANEER SHAHI KORMA",
        "price": "320",
        "desc": "Homemade cottage cheese cooked in rich creamy cashewnut gravy",
        "addUrl": "https://orders.tamannahotels.com/"
      },
      {
        "name": "PANEER TEEN MIRCHIWALA",
        "price": "320",
        "desc": "Cottage cheese cooked with bell peppers",
        "addUrl": "https://orders.tamannahotels.com/"
      },
      {
        "name": "FALDARI NARGISH KOFTA",
        "price": "295",
        "desc": "Mix veg kofta stuffed with cheese, paneer and green chutney served with tomato gravy",
        "addUrl": "https://orders.tamannahotels.com/"
      },
      {
        "name": "PANEER PASANDA",
        "price": "340",
        "desc": "Cottage cheese cooked in onion tomato gravy",
        "addUrl": "https://orders.tamannahotels.com/"
      },
      {
        "name": "PANEER RAJWADA",
        "price": "340",
        "desc": "Paneer cooked in Rajasthani style with medium rich and spicy gravy",
        "addUrl": "https://orders.tamannahotels.com/"
      },
      {
        "name": "MUSHROOM TAWA",
        "price": "310",
        "desc": "Mushroom fried in onion gravy",
        "addUrl": "https://orders.tamannahotels.com/"
      },
      {
        "name": "PANEER CHAT PATA",
        "price": "310",
        "desc": "Cottage cheese cooked in onion, tomato and bell pepper",
        "addUrl": "https://orders.tamannahotels.com/"
      },
      {
        "name": "SUBZI HANDI",
        "price": "275",
        "desc": "Assorted vegetables cooked in onion and tomato gravy",
        "addUrl": "https://orders.tamannahotels.com/"
      },
      {
        "name": "MUSHROOM SUNDRI",
        "price": "310",
        "desc": "Batter fried mushrooms cooked in tomato based gravy",
        "addUrl": "https://orders.tamannahotels.com/"
      },
      {
        "name": "NAVRATAN KORMA",
        "price": "310",
        "desc": "Vegetables cooked in rich cashewnut gravy",
        "addUrl": "https://orders.tamannahotels.com/"
      },
      {
        "name": "VEG GARDEN",
        "price": "275",
        "desc": "Garden fresh vegetables cooked in palak based gravy",
        "addUrl": "https://orders.tamannahotels.com/"
      },
      {
        "name": "MALAI KOFTA",
        "price": "295",
        "desc": "Cottage cheese dumpling cooked in rich cashew gravy",
        "addUrl": "https://orders.tamannahotels.com/"
      },
      {
        "name": "KAJU MASALA",
        "price": "385",
        "desc": "Cashew nuts cooked in rich onion gravy",
        "addUrl": "https://orders.tamannahotels.com/"
      },
      {
        "name": "PANEER BHURJI",
        "price": "320",
        "desc": "Minced cottage cheese cooked with onion and tomato",
        "addUrl": "https://orders.tamannahotels.com/"
      },
      {
        "name": "BABYCORN JALFREZI",
        "price": "275",
        "desc": "Sliced onion, tomato, capsicum, babycorn cooked in tangy tomato gravy",
        "addUrl": "https://orders.tamannahotels.com/"
      },
      {
        "name": "VEG PESHAWARI",
        "price": "275",
        "desc": "Mixed vegetables in sweet onion based gravy",
        "addUrl": "https://orders.tamannahotels.com/"
      },
      {
        "name": "VEG MARATHA",
        "price": "295",
        "desc": "Mixed vegetable tikkies cooked in spicy tomato based gravy",
        "addUrl": "https://orders.tamannahotels.com/"
      },
      {
        "name": "MAKHANWALA PANEER",
        "price": "295",
        "desc": "",
        "addUrl": "https://orders.tamannahotels.com/"
      },
      {
        "name": "KADHAI PANEER",
        "price": "295",
        "desc": "",
        "addUrl": "https://orders.tamannahotels.com/"
      },
      {
        "name": "PALAK PANEER",
        "price": "295",
        "desc": "",
        "addUrl": "https://orders.tamannahotels.com/"
      },
      {
        "name": "TIKKA MASALA PANEER",
        "price": "295",
        "desc": "",
        "addUrl": "https://orders.tamannahotels.com/"
      },
      {
        "name": "TOMATO PANEER BHARTA",
        "price": "295",
        "desc": "Grated paneer and finely chopped tomatoes cooked in tomato based gravy",
        "addUrl": "https://orders.tamannahotels.com/"
      },
      {
        "name": "JALFREZI SUBZI",
        "price": "265",
        "desc": "",
        "addUrl": "https://orders.tamannahotels.com/"
      },
      {
        "name": "TAWA SUBZI",
        "price": "265",
        "desc": "",
        "addUrl": "https://orders.tamannahotels.com/"
      },
      {
        "name": "BHUNA SUBZI",
        "price": "265",
        "desc": "",
        "addUrl": "https://orders.tamannahotels.com/"
      },
      {
        "name": "MAKHANWALA SUBZI",
        "price": "265",
        "desc": "",
        "addUrl": "https://orders.tamannahotels.com/"
      },
      {
        "name": "KADAI SUBZI",
        "price": "265",
        "desc": "",
        "addUrl": "https://orders.tamannahotels.com/"
      },
      {
        "name": "KOLHAPURI SUBZI",
        "price": "265",
        "desc": "",
        "addUrl": "https://orders.tamannahotels.com/"
      },
      {
        "name": "SHABNUM CURRY",
        "price": "275",
        "desc": "Combination of green peas and mushroom",
        "addUrl": "https://orders.tamannahotels.com/"
      },
      {
        "name": "METHI MUTTER MALAI",
        "price": "265",
        "desc": "Green peas cooked in cashewnut gravy with fenugreek",
        "addUrl": "https://orders.tamannahotels.com/"
      },
      {
        "name": "SARSON KA SAAG",
        "price": "245",
        "desc": "Mustard leaves cooked in mustard oil",
        "addUrl": "https://orders.tamannahotels.com/"
      },
      {
        "name": "DUM ALOO",
        "price": "230",
        "desc": "Potatoes cooked in onion and tomato",
        "addUrl": "https://orders.tamannahotels.com/"
      },
      {
        "name": "PESHAWARI CHOLE",
        "price": "230",
        "desc": "Traditional Peshawar-style chickpeas preparation",
        "addUrl": "https://orders.tamannahotels.com/"
      },
      {
        "name": "PINDI CHANA",
        "price": "230",
        "desc": "Spicy dry preparation of chickpeas",
        "addUrl": "https://orders.tamannahotels.com/"
      },
      {
        "name": "MAKAI MIRCH MASALA",
        "price": "265",
        "desc": "Corn cooked with capsicum in onion tomato gravy",
        "addUrl": "https://orders.tamannahotels.com/"
      },
      {
        "name": "HARA BHARA KEBAB MASALA",
        "price": "265",
        "desc": "Veg tikkies cooked in palak based gravy",
        "addUrl": "https://orders.tamannahotels.com/"
      },
      {
        "name": "ACHARI BHINDI",
        "price": "255",
        "desc": "Bhindi cooked with pickling spices",
        "addUrl": "https://orders.tamannahotels.com/"
      },
      {
        "name": "BHINDI DO PYAZA",
        "price": "255",
        "desc": "Lady fingers cooked with double onion",
        "addUrl": "https://orders.tamannahotels.com/"
      },
      {
        "name": "BAINGAN BHARTA",
        "price": "255",
        "desc": "Smoked brinjal cooked with onion and tomatoes",
        "addUrl": "https://orders.tamannahotels.com/"
      },
      {
        "name": "GOBI GRAVY",
        "price": "235",
        "desc": "",
        "addUrl": "https://orders.tamannahotels.com/"
      },
      {
        "name": "MUTTER GRAVY",
        "price": "235",
        "desc": "",
        "addUrl": "https://orders.tamannahotels.com/"
      },
      {
        "name": "PALAK GRAVY",
        "price": "235",
        "desc": "",
        "addUrl": "https://orders.tamannahotels.com/"
      },
      {
        "name": "KADHI PAKODA",
        "price": "255",
        "desc": "Curd & gram flour curry with pakoda",
        "addUrl": "https://orders.tamannahotels.com/"
      },
      {
        "name": "JEERA ALOO",
        "price": "235",
        "desc": "",
        "addUrl": "https://orders.tamannahotels.com/"
      },
      {
        "name": "RAJMA MAKHANI",
        "price": "235",
        "desc": "Red kidney beans cooked with tomato, fresh cream and butter",
        "addUrl": "https://orders.tamannahotels.com/"
      },
      {
        "name": "DAL MAKHANI",
        "price": "235",
        "desc": "Black lentil and red kidney beans slow cooked with cream & butter",
        "addUrl": "https://orders.tamannahotels.com/"
      },
      {
        "name": "BOILED VEGETABLES",
        "price": "235",
        "desc": "",
        "addUrl": "https://orders.tamannahotels.com/"
      },
      {
        "name": "DAL FRY",
        "price": "175",
        "desc": "",
        "addUrl": "https://orders.tamannahotels.com/"
      },
      {
        "name": "DAL TADKA",
        "price": "175",
        "desc": "",
        "addUrl": "https://orders.tamannahotels.com/"
      },
      {
        "name": "DAL PALAK",
        "price": "175",
        "desc": "",
        "addUrl": "https://orders.tamannahotels.com/"
      }
    ]
  },
  {
    "category": "(Non Veg Main Course)",
    "items": [
      {
        "name": "MURGH MUSALLAM",
        "price": "920",
        "desc": "Whole chicken stuffed and cooked in onion and tomatoes",
        "addUrl": "https://orders.tamannahotels.com/"
      },
      {
        "name": "CHICKEN MAKHMALI",
        "price": "575",
        "desc": "Stuffed chicken balls cooked in tomatoes",
        "addUrl": "https://orders.tamannahotels.com/"
      },
      {
        "name": "CHICKEN STEAK MASALA",
        "price": "475",
        "desc": "Leg pieces and minced chicken cooked in tomato based gravy",
        "addUrl": "https://orders.tamannahotels.com/"
      },
      {
        "name": "CHICKEN MUMTAJ",
        "price": "475",
        "desc": "Chunks of tandoori chicken in brown gravy with cream",
        "addUrl": "https://orders.tamannahotels.com/"
      },
      {
        "name": "CHICKEN AFGHANI",
        "price": "385",
        "desc": "Chicken cooked in rich onion gravy",
        "addUrl": "https://orders.tamannahotels.com/"
      },
      {
        "name": "CHICKEN NAWABI HANDI",
        "price": "425",
        "desc": "Chicken and liver cooked in onion & tomato gravy",
        "addUrl": "https://orders.tamannahotels.com/"
      },
      {
        "name": "CHICKEN DARBAR",
        "price": "385",
        "desc": "Boneless chicken cooked in onion gravy garnished with boiled egg",
        "addUrl": "https://orders.tamannahotels.com/"
      },
      {
        "name": "CHICKEN RASILA",
        "price": "385",
        "desc": "Spicy chicken in thin onion tomato gravy",
        "addUrl": "https://orders.tamannahotels.com/"
      },
      {
        "name": "CHICKEN PATIYALA",
        "price": "445",
        "desc": "Tandoori chicken wrapped in omelette with tomato gravy",
        "addUrl": "https://orders.tamannahotels.com/"
      },
      {
        "name": "CHICKEN TIKKA MASALA",
        "price": "395",
        "desc": "Skewered chunks of chicken in tomato based gravy",
        "addUrl": "https://orders.tamannahotels.com/"
      },
      {
        "name": "CHICKEN HANDI",
        "price": "395",
        "desc": "",
        "addUrl": "https://orders.tamannahotels.com/"
      },
      {
        "name": "BUTTER CHICKEN",
        "price": "395",
        "desc": "Chicken cooked in tomato, cream and butter",
        "addUrl": "https://orders.tamannahotels.com/"
      },
      {
        "name": "CHICKEN DHANIA",
        "price": "395",
        "desc": "Coriander flavoured chicken in thin gravy",
        "addUrl": "https://orders.tamannahotels.com/"
      },
      {
        "name": "CHICKEN KALIMIRI",
        "price": "395",
        "desc": "Chicken in white gravy flavoured with black pepper",
        "addUrl": "https://orders.tamannahotels.com/"
      },
      {
        "name": "CHICKEN ADRAKI",
        "price": "395",
        "desc": "Chicken cooked in onion tomato gravy with ginger",
        "addUrl": "https://orders.tamannahotels.com/"
      },
      {
        "name": "CHICKEN KADAI",
        "price": "395",
        "desc": "Chicken with tomatoes and freshly pounded spices",
        "addUrl": "https://orders.tamannahotels.com/"
      },
      {
        "name": "CHICKEN DO PYAZA",
        "price": "395",
        "desc": "",
        "addUrl": "https://orders.tamannahotels.com/"
      },
      {
        "name": "CHICKEN MALWANI",
        "price": "395",
        "desc": "Coastal chicken in coconut gravy",
        "addUrl": "https://orders.tamannahotels.com/"
      },
      {
        "name": "CHICKEN SUKHA",
        "price": "410",
        "desc": "Spicy Mangalorean-style chicken with coconut",
        "addUrl": "https://orders.tamannahotels.com/"
      },
      {
        "name": "CHICKEN KOLHAPURI",
        "price": "385",
        "desc": "Spicy chicken in coconut-based Kolhapuri masala",
        "addUrl": "https://orders.tamannahotels.com/"
      },
      {
        "name": "MUTTON DUM KHARA",
        "price": "595",
        "desc": "Mutton in jaifal & javitri flavoured gravy",
        "addUrl": "https://orders.tamannahotels.com/"
      },
      {
        "name": "MUTTON NAWABI HANDI",
        "price": "650",
        "desc": "Mutton and liver cooked in onion & tomato gravy",
        "addUrl": "https://orders.tamannahotels.com/"
      },
      {
        "name": "MUTTON MUGHLAI",
        "price": "595",
        "desc": "",
        "addUrl": "https://orders.tamannahotels.com/"
      },
      {
        "name": "KEEMA TAWA FRY",
        "price": "570",
        "desc": "Dry minced meat with spices",
        "addUrl": "https://orders.tamannahotels.com/"
      },
      {
        "name": "MUTTON ROGAN JOSH",
        "price": "595",
        "desc": "Authentic Kashmiri lamb delicacy",
        "addUrl": "https://orders.tamannahotels.com/"
      },
      {
        "name": "RARA GOSHT",
        "price": "595",
        "desc": "Chunks of meat and minced meat with onion & tomatoes",
        "addUrl": "https://orders.tamannahotels.com/"
      },
      {
        "name": "MUTTON HANDI",
        "price": "610",
        "desc": "",
        "addUrl": "https://orders.tamannahotels.com/"
      },
      {
        "name": "MUTTON MALWANI",
        "price": "595",
        "desc": "Coastal meat preparation in coconut gravy",
        "addUrl": "https://orders.tamannahotels.com/"
      },
      {
        "name": "BHUNA GOSHT",
        "price": "595",
        "desc": "Chunks of meat cooked with spices",
        "addUrl": "https://orders.tamannahotels.com/"
      },
      {
        "name": "MUTTON MARATHA",
        "price": "595",
        "desc": "Meat tikkies cooked in spicy tomato based gravy",
        "addUrl": "https://orders.tamannahotels.com/"
      },
      {
        "name": "KEEMA MUTTER",
        "price": "595",
        "desc": "Minced lamb cooked with peas",
        "addUrl": "https://orders.tamannahotels.com/"
      },
      {
        "name": "METHI MUTTON",
        "price": "595",
        "desc": "Lamb cooked with cashewnuts & fenugreek",
        "addUrl": "https://orders.tamannahotels.com/"
      },
      {
        "name": "SUKHA MUTTON",
        "price": "595",
        "desc": "",
        "addUrl": "https://orders.tamannahotels.com/"
      },
      {
        "name": "JHINGA ACHARI",
        "price": "540",
        "desc": "Pickled prawns cooked in tomato gravy",
        "addUrl": "https://orders.tamannahotels.com/"
      },
      {
        "name": "JHINGA MASALEDER FISH VINDALOO",
        "price": "540",
        "desc": "Prawns preparation with spices",
        "addUrl": "https://orders.tamannahotels.com/"
      },
      {
        "name": "FISH VINDALOO",
        "price": "540",
        "desc": "Spicy Goan fish curry with potatoes",
        "addUrl": "https://orders.tamannahotels.com/"
      },
      {
        "name": "GOAN PRAWNS CURRY",
        "price": "540",
        "desc": "Prawns cooked in onion coconut gravy",
        "addUrl": "https://orders.tamannahotels.com/"
      },
      {
        "name": "PRAWNS LASOONI",
        "price": "540",
        "desc": "Prawns cooked in onion tomato gravy with garlic",
        "addUrl": "https://orders.tamannahotels.com/"
      },
      {
        "name": "FISH TIKKA MASALA",
        "price": "540",
        "desc": "Tandoori fish chunks in onion tomato gravy",
        "addUrl": "https://orders.tamannahotels.com/"
      },
      {
        "name": "FISH MALWANI",
        "price": "540",
        "desc": "Coastal fish cooked in coconut gravy",
        "addUrl": "https://orders.tamannahotels.com/"
      },
      {
        "name": "GOAN FISH CURRY",
        "price": "540",
        "desc": "Fish cooked in onion coconut gravy",
        "addUrl": "https://orders.tamannahotels.com/"
      },
      {
        "name": "POMFRET GOAN CURRY",
        "price": "720",
        "desc": "",
        "addUrl": "https://orders.tamannahotels.com/"
      },
      {
        "name": "FISH MASALA",
        "price": "540",
        "desc": "Fish cooked in onion tomato gravy",
        "addUrl": "https://orders.tamannahotels.com/"
      },
      {
        "name": "EGG MASALA",
        "price": "280",
        "desc": "",
        "addUrl": "https://orders.tamannahotels.com/"
      },
      {
        "name": "EGG CURRY",
        "price": "280",
        "desc": "",
        "addUrl": "https://orders.tamannahotels.com/"
      },
      {
        "name": "EGG OMELETTE",
        "price": "180",
        "desc": "",
        "addUrl": "https://orders.tamannahotels.com/"
      },
      {
        "name": "EGG BHURJI",
        "price": "200",
        "desc": "",
        "addUrl": "https://orders.tamannahotels.com/"
      },
      {
        "name": "EGG BOILED",
        "price": "130",
        "desc": "",
        "addUrl": "https://orders.tamannahotels.com/"
      }
    ]
  },
  {
    "category": "(Indian Breads)",
    "items": [
      {
        "name": "ROTI",
        "price": "30",
        "desc": "",
        "addUrl": "https://orders.tamannahotels.com/"
      },
      {
        "name": "ROTI BUTTER",
        "price": "40",
        "desc": "",
        "addUrl": "https://orders.tamannahotels.com/"
      },
      {
        "name": "MISSI ROTI",
        "price": "50",
        "desc": "Bengal gram flour bread",
        "addUrl": "https://orders.tamannahotels.com/"
      },
      {
        "name": "MAKAI ROTI",
        "price": "50",
        "desc": "Corn flour bread",
        "addUrl": "https://orders.tamannahotels.com/"
      },
      {
        "name": "NAAN",
        "price": "40",
        "desc": "",
        "addUrl": "https://orders.tamannahotels.com/"
      },
      {
        "name": "BUTTER NAAN",
        "price": "50",
        "desc": "",
        "addUrl": "https://orders.tamannahotels.com/"
      },
      {
        "name": "GARLIC NAAN",
        "price": "80",
        "desc": "",
        "addUrl": "https://orders.tamannahotels.com/"
      },
      {
        "name": "CHEESE NAAN",
        "price": "100",
        "desc": "",
        "addUrl": "https://orders.tamannahotels.com/"
      },
      {
        "name": "RUMALI ROTI",
        "price": "50",
        "desc": "Paper thin refined bread",
        "addUrl": "https://orders.tamannahotels.com/"
      },
      {
        "name": "BUTTER RUMALI ROTI",
        "price": "60",
        "desc": "",
        "addUrl": "https://orders.tamannahotels.com/"
      },
      {
        "name": "LACCHA PARATHA",
        "price": "50",
        "desc": "Layered whole wheat bread",
        "addUrl": "https://orders.tamannahotels.com/"
      },
      {
        "name": "METHI PARATHA",
        "price": "60",
        "desc": "Whole wheat bread flavored with fenugreek",
        "addUrl": "https://orders.tamannahotels.com/"
      },
      {
        "name": "PUDINA PARATHA",
        "price": "60",
        "desc": "Whole wheat bread flavored with mint",
        "addUrl": "https://orders.tamannahotels.com/"
      },
      {
        "name": "ALOO PARATHA",
        "price": "80",
        "desc": "Whole wheat bread stuffed with mashed potato",
        "addUrl": "https://orders.tamannahotels.com/"
      },
      {
        "name": "STUFFED PARATHA",
        "price": "140",
        "desc": "Whole wheat bread stuffed with vegetables",
        "addUrl": "https://orders.tamannahotels.com/"
      },
      {
        "name": "CHEESE GARLIC NAAN",
        "price": "170",
        "desc": "Refined flour bread flavoured with chopped garlic and finished with grated cheese",
        "addUrl": "https://orders.tamannahotels.com/"
      },
      {
        "name": "PANEER PARATHA",
        "price": "140",
        "desc": "Whole wheat bread stuffed with paneer",
        "addUrl": "https://orders.tamannahotels.com/"
      },
      {
        "name": "KULCHA",
        "price": "55",
        "desc": "Refined flour bread flavoured with sesame seeds and coriander leaves",
        "addUrl": "https://orders.tamannahotels.com/"
      },
      {
        "name": "MUTTON KEEMA PARATHA",
        "price": "250",
        "desc": "",
        "addUrl": "https://orders.tamannahotels.com/"
      },
      {
        "name": "ONION KULCHA",
        "price": "65",
        "desc": "Refined flour bread flavoured with chopped onions,sesame seeds and coriander leaves",
        "addUrl": "https://orders.tamannahotels.com/"
      },
      {
        "name": "MASALA KULCHA",
        "price": "130",
        "desc": "Cottage cheese onion and potato stuffed with spice",
        "addUrl": "https://orders.tamannahotels.com/"
      },
      {
        "name": "ROTI BASKET",
        "price": "380",
        "desc": "Assorted types of indian breads",
        "addUrl": "https://orders.tamannahotels.com/"
      }
    ]
  },
  {
    "category": "(Rice)",
    "items": [
      {
        "name": "KASHMIRI PULAO",
        "price": "270",
        "desc": "Rich preparation of basmati rice with fruits",
        "addUrl": "https://orders.tamannahotels.com/"
      },
      {
        "name": "PANEER TIKKA BIRYANI",
        "price": "240",
        "desc": "",
        "addUrl": "https://orders.tamannahotels.com/"
      },
      {
        "name": "VEG BIRYANI",
        "price": "220",
        "desc": "Basmati rice and vegetables cooked with spices and flavoured with saffron basmati rice and greenpeas cooked with spices",
        "addUrl": "https://orders.tamannahotels.com/"
      },
      {
        "name": "VEG PULAO",
        "price": "210",
        "desc": "Basmati rice cooked with vegetables",
        "addUrl": "https://orders.tamannahotels.com/"
      },
      {
        "name": "MIRCH MAKAI PULAO",
        "price": "195",
        "desc": "Basmati rice cooked with capsicum and corn",
        "addUrl": "https://orders.tamannahotels.com/"
      },
      {
        "name": "DAL KHICHDI",
        "price": "195",
        "desc": "Basmati rice and lentil cooked together and served with kadhi or curd",
        "addUrl": "https://orders.tamannahotels.com/"
      },
      {
        "name": "CURD RICE",
        "price": "195",
        "desc": "Basmati rice and curd tempered with mustard and curry leaves",
        "addUrl": "https://orders.tamannahotels.com/"
      },
      {
        "name": "JEERA RICE",
        "price": "170",
        "desc": "Basmati rice tempered with jeera",
        "addUrl": "https://orders.tamannahotels.com/"
      },
      {
        "name": "STEAM RICE",
        "price": "140",
        "desc": "Basmati rice cooked on steam",
        "addUrl": "https://orders.tamannahotels.com/"
      },
      {
        "name": "PRAWNS BIRYANI",
        "price": "440",
        "desc": "Basmati rice and prawns cooked with spices",
        "addUrl": "https://orders.tamannahotels.com/"
      },
      {
        "name": "MUTTON DUM BIRYANI",
        "price": "650",
        "desc": "Lamb and basmati rice cooked with spices on steam",
        "addUrl": "https://orders.tamannahotels.com/"
      },
      {
        "name": "CHICKEN TIKKA BIRYANI",
        "price": "385",
        "desc": "",
        "addUrl": "https://orders.tamannahotels.com/"
      },
      {
        "name": "TANDOORI CHICKEN BIRYANI",
        "price": "440",
        "desc": "",
        "addUrl": "https://orders.tamannahotels.com/"
      },
      {
        "name": "CHICKEN DUM BIRYANI",
        "price": "335",
        "desc": "Chicken and basmati rice cooked with spices on steam",
        "addUrl": "https://orders.tamannahotels.com/"
      },
      {
        "name": "EGG BIRYANI",
        "price": "275",
        "desc": "Eggs and basmati rice cooked with spices",
        "addUrl": "https://orders.tamannahotels.com/"
      }
    ]
  },
  {
    "category": "(Chaat)",
    "items": [
      {
        "name": "MASALA PAPAD",
        "price": "60",
        "desc": "",
        "addUrl": "https://orders.tamannahotels.com/"
      },
      {
        "name": "ROASTED PAPAD",
        "price": "40",
        "desc": "",
        "addUrl": "https://orders.tamannahotels.com/"
      },
      {
        "name": "FRIED PAPAD",
        "price": "40",
        "desc": "",
        "addUrl": "https://orders.tamannahotels.com/"
      },
      {
        "name": "MASALA PEANUT",
        "price": "100",
        "desc": "",
        "addUrl": "https://orders.tamannahotels.com/"
      },
      {
        "name": "ALOO CHAT",
        "price": "100",
        "desc": "",
        "addUrl": "https://orders.tamannahotels.com/"
      },
      {
        "name": "FRIED CASHEWNUT",
        "price": "300",
        "desc": "",
        "addUrl": "https://orders.tamannahotels.com/"
      }
    ]
  },
  {
    "category": "(Chinese - Veg Main Course)",
    "items": [
      {
        "name": "VEGETABLE MANCHURIAN WITH GRAVY",
        "price": "265",
        "desc": "Minced vegetable ball in chinese style",
        "addUrl": "https://orders.tamannahotels.com/"
      },
      {
        "name": "BABY CORN AND MUSHROOM IN HOT GARLIC SAUCE",
        "price": "280",
        "desc": "",
        "addUrl": "https://orders.tamannahotels.com/"
      },
      {
        "name": "PANEER CHILLY WITH GRAVY",
        "price": "320",
        "desc": "Chunks of cottage cheese tossed with green chillies and capsicum",
        "addUrl": "https://orders.tamannahotels.com/"
      }
    ]
  },
  {
    "category": "(Chinese - Non Veg Main Course)",
    "items": [
      {
        "name": "CHICKEN IN HOT GARLIC SAUCE",
        "price": "340",
        "desc": "",
        "addUrl": "https://orders.tamannahotels.com/"
      },
      {
        "name": "CHICKEN IN SCHEZWAN SAUCE",
        "price": "340",
        "desc": "",
        "addUrl": "https://orders.tamannahotels.com/"
      },
      {
        "name": "CHICKEN IN SPRING ONION SAUCE",
        "price": "340",
        "desc": "",
        "addUrl": "https://orders.tamannahotels.com/"
      },
      {
        "name": "CHICKEN CHILLY",
        "price": "340",
        "desc": "Spicy preparation of chunks of chicken",
        "addUrl": "https://orders.tamannahotels.com/"
      },
      {
        "name": "CHICKEN MANCHURIAN WITH GRAVY",
        "price": "340",
        "desc": "Spicy preparation of chunks of chicken",
        "addUrl": "https://orders.tamannahotels.com/"
      },
      {
        "name": "FISH CHILLY",
        "price": "440",
        "desc": "",
        "addUrl": "https://orders.tamannahotels.com/"
      },
      {
        "name": "FISH MANCHURIAN WITH GRAVY",
        "price": "440",
        "desc": "",
        "addUrl": "https://orders.tamannahotels.com/"
      },
      {
        "name": "PRAWNS CHILLY",
        "price": "475",
        "desc": "",
        "addUrl": "https://orders.tamannahotels.com/"
      },
      {
        "name": "PRAWNS MANCHURIAN WITH GRAVY",
        "price": "475",
        "desc": "",
        "addUrl": "https://orders.tamannahotels.com/"
      },
      {
        "name": "FISH IN HOT GARLIC",
        "price": "475",
        "desc": "",
        "addUrl": "https://orders.tamannahotels.com/"
      },
      {
        "name": "PRAWNS IN HOT GARLIC",
        "price": "475",
        "desc": "",
        "addUrl": "https://orders.tamannahotels.com/"
      },
      {
        "name": "PRAWNS SCHEZWAN",
        "price": "490",
        "desc": "",
        "addUrl": "https://orders.tamannahotels.com/"
      }
    ]
  },
  {
    "category": "(Chinese - Veg Rice and Noodles)",
    "items": [
      {
        "name": "PAN FRIED NOODLES",
        "price": "280",
        "desc": "Noodles tossed and served with sauce",
        "addUrl": "https://orders.tamannahotels.com/"
      },
      {
        "name": "AMERICAN CHOPSUEY",
        "price": "280",
        "desc": "Noodles with sweet tomato base sauce",
        "addUrl": "https://orders.tamannahotels.com/"
      },
      {
        "name": "HAKKA NOODLES",
        "price": "230",
        "desc": "Vegetables tossed with noodles",
        "addUrl": "https://orders.tamannahotels.com/"
      },
      {
        "name": "SINGAPORIAN NOODLES",
        "price": "280",
        "desc": "Vegetables tossed with mustard sauce",
        "addUrl": "https://orders.tamannahotels.com/"
      },
      {
        "name": "VEG SCHEZWAN NOODLES",
        "price": "255",
        "desc": "Noodles tossed with schezwan sauce",
        "addUrl": "https://orders.tamannahotels.com/"
      },
      {
        "name": "VEG SCHEZWAN RICE",
        "price": "255",
        "desc": "Rice tossed with schezwan sauce",
        "addUrl": "https://orders.tamannahotels.com/"
      },
      {
        "name": "STEWED RICE",
        "price": "260",
        "desc": "Noodles tossed in white sauce",
        "addUrl": "https://orders.tamannahotels.com/"
      },
      {
        "name": "VEG FRIED RICE",
        "price": "230",
        "desc": "Vegetables tossed in rice",
        "addUrl": "https://orders.tamannahotels.com/"
      },
      {
        "name": "SCHEZWAN TRIPLE FRIED RICE",
        "price": "320",
        "desc": "Rice and noodles in schezwan sauce",
        "addUrl": "https://orders.tamannahotels.com/"
      },
      {
        "name": "COMBINATION FRIED RICE",
        "price": "320",
        "desc": "Rice and noodles combined together with chinese seasoning",
        "addUrl": "https://orders.tamannahotels.com/"
      }
    ]
  },
  {
    "category": "(Chinese - Non Veg Rice and Noodles)",
    "items": [
      {
        "name": "CHICKEN HAKKA NOODLES",
        "price": "335",
        "desc": "Chunks of chicken tossed with noodles",
        "addUrl": "https://orders.tamannahotels.com/"
      },
      {
        "name": "CHICKEN SINGAPORIAN NOODLES",
        "price": "350",
        "desc": "Chicken and noodles tossed with mustard sauce",
        "addUrl": "https://orders.tamannahotels.com/"
      },
      {
        "name": "MIXED FRIED RICE",
        "price": "410",
        "desc": "Rice tossed with chicken, meat, fish",
        "addUrl": "https://orders.tamannahotels.com/"
      },
      {
        "name": "EGG FRIED RICE",
        "price": "275",
        "desc": "Eggs tossed with rice",
        "addUrl": "https://orders.tamannahotels.com/"
      },
      {
        "name": "CHICKEN FRIED RICE",
        "price": "315",
        "desc": "Chicken tossed with rice",
        "addUrl": "https://orders.tamannahotels.com/"
      },
      {
        "name": "PRAWN FRIED RICE",
        "price": "380",
        "desc": "Chicken tossed with rice",
        "addUrl": "https://orders.tamannahotels.com/"
      },
      {
        "name": "SCHEZWAN FRIED RICE",
        "price": "335",
        "desc": "Spicy rice and chicken prepared in schezwan style",
        "addUrl": "https://orders.tamannahotels.com/"
      },
      {
        "name": "CHICKEN SCHEZWAN TRIPLE RICE",
        "price": "410",
        "desc": "Rice and noodles with chicken in schezwan style",
        "addUrl": "https://orders.tamannahotels.com/"
      },
      {
        "name": "CHICKEN COMBINATION RICE",
        "price": "410",
        "desc": "Rice and noodle seasoned and served with chicken and chicken sauce",
        "addUrl": "https://orders.tamannahotels.com/"
      }
    ]
  },
  {
    "category": "(Continental - Appetizers)",
    "items": [
      {
        "name": "POTATO WEDGES",
        "price": "150",
        "desc": "",
        "addUrl": "https://orders.tamannahotels.com/"
      },
      {
        "name": "HONEY CHILLY POTATO",
        "price": "160",
        "desc": "",
        "addUrl": "https://orders.tamannahotels.com/"
      },
      {
        "name": "CHEESE GARLIC TOAST",
        "price": "170",
        "desc": "",
        "addUrl": "https://orders.tamannahotels.com/"
      },
      {
        "name": "CHEESE CHILLY TOAST",
        "price": "170",
        "desc": "All time favourite grilled toast with cheese and chilly",
        "addUrl": "https://orders.tamannahotels.com/"
      },
      {
        "name": "CHEESE PINEAPPLE CHERRY",
        "price": "180",
        "desc": "Chunks of cheese, pineapple and cherry in a cocktail stick",
        "addUrl": "https://orders.tamannahotels.com/"
      },
      {
        "name": "FISH FINGER",
        "price": "490",
        "desc": "An exotic preparation of fish served with tartare sauce",
        "addUrl": "https://orders.tamannahotels.com/"
      },
      {
        "name": "SHASHLIK SIZZLER",
        "price": "410",
        "desc": "Rice and babycorn, mushroom stir fried and served with red sauce",
        "addUrl": "https://orders.tamannahotels.com/"
      },
      {
        "name": "CHICKEN SHASHLIK SIZZLER",
        "price": "540",
        "desc": "Chunks of chicken stir fried and served with red sauce",
        "addUrl": "https://orders.tamannahotels.com/"
      }
    ]
  },
  {
    "category": "(Veg Pasta)",
    "items": [
      {
        "name": "NEPOLITANE PASTA",
        "price": "310",
        "desc": "Choice of pasta tossed in tomatoes and herbs",
        "addUrl": "https://orders.tamannahotels.com/"
      },
      {
        "name": "ALFREDO PASTA",
        "price": "350",
        "desc": "Choice of pasta tossed in cheese sauce",
        "addUrl": "https://orders.tamannahotels.com/"
      }
    ]
  },
  {
    "category": "(Non Veg Pasta)",
    "items": [
      {
        "name": "SPAGHETTI BOLOGNESE PASTA",
        "price": "480",
        "desc": "Garlic tossed spaghetti, cooked with minced lamb and tomatoes",
        "addUrl": "https://orders.tamannahotels.com/"
      }
    ]
  },
  {
    "category": "(Veg Entrée)",
    "items": [
      {
        "name": "AUGRATINE",
        "price": "310",
        "desc": "Vegetable with white sauce topped with cheese and gratinate",
        "addUrl": "https://orders.tamannahotels.com/"
      },
      {
        "name": "MUSHROOM AND BABYCORN FLORENTINE",
        "price": "310",
        "desc": "Mushroom and babycorn cooked with spinach and sprinkled with cheese",
        "addUrl": "https://orders.tamannahotels.com/"
      },
      {
        "name": "BAKED CORN WITH MUSHROOM AUGRATINE",
        "price": "310",
        "desc": "Corn and mushroom with white sauce topped with cheese and gratinate",
        "addUrl": "https://orders.tamannahotels.com/"
      }
    ]
  },
  {
    "category": "(Sandwiches)",
    "items": [
      {
        "name": "VEG SANDWICH",
        "price": "80",
        "desc": "",
        "addUrl": "https://orders.tamannahotels.com/"
      },
      {
        "name": "CHUTNEY SANDWICH",
        "price": "75",
        "desc": "",
        "addUrl": "https://orders.tamannahotels.com/"
      },
      {
        "name": "POTATO SANDWICH",
        "price": "75",
        "desc": "",
        "addUrl": "https://orders.tamannahotels.com/"
      },
      {
        "name": "VEG TOASTED SANDWICH",
        "price": "95",
        "desc": "",
        "addUrl": "https://orders.tamannahotels.com/"
      },
      {
        "name": "GRILLED VEG SANDWICH",
        "price": "100",
        "desc": "",
        "addUrl": "https://orders.tamannahotels.com/"
      },
      {
        "name": "CHEESE SANDWICH",
        "price": "95",
        "desc": "",
        "addUrl": "https://orders.tamannahotels.com/"
      },
      {
        "name": "GRILLED CHEESE SANDWICH",
        "price": "110",
        "desc": "",
        "addUrl": "https://orders.tamannahotels.com/"
      },
      {
        "name": "GRILLED VEG CHEESE SANDWICH",
        "price": "115",
        "desc": "",
        "addUrl": "https://orders.tamannahotels.com/"
      },
      {
        "name": "TOMATO CHEESE SANDWICH",
        "price": "100",
        "desc": "",
        "addUrl": "https://orders.tamannahotels.com/"
      },
      {
        "name": "TOASTED VEG CHEESE SANDWICH",
        "price": "105",
        "desc": "",
        "addUrl": "https://orders.tamannahotels.com/"
      },
      {
        "name": "TOASTED TOMATO CHEESE SANDWICH",
        "price": "105",
        "desc": "",
        "addUrl": "https://orders.tamannahotels.com/"
      },
      {
        "name": "JAM SANDWICH",
        "price": "70",
        "desc": "",
        "addUrl": "https://orders.tamannahotels.com/"
      },
      {
        "name": "TOASTED JAM SANDWICH",
        "price": "70",
        "desc": "",
        "addUrl": "https://orders.tamannahotels.com/"
      },
      {
        "name": "TOASTED BUTTER SANDWICH",
        "price": "70",
        "desc": "",
        "addUrl": "https://orders.tamannahotels.com/"
      },
      {
        "name": "BREAD BUTTER SANDWICH",
        "price": "70",
        "desc": "",
        "addUrl": "https://orders.tamannahotels.com/"
      },
      {
        "name": "CLUB SANDWICH",
        "price": "130",
        "desc": "",
        "addUrl": "https://orders.tamannahotels.com/"
      },
      {
        "name": "VEG BURGER SANDWICH",
        "price": "100",
        "desc": "",
        "addUrl": "https://orders.tamannahotels.com/"
      },
      {
        "name": "CHEESE BURGER SANDWICH",
        "price": "130",
        "desc": "",
        "addUrl": "https://orders.tamannahotels.com/"
      },
      {
        "name": "VEG CHEESE BURGER SANDWICH",
        "price": "120",
        "desc": "",
        "addUrl": "https://orders.tamannahotels.com/"
      },
      {
        "name": "FINGER CHIPS",
        "price": "110",
        "desc": "",
        "addUrl": "https://orders.tamannahotels.com/"
      }
    ]
  },
  {
    "category": "(Pizza)",
    "items": [
      {
        "name": "VEG PIZZA",
        "price": "210",
        "desc": "",
        "addUrl": "https://orders.tamannahotels.com/"
      },
      {
        "name": "JAIN PIZZA",
        "price": "230",
        "desc": "",
        "addUrl": "https://orders.tamannahotels.com/"
      },
      {
        "name": "MUSHROOM PIZZA",
        "price": "230",
        "desc": "",
        "addUrl": "https://orders.tamannahotels.com/"
      },
      {
        "name": "PANEER PIZZA",
        "price": "230",
        "desc": "",
        "addUrl": "https://orders.tamannahotels.com/"
      },
      {
        "name": "CHEESE PIZZA",
        "price": "230",
        "desc": "",
        "addUrl": "https://orders.tamannahotels.com/"
      },
      {
        "name": "VEG CHEESE PIZZA",
        "price": "260",
        "desc": "",
        "addUrl": "https://orders.tamannahotels.com/"
      }
    ]
  },
  {
    "category": "(Bakery)",
    "items": [
      {
        "name": "EGGLESS BLACK FOREST CAKE",
        "price": "350",
        "desc": "",
        "addUrl": "https://orders.tamannahotels.com/"
      },
      {
        "name": "EGGLESS PINEAPPLE CAKE",
        "price": "350",
        "desc": "",
        "addUrl": "https://orders.tamannahotels.com/"
      },
      {
        "name": "EGGLESS BUTTERSCOTCH CAKE",
        "price": "350",
        "desc": "",
        "addUrl": "https://orders.tamannahotels.com/"
      },
      {
        "name": "EGGLESS MANGO CAKE",
        "price": "350",
        "desc": "",
        "addUrl": "https://orders.tamannahotels.com/"
      },
      {
        "name": "EGGLESS STRAWBERRY CAKE",
        "price": "350",
        "desc": "",
        "addUrl": "https://orders.tamannahotels.com/"
      },
      {
        "name": "EGGLESS VANILLA CAKE",
        "price": "350",
        "desc": "",
        "addUrl": "https://orders.tamannahotels.com/"
      },
      {
        "name": "EGGLESS IRISH COFFEE CAKE",
        "price": "350",
        "desc": "",
        "addUrl": "https://orders.tamannahotels.com/"
      },
      {
        "name": "EGGLESS CHOCOLATE CAKE",
        "price": "400",
        "desc": "",
        "addUrl": "https://orders.tamannahotels.com/"
      },
      {
        "name": "EGGLESS CHOCOLATE TRUFFLE CAKE",
        "price": "400",
        "desc": "",
        "addUrl": "https://orders.tamannahotels.com/"
      },
      {
        "name": "CHOCOLATE WALNUTS",
        "price": "450",
        "desc": "",
        "addUrl": "https://orders.tamannahotels.com/"
      },
      {
        "name": "CHOCOLATE ALMOND",
        "price": "450",
        "desc": "",
        "addUrl": "https://orders.tamannahotels.com/"
      },
      {
        "name": "MIX FRUIT CAKE",
        "price": "450",
        "desc": "",
        "addUrl": "https://orders.tamannahotels.com/"
      }
    ]
  },
  {
    "category": "(Snacks)",
    "items": [
      {
        "name": "STEAMED IDLI",
        "price": "70",
        "desc": "",
        "addUrl": "https://orders.tamannahotels.com/"
      },
      {
        "name": "FRY IDLI",
        "price": "80",
        "desc": "",
        "addUrl": "https://orders.tamannahotels.com/"
      },
      {
        "name": "BUTTER IDLI",
        "price": "90",
        "desc": "",
        "addUrl": "https://orders.tamannahotels.com/"
      },
      {
        "name": "DAHI IDLI",
        "price": "80",
        "desc": "",
        "addUrl": "https://orders.tamannahotels.com/"
      },
      {
        "name": "IDLI VADA",
        "price": "80",
        "desc": "",
        "addUrl": "https://orders.tamannahotels.com/"
      },
      {
        "name": "MEDU VADA",
        "price": "80",
        "desc": "",
        "addUrl": "https://orders.tamannahotels.com/"
      },
      {
        "name": "POTATO VADA",
        "price": "70",
        "desc": "",
        "addUrl": "https://orders.tamannahotels.com/"
      },
      {
        "name": "SABUDANA VADA",
        "price": "70",
        "desc": "",
        "addUrl": "https://orders.tamannahotels.com/"
      },
      {
        "name": "SABUDANA KHICHDI",
        "price": "70",
        "desc": "",
        "addUrl": "https://orders.tamannahotels.com/"
      },
      {
        "name": "UPMA",
        "price": "60",
        "desc": "",
        "addUrl": "https://orders.tamannahotels.com/"
      },
      {
        "name": "POHA",
        "price": "60",
        "desc": "",
        "addUrl": "https://orders.tamannahotels.com/"
      },
      {
        "name": "POTATO FINGER CHIPS",
        "price": "110",
        "desc": "",
        "addUrl": "https://orders.tamannahotels.com/"
      },
      {
        "name": "MIX PAKODA",
        "price": "110",
        "desc": "",
        "addUrl": "https://orders.tamannahotels.com/"
      },
      {
        "name": "MISAL PAV",
        "price": "80",
        "desc": "",
        "addUrl": "https://orders.tamannahotels.com/"
      },
      {
        "name": "DAHI MISAL PAV",
        "price": "110",
        "desc": "",
        "addUrl": "https://orders.tamannahotels.com/"
      }
    ]
  },
  {
    "category": "(Dosa)",
    "items": [
      {
        "name": "PLAIN DOSA",
        "price": "70",
        "desc": "",
        "addUrl": "https://orders.tamannahotels.com/"
      },
      {
        "name": "BUTTER DOSA",
        "price": "80",
        "desc": "",
        "addUrl": "https://orders.tamannahotels.com/"
      },
      {
        "name": "CHEESE DOSA",
        "price": "100",
        "desc": "",
        "addUrl": "https://orders.tamannahotels.com/"
      },
      {
        "name": "MASALA DOSA",
        "price": "90",
        "desc": "",
        "addUrl": "https://orders.tamannahotels.com/"
      },
      {
        "name": "SPRING DOSA",
        "price": "110",
        "desc": "",
        "addUrl": "https://orders.tamannahotels.com/"
      },
      {
        "name": "PANEER DOSA",
        "price": "120",
        "desc": "",
        "addUrl": "https://orders.tamannahotels.com/"
      },
      {
        "name": "BUTTER MASALA DOSA",
        "price": "110",
        "desc": "",
        "addUrl": "https://orders.tamannahotels.com/"
      },
      {
        "name": "CHEESE MASALA DOSA",
        "price": "120",
        "desc": "",
        "addUrl": "https://orders.tamannahotels.com/"
      },
      {
        "name": "PLAIN MYSORE DOSA",
        "price": "80",
        "desc": "",
        "addUrl": "https://orders.tamannahotels.com/"
      },
      {
        "name": "BUTTER MYSORE DOSA",
        "price": "90",
        "desc": "",
        "addUrl": "https://orders.tamannahotels.com/"
      },
      {
        "name": "CHEESE MYSORE DOSA",
        "price": "110",
        "desc": "",
        "addUrl": "https://orders.tamannahotels.com/"
      },
      {
        "name": "NEER DOSA",
        "price": "70",
        "desc": "",
        "addUrl": "https://orders.tamannahotels.com/"
      },
      {
        "name": "NEER BUTTER DOSA",
        "price": "90",
        "desc": "",
        "addUrl": "https://orders.tamannahotels.com/"
      },
      {
        "name": "PLAIN NACHNI DOSA",
        "price": "90",
        "desc": "",
        "addUrl": "https://orders.tamannahotels.com/"
      },
      {
        "name": "BUTTER NACHNI DOSA",
        "price": "100",
        "desc": "",
        "addUrl": "https://orders.tamannahotels.com/"
      },
      {
        "name": "CHEESE NACHNI DOSA",
        "price": "120",
        "desc": "",
        "addUrl": "https://orders.tamannahotels.com/"
      },
      {
        "name": "NACHNI MASALA DOSA",
        "price": "110",
        "desc": "",
        "addUrl": "https://orders.tamannahotels.com/"
      },
      {
        "name": "BUTTER NACHNI MASALA DOSA",
        "price": "120",
        "desc": "",
        "addUrl": "https://orders.tamannahotels.com/"
      },
      {
        "name": "CHEESE NACHNI MASALA DOSA",
        "price": "140",
        "desc": "",
        "addUrl": "https://orders.tamannahotels.com/"
      }
    ]
  },
  {
    "category": "(Uttapam)",
    "items": [
      {
        "name": "PLAIN UTTAPAM",
        "price": "70",
        "desc": "",
        "addUrl": "https://orders.tamannahotels.com/"
      },
      {
        "name": "BUTTER UTTAPAM",
        "price": "80",
        "desc": "",
        "addUrl": "https://orders.tamannahotels.com/"
      },
      {
        "name": "CHEESE UTTAPAM",
        "price": "100",
        "desc": "",
        "addUrl": "https://orders.tamannahotels.com/"
      },
      {
        "name": "ONION UTTAPAM",
        "price": "80",
        "desc": "",
        "addUrl": "https://orders.tamannahotels.com/"
      },
      {
        "name": "BUTTER ONION UTTAPAM",
        "price": "90",
        "desc": "",
        "addUrl": "https://orders.tamannahotels.com/"
      },
      {
        "name": "CHEESE ONION UTTAPAM",
        "price": "110",
        "desc": "",
        "addUrl": "https://orders.tamannahotels.com/"
      },
      {
        "name": "TOMATO UTTAPAM",
        "price": "90",
        "desc": "",
        "addUrl": "https://orders.tamannahotels.com/"
      },
      {
        "name": "BUTTER TOMATO UTTAPAM",
        "price": "100",
        "desc": "",
        "addUrl": "https://orders.tamannahotels.com/"
      },
      {
        "name": "CHEESE TOMATO UTTAPAM",
        "price": "130",
        "desc": "",
        "addUrl": "https://orders.tamannahotels.com/"
      },
      {
        "name": "TOMATO ONION UTTAPAM",
        "price": "100",
        "desc": "",
        "addUrl": "https://orders.tamannahotels.com/"
      },
      {
        "name": "BUTTER TOMATO ONION UTTAPAM",
        "price": "110",
        "desc": "",
        "addUrl": "https://orders.tamannahotels.com/"
      },
      {
        "name": "CHEESE TOMATO ONION UTTAPAM",
        "price": "130",
        "desc": "",
        "addUrl": "https://orders.tamannahotels.com/"
      },
      {
        "name": "VEGETABLE UTTAPAM",
        "price": "100",
        "desc": "",
        "addUrl": "https://orders.tamannahotels.com/"
      },
      {
        "name": "MASALA UTTAPAM",
        "price": "110",
        "desc": "",
        "addUrl": "https://orders.tamannahotels.com/"
      },
      {
        "name": "BUTTER MASALA UTTAPAM",
        "price": "120",
        "desc": "",
        "addUrl": "https://orders.tamannahotels.com/"
      },
      {
        "name": "CHEESE MASALA UTTAPAM",
        "price": "140",
        "desc": "",
        "addUrl": "https://orders.tamannahotels.com/"
      },
      {
        "name": "COCONUT UTTAPAM",
        "price": "110",
        "desc": "",
        "addUrl": "https://orders.tamannahotels.com/"
      },
      {
        "name": "BUTTER COCONUT UTTAPAM",
        "price": "120",
        "desc": "",
        "addUrl": "https://orders.tamannahotels.com/"
      },
      {
        "name": "CHEESE COCONUT UTTAPAM",
        "price": "140",
        "desc": "",
        "addUrl": "https://orders.tamannahotels.com/"
      },
      {
        "name": "TOMATO OMELETTE",
        "price": "110",
        "desc": "",
        "addUrl": "https://orders.tamannahotels.com/"
      },
      {
        "name": "BUTTER TOMATO UTTAPAM",
        "price": "120",
        "desc": "",
        "addUrl": "https://orders.tamannahotels.com/"
      },
      {
        "name": "CHEESE TOMATO UTTAPAM",
        "price": "140",
        "desc": "",
        "addUrl": "https://orders.tamannahotels.com/"
      },
      {
        "name": "BUTTER SET DOSA",
        "price": "100",
        "desc": "",
        "addUrl": "https://orders.tamannahotels.com/"
      },
      {
        "name": "CHEESE SET DOSA",
        "price": "120",
        "desc": "",
        "addUrl": "https://orders.tamannahotels.com/"
      },
      {
        "name": "SPECIAL BUTTER SET DOSA",
        "price": "100",
        "desc": "",
        "addUrl": "https://orders.tamannahotels.com/"
      },
      {
        "name": "SPECIAL CHEESE SET DOSA",
        "price": "120",
        "desc": "",
        "addUrl": "https://orders.tamannahotels.com/"
      },
      {
        "name": "COCONUT SET DOSA",
        "price": "120",
        "desc": "",
        "addUrl": "https://orders.tamannahotels.com/"
      },
      {
        "name": "BUTTER COCONUT SET DOSA",
        "price": "130",
        "desc": "",
        "addUrl": "https://orders.tamannahotels.com/"
      },
      {
        "name": "CHEESE COCONUT SET DOSA",
        "price": "150",
        "desc": "",
        "addUrl": "https://orders.tamannahotels.com/"
      },
      {
        "name": "SCHEZWAN DOSA",
        "price": "110",
        "desc": "",
        "addUrl": "https://orders.tamannahotels.com/"
      },
      {
        "name": "CUT DOSA",
        "price": "110",
        "desc": "",
        "addUrl": "https://orders.tamannahotels.com/"
      }
    ]
  },
  {
    "category": "(Packed Meals (Only for Parcels))",
    "items": [
      {
        "name": "VEGETARIAN PACKED MEALS",
        "price": "250",
        "desc": "Veg starter, 2 special vegetables, dal, rice, salad, roti, dessert",
        "addUrl": "https://orders.tamannahotels.com/"
      },
      {
        "name": "NON VEGETARIAN PACKED MEALS",
        "price": "350",
        "desc": "Non veg starter, 1 special vegetable, non veg main course, rice, salad, roti, dessert",
        "addUrl": "https://orders.tamannahotels.com/"
      }
    ]
  },
  {
    "category": "(Beverages- Hot Beverages)",
    "items": [
      {
        "name": "SPECIAL TEA",
        "price": "40",
        "desc": "",
        "addUrl": "https://orders.tamannahotels.com/"
      },
      {
        "name": "NES COFFEE",
        "price": "50",
        "desc": "",
        "addUrl": "https://orders.tamannahotels.com/"
      },
      {
        "name": "BOURNVITA (GLASS)",
        "price": "70",
        "desc": "",
        "addUrl": "https://orders.tamannahotels.com/"
      },
      {
        "name": "SWEET HOT MILK (GLASS)",
        "price": "70",
        "desc": "",
        "addUrl": "https://orders.tamannahotels.com/"
      }
    ]
  },
  {
    "category": "(Cold Beverages)",
    "items": [
      {
        "name": "FRESH JUICE (SEASONAL)",
        "price": "130",
        "desc": "Orange, pineapple, apple, sweet lime, mango",
        "addUrl": "https://orders.tamannahotels.com/"
      },
      {
        "name": "BANANA MILKSHAKE",
        "price": "130",
        "desc": "",
        "addUrl": "https://orders.tamannahotels.com/"
      },
      {
        "name": "STRAWBERRY MILKSHAKE",
        "price": "130",
        "desc": "",
        "addUrl": "https://orders.tamannahotels.com/"
      },
      {
        "name": "VANILLA MILKSHAKE",
        "price": "130",
        "desc": "",
        "addUrl": "https://orders.tamannahotels.com/"
      },
      {
        "name": "MANGO MILKSHAKE",
        "price": "130",
        "desc": "",
        "addUrl": "https://orders.tamannahotels.com/"
      },
      {
        "name": "MILKSHAKE WITH ICE CREAM",
        "price": "160",
        "desc": "",
        "addUrl": "https://orders.tamannahotels.com/"
      },
      {
        "name": "MASTANI",
        "price": "160",
        "desc": "",
        "addUrl": "https://orders.tamannahotels.com/"
      },
      {
        "name": "SWEET LASSI",
        "price": "100",
        "desc": "",
        "addUrl": "https://orders.tamannahotels.com/"
      },
      {
        "name": "SALTED LASSI",
        "price": "70",
        "desc": "",
        "addUrl": "https://orders.tamannahotels.com/"
      },
      {
        "name": "COLD COFFEE",
        "price": "110",
        "desc": "",
        "addUrl": "https://orders.tamannahotels.com/"
      },
      {
        "name": "COLD COFFEE WITH ICE CREAM",
        "price": "140",
        "desc": "",
        "addUrl": "https://orders.tamannahotels.com/"
      },
      {
        "name": "ICED TEA",
        "price": "90",
        "desc": "",
        "addUrl": "https://orders.tamannahotels.com/"
      },
      {
        "name": "BUTTER MILK",
        "price": "70",
        "desc": "",
        "addUrl": "https://orders.tamannahotels.com/"
      },
      {
        "name": "JALJEERA SODA",
        "price": "70",
        "desc": "",
        "addUrl": "https://orders.tamannahotels.com/"
      },
      {
        "name": "FRESH LIME WATER",
        "price": "50",
        "desc": "",
        "addUrl": "https://orders.tamannahotels.com/"
      },
      {
        "name": "FRESH LIME SODA",
        "price": "70",
        "desc": "",
        "addUrl": "https://orders.tamannahotels.com/"
      },
      {
        "name": "ROSE FALOODA",
        "price": "160",
        "desc": "",
        "addUrl": "https://orders.tamannahotels.com/"
      },
      {
        "name": "KESAR FALOODA",
        "price": "190",
        "desc": "",
        "addUrl": "https://orders.tamannahotels.com/"
      },
      {
        "name": "PACKAGED DRINKING WATER",
        "price": "40",
        "desc": "",
        "addUrl": "https://orders.tamannahotels.com/"
      },
      {
        "name": "COLD DRINKS PET BOTTLE (250 ML)",
        "price": "40",
        "desc": "",
        "addUrl": "https://orders.tamannahotels.com/"
      },
      {
        "name": "COLD DRINKS CAN (330 ML)",
        "price": "55",
        "desc": "",
        "addUrl": "https://orders.tamannahotels.com/"
      },
      {
        "name": "DIET COKE",
        "price": "70",
        "desc": "",
        "addUrl": "https://orders.tamannahotels.com/"
      },
      {
        "name": "DIET PEPSI",
        "price": "70",
        "desc": "",
        "addUrl": "https://orders.tamannahotels.com/"
      },
      {
        "name": "SODA",
        "price": "35",
        "desc": "",
        "addUrl": "https://orders.tamannahotels.com/"
      },
      {
        "name": "TONIC WATER",
        "price": "90",
        "desc": "",
        "addUrl": "https://orders.tamannahotels.com/"
      },
      {
        "name": "RED BULL",
        "price": "160",
        "desc": "",
        "addUrl": "https://orders.tamannahotels.com/"
      }
    ]
  },
  {
    "category": "(Desserts)",
    "items": [
      {
        "name": "BUTTERSCOTCH ICE CREAM",
        "price": "120",
        "desc": "",
        "addUrl": "https://orders.tamannahotels.com/"
      },
      {
        "name": "VANILLA ICE CREAM",
        "price": "120",
        "desc": "",
        "addUrl": "https://orders.tamannahotels.com/"
      },
      {
        "name": "KESAR PISTA ICE CREAM",
        "price": "120",
        "desc": "",
        "addUrl": "https://orders.tamannahotels.com/"
      },
      {
        "name": "MANGO ICE CREAM",
        "price": "120",
        "desc": "",
        "addUrl": "https://orders.tamannahotels.com/"
      },
      {
        "name": "STRAWBERRY ICE CREAM",
        "price": "120",
        "desc": "",
        "addUrl": "https://orders.tamannahotels.com/"
      },
      {
        "name": "CHOCOLATE ICE CREAM",
        "price": "120",
        "desc": "",
        "addUrl": "https://orders.tamannahotels.com/"
      },
      {
        "name": "VANILLA WITH HOT CHOCOLATE",
        "price": "150",
        "desc": "",
        "addUrl": "https://orders.tamannahotels.com/"
      },
      {
        "name": "FRESH FRUIT SALAD",
        "price": "135",
        "desc": "",
        "addUrl": "https://orders.tamannahotels.com/"
      },
      {
        "name": "FRESH FRUIT SALAD WITH ICE CREAM",
        "price": "160",
        "desc": "",
        "addUrl": "https://orders.tamannahotels.com/"
      },
      {
        "name": "FRESH FRUIT SALAD WITH CREAM",
        "price": "170",
        "desc": "",
        "addUrl": "https://orders.tamannahotels.com/"
      },
      {
        "name": "SUNDAE",
        "price": "140",
        "desc": "customizable",
        "addUrl": "https://orders.tamannahotels.com/"
      },
      {
        "name": "FRUIT CUSTARD",
        "price": "150",
        "desc": "",
        "addUrl": "https://orders.tamannahotels.com/"
      },
      {
        "name": "HOT CHOCOLATE FUDGE",
        "price": "155",
        "desc": "",
        "addUrl": "https://orders.tamannahotels.com/"
      },
      {
        "name": "HOT CHOCOLATE FUDGE WITH ICE CREAM",
        "price": "185",
        "desc": "",
        "addUrl": "https://orders.tamannahotels.com/"
      },
      {
        "name": "HOT CHOCOLATE BROWNIE",
        "price": "155",
        "desc": "",
        "addUrl": "https://orders.tamannahotels.com/"
      },
      {
        "name": "HOT CHOCOLATE BROWNIE WITH ICE CREAM",
        "price": "190",
        "desc": "",
        "addUrl": "https://orders.tamannahotels.com/"
      },
      {
        "name": "CHOCOLATE MOUSSE",
        "price": "90",
        "desc": "",
        "addUrl": "https://orders.tamannahotels.com/"
      },
      {
        "name": "MANGO MOUSSE",
        "price": "90",
        "desc": "",
        "addUrl": "https://orders.tamannahotels.com/"
      },
      {
        "name": "SIZZLING BROWNIE",
        "price": "210",
        "desc": "",
        "addUrl": "https://orders.tamannahotels.com/"
      },
      {
        "name": "MALAI KULFI",
        "price": "90",
        "desc": "",
        "addUrl": "https://orders.tamannahotels.com/"
      },
      {
        "name": "MATKA KULFI",
        "price": "130",
        "desc": "",
        "addUrl": "https://orders.tamannahotels.com/"
      },
      {
        "name": "CASSATA",
        "price": "100",
        "desc": "",
        "addUrl": "https://orders.tamannahotels.com/"
      },
      {
        "name": "PASTRIES",
        "price": "80",
        "desc": "",
        "addUrl": "https://orders.tamannahotels.com/"
      }
    ]
  }
];
