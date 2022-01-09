import resolve from '@rollup/plugin-node-resolve'

import external from 'rollup-plugin-peer-deps-external'
import { terser } from 'rollup-plugin-terser'

export default [
  {
    input: './dist/cjs/index.js',
    output: [
      {
        file: 'dist/index.js',
        format: 'es'
      }
    ],
    plugins: [
      external(),
      resolve(),
      terser()
    ]
  },
  {
    input: './dist/es/index.js',
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
  }
]
