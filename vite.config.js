import { defineConfig } from "vite";
import includeHtmlPartials from "./include-html-partials.js";

export default defineConfig({
  plugins: [includeHtmlPartials()],
  build: {
    rollupOptions: {
      output: {
        entryFileNames: "index.js", // JavaScript immer als index.js
        assetFileNames: ({ name }) => {
          if (name?.endsWith(".css")) {
            return "index.css"; // CSS immer als index.css
          }
          return "[name].[ext]"; // Andere Assets mit ihrem Standardnamen
        },
      },
    },
  },
});
