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
                primary: "#F5E6D3", // Warm cream
                secondary: "#D4885A", // Warm brown
                accent: "#C85A3A", // Rust/orange
                light: "#FFFBF7", // Warm off-white
                border: "#E8DCC8", // Warm border
                text: {
                    primary: "#5C4A3D",
                    muted: "#9B8B7E",
                    light: "#FFFFFF",
                },
            },
            fontFamily: {
                serif: ["Georgia", "serif"],
                sans: [
                    "-apple-system",
                    "BlinkMacSystemFont",
                    "Segoe UI",
                    "sans-serif",
                ],
            },
        },
    },
    plugins: [],
};
export default config;
