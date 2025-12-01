'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Star, TrendingUp, DollarSign } from 'lucide-react';
import type { BookingLink } from '@/data/tripData';

interface BookingLinkCardProps {
  link: BookingLink;
  index: number;
  isRecommended?: boolean;
}

export default function BookingLinkCard({ link, index, isRecommended = false }: BookingLinkCardProps) {
  return (
    <motion.a
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: index * 0.05 }}
      whileHover={{ scale: 1.05, y: -2 }}
      whileTap={{ scale: 0.95 }}
      className={`block p-4 rounded-xl border-2 transition-all ${
        isRecommended
          ? 'bg-gradient-to-br from-yellow-50 to-orange-50 border-yellow-300 shadow-lg'
          : 'bg-white border-gray-200 hover:border-accent-400 hover:shadow-md'
      }`}
    >
      <div className="flex items-start justify-between mb-2">
        <div className="flex items-center gap-2">
          <ExternalLink className={`w-5 h-5 ${isRecommended ? 'text-yellow-600' : 'text-gray-400'}`} />
          <h4 className={`font-bold ${isRecommended ? 'text-orange-700' : 'text-gray-900'}`}>
            {link.name}
          </h4>
          {isRecommended && (
            <span className="px-2 py-0.5 bg-yellow-400 text-yellow-900 text-xs font-bold rounded-full">
              Recommended
            </span>
          )}
        </div>
        {link.icon && <span className="text-2xl">{link.icon}</span>}
      </div>
      
      {link.description && (
        <p className="text-sm text-gray-600 mb-3">{link.description}</p>
      )}

      <div className="flex items-center gap-4 text-xs text-gray-500">
        <div className="flex items-center gap-1">
          <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />
          <span>Verified</span>
        </div>
        <div className="flex items-center gap-1">
          <TrendingUp className="w-3 h-3" />
          <span>Price Compare</span>
        </div>
        <div className="flex items-center gap-1">
          <DollarSign className="w-3 h-3" />
          <span>Best Deals</span>
        </div>
      </div>
    </motion.a>
  );
}



