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
                // Coffee & Cream palette for farmers market aesthetic
                coffee: {
                    50: "#faf7f2",
                    100: "#f4ede2",
                    200: "#e8d8c4",
                    300: "#d9bc9e",
                    400: "#c69c76",
                    500: "#b8845c",
                    600: "#aa7150",
                    700: "#8d5a43",
                    800: "#724a3a",
                    900: "#5d3e31",
                },
                cream: {
                    50: "#fdfdfb",
                    100: "#faf9f5",
                    200: "#f4f2ea",
                    300: "#ece8dc",
                    400: "#e1dac8",
                    500: "#d3c7b0",
                    600: "#c1af94",
                    700: "#a89478",
                    800: "#8a7862",
                    900: "#71634f",
                },
                // Old project exact colors
                sage: "#8B9467", // Green accent from old project
                terracotta: "#B85C38", // Main brand color from old project
                warmBg: "#F9F5EB", // Main background from old project
                // Semantic color names
                primary: "#F9F5EB", // warmBg
                secondary: "#f4f2ea", // cream-200
                accent: "#B85C38", // terracotta (main brand color)
                light: "#fdfdfb", // cream-50
                border: "#e8d8c4", // coffee-200
                text: {
                    primary: "#333333", // Dark text from old project
                    muted: "#8a7862", // cream-800
                    light: "#FFFFFF",
                },
            },
            fontFamily: {
                display: ["var(--font-playfair)", "Playfair Display", "serif"],
                body: ["var(--font-inter)", "Inter", "sans-serif"],
                serif: ["var(--font-playfair)", "Playfair Display", "serif"],
                sans: [
                    "var(--font-inter)",
                    "Inter",
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
