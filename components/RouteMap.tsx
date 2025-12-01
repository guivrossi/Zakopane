'use client';

import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import { routePoints } from '@/data/tripData';
import 'leaflet/dist/leaflet.css';

// Dynamically import Leaflet components to avoid SSR issues
const MapContainer = dynamic(
  () => import('react-leaflet').then((mod) => mod.MapContainer),
  { ssr: false }
);
const TileLayer = dynamic(
  () => import('react-leaflet').then((mod) => mod.TileLayer),
  { ssr: false }
);
const Marker = dynamic(
  () => import('react-leaflet').then((mod) => mod.Marker),
  { ssr: false }
);
const Popup = dynamic(
  () => import('react-leaflet').then((mod) => mod.Popup),
  { ssr: false }
);
const Polyline = dynamic(
  () => import('react-leaflet').then((mod) => mod.Polyline),
  { ssr: false }
);

export default function RouteMap() {
  const [isClient, setIsClient] = useState(false);
  const [L, setL] = useState<any>(null);

  useEffect(() => {
    setIsClient(true);
    // Dynamically import Leaflet only on client side
    import('leaflet').then((leaflet) => {
      // Fix for default marker icon issue in Next.js
      delete (leaflet.default.Icon.Default.prototype as any)._getIconUrl;
      leaflet.default.Icon.Default.mergeOptions({
        iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png',
        iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png',
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png',
      });
      setL(leaflet.default);
    });
  }, []);

  if (!isClient || !L) {
    return (
      <div className="relative w-full h-[600px] rounded-2xl overflow-hidden shadow-2xl bg-gray-100 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-accent-600 mx-auto mb-4"></div>
          <div className="text-gray-600">Loading map...</div>
        </div>
      </div>
    );
  }

  // Calculate center
  const centerLat = routePoints.reduce((sum, p) => sum + p.lat, 0) / routePoints.length;
  const centerLng = routePoints.reduce((sum, p) => sum + p.lng, 0) / routePoints.length;

  // Create route coordinates for polyline
  const routeCoordinates = routePoints.map((point) => [point.lat, point.lng] as [number, number]);

  // Get marker color based on type
  const getMarkerColor = (type: string) => {
    switch (type) {
      case 'start':
        return '#4CAF50'; // Green
      case 'destination':
        return '#E67E22'; // Orange
      case 'return':
        return '#D32F2F'; // Red
      default:
        return '#9E9E9E'; // Gray
    }
  };

  // Offset overlapping markers so both are clearly visible
  const getOffsetPosition = (point: typeof routePoints[0], index: number) => {
    // Check if this location appears multiple times (Utrecht has start and return)
    const sameLocationPoints = routePoints.filter(
      (p) => Math.abs(p.lat - point.lat) < 0.001 && Math.abs(p.lng - point.lng) < 0.001
    );
    
    if (sameLocationPoints.length > 1) {
      // Larger offset to ensure both markers are clearly visible
      const offset = 0.03; // ~3km offset
      
      if (point.type === 'return') {
        // Return marker (red) offset to the right and slightly up
        return [point.lat + 0.01, point.lng + offset] as [number, number];
      } else if (point.type === 'start') {
        // Start marker (green) offset to the left and slightly down
        return [point.lat - 0.01, point.lng - offset] as [number, number];
      }
    }
    
    return [point.lat, point.lng] as [number, number];
  };

  // Create custom marker icon with z-index control
  const createCustomIcon = (color: string, number: number, type: string) => {
    // Start marker should have higher z-index to ensure visibility
    const zIndex = type === 'start' ? 1001 : type === 'return' ? 1000 : 500;
    
    return L.divIcon({
      className: 'custom-marker',
      html: `
        <div style="
          width: 36px;
          height: 36px;
          background-color: ${color};
          border: 3px solid white;
          border-radius: 50%;
          box-shadow: 0 2px 6px rgba(0,0,0,0.4);
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-weight: bold;
          font-size: 13px;
          z-index: ${zIndex};
          position: relative;
        ">${number}</div>
      `,
      iconSize: [36, 36],
      iconAnchor: [18, 18],
    });
  };

  return (
    <div className="relative w-full h-[600px] rounded-2xl overflow-hidden shadow-2xl">
      <style jsx global>{`
        .leaflet-container {
          height: 100%;
          width: 100%;
          z-index: 1;
        }
        .leaflet-popup-content-wrapper {
          border-radius: 8px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }
        .custom-marker {
          background: transparent;
          border: none;
        }
      `}</style>
      <MapContainer
        center={[centerLat, centerLng]}
        zoom={6}
        style={{ height: '100%', width: '100%' }}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        
        {/* Route line */}
        <Polyline
          positions={routeCoordinates}
          pathOptions={{
            color: '#E67E22',
            weight: 4,
            opacity: 0.8,
          }}
        />

        {/* Markers - keep original order, just offset overlapping ones */}
        {routePoints.map((point, index) => {
          const icon = createCustomIcon(getMarkerColor(point.type), index + 1, point.type);
          const position = getOffsetPosition(point, index);
          
          return (
            <Marker
              key={`${point.name}-${point.type}-${index}`}
              position={position}
              icon={icon}
              zIndexOffset={point.type === 'start' ? 1001 : point.type === 'return' ? 1000 : 500}
            >
              <Popup>
                <div className="p-2">
                  <h3 className="font-bold text-sm text-gray-900">{point.name}</h3>
                  <p className="text-xs text-gray-600 mt-1">{point.date}</p>
                  <p className="text-xs text-gray-500 mt-1 capitalize">{point.type}</p>
                </div>
              </Popup>
            </Marker>
          );
        })}
      </MapContainer>
    </div>
  );
}
