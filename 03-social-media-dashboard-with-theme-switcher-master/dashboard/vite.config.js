import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/FrontendMentor-Challenges/03-social-media-dashboard-with-theme-switcher-master/dashboard/dist/"
})
