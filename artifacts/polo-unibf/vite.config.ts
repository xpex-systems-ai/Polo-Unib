import path from 'path';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'vite';

// PORT is only needed for the dev/preview server, not for `vite build`
const rawPort = process.env.PORT;
const port = rawPort ? Number(rawPort) : 3000;

// Production assets are served from the domain root on Vercel.
const basePath = '/';
const isDevelopment = process.env.NODE_ENV === 'development';
const isReplitDev = isDevelopment && process.env.REPL_ID !== undefined;

export default defineConfig({
  base: basePath,
  plugins: [
    react(),
    tailwindcss(),
    ...(isReplitDev
      ? [
          await import('@replit/vite-plugin-runtime-error-modal').then((m) => m.default()),
          await import('@replit/vite-plugin-cartographer').then((m) =>
            m.cartographer({
              root: path.resolve(import.meta.dirname, '..'),
            }),
          ),
          await import('@replit/vite-plugin-dev-banner').then((m) =>
            m.devBanner(),
          ),
        ]
      : []),
  ],
  resolve: {
    alias: {
      '@': path.resolve(import.meta.dirname, 'src'),
      '@assets': path.resolve(import.meta.dirname, '..', '..', 'attached_assets'),
    },
    dedupe: ['react', 'react-dom'],
  },
  root: path.resolve(import.meta.dirname),
  build: {
    outDir: path.resolve(import.meta.dirname, 'dist'),
    emptyOutDir: true,
  },
  server: {
    port,
    strictPort: true,
    host: '0.0.0.0',
    allowedHosts: true,
    fs: { strict: true },
  },
  preview: {
    port,
    host: '0.0.0.0',
    allowedHosts: true,
  },
});
