import ts from "rollup-plugin-ts";
import del from "rollup-plugin-delete";
import babel from 'rollup-plugin-babel';
import { terser } from 'rollup-plugin-terser';

export default {
  input: "index.ts",
  output: [
    {
      file: './dist/util.umd.js',
      format: 'umd',
      name: 'util'
    },
    {
      file: './dist/util.es.js',
      format: 'es',
      sourcemap: true
    },
    {
      file: './dist/util.cjs.js',
      format: 'cjs'
    }
  ],
  plugins: [
    ts({
      tsconfig: "tsconfig.json",
    }),
    del({ targets: "dist/*", runOnce: true }),
    babel({
      exclude: 'node_modules/**'
    }),
    terser()
  ],
};
