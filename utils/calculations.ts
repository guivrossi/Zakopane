/**
 * Utility functions for calculations and statistics
 */

import { checklistItems, timelineEvents } from '@/data/tripData';

export interface TripStats {
  totalDistance: number;
  totalDriveTime: string;
  totalDays: number;
  drivingDays: number;
  accommodationNights: number;
  activitiesCount: number;
  estimatedCost: {
    accommodation: number;
    activities: number;
    food: number;
    total: number;
  };
}

export function calculateTripStats(): TripStats {
  const totalDistance = timelineEvents
    .filter((e) => e.driveDistance)
    .reduce((sum, e) => {
      const dist = e.driveDistance?.replace('~', '').replace(' km', '') || '0';
      return sum + parseInt(dist);
    }, 0);

  const drivingDays = timelineEvents.filter((e) => e.type === 'drive').length;
  const totalDays = timelineEvents.length;
  const accommodationNights = totalDays - 1; // Assuming one night per day except last

  // Rough estimates
  const estimatedCost = {
    accommodation: accommodationNights * 80, // Average €80/night
    activities: 500, // Snowboarding, thermal baths, etc.
    food: totalDays * 60, // Average €60/day for family
    total: 0,
  };
  estimatedCost.total = estimatedCost.accommodation + estimatedCost.activities + estimatedCost.food;

  return {
    totalDistance,
    totalDriveTime: '~50 hours',
    totalDays,
    drivingDays,
    accommodationNights,
    activitiesCount: timelineEvents.filter((e) => e.details.activities).length,
    estimatedCost,
  };
}

export function calculateChecklistProgress(checkedItems: Set<string>) {
  const total = checklistItems.length;
  const completed = checkedItems.size;
  const percentage = Math.round((completed / total) * 100);

  const totalXP = checklistItems.reduce((sum, item) => sum + item.xp, 0);
  const earnedXP = checklistItems
    .filter((item) => checkedItems.has(item.id))
    .reduce((sum, item) => sum + item.xp, 0);

  const categoryProgress = checklistItems.reduce((acc, item) => {
    if (!acc[item.category]) {
      acc[item.category] = { total: 0, completed: 0 };
    }
    acc[item.category].total++;
    if (checkedItems.has(item.id)) {
      acc[item.category].completed++;
    }
    return acc;
  }, {} as Record<string, { total: number; completed: number }>);

  return {
    total,
    completed,
    percentage,
    totalXP,
    earnedXP,
    xpPercentage: Math.round((earnedXP / totalXP) * 100),
    categoryProgress,
  };
}

export function formatCurrency(amount: number, currency: string = 'EUR'): string {
  return new Intl.NumberFormat('nl-NL', {
    style: 'currency',
    currency,
  }).format(amount);
}

export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return new Intl.DateTimeFormat('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(date);
}

export function getDaysUntilTrip(): number {
  const tripStart = new Date('2025-12-13');
  const today = new Date();
  const diffTime = tripStart.getTime() - today.getTime();
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  return diffDays > 0 ? diffDays : 0;
}

export function getPriorityCount(priority: 'high' | 'medium' | 'low'): number {
  return checklistItems.filter((item) => item.priority === priority).length;
}

export function getCategoryCount(category: string): number {
  return checklistItems.filter((item) => item.category === category).length;
}

export function estimateCompletionTime(checkedItems: Set<string>): string {
  const remaining = checklistItems.filter((item) => !checkedItems.has(item.id));
  const highPriorityRemaining = remaining.filter((item) => item.priority === 'high').length;
  
  // Rough estimate: 30 min per high priority, 15 min per other
  const estimatedMinutes = highPriorityRemaining * 30 + (remaining.length - highPriorityRemaining) * 15;
  const hours = Math.floor(estimatedMinutes / 60);
  const minutes = estimatedMinutes % 60;
  
  if (hours > 0) {
    return `${hours}h ${minutes}m`;
  }
  return `${minutes}m`;
}



