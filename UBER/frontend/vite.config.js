import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: true,             // Allow external access
    strictPort: false,
    allowedHosts: [
      "5173-vikassingh30-uberapp-8enmbt6jk2q.ws-us118.gitpod.io",
      "5174-vikassingh30-uberapp-8enmbt6jk2q.ws-us118.gitpod.io"
    ],
  },
})

