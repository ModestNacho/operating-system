import create from 'zustand';

const useStore = create((set) => ({
  windows: [],
  openWindow: (window) => set((state) => ({
    windows: [...state.windows, { ...window, isMinimized: false, isMaximized: false }]
  })),
  closeWindow: (windowId) => set((state) => ({
    windows: state.windows.filter(win => win.id !== windowId)
  })),
  minimizeWindow: (windowId) => set((state) => ({
    windows: state.windows.map(win => 
      win.id === windowId ? { ...win, isMinimized: !win.isMinimized } : win
    )
  })),
  maximizeWindow: (windowId) => set((state) => ({
    windows: state.windows.map(win => 
      win.id === windowId ? { ...win, isMaximized: !win.isMaximized } : win
    )
  })),
}));

export default useStore;
