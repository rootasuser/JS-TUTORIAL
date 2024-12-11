import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      // Ensure Vite uses your `index.html` as the entry point
      input: 'index.html',
    },
  },
  server: {
    // Allow serving the app on all network interfaces (useful for testing locally on mobile)
    host: true,
  },
});
