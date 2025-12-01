'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Package, Snowflake, Shirt, Baby, Car } from 'lucide-react';

interface PackingItem {
  id: string;
  category: string;
  items: string[];
  icon: React.ReactNode;
}

const packingCategories: PackingItem[] = [
  {
    id: 'winter-clothing',
    category: 'Winter Clothing',
    items: [
      'Waterproof winter jacket',
      'Waterproof pants',
      'Thermal base layers (2-3 sets)',
      'Fleece sweaters',
      'Warm socks (multiple pairs)',
      'Winter boots',
      'Gloves/mittens',
      'Warm hat',
      'Scarf',
      'Sunglasses',
    ],
    icon: <Snowflake className="w-6 h-6" />,
  },
  {
    id: 'snowboarding',
    category: 'Snowboarding Gear',
    items: [
      'Snowboard (or rent)',
      'Snowboard boots',
      'Bindings',
      'Helmet',
      'Goggles',
      'Snowboard pants',
      'Gloves',
      'Wrist guards (optional)',
    ],
    icon: <Shirt className="w-6 h-6" />,
  },
  {
    id: 'toddler',
    category: 'Toddler Essentials',
    items: [
      'Snowsuit',
      'Winter boots',
      'Warm mittens',
      'Warm hat',
      'Thermal layers',
      'Extra clothes (lots!)',
      'Diapers (if needed)',
      'Wipes',
      'Favorite toys',
      'Comfort items',
      'Travel snacks',
    ],
    icon: <Baby className="w-6 h-6" />,
  },
  {
    id: 'documents',
    category: 'Documents',
    items: [
      'Passports/ID cards',
      'Driving license',
      'Travel insurance documents',
      'Hotel confirmations',
      'Activity tickets',
      'Credit cards',
      'Health insurance card',
    ],
    icon: <Package className="w-6 h-6" />,
  },
  {
    id: 'electronics',
    category: 'Electronics',
    items: [
      'Phone chargers',
      'Camera',
      'Power bank',
      'Noise-canceling headphones (for toddler)',
      'Tablet/entertainment for car',
      'Car phone mount',
      'GPS device (or use phone)',
    ],
    icon: <Package className="w-6 h-6" />,
  },
  {
    id: 'car-essentials',
    category: 'Car Essentials',
    items: [
      'Car seat (toddler)',
      'Emergency kit',
      'First aid kit',
      'Blankets',
      'Water bottles',
      'Snacks',
      'Road maps (backup)',
      'Toll vignettes',
    ],
    icon: <Car className="w-6 h-6" />,
  },
];

export default function PackingList() {
  const [checkedItems, setCheckedItems] = useState<Set<string>>(new Set());

  const toggleItem = (categoryId: string, item: string) => {
    const key = `${categoryId}-${item}`;
    setCheckedItems((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(key)) {
        newSet.delete(key);
      } else {
        newSet.add(key);
      }
      return newSet;
    });
  };

  const totalItems = packingCategories.reduce((sum, cat) => sum + cat.items.length, 0);
  const checkedCount = checkedItems.size;
  const progress = Math.round((checkedCount / totalItems) * 100);

  return (
    <div className="bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <h1 className="text-4xl md:text-5xl font-bold gradient-primary bg-clip-text text-transparent mb-4">
            Packing List
          </h1>
          <p className="text-gray-600 text-lg mb-6">
            Don't forget anything! Check off items as you pack.
          </p>
          <div className="bg-white rounded-xl p-6 shadow-lg inline-block">
            <div className="text-3xl font-bold text-accent-600 mb-2">
              {progress}%
            </div>
            <div className="text-sm text-gray-600">
              {checkedCount} of {totalItems} items packed
            </div>
            <div className="w-64 bg-gray-200 rounded-full h-3 mt-4">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                className="h-full gradient-accent rounded-full"
              />
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {packingCategories.map((category, catIndex) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: catIndex * 0.1 }}
              className="bg-white rounded-xl shadow-lg p-6 border-2 border-gray-100"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-blue-100 rounded-lg text-blue-600">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900">{category.category}</h3>
              </div>
              <ul className="space-y-2">
                {category.items.map((item, itemIndex) => {
                  const key = `${category.id}-${item}`;
                  const isChecked = checkedItems.has(key);
                  return (
                    <motion.li
                      key={itemIndex}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: (catIndex * 0.1) + (itemIndex * 0.02) }}
                      className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors"
                      onClick={() => toggleItem(category.id, item)}
                    >
                      <div className="relative flex-shrink-0">
                        <input
                          type="checkbox"
                          checked={isChecked}
                          onChange={() => toggleItem(category.id, item)}
                          className="w-5 h-5 rounded border-2 border-gray-300 checked:bg-green-500 checked:border-green-500 focus:ring-2 focus:ring-green-300 cursor-pointer"
                          onClick={(e) => e.stopPropagation()}
                        />
                        {isChecked && (
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            className="absolute inset-0 flex items-center justify-center"
                          >
                            <Check className="w-3 h-3 text-white" />
                          </motion.div>
                        )}
                      </div>
                      <span
                        className={`flex-1 ${
                          isChecked ? 'line-through text-gray-400' : 'text-gray-700'
                        }`}
                      >
                        {item}
                      </span>
                    </motion.li>
                  );
                })}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}



