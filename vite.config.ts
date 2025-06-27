import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    // Handle client-side routing
    proxy: {
      // Redirect all 404s to index.html for SPA routing
      '*': {
        target: 'index.html',
        changeOrigin: true,
      },
    },
  },
  build: {
    outDir: 'docs',
    emptyOutDir: true,
  },
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
