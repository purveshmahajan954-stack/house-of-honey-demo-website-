import path from 'path';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'vite';

// PORT and BASE_PATH are only required in the Replit dev environment.
// During a Netlify (or other CI) build they are absent — that's fine.
const isReplit = Boolean(process.env.REPL_ID);

const rawPort = process.env.PORT;
if (isReplit && !rawPort) {
  throw new Error('PORT environment variable is required but was not provided.');
}
const port = rawPort ? Number(rawPort) : 3000;
if (rawPort && (Number.isNaN(port) || port <= 0)) {
  throw new Error(`Invalid PORT value: "${rawPort}"`);
}

const basePath = process.env.BASE_PATH ?? '/';

const replitPlugins =
  isReplit && process.env.NODE_ENV !== 'production'
    ? [
        await import('@replit/vite-plugin-runtime-error-modal').then((m) =>
          m.default(),
        ),
        await import('@replit/vite-plugin-cartographer').then((m) =>
          m.cartographer({ root: path.resolve(import.meta.dirname, '..') }),
        ),
        await import('@replit/vite-plugin-dev-banner').then((m) =>
          m.devBanner(),
        ),
      ]
    : [];

export default defineConfig({
  base: basePath,
  plugins: [react(), tailwindcss(), ...replitPlugins],
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
