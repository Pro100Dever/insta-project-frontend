import react from '@vitejs/plugin-react-swc'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // plugins: [react({ reactRefreshHost: 'http://localhost:3000' })],
})
