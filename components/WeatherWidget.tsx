'use client';

import { motion } from 'framer-motion';
import { Cloud, Sun, CloudSnow, Wind, Thermometer } from 'lucide-react';

interface WeatherWidgetProps {
  location: string;
  date: string;
  temperature?: number;
  condition?: string;
  snow?: boolean;
}

export default function WeatherWidget({
  location,
  date,
  temperature = -5,
  condition = 'Snow',
  snow = true,
}: WeatherWidgetProps) {
  const getWeatherIcon = () => {
    if (snow) return <CloudSnow className="w-8 h-8 text-blue-400" />;
    if (condition.toLowerCase().includes('sun')) return <Sun className="w-8 h-8 text-yellow-400" />;
    return <Cloud className="w-8 h-8 text-gray-400" />;
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-4 border-2 border-blue-200 shadow-md"
    >
      <div className="flex items-center justify-between mb-3">
        <div>
          <h4 className="font-bold text-gray-900">{location}</h4>
          <p className="text-sm text-gray-600">{date}</p>
        </div>
        {getWeatherIcon()}
      </div>
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-1">
          <Thermometer className="w-4 h-4 text-red-500" />
          <span className="text-2xl font-bold text-gray-900">{temperature}°C</span>
        </div>
        <div className="flex items-center gap-1 text-sm text-gray-600">
          <Wind className="w-4 h-4" />
          <span>{condition}</span>
        </div>
      </div>
      {snow && (
        <div className="mt-2 text-xs text-blue-600 font-semibold">
          ❄️ Perfect conditions for snowboarding!
        </div>
      )}
    </motion.div>
  );
}



