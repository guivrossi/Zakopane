'use client';

import { motion } from 'framer-motion';
import { Calendar, MapPin, Clock, TrendingUp, DollarSign, Users } from 'lucide-react';
import { calculateTripStats, getDaysUntilTrip, formatCurrency } from '@/utils/calculations';
import StatCard from './StatCard';
import ProgressRing from './ProgressRing';

export default function Dashboard() {
  const stats = calculateTripStats();
  const daysUntil = getDaysUntilTrip();

  return (
    <div className="bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <h1 className="text-4xl md:text-5xl font-bold gradient-primary bg-clip-text text-transparent mb-4">
            Trip Dashboard
          </h1>
          <p className="text-gray-600 text-lg">
            Overview of your Polish Christmas Expedition
          </p>
        </motion.div>

        {/* Countdown */}
        {daysUntil > 0 && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-gradient-to-r from-orange-400 to-pink-500 rounded-2xl p-8 text-white text-center mb-8 shadow-xl"
          >
            <h2 className="text-3xl font-bold mb-2">
              {daysUntil} Days Until Departure!
            </h2>
            <p className="text-lg opacity-90">
              Your adventure to Zakopane begins on December 13, 2025
            </p>
          </motion.div>
        )}

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <StatCard
            icon={MapPin}
            value={`${stats.totalDistance} km`}
            label="Total Distance"
            color="blue"
            delay={0.1}
          />
          <StatCard
            icon={Clock}
            value={stats.totalDriveTime}
            label="Total Drive Time"
            color="orange"
            delay={0.2}
          />
          <StatCard
            icon={Calendar}
            value={stats.totalDays}
            label="Trip Duration"
            color="green"
            delay={0.3}
          />
          <StatCard
            icon={Users}
            value={stats.accommodationNights}
            label="Nights Away"
            color="purple"
            delay={0.4}
          />
          <StatCard
            icon={TrendingUp}
            value={stats.activitiesCount}
            label="Planned Activities"
            color="yellow"
            delay={0.5}
          />
          <StatCard
            icon={DollarSign}
            value={formatCurrency(stats.estimatedCost.total)}
            label="Estimated Total Cost"
            color="red"
            delay={0.6}
          />
        </div>

        {/* Cost Breakdown */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="bg-white rounded-2xl shadow-xl p-8 mb-8 border-2 border-gray-100"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Cost Breakdown</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-blue-50 rounded-lg">
              <span className="font-semibold text-gray-700">Accommodation</span>
              <span className="text-xl font-bold text-blue-600">
                {formatCurrency(stats.estimatedCost.accommodation)}
              </span>
            </div>
            <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg">
              <span className="font-semibold text-gray-700">Activities</span>
              <span className="text-xl font-bold text-green-600">
                {formatCurrency(stats.estimatedCost.activities)}
              </span>
            </div>
            <div className="flex items-center justify-between p-4 bg-orange-50 rounded-lg">
              <span className="font-semibold text-gray-700">Food & Dining</span>
              <span className="text-xl font-bold text-orange-600">
                {formatCurrency(stats.estimatedCost.food)}
              </span>
            </div>
            <div className="flex items-center justify-between p-6 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg border-2 border-purple-200">
              <span className="text-xl font-bold text-gray-900">Total Estimated</span>
              <span className="text-3xl font-bold gradient-primary bg-clip-text text-transparent">
                {formatCurrency(stats.estimatedCost.total)}
              </span>
            </div>
          </div>
        </motion.div>

        {/* Progress Rings */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8 }}
            className="bg-white rounded-2xl shadow-xl p-8 text-center border-2 border-gray-100"
          >
            <h4 className="font-bold text-gray-900 mb-4">Trip Preparation</h4>
            <ProgressRing percentage={0} size={120} color="#E67E22" />
            <p className="text-sm text-gray-600 mt-4">Complete checklist to see progress</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.9 }}
            className="bg-white rounded-2xl shadow-xl p-8 text-center border-2 border-gray-100"
          >
            <h4 className="font-bold text-gray-900 mb-4">Booking Status</h4>
            <ProgressRing percentage={0} size={120} color="#2196F3" />
            <p className="text-sm text-gray-600 mt-4">Track your bookings</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.0 }}
            className="bg-white rounded-2xl shadow-xl p-8 text-center border-2 border-gray-100"
          >
            <h4 className="font-bold text-gray-900 mb-4">Packing Progress</h4>
            <ProgressRing percentage={0} size={120} color="#4CAF50" />
            <p className="text-sm text-gray-600 mt-4">Ready to pack?</p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}



