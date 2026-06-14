import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

interface SessionStore {
  userId: string | null;
  token: string | null;
  expiresAt: number | null;
  role: 'admin' | 'user';
  setSession: (
    userId: string,
    token: string,
    expiresAt: number
  ) => void;
  clearSession: () => void;
}

export const useSessionStore = create<SessionStore>()(
  persist(
    (set) => ({
      userId: null,
      token: null,
      expiresAt: null,
      role: 'user',
      setSession: (userId, token, expiresAt) =>
        set({ userId, token, expiresAt }),
      clearSession: () =>
        set({
          userId: null,
          token: null,
          expiresAt: null
        })
    }),
    {
      name: 'collabnotes-session',
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({
        userId: state.userId,
        token: state.token,
        role: state.role
      }),
      version: 2,
     migrate: (persisted: unknown, version: number) => {
  if (version < 2) {
    return { ...(persisted as Record<string, unknown>), role: 'user' };
  }
  return persisted;
}
    }
  )
);

export default useSessionStore;