import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { createRequire } from 'node:module'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const require = createRequire(import.meta.url)
const vitePrerender = require('vite-plugin-prerender')
const isCiBuild = process.env.CI === 'true' || process.env.CI === '1' || process.env.VERCEL === '1'
const shouldPrerender = process.env.PRERENDER === '1' || (!isCiBuild && process.env.PRERENDER !== '0')

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    ...(shouldPrerender
      ? [vitePrerender({
        staticDir: path.join(__dirname, 'dist'),
        routes: ['/', '/professional', '/rotaract'],
        renderer: new vitePrerender.PuppeteerRenderer({
          renderAfterTime: 1200,
        }),
      })]
      : []),
  ],
  build: {
    target: 'esnext',
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
    assetsInlineLimit: 0,
  },
  server: {
    warmup: {
      clientFiles: ['./src/main.tsx'],
    },
  },
})
