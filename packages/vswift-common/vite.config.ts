import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: "src/index.ts",
      name: "VswiftCommon",
      fileName: "index",
    },
    rollupOptions: {
      external: ["vue", "lodash", "moment"],
      output: {
        globals: {
          vue: "Vue",
          lodash: "Lodash",
          moment: "Moment",
        },
      },
    },
  },
});
