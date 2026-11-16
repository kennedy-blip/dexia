import Dexie, { type Table } from 'dexie';
import type { Task, Entry, Habit, Setting } from './types';
class AuraDatabase extends Dexie {
  tasks!: Table<Task, string>; entries!: Table<Entry, string>; habits!: Table<Habit, string>; settings!: Table<Setting, string>;
  constructor() {
    super('AuraSyncDB');
    this.version(1).stores({ tasks: 'id, done, category, priority, createdAt', entries: 'id, kind, category, date, createdAt', habits: 'id, title', settings: 'key' });
  }
}
export const db = new AuraDatabase();
export async function seedDatabase() {
  if (await db.tasks.count() === 0) await db.tasks.bulkAdd([
    { id: crypto.randomUUID(), title: 'Plan the week ahead', category: 'Personal', priority: 'High', done: false, due: new Date().toISOString().slice(0,10), createdAt: Date.now() },
    { id: crypto.randomUUID(), title: 'Review monthly budget', category: 'Finance', priority: 'Medium', done: false, due: new Date().toISOString().slice(0,10), createdAt: Date.now() },
    { id: crypto.randomUUID(), title: 'Read for 20 minutes', category: 'Growth', priority: 'Low', done: true, due: new Date().toISOString().slice(0,10), createdAt: Date.now() }
  ]);
  if (await db.habits.count() === 0) await db.habits.bulkAdd([
    { id: crypto.randomUUID(), title: 'Morning movement', streak: 4, doneToday: false },
    { id: crypto.randomUUID(), title: 'Read 20 minutes', streak: 8, doneToday: true },
    { id: crypto.randomUUID(), title: 'Plan tomorrow', streak: 2, doneToday: false }
  ]);
}