import path from 'path';
import {defineConfig} from 'vite';

const rootDir = typeof import.meta.dirname !== 'undefined' ? import.meta.dirname : path.resolve();

export default defineConfig(() => {
  return {
    build: {
      rollupOptions: {
        input: {
          main: path.resolve(rootDir, 'index.html'),
          sobre: path.resolve(rootDir, 'sobre.html'),
          ensino: path.resolve(rootDir, 'ensino.html'),
          cursos: path.resolve(rootDir, 'cursos.html'),
          matriculas: path.resolve(rootDir, 'matriculas.html'),
          contactos: path.resolve(rootDir, 'contactos.html'),
        },
      },
    },
    resolve: {
      alias: {
        '@': rootDir,
      },
    },
    server: {
      port: 3000,
      host: '0.0.0.0',
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      hmr: process.env.DISABLE_HMR !== 'true',
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
