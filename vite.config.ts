import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
const configureAliases = require("./src/shared/lib/configure/configure.ts")
const config = require("./tsconfig.json")

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: configureAliases.default(config.compilerOptions.paths)
  }
})
