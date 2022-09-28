import { defineConfig } from 'rollup'
import pkg from './package.json'
import typescript from '@rollup/plugin-typescript'
import dts from 'rollup-plugin-dts'

export default defineConfig([{
  input: "./src/index.ts",
  output: [
    { file: pkg.main, format: "cjs" },
    { file: pkg.module, format: 'esm' },
  ],
  plugins: [
    typescript(),
  ]
}, {
  input: "./src/index.ts",
  output: {
    file: pkg.types,
    format: 'esm'
  },
  plugins: [dts()]
}])