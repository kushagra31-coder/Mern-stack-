import type { DesignFile } from '../../types';
import type { StateCreator } from 'zustand';

export interface FileSlice {
  files: DesignFile[];
  addFile: (file: DesignFile) => void;
  updateFile: (id: string, content: string) => void;
  removeFile: (id: string) => void;
}

export const createFileSlice: StateCreator<FileSlice> = (set) => ({
  files: [],
  addFile: (file) =>
    set((state) => ({ files: [...state.files, file] })),
  updateFile: (id, content) =>
    set((state) => ({
      files: state.files.map(f =>
        f.id === id ? { ...f, content } : f
      )
    })),
  removeFile: (id) =>
    set((state) => ({
      files: state.files.filter(f => f.id !== id)
    }))
});