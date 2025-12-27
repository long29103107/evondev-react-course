import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import { fileURLToPath } from 'url'
import tailwindcss from '@tailwindcss/vite'
import eslint from "vite-plugin-eslint";

const __dirname = path.dirname(fileURLToPath(import.meta.url))
export default defineConfig({
  plugins: [react(), tailwindcss(), eslint({
    failOnError: true, 
  })],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'), 
    },
  },
  server: {
    port: 3000, 
  },
})