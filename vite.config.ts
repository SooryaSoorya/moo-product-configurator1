/// <reference types="vitest" />
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true, // Make Vitest globals like `test`, `expect` available without import
    environment: "jsdom", // Ensures a DOM-like environment for React components
    setupFiles: "./src/setupTests.ts", // Loads the setupTests.ts file
  },
});
