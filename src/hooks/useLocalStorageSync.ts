import { useEffect, useState } from 'react';
import { liveQuery } from 'dexie';
import { db, seedDatabase } from '../db';
import type { Entry, Habit, Task } from '../types';
export function useLocalStorageSync() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [entries, setEntries] = useState<Entry[]>([]);
  const [habits, setHabits] = useState<Habit[]>([]);
  const [ready, setReady] = useState(false);
  const [online, setOnline] = useState(navigator.onLine);
  useEffect(() => {
    let a: { unsubscribe: () => void } | undefined, b: { unsubscribe: () => void } | undefined, c: { unsubscribe: () => void } | undefined;
    seedDatabase().then(() => {
      a = liveQuery(() => db.tasks.orderBy('createdAt').reverse().toArray()).subscribe(setTasks);
      b = liveQuery(() => db.entries.orderBy('createdAt').reverse().toArray()).subscribe(setEntries);
      c = liveQuery(() => db.habits.toArray()).subscribe(setHabits);
      setReady(true);
    });
    const onOnline = () => setOnline(true), onOffline = () => setOnline(false);
    window.addEventListener('online', onOnline); window.addEventListener('offline', onOffline);
    return () => { a?.unsubscribe(); b?.unsubscribe(); c?.unsubscribe(); window.removeEventListener('online', onOnline); window.removeEventListener('offline', onOffline); };
  }, []);
  return { tasks, entries, habits, ready, online };
}