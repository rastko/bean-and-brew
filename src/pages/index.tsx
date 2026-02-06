import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function Home() {
    return (
        <div className="min-h-screen bg-primary flex flex-col">
            <Header />

            <main className="flex-1 w-full">
                {/* HERO SECTION */}
                <section
                    className="relative min-h-screen overflow-hidden"
                    style={{ backgroundColor: "#F9F5EB" }}
                >
                    {/* Earthy background gradient */}
                    <div
                        className="absolute inset-0"
                        style={{
                            background:
                                "linear-gradient(to bottom right, rgba(139, 148, 103, 0.05), rgba(184, 92, 56, 0.05))",
                        }}
                    ></div>

                    <div className="relative max-w-7xl mx-auto px-4 py-20 sm:px-6 lg:px-8 min-h-screen flex items-center">
                        <div className="grid lg:grid-cols-2 gap-16 items-center w-full">
                            {/* Left Column - Content */}
                            <div className="space-y-8">
                                {/* Badge */}
                                <div
                                    className="font-body inline-flex items-center px-4 py-2 rounded-full text-sm font-medium"
                                    style={{
                                        backgroundColor: "#8B9467",
                                        color: "#F9F5EB",
                                        fontWeight: "500",
                                    }}
                                >
                                    <span
                                        className="w-2 h-2 rounded-full mr-2"
                                        style={{ backgroundColor: "#B85C38" }}
                                    ></span>
                                    Est. 1952 • Premium Coffee Roasters
                                </div>

                                {/* Main heading */}
                                <div className="space-y-4">
                                    <h1
                                        className="font-display text-6xl md:text-7xl font-bold leading-tight"
                                        style={{
                                            color: "#333333",
                                        }}
                                    >
                                        Bean
                                        <span
                                            className="block"
                                            style={{
                                                fontWeight: "600",
                                                color: "#B85C38",
                                            }}
                                        >
                                            & Brew
                                        </span>
                                    </h1>

                                    {/* Value-driven subheadline */}
                                    <p
                                        className="font-display text-2xl md:text-3xl font-medium leading-snug max-w-lg"
                                        style={{
                                            color: "#B85C38",
                                        }}
                                    >
                                        Three generations. One obsession: the
                                        perfect roast.
                                    </p>

                                    <p
                                        className="font-body text-lg md:text-xl max-w-lg leading-relaxed"
                                        style={{
                                            fontWeight: "400",
                                            color: "#333333",
                                        }}
                                    >
                                        Since 1952, we&apos;ve sourced
                                        single-origin beans from farmers we know
                                        by name, then roasted them in small
                                        batches the week you order. No
                                        warehouses. No compromise.
                                    </p>
                                </div>

                                {/* Action buttons */}
                                <div className="flex flex-col sm:flex-row gap-4">
                                    <Link
                                        href="/products"
                                        className="font-body text-white px-8 py-4 rounded-lg font-semibold transition-all duration-200 hover:scale-105 text-center"
                                        style={{
                                            backgroundColor: "#B85C38",
                                        }}
                                    >
                                        Shop Collection
                                    </Link>
                                    <Link
                                        href="/origins"
                                        className="font-body text-white px-8 py-4 rounded-lg font-semibold transition-all duration-200 hover:scale-105 text-center"
                                        style={{
                                            backgroundColor: "#8B9467",
                                        }}
                                    >
                                        Learn More
                                    </Link>
                                </div>

                                {/* Stats */}
                                <div
                                    className="grid grid-cols-3 gap-8 pt-8"
                                    style={{
                                        borderTop:
                                            "1px solid rgba(139, 148, 103, 0.3)",
                                    }}
                                >
                                    <div className="group cursor-default transition-all duration-300 hover:scale-105">
                                        <div className="flex items-center gap-2 mb-1">
                                            <span className="text-xl">⭐</span>
                                            <div
                                                className="text-2xl md:text-3xl font-bold"
                                                style={{ color: "#B85C38" }}
                                            >
                                                4.9
                                            </div>
                                        </div>
                                        <div
                                            className="text-sm"
                                            style={{ color: "#8B9467" }}
                                        >
                                            Rating
                                        </div>
                                    </div>
                                    <div className="group cursor-default transition-all duration-300 hover:scale-105">
                                        <div className="flex items-center gap-2 mb-1">
                                            <span className="text-xl">🌍</span>
                                            <div
                                                className="text-2xl md:text-3xl font-bold"
                                                style={{ color: "#B85C38" }}
                                            >
                                                50+
                                            </div>
                                        </div>
                                        <div
                                            className="text-sm"
                                            style={{ color: "#8B9467" }}
                                        >
                                            Origins
                                        </div>
                                    </div>
                                    <div className="group cursor-default transition-all duration-300 hover:scale-105">
                                        <div className="flex items-center gap-2 mb-1">
                                            <span className="text-xl">☕</span>
                                            <div
                                                className="text-2xl md:text-3xl font-bold"
                                                style={{ color: "#B85C38" }}
                                            >
                                                10k+
                                            </div>
                                        </div>
                                        <div
                                            className="text-sm"
                                            style={{ color: "#8B9467" }}
                                        >
                                            Loved by coffee drinkers
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Right Column - Image */}
                            <div className="relative mt-12 lg:mt-0">
                                <div className="relative">
                                    <img
                                        src="https://images.unsplash.com/photo-1662462761983-1d9125fa8ee8?q=80&w=1315&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                        alt="Premium coffee beans"
                                        className="w-full h-[400px] md:h-[500px] rounded-2xl shadow-2xl object-cover"
                                        style={{
                                            filter: "saturate(1.3) sepia(0.12) brightness(1.10) contrast(1.28) hue-rotate(-5deg)",
                                            objectPosition: "center 85%",
                                        }}
                                    />

                                    {/* Floating card */}
                                    <div
                                        className="absolute -bottom-4 -left-4 md:-bottom-6 md:-left-6 rounded-xl p-4 md:p-6 shadow-xl hidden sm:block"
                                        style={{
                                            backgroundColor: "#F9F5EB",
                                            border: "1px solid #8B9467",
                                        }}
                                    >
                                        <div className="flex items-center space-x-3">
                                            <div
                                                className="w-12 h-12 rounded-full flex items-center justify-center"
                                                style={{
                                                    backgroundColor: "#8B9467",
                                                }}
                                            >
                                                <span className="text-white font-bold">
                                                    4.9
                                                </span>
                                            </div>
                                            <div>
                                                <div
                                                    className="font-display font-semibold"
                                                    style={{
                                                        color: "#B85C38",
                                                    }}
                                                >
                                                    Exceptional Quality
                                                </div>
                                                <div
                                                    className="font-body text-sm"
                                                    style={{
                                                        color: "#8B9467",
                                                    }}
                                                >
                                                    From 1,200+ reviews
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA SECTION */}
                <section className="bg-white py-16">
                    <div className="max-w-7xl mx-auto px-4">
                        <div className="text-center">
                            <Link
                                href="/products"
                                className="inline-block text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors hover:opacity-90"
                                style={{ backgroundColor: "#B85C38" }}
                            >
                                Shop Our Coffee Collection
                            </Link>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
