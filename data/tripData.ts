export interface BookingLink {
  name: string;
  url: string;
  icon?: string;
  description?: string;
}

export interface ChecklistItem {
  id: string;
  title: string;
  description: string;
  category: string;
  xp: number;
  priority: 'high' | 'medium' | 'low';
  bookingLinks?: BookingLink[];
  notes?: string;
  icon?: string;
}

export interface TimelineEvent {
  id: string;
  date: string;
  day: string;
  title: string;
  type: 'drive' | 'dad' | 'mom' | 'joint' | 'xmas' | 'special';
  driveTime?: string;
  driveDistance?: string;
  details: {
    plan?: string;
    activities?: string[];
    food?: string;
    sleep?: string;
    notes?: string;
    toddlerOps?: string;
  };
  location?: {
    name: string;
    lat: number;
    lng: number;
  };
}

export interface RoutePoint {
  name: string;
  lat: number;
  lng: number;
  date: string;
  type: 'start' | 'stopover' | 'destination' | 'return';
}

export const routePoints: RoutePoint[] = [
  { name: 'Utrecht, Netherlands', lat: 52.0907, lng: 5.1214, date: '2025-12-13', type: 'start' },
  { name: 'Cologne, Germany', lat: 50.9375, lng: 6.9603, date: '2025-12-13', type: 'stopover' },
  { name: 'Berlin, Germany', lat: 52.5200, lng: 13.4050, date: '2025-12-14', type: 'stopover' },
  { name: 'Warsaw, Poland', lat: 52.2297, lng: 21.0122, date: '2025-12-15', type: 'stopover' },
  { name: 'Zakopane, Poland', lat: 49.2992, lng: 19.9496, date: '2025-12-17', type: 'destination' },
  { name: 'Dresden, Germany', lat: 51.0504, lng: 13.7373, date: '2025-12-27', type: 'stopover' },
  { name: 'Utrecht, Netherlands', lat: 52.0907, lng: 5.1214, date: '2025-12-28', type: 'return' },
];

export const checklistItems: ChecklistItem[] = [
  // Accommodation
  {
    id: 'acc-cologne',
    title: 'Cologne Hotel',
    description: 'Book accommodation for Dec 13 - Hyatt Regency or Adagio Cologne preferred',
    category: 'accommodation',
    xp: 50,
    priority: 'high',
    icon: '🏨',
    bookingLinks: [
      {
        name: 'Booking.com',
        url: 'https://www.booking.com/searchresults.html?ss=Cologne%2C+Germany&checkin=2025-12-13&checkout=2025-12-14&group_adults=2&no_rooms=1&group_children=1&age=2',
        description: 'Compare prices across hotels',
      },
      {
        name: 'Airbnb',
        url: 'https://www.airbnb.com/s/Cologne--Germany/homes?checkin=2025-12-13&checkout=2025-12-14&adults=2&children=1&infants=0',
        description: 'Family-friendly apartments',
      },
      {
        name: 'Hyatt Regency',
        url: 'https://www.hyatt.com/en-US/hotel/germany/hyatt-regency-cologne/cgnrc',
        description: 'Direct booking',
      },
      {
        name: 'Adagio Cologne',
        url: 'https://www.adagio-city.com/en/hotels/germany/cologne/adagio-cologne-city.shtml',
        description: 'Direct booking',
      },
      {
        name: 'Momondo',
        url: 'https://www.momondo.com/hotels/cologne-germany/2025-12-13/2025-12-14/2adults-1child',
        description: 'Price comparison',
      },
      {
        name: 'Skyscanner',
        url: 'https://www.skyscanner.com/hotels/cologne/cheap-hotels-in-cologne.html?checkin=2025-12-13&checkout=2025-12-14&adults=2&children=1',
        description: 'Hotel deals',
      },
    ],
    notes: 'Near Live Music Hall for concert. Check for family rooms or suites.',
  },
  {
    id: 'acc-berlin',
    title: 'Berlin Hotel',
    description: 'Scandic Berlin Potsdamer Platz or similar for Dec 14',
    category: 'accommodation',
    xp: 50,
    priority: 'high',
    icon: '🏨',
    bookingLinks: [
      {
        name: 'Booking.com',
        url: 'https://www.booking.com/searchresults.html?ss=Berlin%2C+Germany&checkin=2025-12-14&checkout=2025-12-15&group_adults=2&no_rooms=1&group_children=1&age=2',
        description: 'Compare prices',
      },
      {
        name: 'Airbnb',
        url: 'https://www.airbnb.com/s/Berlin--Germany/homes?checkin=2025-12-14&checkout=2025-12-15&adults=2&children=1',
        description: 'Central locations',
      },
      {
        name: 'Scandic Potsdamer Platz',
        url: 'https://www.scandichotels.com/hotels/germany/berlin/scandic-berlin-potsdamer-platz',
        description: 'Direct booking',
      },
      {
        name: 'Momondo',
        url: 'https://www.momondo.com/hotels/berlin-germany/2025-12-14/2025-12-15/2adults-1child',
        description: 'Price comparison',
      },
      {
        name: 'Skyscanner',
        url: 'https://www.skyscanner.com/hotels/berlin/cheap-hotels-in-berlin.html?checkin=2025-12-14&checkout=2025-12-15&adults=2&children=1',
        description: 'Hotel deals',
      },
    ],
    notes: 'Potsdamer Platz area for easy access to Christmas markets.',
  },
  {
    id: 'acc-warsaw',
    title: 'Warsaw Accommodation',
    description: 'Powiśle District - 2 nights (Dec 15-16)',
    category: 'accommodation',
    xp: 50,
    priority: 'high',
    icon: '🏨',
    bookingLinks: [
      {
        name: 'Booking.com',
        url: 'https://www.booking.com/searchresults.html?ss=Warsaw%2C+Poland&checkin=2025-12-15&checkout=2025-12-17&group_adults=2&no_rooms=1&group_children=1&age=2&ne_lat=52.25&ne_lng=21.05&sw_lat=52.20&sw_lng=21.00',
        description: 'Powiśle area filter',
      },
      {
        name: 'Airbnb',
        url: 'https://www.airbnb.com/s/Warsaw--Poland/homes?checkin=2025-12-15&checkout=2025-12-17&adults=2&children=1&place_id=ChIJAZ-GmmbMHkcR_NP3C8vqg4Q',
        description: 'Powiśle apartments',
      },
      {
        name: 'Momondo',
        url: 'https://www.momondo.com/hotels/warsaw-poland/2025-12-15/2025-12-17/2adults-1child',
        description: 'Price comparison',
      },
      {
        name: 'Skyscanner',
        url: 'https://www.skyscanner.com/hotels/warsaw/cheap-hotels-in-warsaw.html?checkin=2025-12-15&checkout=2025-12-17&adults=2&children=1',
        description: 'Hotel deals',
      },
    ],
    notes: 'Powiśle District is trendy, close to Copernicus Science Centre and Vistula River.',
  },
  {
    id: 'acc-zakopane',
    title: 'Zakopane Cabin',
    description: 'Górska Osada in Poronin or similar - 10 nights (Dec 17-26)',
    category: 'accommodation',
    xp: 100,
    priority: 'high',
    icon: '🏔️',
    bookingLinks: [
      {
        name: 'Booking.com',
        url: 'https://www.booking.com/searchresults.html?ss=Zakopane%2C+Poland&checkin=2025-12-17&checkout=2025-12-27&group_adults=2&no_rooms=1&group_children=1&age=2&ssne=Zakopane&ssne_untouched=Zakopane&label=gog235jc-1DCAEoggI46AdIM1gDaEaIAQGYAQm4ARfIAQzYAQPoAQGIAgGoAgO4Aqy0j_4FwAIB&sid=8b5c5c5c5c5c5c5c5c5c5c5c5c5c5c5c&aid=304142&lang=en-us&sb=1&src_elem=sb&src=searchresults&dest_id=-2601889&dest_type=city&ac_position=0&ac_langcode=en&ac_click_type=b&group_adults=2&no_rooms=1&group_children=1&age=2',
        description: 'Cabin and apartment options',
      },
      {
        name: 'Airbnb',
        url: 'https://www.airbnb.com/s/Zakopane--Poland/homes?checkin=2025-12-17&checkout=2025-12-27&adults=2&children=1&place_id=ChIJv0s3tR1NFkcRv4pHdrW2g7M',
        description: 'Mountain cabins and chalets',
      },
      {
        name: 'Górska Osada',
        url: 'https://www.gorskaosada.pl',
        description: 'Direct booking - recommended',
      },
      {
        name: 'Momondo',
        url: 'https://www.momondo.com/hotels/zakopane-poland/2025-12-17/2025-12-27/2adults-1child',
        description: 'Price comparison',
      },
      {
        name: 'Skyscanner',
        url: 'https://www.skyscanner.com/hotels/zakopane/cheap-hotels-in-zakopane.html?checkin=2025-12-17&checkout=2025-12-27&adults=2&children=1',
        description: 'Hotel deals',
      },
      {
        name: 'Noclegi.pl',
        url: 'https://www.noclegi.pl/zakopane',
        description: 'Polish booking site',
      },
    ],
    notes: 'Poronin is 5km from Zakopane center, quieter, better for families. Look for cabins with kitchen facilities.',
  },
  {
    id: 'acc-dresden',
    title: 'Dresden Hotel',
    description: 'Near Frauenkirche for Dec 27',
    category: 'accommodation',
    xp: 50,
    priority: 'high',
    icon: '🏨',
    bookingLinks: [
      {
        name: 'Booking.com',
        url: 'https://www.booking.com/searchresults.html?ss=Dresden%2C+Germany&checkin=2025-12-27&checkout=2025-12-28&group_adults=2&no_rooms=1&group_children=1&age=2',
        description: 'Compare prices',
      },
      {
        name: 'Airbnb',
        url: 'https://www.airbnb.com/s/Dresden--Germany/homes?checkin=2025-12-27&checkout=2025-12-28&adults=2&children=1',
        description: 'Historic center',
      },
      {
        name: 'Momondo',
        url: 'https://www.momondo.com/hotels/dresden-germany/2025-12-27/2025-12-28/2adults-1child',
        description: 'Price comparison',
      },
      {
        name: 'Skyscanner',
        url: 'https://www.skyscanner.com/hotels/dresden/cheap-hotels-in-dresden.html?checkin=2025-12-27&checkout=2025-12-28&adults=2&children=1',
        description: 'Hotel deals',
      },
    ],
    notes: 'Frauenkirche area for easy evening walk through historic center.',
  },
  
  // Snowboarding & Gear
  {
    id: 'snow-lessons',
    title: 'Book Snowboard Lessons',
    description: 'Polana Szymoszkowa - 4 lessons (2 for Dad Dec 18-19, 2 for Mom Dec 20-21)',
    category: 'snowboarding',
    xp: 75,
    priority: 'high',
    icon: '🏂',
    bookingLinks: [
      {
        name: 'Polana Szymoszkowa',
        url: 'https://www.polanaszymoszkowa.pl/en/ski-school',
        description: 'Official ski school',
      },
      {
        name: 'Zakopane Ski Schools',
        url: 'https://www.zakopane.pl/en/ski-schools',
        description: 'Compare schools',
      },
      {
        name: 'GetYourGuide',
        url: 'https://www.getyourguide.com/s/?q=zakopane+snowboard+lessons',
        description: 'Activity booking',
      },
    ],
    notes: 'Book in advance for December. Morning lessons (09:00-13:00) recommended.',
  },
  {
    id: 'snow-gear-rental',
    title: 'Rent Snowboard Gear',
    description: 'Snowboard, boots, bindings for both adults',
    category: 'snowboarding',
    xp: 50,
    priority: 'high',
    icon: '🎿',
    bookingLinks: [
      {
        name: 'Polana Szymoszkowa Rental',
        url: 'https://www.polanaszymoszkowa.pl/en/rental',
        description: 'On-site rental',
      },
      {
        name: 'Zakopane Ski Rental',
        url: 'https://www.zakopane.pl/en/ski-rental',
        description: 'Compare rental shops',
      },
      {
        name: 'Intersport Zakopane',
        url: 'https://www.intersport.pl/sklepy/zakopane',
        description: 'Sports equipment',
      },
      {
        name: 'Decathlon Poland',
        url: 'https://www.decathlon.pl',
        description: 'Buy or rent',
      },
    ],
    notes: 'Renting on-site is convenient but may be pricier. Compare with town shops.',
  },
  {
    id: 'snow-clothing',
    title: 'Buy/Rent Winter Clothing',
    description: 'Waterproof jackets, pants, gloves, goggles for adults',
    category: 'snowboarding',
    xp: 25,
    priority: 'medium',
    icon: '🧥',
    bookingLinks: [
      {
        name: 'Decathlon Netherlands',
        url: 'https://www.decathlon.nl',
        description: 'Buy before trip',
      },
      {
        name: 'Decathlon Poland',
        url: 'https://www.decathlon.pl',
        description: 'Buy in Poland',
      },
      {
        name: 'Intersport',
        url: 'https://www.intersport.nl',
        description: 'Premium gear',
      },
      {
        name: 'Zalando',
        url: 'https://www.zalando.nl/dames-jassen-wintersport/',
        description: 'Online shopping',
      },
    ],
    notes: 'Waterproof is essential. Layer with thermal base layers.',
  },
  {
    id: 'toddler-gear',
    title: 'Toddler Winter Gear',
    description: 'Snowsuit, boots, mittens, warm hat for Maxi (2.7 years)',
    category: 'snowboarding',
    xp: 25,
    priority: 'high',
    icon: '👶',
    bookingLinks: [
      {
        name: 'Decathlon Kids',
        url: 'https://www.decathlon.nl/C-313998-kinderen-wintersport',
        description: 'Affordable kids gear',
      },
      {
        name: 'H&M Kids',
        url: 'https://www2.hm.com/nl_nl/kinderen/shop-by-product/jassen-en-jacks.html',
        description: 'Kids winter wear',
      },
      {
        name: 'C&A Kids',
        url: 'https://www.c-and-a.com/nl/nl/shop/kinderen/jassen',
        description: 'Budget-friendly',
      },
      {
        name: 'Zalando Kids',
        url: 'https://www.zalando.nl/kinderen-jassen-wintersport/',
        description: 'Online selection',
      },
    ],
    notes: 'Get one size bigger for layering. Waterproof boots essential.',
  },
  
  // Activities & Tickets
  {
    id: 'katatonia-tickets',
    title: 'Katatonia Concert Tickets',
    description: 'Live Music Hall Cologne - Dec 13, Doors 18:30',
    category: 'activities',
    xp: 50,
    priority: 'high',
    icon: '🎸',
    bookingLinks: [
      {
        name: 'Live Nation',
        url: 'https://www.livenation.de/artist/katatonia-tickets',
        description: 'Official tickets',
      },
      {
        name: 'Eventim',
        url: 'https://www.eventim.de/artist/katatonia/',
        description: 'German ticket site',
      },
      {
        name: 'Ticketmaster',
        url: 'https://www.ticketmaster.de/search?q=katatonia',
        description: 'Ticket platform',
      },
    ],
    notes: 'Book early! Consider babysitting or split shift with toddler.',
  },
  {
    id: 'copernicus-tickets',
    title: 'Copernicus Science Centre',
    description: 'Warsaw - Bzzz! Gallery specifically for toddlers under 5',
    category: 'activities',
    xp: 25,
    priority: 'medium',
    icon: '🔬',
    bookingLinks: [
      {
        name: 'Copernicus Official',
        url: 'https://www.kopernik.org.pl/en/visitor-information/tickets',
        description: 'Direct booking',
      },
      {
        name: 'GetYourGuide',
        url: 'https://www.getyourguide.com/copernicus-science-centre-l123456/',
        description: 'Skip the line',
      },
    ],
    notes: 'Bzzz! Gallery is perfect for toddlers. Book morning slot.',
  },
  {
    id: 'gubalowka-funicular',
    title: 'Gubałówka Funicular',
    description: 'Zakopane - Funicular train tickets to mountain top',
    category: 'activities',
    xp: 50,
    priority: 'medium',
    icon: '🚠',
    bookingLinks: [
      {
        name: 'PKL Official',
        url: 'https://www.pkl.pl/en/attractions/gubalowka-funicular',
        description: 'Direct booking',
      },
      {
        name: 'Zakopane Tourism',
        url: 'https://www.zakopane.pl/en/attractions/gubalowka',
        description: 'Tourist info',
      },
    ],
    notes: 'Can buy on-site, but advance booking avoids queues. Great views and waffles at top!',
  },
  {
    id: 'kulig-ride',
    title: 'Kulig (Horse Sleigh Ride)',
    description: 'Christmas Day - Traditional Polish horse sleigh with bonfire. BOOK NOW!',
    category: 'activities',
    xp: 75,
    priority: 'high',
    icon: '🐴',
    bookingLinks: [
      {
        name: 'Zakopane Tourism',
        url: 'https://www.zakopane.pl/en/attractions/kulig',
        description: 'Official booking',
      },
      {
        name: 'GetYourGuide',
        url: 'https://www.getyourguide.com/s/?q=zakopane+kulig',
        description: 'Activity booking',
      },
      {
        name: 'Viator',
        url: 'https://www.viator.com/Zakopane-attractions/Kulig/d5295-a22040',
        description: 'Tour operator',
      },
    ],
    notes: 'VERY popular on Christmas Day. Book weeks in advance!',
  },
  {
    id: 'thermal-baths',
    title: 'Chochołowskie Termy',
    description: 'Thermal baths - Dec 23, arrive early (09:00) for Kids Zone',
    category: 'activities',
    xp: 50,
    priority: 'medium',
    icon: '♨️',
    bookingLinks: [
      {
        name: 'Chochołowskie Termy',
        url: 'https://www.termachocholowskie.pl/en',
        description: 'Official website',
      },
      {
        name: 'GetYourGuide',
        url: 'https://www.getyourguide.com/s/?q=chocholowskie+termy',
        description: 'Skip the line',
      },
    ],
    notes: 'Arrive at 09:00 AM. Kids Zone is separate. Adults can take turns in Saunarium.',
  },
  {
    id: 'bachledka-treetop',
    title: 'Bachledka Treetop Walk',
    description: 'Slovakia - Scenic drive day (Dec 22), gondola access',
    category: 'activities',
    xp: 50,
    priority: 'low',
    icon: '🌲',
    bookingLinks: [
      {
        name: 'Bachledka Official',
        url: 'https://www.bachledka.sk/en',
        description: 'Direct booking',
      },
      {
        name: 'GetYourGuide',
        url: 'https://www.getyourguide.com/s/?q=bachledka+treetop',
        description: 'Activity booking',
      },
    ],
    notes: 'Part of scenic loop. Can buy tickets on-site. Great for family photos!',
  },
  
  // Travel Essentials
  {
    id: 'car-check',
    title: 'Car Service Check',
    description: 'Oil change, tire check, brakes, fluids before long drive',
    category: 'travel',
    xp: 25,
    priority: 'high',
    icon: '🚗',
    notes: 'Essential before 2000+ km road trip. Check winter tires.',
  },
  {
    id: 'toll-vignette',
    title: 'Polish Toll Vignette',
    description: 'Buy online for A2 Highway (Warsaw route)',
    category: 'travel',
    xp: 25,
    priority: 'high',
    icon: '🛣️',
    bookingLinks: [
      {
        name: 'e-Toll Poland',
        url: 'https://www.e-toll.pl',
        description: 'Official vignette',
      },
      {
        name: 'ViaToll',
        url: 'https://www.viatoll.pl',
        description: 'Alternative',
      },
    ],
    notes: 'Required for A2 highway. Buy online before trip.',
  },
  {
    id: 'slovakia-vignette',
    title: 'Slovakia Vignette',
    description: 'For scenic drive day (Dec 22) - Bachledka and Štrbské Pleso',
    category: 'travel',
    xp: 25,
    priority: 'medium',
    icon: '🛣️',
    bookingLinks: [
      {
        name: 'eZnamka Slovakia',
        url: 'https://www.eznamka.sk',
        description: 'Official vignette',
      },
    ],
    notes: 'Can buy at border, but online is faster. 10-day vignette sufficient.',
  },
  {
    id: 'travel-insurance',
    title: 'Travel Insurance',
    description: 'Verify coverage for Poland & Slovakia, winter sports coverage',
    category: 'travel',
    xp: 25,
    priority: 'high',
    icon: '🛡️',
    notes: 'Check if winter sports are covered. EU health card backup.',
  },
  {
    id: 'car-seat',
    title: 'Car Seat Check',
    description: 'Verify toddler car seat is properly installed and EU approved',
    category: 'travel',
    xp: 25,
    priority: 'high',
    icon: '🪑',
    notes: 'Required by law. Check expiration date and proper installation.',
  },
  
  // Apps & Documents
  {
    id: 'download-maps',
    title: 'Download Offline Maps',
    description: 'Google Maps offline for Poland & Slovakia regions',
    category: 'documents',
    xp: 25,
    priority: 'medium',
    icon: '📱',
    notes: 'Download before leaving. Saves data and works without signal.',
  },
  {
    id: 'passports',
    title: 'Check Passports',
    description: 'Valid passports for all family members (Netherlands, Poland, Slovakia)',
    category: 'documents',
    xp: 25,
    priority: 'high',
    icon: '📘',
    notes: 'EU citizens - ID card sufficient, but passport recommended.',
  },
  {
    id: 'driving-license',
    title: 'Driving License',
    description: 'Valid EU driving license for Poland & Slovakia',
    category: 'documents',
    xp: 25,
    priority: 'high',
    icon: '🪪',
    notes: 'EU license valid in all countries. Bring physical copy.',
  },
  {
    id: 'credit-cards',
    title: 'Credit Cards',
    description: 'Notify bank of travel dates to avoid card blocks',
    category: 'documents',
    xp: 25,
    priority: 'medium',
    icon: '💳',
    notes: 'Call bank or use app to set travel notice. Bring backup card.',
  },
  
  // Toddler Essentials
  {
    id: 'noise-headphones',
    title: 'Noise-Canceling Headphones',
    description: 'For concert or loud venues (Katatonia show)',
    category: 'toddler',
    xp: 25,
    priority: 'medium',
    icon: '🎧',
    bookingLinks: [
      {
        name: 'Amazon NL',
        url: 'https://www.amazon.nl/s?k=kids+noise+cancelling+headphones',
        description: 'Kids headphones',
      },
      {
        name: 'Bol.com',
        url: 'https://www.bol.com/nl/nl/s/?searchtext=kinderen+noise+cancelling+headphones',
        description: 'Dutch retailer',
      },
    ],
    notes: 'Essential if bringing toddler near concert venue.',
  },
  {
    id: 'travel-toys',
    title: 'Travel Toys & Books',
    description: 'For long car rides - quiet activities, books, small toys',
    category: 'toddler',
    xp: 25,
    priority: 'medium',
    icon: '🧸',
    notes: 'Pack in accessible bag. Rotate toys to maintain interest.',
  },
  {
    id: 'snacks-supplies',
    title: 'Travel Snacks',
    description: 'Stock up on favorite snacks for Maxi - non-perishable',
    category: 'toddler',
    xp: 25,
    priority: 'medium',
    icon: '🍎',
    notes: 'Familiar snacks help with routine. Pack extra for delays.',
  },
  {
    id: 'medications',
    title: 'Medications & First Aid',
    description: 'Child-friendly pain relief, bandages, thermometer, etc.',
    category: 'toddler',
    xp: 25,
    priority: 'high',
    icon: '💊',
    notes: 'Paracetamol, ibuprofen for kids. Basic first aid kit.',
  },
];

export const timelineEvents: TimelineEvent[] = [
  {
    id: 'day1',
    date: '2025-12-13',
    day: 'Saturday',
    title: 'Utrecht ➔ Cologne (The Concert)',
    type: 'drive',
    driveTime: '~2.5 hrs',
    driveDistance: '~220 km',
    details: {
      plan: 'Easy drive to Cologne. Check in early.',
      activities: ['🎸 Katatonia @ Live Music Hall (Doors 18:30)'],
      sleep: 'Hyatt Regency or Adagio Cologne',
      toddlerOps: 'Use hotel babysitting or split shift (one parent stays at hotel). If taking kid near venue: Noise-canceling headphones essential.',
    },
    location: {
      name: 'Cologne, Germany',
      lat: 50.9375,
      lng: 6.9603,
    },
  },
  {
    id: 'day2',
    date: '2025-12-14',
    day: 'Sunday',
    title: 'Cologne ➔ Berlin (Pit Stop)',
    type: 'drive',
    driveTime: '~6 hrs',
    driveDistance: '~570 km',
    details: {
      plan: 'The big push. Stop halfway for lunch (Hannover/Magdeburg).',
      activities: ['Stretch legs at Gendarmenmarkt Christmas Market'],
      sleep: 'Scandic Berlin Potsdamer Platz',
    },
    location: {
      name: 'Berlin, Germany',
      lat: 52.5200,
      lng: 13.4050,
    },
  },
  {
    id: 'day3',
    date: '2025-12-15',
    day: 'Monday',
    title: 'Berlin ➔ Warsaw',
    type: 'drive',
    driveTime: '~5.5 hrs',
    driveDistance: '~570 km',
    details: {
      plan: 'Cross into Poland. Watch for tolls (A2 Highway).',
      sleep: 'Powiśle District (Warsaw)',
    },
    location: {
      name: 'Warsaw, Poland',
      lat: 52.2297,
      lng: 21.0122,
    },
  },
  {
    id: 'day4',
    date: '2025-12-16',
    day: 'Tuesday',
    title: 'Warsaw: Science & Lights',
    type: 'joint',
    details: {
      plan: 'Morning: Copernicus Science Centre (Bzzz! Gallery for under 5s). Evening: Old Town Market Place (Rynek) for Christmas lights.',
      food: 'Elektrownia Powiśle (Food Hall)',
    },
    location: {
      name: 'Warsaw, Poland',
      lat: 52.2297,
      lng: 21.0122,
    },
  },
  {
    id: 'day5',
    date: '2025-12-17',
    day: 'Wednesday',
    title: 'Warsaw ➔ Zakopane',
    type: 'drive',
    driveTime: '~5.5 hrs',
    driveDistance: '~400 km',
    details: {
      plan: 'S7 Road. Arrival: Check into Cabin (e.g., Górska Osada in Poronin).',
      notes: 'Unpack, grocery run for basics (water/milk/snacks).',
    },
    location: {
      name: 'Zakopane, Poland',
      lat: 49.2992,
      lng: 19.9496,
    },
  },
  {
    id: 'day6',
    date: '2025-12-18',
    day: 'Thursday',
    title: 'Dad Snowboards / Mom & Maxi Explore',
    type: 'dad',
    details: {
      plan: '🏂 Dad: 09:00 - 13:00 Lesson at Polana Szymoszkowa. 🧸 Mom & Maxi: Funicular train up Gubałówka. Waffles & Views.',
      food: '🍜 Lunch Reunion (14:00): Meet at base of slope or Dobra Kasza Nasza',
    },
    location: {
      name: 'Zakopane, Poland',
      lat: 49.2992,
      lng: 19.9496,
    },
  },
  {
    id: 'day7',
    date: '2025-12-19',
    day: 'Friday',
    title: 'Dad Snowboards / Mom & Maxi Play',
    type: 'dad',
    details: {
      plan: '🏂 Dad: 09:00 - 13:00 Snowboard Day 2. 🧸 Mom & Maxi: Snowlandia Maze (near Ski Jump).',
    },
    location: {
      name: 'Zakopane, Poland',
      lat: 49.2992,
      lng: 19.9496,
    },
  },
  {
    id: 'day8',
    date: '2025-12-20',
    day: 'Saturday',
    title: 'Mom Snowboards / Dad & Maxi Play',
    type: 'mom',
    details: {
      plan: '🏂 Mom: 09:00 - 13:00 Lesson at Polana Szymoszkowa. 🧸 Dad & Maxi: Sledding at Nosal (gentle hill).',
    },
    location: {
      name: 'Zakopane, Poland',
      lat: 49.2992,
      lng: 19.9496,
    },
  },
  {
    id: 'day9',
    date: '2025-12-21',
    day: 'Sunday',
    title: 'Mom Snowboards / Dad & Maxi Hike',
    type: 'mom',
    details: {
      plan: '🏂 Mom: 09:00 - 13:00 Snowboard Day 2. 🧸 Dad & Maxi: Walk Strążyska Valley (flat, scenic, tea hut at end).',
    },
    location: {
      name: 'Zakopane, Poland',
      lat: 49.2992,
      lng: 19.9496,
    },
  },
  {
    id: 'day10',
    date: '2025-12-22',
    day: 'Monday',
    title: 'The Tatra Infinity Loop (Scenic Drive)',
    type: 'special',
    driveTime: '~6-7 hrs total',
    driveDistance: '~200 km loop',
    details: {
      plan: 'Stop 1: Bachledka (Slovakia). Treetop Walk (Gondola access). Stop 2: Štrbské Pleso (Slovakia). Frozen alpine lake walk. Lunch at Koliba Patria. Stop 3: Chochołów (Poland). Historic wooden village.',
      notes: '📸 Best family photo ops of the trip! Use drive time for Maxi\'s nap.',
    },
    location: {
      name: 'Bachledka, Slovakia',
      lat: 49.2333,
      lng: 20.0833,
    },
  },
  {
    id: 'day11',
    date: '2025-12-23',
    day: 'Tuesday',
    title: 'Thermal Baths Recovery',
    type: 'joint',
    details: {
      plan: 'Chochołowskie Termy. Strategy: Arrive 09:00 AM. Go straight to Kids Zone. Swap: Take turns in the "Saunarium" (Adults only section).',
      notes: '⚠️ Last Chance Grocery Shop for Xmas!',
    },
    location: {
      name: 'Chochołów, Poland',
      lat: 49.2833,
      lng: 19.8167,
    },
  },
  {
    id: 'day12',
    date: '2025-12-24',
    day: 'Wednesday',
    title: 'Wigilia (Christmas Eve)',
    type: 'xmas',
    details: {
      plan: 'Day: Short walk / Snowman building at cabin. Evening: Traditional Polish dinner in the cabin.',
      notes: 'Shops close at 14:00. Prepare dinner in cabin.',
    },
    location: {
      name: 'Zakopane, Poland',
      lat: 49.2992,
      lng: 19.9496,
    },
  },
  {
    id: 'day13',
    date: '2025-12-25',
    day: 'Thursday',
    title: 'Christmas Day',
    type: 'xmas',
    details: {
      plan: 'Kulig (Horse Sleigh Ride) with Bonfire. Book this NOW.',
      food: 'Most restaurants closed/booked. Eat at cabin or pre-booked hotel buffet.',
    },
    location: {
      name: 'Zakopane, Poland',
      lat: 49.2992,
      lng: 19.9496,
    },
  },
  {
    id: 'day14',
    date: '2025-12-26',
    day: 'Friday',
    title: 'Boxing Day (Relax)',
    type: 'xmas',
    details: {
      plan: 'Morning: Lazy breakfast. Last sled run. Afternoon: Pack up gear.',
    },
    location: {
      name: 'Zakopane, Poland',
      lat: 49.2992,
      lng: 19.9496,
    },
  },
  {
    id: 'day15',
    date: '2025-12-27',
    day: 'Saturday',
    title: 'Zakopane ➔ Dresden',
    type: 'drive',
    driveTime: '~6.5 hrs',
    driveDistance: '~600 km',
    details: {
      plan: 'Leave early to beat traffic.',
      sleep: 'Dresden (Near Frauenkirche)',
      activities: ['Evening: Walk through the historic center'],
    },
    location: {
      name: 'Dresden, Germany',
      lat: 51.0504,
      lng: 13.7373,
    },
  },
  {
    id: 'day16',
    date: '2025-12-28',
    day: 'Sunday',
    title: 'Dresden ➔ Utrecht',
    type: 'drive',
    driveTime: '~7 hrs',
    driveDistance: '~700 km',
    details: {
      plan: 'The final leg. Home sweet home.',
    },
    location: {
      name: 'Utrecht, Netherlands',
      lat: 52.0907,
      lng: 5.1214,
    },
  },
];



