'use client';

import { motion } from 'framer-motion';
import { Check, ExternalLink, Star, AlertCircle } from 'lucide-react';
import { useState } from 'react';
import type { ChecklistItem as ChecklistItemType, BookingLink } from '@/data/tripData';

interface ChecklistItemProps {
  item: ChecklistItemType;
  isChecked: boolean;
  onToggle: (id: string) => void;
  index: number;
}

export default function ChecklistItem({ item, isChecked, onToggle, index }: ChecklistItemProps) {
  const [showLinks, setShowLinks] = useState(false);

  const priorityColors = {
    high: 'border-red-300 bg-red-50',
    medium: 'border-yellow-300 bg-yellow-50',
    low: 'border-blue-300 bg-blue-50',
  };

  const priorityIcons = {
    high: '🔴',
    medium: '🟡',
    low: '🔵',
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05 }}
      className={`relative group cursor-pointer transition-all duration-300 ${
        isChecked
          ? 'bg-green-50 border-green-300 shadow-md'
          : 'bg-white border-gray-200 hover:border-accent-400 hover:shadow-lg'
      } border-2 rounded-xl p-5`}
      onClick={() => onToggle(item.id)}
    >
      {/* Priority Badge */}
      <div className={`absolute top-3 right-3 ${priorityColors[item.priority]} px-2 py-1 rounded-full text-xs font-semibold flex items-center gap-1`}>
        <span>{priorityIcons[item.priority]}</span>
        <span className="hidden sm:inline">{item.priority}</span>
      </div>

      {/* XP Badge */}
      {!isChecked && (
        <div className="absolute top-3 left-3 gradient-xp text-white px-3 py-1 rounded-full text-xs font-bold">
          +{item.xp} XP
        </div>
      )}

      {/* Checkbox */}
      <div className="flex items-start gap-4">
        <div className="relative flex-shrink-0 mt-1">
          <input
            type="checkbox"
            checked={isChecked}
            onChange={() => onToggle(item.id)}
            className="w-6 h-6 rounded border-2 border-gray-300 checked:bg-green-500 checked:border-green-500 focus:ring-2 focus:ring-green-300 cursor-pointer transition-all"
            onClick={(e) => e.stopPropagation()}
          />
          {isChecked && (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <Check className="w-4 h-4 text-white" />
            </motion.div>
          )}
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <div className="flex items-start gap-2 mb-2">
            {item.icon && <span className="text-2xl flex-shrink-0">{item.icon}</span>}
            <h4 className={`font-bold text-lg ${isChecked ? 'text-green-700 line-through' : 'text-gray-900'}`}>
              {item.title}
            </h4>
          </div>
          
          <p className={`text-sm mb-3 ${isChecked ? 'text-green-600' : 'text-gray-600'}`}>
            {item.description}
          </p>

          {/* Notes */}
          {item.notes && (
            <div className="flex items-start gap-2 mb-3 p-2 bg-blue-50 border border-blue-200 rounded-lg">
              <AlertCircle className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
              <p className="text-xs text-blue-800">{item.notes}</p>
            </div>
          )}

          {/* Booking Links */}
          {item.bookingLinks && item.bookingLinks.length > 0 && (
            <div className="mt-4">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setShowLinks(!showLinks);
                }}
                className="text-sm font-semibold text-accent-600 hover:text-accent-700 flex items-center gap-1 mb-2"
              >
                <ExternalLink className="w-4 h-4" />
                {showLinks ? 'Hide' : 'Show'} Booking Options ({item.bookingLinks.length})
              </button>

              {showLinks && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-2"
                >
                  {item.bookingLinks.map((link: BookingLink, linkIndex: number) => (
                    <motion.a
                      key={linkIndex}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="flex items-center gap-2 p-3 bg-white border border-gray-200 rounded-lg hover:border-accent-400 hover:bg-accent-50 transition-all group"
                    >
                      <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-accent-600" />
                      <div className="flex-1 min-w-0">
                        <div className="font-semibold text-sm text-gray-900 group-hover:text-accent-700">
                          {link.name}
                        </div>
                        {link.description && (
                          <div className="text-xs text-gray-500">{link.description}</div>
                        )}
                      </div>
                      <Star className="w-4 h-4 text-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </motion.a>
                  ))}
                </motion.div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Completion Animation */}
      {isChecked && (
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          className="absolute top-2 right-2 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center"
        >
          <Check className="w-5 h-5 text-white" />
        </motion.div>
      )}
    </motion.div>
  );
}



