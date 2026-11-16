export type Theme = 'midnight' | 'primal' | 'cyberpunk';
export type Role = 'admin' | 'member';
export type Task = { id: string; title: string; category: string; priority: 'Low' | 'Medium' | 'High'; done: boolean; due: string; createdAt: number };
export type Entry = { id: string; kind: 'income' | 'expense'; title: string; category: string; amount: number; date: string; createdAt: number };
export type Habit = { id: string; title: string; streak: number; doneToday: boolean };
export type Setting = { key: string; value: string };