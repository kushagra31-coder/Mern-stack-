import { create } from 'zustand';
import type { Task } from '../types';

interface TaskStore {
  tasks: Task[];
  addTask: (title: string) => void;
  toggleTask: (id: string) => void;
  removeTask: (id: string) => void;
}

const useTaskStore = create<TaskStore>((set) => ({
  tasks: [],
  addTask: (title) =>
    set((state) => ({
      tasks: [...state.tasks, {
        id: Date.now().toString(),
        title,
        completed: false
      }]
    })),
  toggleTask: (id) =>
    set((state) => ({
      tasks: state.tasks.map(task =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    })),
  removeTask: (id) =>
    set((state) => ({
      tasks: state.tasks.filter(task => task.id !== id)
    }))
}));

export default useTaskStore;