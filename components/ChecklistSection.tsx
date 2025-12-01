'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Trophy, TrendingUp, Filter, Search } from 'lucide-react';
import ChecklistItem from './ChecklistItem';
import { checklistItems, type ChecklistItem as ChecklistItemType } from '@/data/tripData';

const categories = [
  { id: 'all', name: 'All Items', icon: '📋' },
  { id: 'accommodation', name: 'Accommodation', icon: '🏨' },
  { id: 'snowboarding', name: 'Snowboarding & Gear', icon: '🏂' },
  { id: 'activities', name: 'Activities & Tickets', icon: '🎫' },
  { id: 'travel', name: 'Travel Essentials', icon: '🚗' },
  { id: 'documents', name: 'Apps & Documents', icon: '📱' },
  { id: 'toddler', name: 'Toddler Essentials', icon: '👶' },
];

const priorityFilters = [
  { id: 'all', name: 'All Priorities' },
  { id: 'high', name: 'High Priority' },
  { id: 'medium', name: 'Medium Priority' },
  { id: 'low', name: 'Low Priority' },
];

export default function ChecklistSection() {
  const [checkedItems, setCheckedItems] = useState<Set<string>>(new Set());
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedPriority, setSelectedPriority] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Load from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('zakopane-checklist');
    if (saved) {
      try {
        const savedItems = JSON.parse(saved);
        setCheckedItems(new Set(savedItems));
      } catch (e) {
        console.error('Error loading checklist:', e);
      }
    }
  }, []);

  // Save to localStorage
  useEffect(() => {
    localStorage.setItem('zakopane-checklist', JSON.stringify(Array.from(checkedItems)));
  }, [checkedItems]);

  const toggleItem = (id: string) => {
    setCheckedItems((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  const filteredItems = checklistItems.filter((item) => {
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    const matchesPriority = selectedPriority === 'all' || item.priority === selectedPriority;
    const matchesSearch =
      searchQuery === '' ||
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesPriority && matchesSearch;
  });

  const completedCount = checkedItems.size;
  const totalCount = checklistItems.length;
  const progressPercentage = Math.round((completedCount / totalCount) * 100);
  const totalXP = checklistItems
    .filter((item) => checkedItems.has(item.id))
    .reduce((sum, item) => sum + item.xp, 0);

  const categoryStats = categories.slice(1).map((cat) => {
    const catItems = checklistItems.filter((item) => item.category === cat.id);
    const catCompleted = catItems.filter((item) => checkedItems.has(item.id)).length;
    return {
      ...cat,
      total: catItems.length,
      completed: catCompleted,
      percentage: catItems.length > 0 ? Math.round((catCompleted / catItems.length) * 100) : 0,
    };
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <h1 className="text-4xl md:text-5xl font-bold gradient-primary bg-clip-text text-transparent mb-4">
            Pre-Trip Essentials Checklist
          </h1>
          <p className="text-gray-600 text-lg">
            Complete your preparations and earn XP as you go!
          </p>
        </motion.div>

        {/* Progress Dashboard */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white rounded-2xl shadow-xl p-6 mb-8 border-2 border-gray-100"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Overall Progress */}
            <div className="text-center">
              <div className="text-5xl font-bold gradient-primary bg-clip-text text-transparent mb-2">
                {progressPercentage}%
              </div>
              <div className="text-sm text-gray-600 mb-3">Complete</div>
              <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${progressPercentage}%` }}
                  transition={{ duration: 0.5 }}
                  className="h-full gradient-accent rounded-full"
                />
              </div>
              <div className="text-xs text-gray-500 mt-2">
                {completedCount} of {totalCount} items
              </div>
            </div>

            {/* XP Counter */}
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Trophy className="w-8 h-8 text-yellow-500" />
                <div className="text-5xl font-bold gradient-xp bg-clip-text text-transparent">
                  {totalXP}
                </div>
              </div>
              <div className="text-sm text-gray-600">XP Earned</div>
              <div className="text-xs text-gray-500 mt-2">
                {Math.round((totalXP / checklistItems.reduce((sum, item) => sum + item.xp, 0)) * 100)}% of total XP
              </div>
            </div>

            {/* Streak/Stats */}
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <TrendingUp className="w-8 h-8 text-green-500" />
                <div className="text-5xl font-bold text-green-600">
                  {categoryStats.filter((cat) => cat.percentage === 100).length}
                </div>
              </div>
              <div className="text-sm text-gray-600">Categories Complete</div>
              <div className="text-xs text-gray-500 mt-2">
                {categoryStats.length} total categories
              </div>
            </div>
          </div>
        </motion.div>

        {/* Category Stats Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8"
        >
          {categoryStats.map((cat) => (
            <motion.div
              key={cat.id}
              whileHover={{ scale: 1.05 }}
              className={`bg-white rounded-xl p-4 shadow-md border-2 ${
                cat.percentage === 100 ? 'border-green-400 bg-green-50' : 'border-gray-200'
              }`}
            >
              <div className="text-2xl mb-2">{cat.icon}</div>
              <div className="text-xs font-semibold text-gray-700 mb-1">{cat.name}</div>
              <div className="text-lg font-bold text-gray-900">
                {cat.completed}/{cat.total}
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${cat.percentage}%` }}
                  className={`h-full rounded-full ${
                    cat.percentage === 100 ? 'bg-green-500' : 'bg-blue-500'
                  }`}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Filters */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8 border-2 border-gray-100">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search */}
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search items..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:border-accent-400 focus:outline-none transition-colors"
              />
            </div>

            {/* Category Filter */}
            <div className="flex items-center gap-2">
              <Filter className="w-5 h-5 text-gray-400" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-accent-400 focus:outline-none transition-colors"
              >
                {categories.map((cat) => (
                  <option key={cat.id} value={cat.id}>
                    {cat.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Priority Filter */}
            <select
              value={selectedPriority}
              onChange={(e) => setSelectedPriority(e.target.value)}
              className="px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-accent-400 focus:outline-none transition-colors"
            >
              {priorityFilters.map((filter) => (
                <option key={filter.id} value={filter.id}>
                  {filter.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Checklist Items */}
        <div className="space-y-4">
          <AnimatePresence mode="wait">
            {filteredItems.length > 0 ? (
              filteredItems.map((item, index) => (
                <ChecklistItem
                  key={item.id}
                  item={item}
                  isChecked={checkedItems.has(item.id)}
                  onToggle={toggleItem}
                  index={index}
                />
              ))
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-12 bg-white rounded-xl shadow-lg"
              >
                <p className="text-gray-500 text-lg">No items match your filters.</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Completion Message */}
        {progressPercentage === 100 && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mt-8 bg-gradient-to-r from-green-400 to-blue-500 rounded-2xl p-8 text-center text-white shadow-2xl"
          >
            <Trophy className="w-16 h-16 mx-auto mb-4" />
            <h2 className="text-3xl font-bold mb-2">🎉 Congratulations! 🎉</h2>
            <p className="text-xl mb-4">You've completed all pre-trip essentials!</p>
            <p className="text-lg opacity-90">You're all set for an amazing adventure!</p>
          </motion.div>
        )}
      </div>
    </div>
  );
}



