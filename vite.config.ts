import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
const conf = require("./src/utils/configure.ts")

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: conf.configureAliases()
  }
})
