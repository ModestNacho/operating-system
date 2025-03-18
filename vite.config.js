import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/operating-system/', // Replace with your repository name
  plugins: [react()],
  server: {
    open: true,
    port: 3000,
    host: true,
  },
});