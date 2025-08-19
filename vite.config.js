import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/proyect/', // Cambia a '/proyect/' para tu repositorio
  plugins: [react()],
});

