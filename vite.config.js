import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// Cấu hình cho Vite và GitHub Pages
export default defineConfig({
  plugins: [react()],
  base: '/fireworks-tqd/',  // Tên repo GitHub của bạn
})
