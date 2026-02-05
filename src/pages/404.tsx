import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function NotFound() {
    return (
        <div className="min-h-screen bg-primary flex flex-col">
            <Header />

            <main className="flex-1 w-full flex items-center justify-center py-20">
                <div className="max-w-2xl mx-auto px-4 text-center">
                    {/* 404 Heading */}
                    <div className="mb-8">
                        <h1
                            className="font-display text-7xl md:text-8xl font-bold mb-4"
                            style={{ color: "#333333" }}
                        >
                            404
                        </h1>
                        <p
                            className="font-display text-3xl md:text-4xl font-semibold"
                            style={{ color: "#B85C38" }}
                        >
                            Page Not Found
                        </p>
                    </div>

                    {/* Message */}
                    <p className="font-body text-lg text-text-muted mb-8 max-w-lg mx-auto">
                        Sorry, we couldn't find the page you're looking for. It
                        might have been moved or doesn't exist.
                    </p>

                    {/* Coffee emoji fun */}
                    <div className="text-6xl mb-12">☕</div>

                    {/* CTAs */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/"
                            className="font-body text-white px-8 py-4 rounded-lg font-semibold transition-all duration-200 hover:scale-105 text-center"
                            style={{ backgroundColor: "#B85C38" }}
                        >
                            Back to Home
                        </Link>
                        <Link
                            href="/products"
                            className="font-body text-white px-8 py-4 rounded-lg font-semibold transition-all duration-200 hover:scale-105 text-center"
                            style={{ backgroundColor: "#8B9467" }}
                        >
                            Shop Coffee
                        </Link>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
