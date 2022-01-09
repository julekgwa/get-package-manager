import resolve from '@rollup/plugin-node-resolve'
import dts from 'rollup-plugin-dts'
import external from 'rollup-plugin-peer-deps-external'
import { terser } from 'rollup-plugin-terser'

export default [
  {
    input: './out/cjs/index.js',
    output: [
      {
        file: 'dist/index.js',
        format: 'cjs'
      }
    ],
    plugins: [
      external(),
      resolve(),
      terser()
    ],
    external: ['shelljs']
  },
  {
    input: './out/es/index.js',
    output: [
      {
        file: 'dist/index.es.js',
        format: 'es'
      }
    ],
    plugins: [
      external(),
      resolve(),
      terser()
    ],
    external: ['shelljs']
  },
  {
    input: './out/dts/index.d.ts',
    output: [{ file: 'dist/index.d.ts', format: 'es' }],
    plugins: [dts()],
  }
]
