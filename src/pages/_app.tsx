import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Inter, Playfair_Display } from "next/font/google";

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
});

const playfairDisplay = Playfair_Display({
    weight: ["400", "500", "600", "700"],
    subsets: ["latin"],
    variable: "--font-playfair",
});

export default function App({ Component, pageProps }: AppProps) {
    return (
        <div className={`${inter.variable} ${playfairDisplay.variable}`}>
            <Component {...pageProps} />
        </div>
    );
}
