// General config for vite project
import {defineConfig} from "vitest/config"
import react from "@vitejs/plugin-react"

export default defineConfig({
    define: {
        "import.meta.vitest": "undefined",
    },
    test: {
        globals: true,
        environment: "jsdom",
        css: true,
        setupFiles: "./src/test/setup.ts",
        includeSource: ["src/**/*.{js,ts,jsx,tsx}"],
        coverage: {
            reporter: ["text", "html", "json-summary"],
        },
    },
    plugins: [react()],
})
