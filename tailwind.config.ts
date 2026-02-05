import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx}",
        "./src/components/**/*.{js,ts,jsx,tsx}",
        "./src/app/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "#1a1a1a",      // Deep black
                secondary: "#8B7355",    // Coffee brown
                accent: "#D4A574",       // Gold/tan
                light: "#FAFAF8",        // Off-white
                border: "#EEEEEE",       // Light border
                text: {
                    primary: "#2C2C2C",
                    muted: "#999999",
                    light: "#FFFFFF",
                },
            },
            fontFamily: {
                serif: ["Georgia", "serif"],
                sans: ["-apple-system", "BlinkMacSystemFont", "Segoe UI", "sans-serif"],
            },
        },
    },
    plugins: [],
};
export default config;
