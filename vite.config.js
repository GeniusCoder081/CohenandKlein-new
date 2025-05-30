import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  //backend server start
  server:{
   proxy:{
    '/api':'http://localhost:3000',
   },
  },// backend server end
  plugins: [react(),
    tailwindcss(),
  ],
  build: {
    chunkSizeWarningLimit: 1000, // Increase limit from 500kB to 1000kB
  }
})
