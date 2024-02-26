import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    lib: {
      entry: "src/components/index.ts",
      name: "Vswift",
      fileName: "index",
    },
    rollupOptions: {
      external: ["vue", "element-plus", "@vswift/common"],
      output: {
        globals: {
          vue: "Vue",
          "element-plus": "ElementPlus",
          "@vswift/common": "VswiftCommon",
        },
      },
    },
  },
});
