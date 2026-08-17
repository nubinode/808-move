// 808 MOVE - Comprehensive Bali Transport Dataset

export const CURRENCY_RATES = {
  IDR: { code: 'IDR', symbol: 'Rp ', rate: 1, format: (val) => 'Rp ' + val.toLocaleString('id-ID') },
  AUD: { code: 'AUD', symbol: 'A$', rate: 0.000098, format: (val) => 'A$ ' + Math.round(val * 0.000098) },
  USD: { code: 'USD', symbol: '$', rate: 0.000063, format: (val) => '$' + Math.round(val * 0.000063) },
  EUR: { code: 'EUR', symbol: '€', rate: 0.000058, format: (val) => '€' + Math.round(val * 0.000058) },
  SGD: { code: 'SGD', symbol: 'S$', rate: 0.000085, format: (val) => 'S$ ' + Math.round(val * 0.000085) }
};

export const CARS_DATA = [
  {
    id: 'honda-brio',
    name: 'Honda Brio RS',
    category: 'Economy',
    type: 'Hatchback',
    tag: 'Best for Canggu & Seminyak',
    badge: 'Popular',
    featured: true,
    pricePerDay: 275000,
    priceWithDriver: 550000,
    image: 'https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80'
    ],
    seats: 5,
    luggage: 2,
    transmission: 'Automatic',
    fuel: 'Petrol (Bensin)',
    engine: '1.2L i-VTEC',
    ac: 'Dual Zone AC',
    features: ['Bluetooth Audio', 'Apple CarPlay & Android Auto', 'USB Charging Port', 'Rear Parking Sensors', 'Compact Easy Parking', 'Ultra Fuel Efficient'],
    included: ['Free Airport / South Bali Delivery', 'Unlimited Mileage within Bali', 'Standard Insurance (CDW)', '24/7 Roadside Assistance', 'Disinfected & Sanitized Vehicle'],
    description: 'The ultimate agile city car for navigating Bali’s vibrant narrow streets in Canggu, Seminyak, and Kuta. Extremely fuel-efficient with responsive air conditioning and easy parking anywhere.'
  },
  {
    id: 'toyota-avanza',
    name: 'Toyota All New Avanza',
    category: 'MPV',
    type: 'Family MPV',
    tag: 'Bali’s Most Reliable Family Car',
    badge: 'Best Value',
    featured: true,
    pricePerDay: 350000,
    priceWithDriver: 600000,
    image: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=1200&q=80'
    ],
    seats: 7,
    luggage: 4,
    transmission: 'Automatic (CVT)',
    fuel: 'Petrol',
    engine: '1.5L Dual VVT-i',
    ac: 'Double Blower AC',
    features: ['7-Seater Spacious Cabin', '9-inch Touchscreen Display', 'Reverse Camera', 'Dual Airbags', 'Foldable 3rd Row', 'USB Fast Chargers'],
    included: ['Free Hotel / Airport Delivery', 'Unlimited Mileage in Bali Island', 'Basic Insurance with 24/7 Hotline', 'Clean & Odorless Guarantee', 'Emergency Tool Kit & Spare Tire'],
    description: 'The undisputed champion for family trips across Bali. Spacious 7-seater layout, high ground clearance, double blower AC, and smooth CVT transmission for exploring Ubud and beaches.'
  },
  {
    id: 'mitsubishi-xpander',
    name: 'Mitsubishi Xpander Cross',
    category: 'MPV',
    type: 'Crossover MPV',
    tag: 'Premium Comfort & High Clearance',
    badge: 'Customer Choice',
    featured: true,
    pricePerDay: 425000,
    priceWithDriver: 650000,
    image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&w=1200&q=80'
    ],
    seats: 7,
    luggage: 5,
    transmission: 'Automatic',
    fuel: 'Petrol',
    engine: '1.5L MIVEC DOHC',
    ac: 'Digital Double Blower AC',
    features: ['Extra High Ground Clearance (225mm)', 'Premium Leatherette Seats', 'Cruise Control', 'Wireless Smartphone Charger', '360 Bird-Eye Camera', 'Quiet Cabin Insulation'],
    included: ['Free Delivery to Airport & Villa', 'Unlimited Mileage', 'Full CDW Insurance Available', '24/7 Road Assistance', 'Fresh Sanitized Fleet'],
    description: 'Combining SUV toughness with MPV luxury. High ground clearance perfect for Uluwatu cliff roads and Bedugul mountain trips, featuring quiet cabin insulation and plush seating.'
  },
  {
    id: 'toyota-innova-zenix',
    name: 'Toyota Innova Zenix Hybrid',
    category: 'SUV',
    type: 'Hybrid Premium MPV',
    tag: 'Eco-Luxury & Supreme Smoothness',
    badge: 'Top Premium',
    featured: true,
    pricePerDay: 650000,
    priceWithDriver: 900000,
    image: 'https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1553440569-bcc63803a83d?auto=format&fit=crop&w=1200&q=80'
    ],
    seats: 7,
    luggage: 5,
    transmission: 'e-CVT Automatic',
    fuel: 'Hybrid (Petrol-Electric)',
    engine: '2.0L TNGA Hybrid EV',
    ac: 'Panoramic Digital Climate Control',
    features: ['Hybrid Eco & EV Silent Drive', 'Captain Seat Configuration', 'Panoramic Sunroof', 'Toyota Safety Sense 3.0', '10-inch Dual Rear Screens', 'Electric Tailgate'],
    included: ['VIP Fast-Delivery to DPS Airport', 'Comprehensive Insurance', '24/7 English Concierge Support', 'Complimentary Cold Towels & Bottled Water (with driver)', 'Unlimited Mileage'],
    description: 'The pinnacle of modern touring comfort in Bali. Ultra-smooth hybrid powertrain, whisper-quiet cabin, panoramic sunroof for scenic mountain drives in Kintamani, and royal second-row comfort.'
  },
  {
    id: 'toyota-fortuner-gr',
    name: 'Toyota Fortuner GR Sport 4x2',
    category: 'SUV',
    type: 'Full-Size Luxury SUV',
    tag: 'Dominant Power & Island Presence',
    badge: 'VIP Adventure',
    featured: true,
    pricePerDay: 850000,
    priceWithDriver: 1100000,
    image: 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1506015391300-4802dc74de2e?auto=format&fit=crop&w=1200&q=80'
    ],
    seats: 7,
    luggage: 6,
    transmission: 'Automatic 6-Speed',
    fuel: 'Diesel (Euro 4)',
    engine: '2.8L 1GD-FTV Turbo Diesel',
    ac: 'Automatic Dual Climate',
    features: ['High Torque 204 PS Engine', 'GR Sport Aerokit & Suspension', 'Blind Spot Monitor', 'JBL Premium Surround Sound', 'Power Backdoor with Kick Sensor', 'Full Leather Interior'],
    included: ['Free Airport VIP Meet & Greet', 'Unlimited Island Mileage', 'Comprehensive Insurance', '24/7 Road Rescue Service', 'Sanitized & Cleaned Daily'],
    description: 'Commanding power and prestigious road presence. Ideal for exploring rugged East Bali, Mount Batur sunrise trails, and luxury beach hopping along the South Coast.'
  },
  {
    id: 'toyota-alphard',
    name: 'Toyota Alphard Transformer VIP',
    category: 'Luxury',
    type: 'VIP Presidential Van',
    tag: 'First-Class Executive Luxury',
    badge: 'Ultimate Luxury',
    featured: true,
    pricePerDay: 1800000,
    priceWithDriver: 2200000,
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=1200&q=80'
    ],
    seats: 6,
    luggage: 6,
    transmission: 'Automatic',
    fuel: 'Petrol',
    engine: '2.5L Dual VVT-i',
    ac: 'Nanoe Multi-Zone Climate Control',
    features: ['Executive Ottoman Captain Seats with Massage', 'Dual Power Sunroof', 'Ambient 16-Color Ceiling Lighting', 'Privacy VIP Curtains', 'Rear Entertainment Monitor', 'Twin Electric Sliding Doors'],
    included: ['Uniformed English-Speaking Chauffeur', 'Complimentary Premium Refreshments', 'VIP Airport Fast-Track Welcome', 'Unlimited Mileage', 'Complete Luxury Insurance'],
    description: 'First-class luxury on wheels for discerning travelers, wedding parties, VIP executives, and luxury villa guests in Seminyak, Uluwatu, and Nusa Dua.'
  },
  {
    id: 'toyota-hiace-premio',
    name: 'Toyota HiAce Premio Luxury',
    category: 'Luxury',
    type: 'Luxury Group Minibus',
    tag: 'Group Travel in Total Comfort',
    badge: 'Group Choice',
    featured: false,
    pricePerDay: 1200000,
    priceWithDriver: 1450000,
    image: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=800&q=80',
    gallery: ['https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=1200&q=80'],
    seats: 12,
    luggage: 10,
    transmission: 'Manual / Automatic',
    fuel: 'Diesel',
    engine: '2.8L Turbo Diesel',
    ac: 'Individual Air Vents for All 12 Seats',
    features: ['12 Reclining Plush Seats', 'Spacious Center Walkway', 'USB Charger at Each Seat', 'Large Luggage Compartment', 'High Roof Standing Room', 'Smooth Soft Suspension'],
    included: ['Professional Experienced Tour Driver', 'Fuel & Parking Fees', 'Mineral Water for All Guests', '24/7 Dispatch Concierge', 'Door-to-door Pick-up'],
    description: 'The preferred choice for corporate groups, weddings, and extended families traveling together across Bali without splitting into multiple small cars.'
  },
  {
    id: 'suzuki-jimny',
    name: 'Suzuki Jimny 4x4 Iconic',
    category: 'SUV',
    type: 'Compact 4WD Adventure',
    tag: 'Iconic Style & Tropical Freedom',
    badge: 'Adventure Special',
    featured: false,
    pricePerDay: 750000,
    priceWithDriver: 1000000,
    image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=800&q=80',
    gallery: ['https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=1200&q=80'],
    seats: 4,
    luggage: 2,
    transmission: 'Automatic 4WD',
    fuel: 'Petrol',
    engine: '1.5L K15B 4WD',
    ac: 'Automatic Climate Control',
    features: ['True ALLGRIP PRO 4WD System', 'Iconic Retro Styling', 'Touchscreen with Apple CarPlay', 'High Clearance for Off-road & Beach', 'Roof Rack Compatible'],
    included: ['Free Airport Pick-up', 'Comprehensive Off-road Insurance', 'Emergency Towing Hotline', 'Sanitized & Cleaned', 'Unlimited Mileage'],
    description: 'Turn heads across Canggu beach roads and conquer hidden black sand beaches in West Bali with the iconic Suzuki Jimny 4WD.'
  }
];

export const AIRPORT_RATES = [
  { zone: 'Zone 1', areas: 'Tuban, Kuta, Legian, Airport Area', standardPrice: 150000, vanPrice: 300000, alphardPrice: 650000, time: '15 - 25 mins' },
  { zone: 'Zone 2', areas: 'Seminyak, Kerobokan, Sanur, Jimbaran', standardPrice: 200000, vanPrice: 350000, alphardPrice: 750000, time: '25 - 40 mins' },
  { zone: 'Zone 3', areas: 'Canggu, Pererenan, Nusa Dua, Benoa, Uluwatu', standardPrice: 275000, vanPrice: 450000, alphardPrice: 950000, time: '40 - 65 mins' },
  { zone: 'Zone 4', areas: 'Ubud Center, Tanah Lot, Tabanan City', standardPrice: 350000, vanPrice: 550000, alphardPrice: 1200000, time: '60 - 90 mins' },
  { zone: 'Zone 5', areas: 'Sidemen, Padangbai, Kintamani, Bedugul', standardPrice: 550000, vanPrice: 850000, alphardPrice: 1700000, time: '90 - 120 mins' },
  { zone: 'Zone 6', areas: 'Amed, Tulamben, Lovina, Pemuteran, West Bali', standardPrice: 750000, vanPrice: 1100000, alphardPrice: 2400000, time: '120 - 180 mins' }
];

export const DRIVER_PACKAGES = [
  {
    id: 'half-day',
    name: 'Half Day Quick Escape',
    duration: '6 Hours',
    price: 450000,
    car: 'All New Avanza / Xpander',
    inclusions: ['English-speaking friendly driver', 'Petrol / Fuel included', 'Air-conditioned modern car', 'Parking fees for 3 spots', 'Mineral water bottles'],
    description: 'Perfect for airport arrival day, evening sunset tour in Uluwatu, or a quick shopping & dinner trip around Seminyak & Canggu.',
    popular: false
  },
  {
    id: 'full-day-10h',
    name: 'Full Day Island Discovery',
    duration: '10 Hours',
    price: 650000,
    car: 'All New Avanza / Xpander / Brio',
    inclusions: ['English-speaking friendly driver', 'Full tank fuel included', 'Flexible custom itinerary', 'All main parking & toll fees', 'Driver meal included', 'Chilled bottled mineral water'],
    description: 'The most popular package to explore Central Bali: Ubud Monkey Forest, Tegallalang Rice Terrace, Tegenungan Waterfall, and scenic coffee plantations.',
    popular: true
  },
  {
    id: 'extended-12h',
    name: 'Grand Island Explorer',
    duration: '12 Hours',
    price: 750000,
    car: 'All New Avanza / Xpander Cross',
    inclusions: ['English-speaking professional driver', 'Full day fuel & mountain surcharge', 'Custom sunrise or sunset itinerary', 'All parking & highway tolls', 'Driver meal & refreshments', 'Zero overtime stress'],
    description: 'Ideal for far-reaching day trips like Mount Batur Kintamani sunrise, Ulun Danu Beratan Bedugul, Lempuyang Heaven’s Gate, or East Bali tours.',
    popular: false
  },
  {
    id: 'vip-zenix-driver',
    name: 'VIP Executive Chauffeur (Innova Zenix)',
    duration: '10 Hours',
    price: 950000,
    car: 'Innova Zenix Hybrid Luxury',
    inclusions: ['Uniformed VIP chauffeur', 'Eco-hybrid whisper drive', 'Fuel & all tollway passes', 'Cold face towels & fresh drinks', 'Priority airport fast-track coordination', 'VIP concierge assistance'],
    description: 'Executive-class touring for couples, luxury villa stays, and VIP guests demanding whisper-quiet hybrid travel across Bali.',
    popular: false
  }
];

export const BALI_GUIDES = [
  {
    id: 'ubud-cultural-heart',
    title: 'Ubud: The Cultural & Waterfall Heartland',
    region: 'Central Bali',
    readTime: '4 min read',
    image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=800&q=80',
    difficulty: 'Moderate (Winding & Scenic Roads)',
    bestCar: 'Toyota Avanza / Innova Zenix',
    highlights: ['Tegallalang Rice Terraces', 'Tukad Cepung Waterfall', 'Ubud Art Market & Royal Palace', 'Campuhan Ridge Walk'],
    drivingTips: 'Roads around Ubud center can be congested between 3 PM - 6 PM. For waterfalls like Tibumana or Tukad Cepung, having an MPV with good ground clearance provides superior peace of mind.'
  },
  {
    id: 'uluwatu-bukit-cliffs',
    title: 'Uluwatu: Sunset Cliffs & World-Class Beaches',
    region: 'South Bali',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&w=800&q=80',
    difficulty: 'Easy to Moderate (Wide roads, steep beach inclines)',
    bestCar: 'Mitsubishi Xpander / Toyota Fortuner',
    highlights: ['Uluwatu Sunset Temple & Kecak Dance', 'Melasti Beach & White Rock Club', 'Padang Padang & Bingin Surf Beach', 'Jimbaran Bay Seafood Sunset'],
    drivingTips: 'The Mandara Toll Road offers a breathtaking drive across the water straight from the airport. Access to some cliffside beach clubs has steep entry roads, making automatic transmission highly recommended.'
  },
  {
    id: 'canggu-seminyak-coastal',
    title: 'Canggu & Seminyak: Beach Clubs & Cafes',
    region: 'South-West Coast',
    readTime: '3 min read',
    image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=800&q=80',
    difficulty: 'Narrow streets with busy scooter traffic',
    bestCar: 'Honda Brio RS (Compact King)',
    highlights: ['Echo Beach & Batu Bolong Sunsets', 'Trendy Cafes in Pererenan', 'Finns & Atlas Beach Clubs', 'Seminyak Boutique Shopping'],
    drivingTips: 'Shortcuts (gang) in Canggu are famous for narrow widths. A compact city hatchback like the Honda Brio RS allows you to park effortlessly in front of cafes and weave smoothly through traffic.'
  },
  {
    id: 'kintamani-mount-batur',
    title: 'Kintamani & Mount Batur: Highland Volcanic Vistas',
    region: 'North-East Highlands',
    readTime: '4 min read',
    image: 'https://images.unsplash.com/photo-1506015391300-4802dc74de2e?auto=format&fit=crop&w=800&q=80',
    difficulty: 'Steep hill climbs & cool mountain fog',
    bestCar: 'Toyota Fortuner GR / Innova Zenix',
    highlights: ['Mount Batur Sunrise Overlook Cafes', 'Lake Batur Natural Hot Springs', 'Black Lava Jeep Excursions', 'Pura Ulun Danu Batur'],
    drivingTips: 'Highland temperatures drop to 18°C. Ensure your car has responsive brakes and strong torque for continuous uphill climbs. An automatic SUV makes the 1.5-hour climb completely effortless.'
  }
];

export const PACKAGES_DATA = [
  {
    id: '3d2n-island-freedom',
    name: '3D2N Island Freedom Package',
    duration: '3 Days, 2 Nights',
    price: 950000,
    car: 'Honda Brio RS / All New Avanza',
    badge: 'Weekend Special',
    inclusions: [
      '3x 24h Self-Drive Car Rental',
      'Free Airport Pick-up & Return at DPS Airport',
      'Unlimited Mileage across all Bali regencies',
      'Complimentary Bali Tourist SIM Card (25GB Data)',
      'Basic CDW Insurance Included'
    ],
    perfectFor: 'Couples, digital nomads, and short weekend getaway travelers.'
  },
  {
    id: '5d4n-family-escape',
    name: '5D4N Family Holiday Escape',
    duration: '5 Days, 4 Nights',
    price: 2450000,
    car: 'Mitsubishi Xpander Cross / Innova Reborn',
    badge: 'Family Favorite',
    inclusions: [
      '2 Days Private English-Speaking Chauffeur + 3 Days Self-Drive Freedom',
      '1x Free Toddler / Baby Car Seat for the entire duration',
      'Complimentary Hotel Delivery & Airport Collection',
      'Full CDW Zero-Excess Insurance',
      'Emergency WhatsApp Support Concierge'
    ],
    perfectFor: 'Families with children or small groups wanting a blend of guided tours and relaxed self-exploration.'
  },
  {
    id: '7d6n-grand-bali-tour',
    name: '7D6N Grand Bali Ultimate Road Trip',
    duration: '7 Days, 6 Nights',
    price: 3950000,
    car: 'Toyota Innova Zenix Hybrid / Fortuner SUV',
    badge: 'Ultimate Value',
    inclusions: [
      '7x 24h Full Luxury Self-Drive or Flexible Chauffeur Options',
      'Free VIP Fast-Delivery at Villa / Airport',
      'Unlimited Highway Toll Pass (Bali Mandara)',
      'Free Surfboard Roof Rack (Optional)',
      'Zero Security Deposit for Pre-Verified International Guests',
      '24/7 Roadside Rescue & Flat Tire Assist'
    ],
    perfectFor: 'Explorers who want to cover North, East, South, and Central Bali in supreme comfort.'
  }
];

export const REVIEWS_DATA = [
  {
    id: 1,
    name: 'Liam & Sophie Miller',
    country: 'Melbourne, Australia',
    flag: '🇦🇺',
    rating: 5,
    date: 'August 2026',
    tripType: 'Couple Holiday',
    carUsed: 'Mitsubishi Xpander Cross',
    comment: 'Rented the Xpander Cross for 6 days in Bali. The car was delivered directly to DPS Airport right as we exited customs! Super clean, cold AC, and 808 MOVE team even set up our phone mount. Driving down to Uluwatu and up to Ubud was a breeze. 10/10 service!'
  },
  {
    id: 2,
    name: 'Hendro Wijaya',
    country: 'Jakarta, Indonesia',
    flag: '🇮🇩',
    rating: 5,
    date: 'July 2026',
    tripType: 'Family Vacation',
    carUsed: 'Toyota Innova Zenix Hybrid',
    comment: 'Pelayanan 808 MOVE luar biasa memuaskan! Unit Zenix Hybrid nya masih sangat baru, wangi, dan irit banget bensinnya untuk keliling Kintamani sampai Bedugul. Proses serah terima cepat via WhatsApp tanpa ribet. Pasti akan sewa di sini lagi tiap ke Bali.'
  },
  {
    id: 3,
    name: 'Marcus Reinhardt',
    country: 'Frankfurt, Germany',
    flag: '🇩🇪',
    rating: 5,
    date: 'July 2026',
    tripType: 'Road Trip Explorer',
    carUsed: 'Suzuki Jimny 4x4',
    comment: 'Best car rental experience in Southeast Asia. I wanted a Jimny to explore West Bali and the black sand coast. Handover was on time at my Canggu villa, zero hidden fees, and deposit returned in minutes upon checkout. Highly recommended!'
  },
  {
    id: 4,
    name: 'Chloe Tan',
    country: 'Singapore',
    flag: '🇸🇬',
    rating: 5,
    date: 'June 2026',
    tripType: 'Girls Trip with Driver',
    carUsed: 'Private Driver 10H Package',
    comment: 'We booked the 10-hour day tour with Pak Wayan as our driver. He spoke fluent English, knew all the best photography spots with zero crowd, and drove so smoothly. Truly made our Bali trip stress-free and memorable!'
  }
];

export const FAQS_DATA = [
  {
    category: 'Rental & Requirements',
    items: [
      {
        q: 'What documents do I need to rent a car in Bali?',
        a: 'For International tourists: A valid passport, a national driving license accompanied by an International Driving Permit (IDP), and proof of hotel/flight reservation. For Indonesian citizens: KTP and valid SIM A. We offer a swift digital document verification before your arrival.'
      },
      {
        q: 'Can I rent a car self-drive (lepas kunci)?',
        a: 'Yes! We offer 100% self-drive rental on our entire fleet as well as options with private English-speaking drivers if you prefer to sit back and relax.'
      },
      {
        q: 'Is there a minimum rental duration?',
        a: 'Minimum self-drive rental is 24 hours (1 day). For with-driver services, we offer 6-hour, 10-hour, and 12-hour packages.'
      }
    ]
  },
  {
    category: 'Delivery & Pick-up',
    items: [
      {
        q: 'Where can the car be delivered and picked up?',
        a: 'We provide FREE delivery and pick-up directly at I Gusti Ngurah Rai International Airport (DPS) and major South Bali hotel areas (Kuta, Seminyak, Legian, Sanur, Jimbaran). For locations further out (Ubud, Canggu, Uluwatu, Tanah Lot), a nominal delivery fee applies.'
      },
      {
        q: 'How do I meet the team at Bali DPS Airport?',
        a: 'Our staff will wait for you at the official Arrival Pick-Up Zone holding an 808 MOVE sign with your name. We coordinate via WhatsApp before your flight touches down.'
      }
    ]
  },
  {
    category: 'Insurance & Payment',
    items: [
      {
        q: 'What insurance is included in the rental price?',
        a: 'All our rentals come standard with Third-Party Liability and Basic Collision Damage Waiver (CDW). We also offer an optional Full Protection / Zero Excess Add-On for total peace of mind against minor scratches and dents.'
      },
      {
        q: 'What payment methods are accepted?',
        a: 'We accept Visa/Mastercard Credit & Debit Cards, Indonesian QRIS (GoPay, OVO, Dana, BCA Mobile), Bank Transfer, and Cash on Delivery upon arrival in Bali.'
      },
      {
        q: 'Is there a security deposit?',
        a: 'A refundable security deposit of IDR 500,000 (approx. AUD 50 / USD 35) or equivalent is held and promptly refunded upon safe return of the vehicle.'
      }
    ]
  },
  {
    category: 'Driving in Bali',
    items: [
      {
        q: 'Which side of the road do we drive on in Bali?',
        a: 'In Bali (Indonesia), traffic drives on the LEFT side of the road, and the driver seat is on the RIGHT (same as Australia, UK, Japan, and Singapore).'
      },
      {
        q: 'What is the fuel policy?',
        a: 'We operate on a fair "Same-to-Same" fuel policy. If you receive the car with a full tank, simply return it with a full tank.'
      }
    ]
  }
];

export const ADDONS_DATA = [
  { id: 'baby-seat', name: 'Baby / Toddler Safety Car Seat', pricePerDay: 50000, desc: 'ISOFIX compliant, sanitized for children 0-4 yrs' },
  { id: 'extra-driver', name: 'Additional Registered Driver', pricePerDay: 50000, desc: 'Authorize a 2nd driver under full insurance coverage' },
  { id: 'wifi-pocket', name: 'Unlimited 4G Pocket Wi-Fi', pricePerDay: 45000, desc: 'High-speed internet router for up to 5 devices across Bali' },
  { id: 'full-cdw', name: 'Zero-Excess Full Protection Insurance', pricePerDay: 75000, desc: 'Zero deductible for scratches, minor dings, & glass damage' },
  { id: 'surf-rack', name: 'Rooftop Soft Surfboard Rack', pricePerDay: 60000, desc: 'Holds up to 2 surfboards safely with padded tie-down straps' }
];

export const BLOG_POSTS_DATA = [
  {
    id: 'bali-tourist-tax-2026-guide',
    title: 'Bali Tourist Tax & Visa Regulations 2026: Complete Traveler Guide',
    slug: 'bali-tourist-tax-2026-guide',
    category: 'News & Regulations',
    date: 'August 15, 2026',
    author: '808 Move Editorial',
    readTime: '4 min read',
    image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=800&q=80',
    summary: 'Everything international visitors need to know about the official Love Bali tourism levy, e-VOA entry procedures, and hassle-free airport transit.',
    content: `
      <p>As Bali continues to welcome millions of global travelers in 2026, understanding the latest entry policies, digital visa extensions (e-VOA), and the official Bali Tourism Levy (Love Bali) is essential for a seamless arrival at I Gusti Ngurah Rai International Airport (DPS).</p>
      
      <h3>1. What is the Bali Tourism Levy?</h3>
      <p>The provincial government of Bali mandates a one-time tourism fee of IDR 150,000 (~USD 10 / AUD 15) for international visitors. This fund is dedicated to preserving Bali's unique cultural heritage, temple restoration, and improving island-wide road infrastructure and waste management.</p>
      
      <h3>2. How to Pay Online Before Landing</h3>
      <p>You can pay conveniently before departure through the official portal (lovebali.baliprov.go.id). Upon payment, you receive a digital QR voucher that can be scanned rapidly at airport customs.</p>
      
      <h3>3. Driving Requirements for Foreigners in Bali</h3>
      <p>To rent a self-drive car or scooter legally, foreign nationals must hold a valid International Driving Permit (IDP) alongside their domestic driver's license. At 808 MOVE, our digital verification system checks your documents prior to landing so your rental vehicle is waiting outside arrivals the moment you exit baggage claim.</p>
      
      <blockquote>Tip: Always keep a digital photo of your passport and IDP on your mobile phone for roadside checkpoints.</blockquote>
    `
  },
  {
    id: 'top-hidden-beaches-south-bali-by-car',
    title: 'Top 5 Hidden Beaches in South Bali Accessible by Car',
    slug: 'top-hidden-beaches-south-bali-by-car',
    category: 'Travel Guide',
    date: 'August 10, 2026',
    author: 'Wayan Suardana',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&w=800&q=80',
    summary: 'Escape the tourist crowds and discover pristine turquoise waters, dramatic limestone cliffs, and paved parking access across the Bukit Peninsula.',
    content: `
      <p>While Kuta and Seminyak remain iconic, Bali’s most breathtaking coastal scenery lies hidden along the southern cliffs of the Bukit Peninsula. Here are our top 5 secret beaches with paved car access and parking facilities:</p>
      
      <h3>1. Melasti Beach (Ungasan)</h3>
      <p>Famous for its dramatic winding road carved straight through towering limestone cliffs. Melasti offers crystal-clear lagoons at low tide, upscale beach clubs (White Rock & Tropical Temptation), and expansive parking lots suitable for all car sizes.</p>
      
      <h3>2. Nyang Nyang Beach</h3>
      <p>Previously accessible only via a steep 20-minute hike, Nyang Nyang now features a newly paved cliff road. A capable compact SUV or crossover like the Mitsubishi Xpander Cross makes the ascent effortless.</p>
      
      <h3>3. Thomas Beach (Padang Padang)</h3>
      <p>Tucked between Padang Padang and Suluban, Thomas Beach offers soft white sand, secluded cliff-shack warungs, and tranquil surf breaks with fewer crowds.</p>
      
      <h3>4. Gunung Payung Beach</h3>
      <p>Located near Nusa Dua, Gunung Payung boasts pristine waters, electric shuttle transfers from the cliff top, and serene cave photo spots.</p>
      
      <h3>5. Green Bowl Beach</h3>
      <p>A secluded paradise famous for natural limestone caves and resident monkeys. Best visited early morning during low tide.</p>
    `
  },
  {
    id: 'self-drive-tips-canggu-ubud-shortcuts',
    title: 'Navigating Bali Shortcuts: Essential Self-Drive Tips for Canggu & Ubud',
    slug: 'self-drive-tips-canggu-ubud-shortcuts',
    category: 'Driving Tips',
    date: 'July 28, 2026',
    author: '808 Move Concierge',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=800&q=80',
    summary: 'Master Bali driving etiquette, understand shortcut road rules, and learn why compact automatic cars are ideal for lively cafe districts.',
    content: `
      <p>Driving self-drive in Bali gives you unparalleled freedom to explore hidden waterfalls, beach cafes, and sunrise viewpoints at your own pace. Here are key rules to drive confidently:</p>
      
      <h3>1. Left-Hand Drive Etiquette</h3>
      <p>In Indonesia, traffic moves on the left. The driver sits on the right. If you are from Australia, the UK, Japan, or Singapore, the road orientation will feel completely natural.</p>
      
      <h3>2. Navigating the Canggu & Pererenan Shortcuts</h3>
      <p>Bali's famous shortcuts (like the Canggu Shortcut and Nelayan connecting gang) are narrow single-lane roads bordered by rice fields. We strongly recommend renting a compact hatchback like the <strong>Honda Brio RS</strong> for effortless passing and stress-free villa parking.</p>
      
      <h3>3. Horn Signals as Courtesy</h3>
      <p>In Bali, a gentle quick tap of the horn before blind curves on mountain roads (such as in Ubud, Sidemen, or Bedugul) is not aggression—it is a courteous signal alerting oncoming scooters and cars of your presence.</p>
      
      <h3>4. GPS Navigation Tip</h3>
      <p>Set Google Maps or Waze to <em>"Car Mode"</em> rather than motorcycle mode to avoid being guided down pedestrian-only walking paths.</p>
    `
  },
  {
    id: 'electric-hybrid-car-rental-bali',
    title: 'Why Renting a Hybrid (Innova Zenix) is the Smartest Choice for Bali Mountain Roads',
    slug: 'electric-hybrid-car-rental-bali',
    category: 'Fleet & Eco-Travel',
    date: 'July 18, 2026',
    author: 'Made Arta',
    readTime: '3 min read',
    image: 'https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=800&q=80',
    summary: 'Discover how modern self-charging hybrid technology delivers whisper-quiet mountain touring in Kintamani and Bedugul with 50% better fuel economy.',
    content: `
      <p>Exploring Bali’s highlands—from Mount Batur in Kintamani to the cool crater lakes of Bedugul—involves scenic winding climbs and elevation gains over 1,500 meters above sea level.</p>
      
      <h3>1. Instant Electric Torque for Mountain Inclines</h3>
      <p>The <strong>Toyota Innova Zenix Hybrid</strong> combines a 2.0L petrol engine with a high-output electric motor. When tackling steep inclines, the electric motor delivers immediate torque without gear lag or engine strain.</p>
      
      <h3>2. Whisper-Quiet Cabin Experience</h3>
      <p>Cruising along the panoramic caldera roads in EV silent mode lets you immerse yourself in the natural birdsong and highland mountain tranquility.</p>
      
      <h3>3. Superior Fuel Efficiency</h3>
      <p>With regenerative braking charging the battery on downhill stretches, the Zenix Hybrid achieves over 18-20 km per liter in mixed island driving, cutting your vacation fuel expenses significantly.</p>
    `
  }
];

