import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    open: true,  // This will open the page automatically
    port: 3000,
    host: true, // Open to local network and display URL
  },
});
