"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/// <reference types="vitest" />
var vite_1 = require("vite");
var plugin_react_1 = __importDefault(require("@vitejs/plugin-react"));
exports.default = (0, vite_1.defineConfig)({
    plugins: [(0, plugin_react_1.default)()],
    test: {
        globals: true,
        environment: "jsdom",
        setupFiles: "./src/setupTests.ts", // Loads the setupTests.ts file
    },
});
