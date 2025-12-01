'use client';

import { motion } from 'framer-motion';
import { Trophy, Star, Award, Medal } from 'lucide-react';

interface AchievementBadgeProps {
  title: string;
  description: string;
  icon?: 'trophy' | 'star' | 'award' | 'medal';
  unlocked: boolean;
  progress?: number;
}

export default function AchievementBadge({
  title,
  description,
  icon = 'trophy',
  unlocked,
  progress = 0,
}: AchievementBadgeProps) {
  const icons = {
    trophy: Trophy,
    star: Star,
    award: Award,
    medal: Medal,
  };

  const IconComponent = icons[icon];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.05 }}
      className={`relative p-4 rounded-xl border-2 ${
        unlocked
          ? 'bg-gradient-to-br from-yellow-50 to-orange-50 border-yellow-400 shadow-lg'
          : 'bg-gray-50 border-gray-200 opacity-60'
      }`}
    >
      <div className="flex items-start gap-3">
        <div
          className={`p-3 rounded-lg ${
            unlocked
              ? 'bg-gradient-to-br from-yellow-400 to-orange-500'
              : 'bg-gray-300'
          }`}
        >
          <IconComponent className={`w-6 h-6 ${unlocked ? 'text-white' : 'text-gray-500'}`} />
        </div>
        <div className="flex-1">
          <h4 className={`font-bold mb-1 ${unlocked ? 'text-gray-900' : 'text-gray-500'}`}>
            {title}
          </h4>
          <p className={`text-sm ${unlocked ? 'text-gray-700' : 'text-gray-400'}`}>
            {description}
          </p>
          {!unlocked && progress > 0 && (
            <div className="mt-2">
              <div className="w-full bg-gray-200 rounded-full h-2">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                  className="bg-yellow-400 h-2 rounded-full"
                />
              </div>
              <div className="text-xs text-gray-500 mt-1">{progress}% complete</div>
            </div>
          )}
        </div>
        {unlocked && (
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            className="text-2xl"
          >
            ✨
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}



