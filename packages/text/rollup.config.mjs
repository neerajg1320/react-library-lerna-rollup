import babel from 'rollup-plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import external from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';
import commonjs from '@rollup/plugin-commonjs';
import {terser} from "rollup-plugin-terser";

export default [
  {
    input: './lib/text.js',
    output: [
      {
        file: 'dist/index.js',
        format: 'cjs'
      },
      {
        file: 'dist/index.es.js',
        format: 'es',
        exports: 'named',
      }
    ],
    onwarn(warning, warn) {
      if (warning.code === 'THIS_IS_UNDEFINED') return;
      warn(warning);
    },
    plugins: [
      postcss({
        plugins:[],
        minimize: true
      }),
      babel({
        // exclude: 'node_modules/**',
        exclude: /node_modules/,
        presets: ['@babel/preset-env', '@babel/preset-react'],

      }),
      external(),
      commonjs(),
      resolve(),
      terser()
    ]
  }
]