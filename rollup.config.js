import { nodeResolve } from '@rollup/plugin-node-resolve';
import { babel } from '@rollup/plugin-babel';
export default [
  {
    input: "src/main.js",
    output : {
      file: "dist/bundle.js", 
      format: "iife", 
      name:"test1"
    },
    plugins: [
      nodeResolve(),
      babel({
        exclude: 'node_modules/**'
      })
    ]
  }
]

    // {
    //   file: 'bundle.min.js',
    //   format: 'iife',
    //   name: 'version',
    //   plugins: [terser()]
    // }