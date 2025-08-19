import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./setupTests.js",
    include: ['src/__tests__/**/*.test.{js,jsx,ts,tsx}'],
    exclude: ['node_modules', 'dist']
  }
})
