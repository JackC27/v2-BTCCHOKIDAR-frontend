import { nodeResolve } from '@rollup/plugin-node-resolve';
import { babel } from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';

export default [
  {
    input: ["src/main.js"],
    output : {
      file: "dist/bundle.js", 
      format: "iife", 
      name:"main",
      sourcemap: true
    },
    plugins: [
      nodeResolve({extensions: [".js"]}),
      commonjs(),
      babel({
        exclude: 'node_modules/**',
        babelHelpers: 'bundled',
        presets: ["@babel/preset-react"]
      })
    ],
  }
]

    // {
    //   file: 'bundle.min.js',
    //   format: 'iife',
    //   name: 'version',
    //   plugins: [terser()]
    // }