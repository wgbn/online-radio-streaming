import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/online-radio-streaming/',
  build: {
    outDir: 'docs'
  },
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
