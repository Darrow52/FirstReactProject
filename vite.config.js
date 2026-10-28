import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig(({ command, isPreview }) => ({
  plugins: [react()],
  // GitHub Pages serves the site from /<repository>/; only the dev server runs from /
  base: command === 'serve' && !isPreview ? '/' : '/FirstReactProject/',
}))
