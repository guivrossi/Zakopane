# Zakopane Trip Planner

A beautiful, interactive trip planning application for the Polish Christmas Expedition from Utrecht to Zakopane.

## Features

- 📋 **Gamified Checklist**: Complete pre-trip essentials with XP rewards and progress tracking
- 🗓️ **Interactive Timeline**: Day-by-day itinerary with detailed information
- 🗺️ **Route Visualization**: Mapbox integration showing the complete route
- 🔗 **Multiple Booking Links**: Direct links to Booking.com, Airbnb, Momondo, Skyscanner, and more
- 🎨 **Modern UI/UX**: Built with Next.js, Tailwind CSS, and Framer Motion
- 💾 **Local Storage**: Progress is saved automatically

## Tech Stack

- **Next.js 14** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **Mapbox GL JS** - Map visualization
- **Lucide React** - Icons

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn
- Mapbox access token (optional, for map features)

### Installation

1. Install dependencies:
```bash
npm install
```

2. Set up environment variables (optional for map):
```bash
cp .env.example .env.local
```

Add your Mapbox token:
```
NEXT_PUBLIC_MAPBOX_TOKEN=your_mapbox_token_here
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
├── app/
│   ├── globals.css          # Global styles
│   ├── layout.tsx           # Root layout
│   └── page.tsx             # Main page
├── components/
│   ├── ChecklistItem.tsx   # Individual checklist item
│   ├── ChecklistSection.tsx # Checklist page
│   ├── RouteMap.tsx         # Mapbox map component
│   ├── SectionNav.tsx       # Navigation bar
│   ├── TimelineEvent.tsx    # Individual timeline event
│   └── TimelineSection.tsx  # Timeline page
├── data/
│   └── tripData.ts          # All trip data and booking links
└── public/                  # Static assets
```

## Features in Detail

### Checklist Section
- Filter by category and priority
- Search functionality
- Progress tracking with XP system
- Category completion stats
- Multiple booking options per item
- Local storage persistence

### Timeline Section
- Phase-based filtering
- Type-based filtering (drive, activities, etc.)
- Interactive route map
- Detailed day-by-day information
- Trip summary statistics

## Booking Links

Each accommodation and activity includes multiple booking options:
- **Booking.com** - Hotel comparison
- **Airbnb** - Alternative accommodations
- **Momondo** - Price comparison
- **Skyscanner** - Hotel deals
- **Direct bookings** - Official hotel/activity websites
- **Local sites** - Country-specific booking platforms

## Customization

All trip data is stored in `data/tripData.ts`. You can easily:
- Add/remove checklist items
- Update booking links
- Modify timeline events
- Adjust route points

## Build for Production

```bash
npm run build
npm start
```

## License

MIT

