'use client';

import { motion } from 'framer-motion';
import { MapPin, Clock, Car, Calendar, Utensils, Baby, Users } from 'lucide-react';
import type { TimelineEvent as TimelineEventType } from '@/data/tripData';

interface TimelineEventProps {
  event: TimelineEventType;
  index: number;
}

const typeStyles = {
  drive: {
    bg: 'bg-orange-50',
    border: 'border-orange-400',
    icon: '🚗',
  },
  dad: {
    bg: 'bg-blue-50',
    border: 'border-blue-400',
    icon: '🏂',
  },
  mom: {
    bg: 'bg-pink-50',
    border: 'border-pink-400',
    icon: '🏂',
  },
  joint: {
    bg: 'bg-green-50',
    border: 'border-green-400',
    icon: '👨‍👩‍👦',
  },
  xmas: {
    bg: 'bg-red-50',
    border: 'border-red-400',
    icon: '🎄',
  },
  special: {
    bg: 'bg-yellow-50',
    border: 'border-yellow-400',
    icon: '⭐',
  },
};

export default function TimelineEvent({ event, index }: TimelineEventProps) {
  const style = typeStyles[event.type];

  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.1 }}
      className={`relative ${style.bg} border-l-4 ${style.border} rounded-r-xl shadow-lg p-6 mb-6 hover:shadow-xl transition-shadow`}
    >
      {/* Date Badge */}
      <div className="flex items-center gap-3 mb-4">
        <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-md">
          <Calendar className="w-4 h-4 text-gray-600" />
          <span className="font-bold text-sm text-gray-700">{event.day}</span>
          <span className="text-gray-500 text-sm">{event.date}</span>
        </div>
        <div className="text-2xl">{style.icon}</div>
      </div>

      {/* Title */}
      <h3 className="text-2xl font-bold text-gray-900 mb-4">{event.title}</h3>

      {/* Drive Info */}
      {event.driveTime && (
        <div className="flex items-center gap-4 mb-4 flex-wrap">
          <div className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-lg shadow-sm">
            <Clock className="w-4 h-4 text-orange-600" />
            <span className="text-sm font-semibold text-gray-700">{event.driveTime}</span>
          </div>
          {event.driveDistance && (
            <div className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-lg shadow-sm">
              <Car className="w-4 h-4 text-orange-600" />
              <span className="text-sm font-semibold text-gray-700">{event.driveDistance}</span>
            </div>
          )}
        </div>
      )}

      {/* Details Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Plan */}
        {event.details.plan && (
          <div className="bg-white rounded-lg p-4 shadow-sm">
            <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
              <Users className="w-4 h-4 text-blue-600" />
              The Plan
            </h4>
            <p className="text-sm text-gray-700 whitespace-pre-line">{event.details.plan}</p>
          </div>
        )}

        {/* Activities */}
        {event.details.activities && event.details.activities.length > 0 && (
          <div className="bg-white rounded-lg p-4 shadow-sm">
            <h4 className="font-semibold text-gray-900 mb-2">Activities</h4>
            <ul className="space-y-1">
              {event.details.activities.map((activity, idx) => (
                <li key={idx} className="text-sm text-gray-700 flex items-start gap-2">
                  <span className="text-accent-500 mt-1">•</span>
                  <span>{activity}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Food */}
        {event.details.food && (
          <div className="bg-white rounded-lg p-4 shadow-sm">
            <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
              <Utensils className="w-4 h-4 text-orange-600" />
              Food & Dining
            </h4>
            <p className="text-sm text-gray-700">{event.details.food}</p>
          </div>
        )}

        {/* Sleep */}
        {event.details.sleep && (
          <div className="bg-white rounded-lg p-4 shadow-sm">
            <h4 className="font-semibold text-gray-900 mb-2">Accommodation</h4>
            <p className="text-sm text-gray-700">{event.details.sleep}</p>
          </div>
        )}

        {/* Notes */}
        {event.details.notes && (
          <div className="bg-white rounded-lg p-4 shadow-sm md:col-span-2">
            <h4 className="font-semibold text-gray-900 mb-2">Notes</h4>
            <p className="text-sm text-gray-700">{event.details.notes}</p>
          </div>
        )}

        {/* Toddler Ops */}
        {event.details.toddlerOps && (
          <div className="bg-blue-100 border-2 border-blue-300 rounded-lg p-4 md:col-span-2">
            <h4 className="font-semibold text-blue-900 mb-2 flex items-center gap-2">
              <Baby className="w-4 h-4 text-blue-600" />
              Toddler Operations
            </h4>
            <p className="text-sm text-blue-800">{event.details.toddlerOps}</p>
          </div>
        )}
      </div>

      {/* Location */}
      {event.location && (
        <div className="mt-4 flex items-center gap-2 text-sm text-gray-600">
          <MapPin className="w-4 h-4" />
          <span>{event.location.name}</span>
        </div>
      )}
    </motion.div>
  );
}



