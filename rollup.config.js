import ts from "rollup-plugin-ts";
import del from "rollup-plugin-delete";

export default {
  input: "index.ts",
  output: { dir: "dist", format: "es", sourcemap: true },
  plugins: [
    ts({
      tsconfig: "tsconfig.json",
    }),
    del({ targets: "dist/*", runOnce: true }),
  ],
};
