import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function Origins() {
    return (
        <div className="min-h-screen bg-light flex flex-col">
            <Header />

            <main className="flex-1 w-full flex items-center justify-center">
                <div className="max-w-2xl mx-auto px-4 py-20 text-center">
                    {/* Coming Soon Icon */}
                    <div className="text-8xl mb-8">☕</div>

                    {/* Heading */}
                    <h1 className="text-5xl font-bold mb-6 text-coffee-900 font-serif">
                        Origins & Stories
                    </h1>

                    {/* Description */}
                    <p className="text-xl text-coffee-700 mb-8 leading-relaxed">
                        Discover the art and craft behind Bean & Brew. From
                        roasting journals to farmer stories, see how we create
                        exceptional coffee from seed to cup.
                    </p>

                    {/* Coming Soon Badge */}
                    <div className="inline-block bg-terracotta text-white px-6 py-3 rounded-full font-semibold text-lg mb-8">
                        Coming Soon - Phase 2
                    </div>

                    {/* CTA Button */}
                    <div>
                        <Link
                            href="/products"
                            className="inline-block bg-coffee-800 hover:bg-coffee-900 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl"
                        >
                            Browse Coffee Collection
                        </Link>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
