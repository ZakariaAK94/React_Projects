import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/React_Projects/Assembly_Game/', // Update to match your GitHub Pages path
  build: {
    outDir: 'build', // Ensures the output folder matches gh-pages' expectations
  },
})
