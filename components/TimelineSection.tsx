'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Map, Filter } from 'lucide-react';
import TimelineEvent from './TimelineEvent';
import { timelineEvents } from '@/data/tripData';
import RouteMap from './RouteMap';

const phases = [
  { id: 'all', name: 'All Phases', events: timelineEvents },
  {
    id: 'phase1',
    name: 'Phase 1: The Journey East',
    events: timelineEvents.filter((_, idx) => idx < 4),
  },
  {
    id: 'phase2',
    name: 'Phase 2: Zakopane (Split-Shift & Nature)',
    events: timelineEvents.filter((_, idx) => idx >= 4 && idx < 14),
  },
  {
    id: 'phase3',
    name: 'Phase 3: The Return',
    events: timelineEvents.filter((_, idx) => idx >= 14),
  },
];

const typeFilters = [
  { id: 'all', name: 'All Types' },
  { id: 'drive', name: 'Driving Days' },
  { id: 'dad', name: 'Dad Activities' },
  { id: 'mom', name: 'Mom Activities' },
  { id: 'joint', name: 'Family Activities' },
  { id: 'xmas', name: 'Christmas Days' },
  { id: 'special', name: 'Special Events' },
];

export default function TimelineSection() {
  const [selectedPhase, setSelectedPhase] = useState('all');
  const [selectedType, setSelectedType] = useState('all');
  const [showMap, setShowMap] = useState(false);

  const currentPhase = phases.find((p) => p.id === selectedPhase) || phases[0];
  let filteredEvents = currentPhase.events;

  if (selectedType !== 'all') {
    filteredEvents = filteredEvents.filter((event) => event.type === selectedType);
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <h1 className="text-4xl md:text-5xl font-bold gradient-primary bg-clip-text text-transparent mb-4">
            Trip Timeline
          </h1>
          <p className="text-gray-600 text-lg">
            Your complete day-by-day itinerary from Utrecht to Zakopane
          </p>
        </motion.div>

        {/* Map Toggle */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mb-6 flex justify-center"
        >
          <button
            onClick={() => setShowMap(!showMap)}
            className="flex items-center gap-2 px-6 py-3 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all border-2 border-gray-200 hover:border-accent-400"
          >
            <Map className="w-5 h-5" />
            <span className="font-semibold">{showMap ? 'Hide' : 'Show'} Route Map</span>
          </button>
        </motion.div>

        {/* Map */}
        {showMap && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="mb-8 rounded-2xl overflow-hidden shadow-2xl"
          >
            <RouteMap />
          </motion.div>
        )}

        {/* Filters */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8 border-2 border-gray-100">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Phase Filter */}
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5 text-gray-400" />
              <select
                value={selectedPhase}
                onChange={(e) => setSelectedPhase(e.target.value)}
                className="flex-1 px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-accent-400 focus:outline-none transition-colors"
              >
                {phases.map((phase) => (
                  <option key={phase.id} value={phase.id}>
                    {phase.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Type Filter */}
            <div className="flex items-center gap-2">
              <Filter className="w-5 h-5 text-gray-400" />
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="flex-1 px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-accent-400 focus:outline-none transition-colors"
              >
                {typeFilters.map((filter) => (
                  <option key={filter.id} value={filter.id}>
                    {filter.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Phase Header */}
        {selectedPhase !== 'all' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mb-6"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              {currentPhase.name}
            </h2>
            <div className="h-1 w-32 gradient-accent rounded-full"></div>
          </motion.div>
        )}

        {/* Timeline Events */}
        <div className="space-y-6">
          {filteredEvents.length > 0 ? (
            filteredEvents.map((event, index) => (
              <TimelineEvent key={event.id} event={event} index={index} />
            ))
          ) : (
            <div className="text-center py-12 bg-white rounded-xl shadow-lg">
              <p className="text-gray-500 text-lg">No events match your filters.</p>
            </div>
          )}
        </div>

        {/* Summary Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-12 bg-white rounded-2xl shadow-xl p-8 border-2 border-gray-100"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Trip Summary</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">
                {timelineEvents.length}
              </div>
              <div className="text-sm text-gray-600">Total Days</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-600 mb-2">
                {timelineEvents.filter((e) => e.type === 'drive').length}
              </div>
              <div className="text-sm text-gray-600">Driving Days</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">
                {timelineEvents.filter((e) => e.type === 'joint' || e.type === 'xmas').length}
              </div>
              <div className="text-sm text-gray-600">Family Days</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">
                {timelineEvents.filter((e) => e.driveDistance).reduce((sum, e) => {
                  const dist = e.driveDistance?.replace('~', '').replace(' km', '') || '0';
                  return sum + parseInt(dist);
                }, 0)}
              </div>
              <div className="text-sm text-gray-600">Total Distance (km)</div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}



