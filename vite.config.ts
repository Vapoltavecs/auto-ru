import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
const conf = require("./src/shared/lib/configure.ts")

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: conf.configureAliases()
  }
})
