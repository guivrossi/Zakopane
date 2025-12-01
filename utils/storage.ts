/**
 * Local storage utilities for persisting checklist progress
 */

const STORAGE_KEY = 'zakopane-checklist';
const STORAGE_VERSION = '1.0.0';

export interface StoredChecklist {
  version: string;
  checkedItems: string[];
  lastUpdated: string;
  stats?: {
    totalXP: number;
    completionDate?: string;
  };
}

export function saveChecklist(checkedItems: Set<string>): void {
  try {
    const data: StoredChecklist = {
      version: STORAGE_VERSION,
      checkedItems: Array.from(checkedItems),
      lastUpdated: new Date().toISOString(),
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch (error) {
    console.error('Error saving checklist:', error);
  }
}

export function loadChecklist(): Set<string> {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) return new Set();

    const data: StoredChecklist = JSON.parse(stored);
    
    // Version check for future migrations
    if (data.version !== STORAGE_VERSION) {
      console.warn('Checklist version mismatch, resetting...');
      return new Set();
    }

    return new Set(data.checkedItems);
  } catch (error) {
    console.error('Error loading checklist:', error);
    return new Set();
  }
}

export function clearChecklist(): void {
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch (error) {
    console.error('Error clearing checklist:', error);
  }
}

export function exportChecklist(checkedItems: Set<string>): string {
  const data: StoredChecklist = {
    version: STORAGE_VERSION,
    checkedItems: Array.from(checkedItems),
    lastUpdated: new Date().toISOString(),
  };
  return JSON.stringify(data, null, 2);
}

export function importChecklist(jsonString: string): Set<string> {
  try {
    const data: StoredChecklist = JSON.parse(jsonString);
    if (data.version !== STORAGE_VERSION) {
      throw new Error('Version mismatch');
    }
    return new Set(data.checkedItems);
  } catch (error) {
    console.error('Error importing checklist:', error);
    throw error;
  }
}



