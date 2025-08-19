import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/proyect/', // Confirma que es '/proyect/'
  plugins: [react()],
});
