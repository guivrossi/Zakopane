'use client';

import { motion } from 'framer-motion';
import { CheckSquare, Calendar, Home } from 'lucide-react';

interface SectionNavProps {
  activeSection: 'checklist' | 'timeline';
  onSectionChange: (section: 'checklist' | 'timeline') => void;
}

export default function SectionNav({ activeSection, onSectionChange }: SectionNavProps) {
  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b-2 border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Title */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3"
          >
            <div className="w-10 h-10 gradient-primary rounded-lg flex items-center justify-center">
              <Home className="w-6 h-6 text-white" />
            </div>
            <div>
              <div className="font-bold text-lg text-gray-900">Zakopane Trip</div>
              <div className="text-xs text-gray-500">Dec 13-28, 2025</div>
            </div>
          </motion.div>

          {/* Navigation Buttons */}
          <div className="flex items-center gap-2 bg-gray-100 p-1 rounded-xl">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => onSectionChange('checklist')}
              className={`flex items-center gap-2 px-6 py-2 rounded-lg font-semibold transition-all ${
                activeSection === 'checklist'
                  ? 'bg-white text-accent-600 shadow-md'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <CheckSquare className="w-5 h-5" />
              <span className="hidden sm:inline">Checklist</span>
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => onSectionChange('timeline')}
              className={`flex items-center gap-2 px-6 py-2 rounded-lg font-semibold transition-all ${
                activeSection === 'timeline'
                  ? 'bg-white text-accent-600 shadow-md'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <Calendar className="w-5 h-5" />
              <span className="hidden sm:inline">Timeline</span>
            </motion.button>
          </div>
        </div>
      </div>
    </nav>
  );
}



