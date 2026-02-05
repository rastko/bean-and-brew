import React, { useState, useEffect } from "react";

export default function Header() {
    const [cartCount, setCartCount] = useState(0);

    useEffect(() => {
        updateCartCount();
        window.addEventListener("cartUpdated", updateCartCount);
        return () => window.removeEventListener("cartUpdated", updateCartCount);
    }, []);

    const updateCartCount = () => {
        const cart = JSON.parse(localStorage.getItem("cart") || "[]");
        const total = cart.reduce(
            (sum: number, item: any) => sum + item.quantity,
            0,
        );
        setCartCount(total);
    };

    return (
        <header
            className="sticky top-0 z-50 border-b backdrop-blur-lg shadow-sm"
            style={{
                backgroundColor: "#F9F5EB",
                borderColor: "rgba(139, 69, 19, 0.1)",
            }}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20 py-3">
                    <div className="flex items-center">
                        <a href="/" className="flex items-center">
                            {/* Premium Coffee Logo */}
                            <div className="relative w-14 h-14 mr-4 group cursor-pointer">
                                {/* Logo Background */}
                                <div
                                    className="absolute inset-0 rounded-2xl shadow-lg group-hover:shadow-xl transition-all duration-300"
                                    style={{
                                        backgroundColor: "#B85C38",
                                    }}
                                ></div>

                                {/* Minimalist Coffee Bean Logo */}
                                <div className="relative w-full h-full flex items-center justify-center">
                                    <svg
                                        width="26"
                                        height="26"
                                        viewBox="0 0 32 32"
                                        fill="none"
                                        className="text-white group-hover:scale-110 transition-transform duration-300"
                                    >
                                        {/* Two-tone Coffee Bean */}
                                        <ellipse
                                            cx="14"
                                            cy="16"
                                            rx="6"
                                            ry="9"
                                            fill="currentColor"
                                        />
                                        <ellipse
                                            cx="18"
                                            cy="16"
                                            rx="6"
                                            ry="9"
                                            fill="currentColor"
                                            opacity="0.9"
                                        />
                                        <line
                                            x1="16"
                                            y1="8"
                                            x2="16"
                                            y2="24"
                                            stroke="#78350f"
                                            strokeWidth="1.5"
                                            strokeLinecap="round"
                                        />
                                    </svg>
                                </div>

                                {/* Stylized Steam Animation */}
                                <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 opacity-70">
                                    <div className="flex space-x-1">
                                        <div className="w-0.5 h-3 bg-gradient-to-t from-amber-300 to-transparent animate-pulse"></div>
                                        <div
                                            className="w-0.5 h-4 bg-gradient-to-t from-orange-300 to-transparent animate-pulse"
                                            style={{ animationDelay: "150ms" }}
                                        ></div>
                                        <div
                                            className="w-0.5 h-3 bg-gradient-to-t from-amber-300 to-transparent animate-pulse"
                                            style={{ animationDelay: "300ms" }}
                                        ></div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <h1 className="font-display text-3xl font-bold tracking-tight leading-none m-0">
                                    <span style={{ color: "#333333" }}>
                                        Bean
                                    </span>
                                    <span style={{ color: "#B85C38" }}>
                                        {" "}
                                        & Brew
                                    </span>
                                </h1>
                                <p
                                    className="text-xs font-medium tracking-wider uppercase leading-tight m-0"
                                    style={{ color: "#8a7862" }}
                                >
                                    Est. 1952 • Coffee Culture
                                </p>
                            </div>
                        </a>
                    </div>

                    <nav className="flex items-center space-x-6">
                        {/* Coffee Collection Link */}
                        <a
                            href="/products"
                            className="group flex items-center transition-all duration-300 font-medium px-3 py-2 rounded-xl hover:bg-amber-50"
                            style={{ color: "#B85C38" }}
                        >
                            <span className="mr-1 text-base group-hover:animate-bounce">
                                ☕
                            </span>
                            Coffee Collection
                        </a>

                        {/* Cart Button */}
                        <a
                            href="/cart"
                            className="relative flex items-center justify-center px-4 py-2 rounded-xl font-medium transition-all duration-300 text-white hover:scale-105"
                            style={{ backgroundColor: "#B85C38" }}
                        >
                            <svg
                                className="w-5 h-5 mr-2"
                                fill="none"
                                stroke="white"
                                strokeWidth="2"
                                viewBox="0 0 24 24"
                            >
                                <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2 9m12-9l2 9M9 20a1 1 0 11-2 0 1 1 0 012 0m12 0a1 1 0 11-2 0 1 1 0 012 0" />
                            </svg>
                            Cart
                            {cartCount > 0 && (
                                <span
                                    className="absolute -top-2 -right-3 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold"
                                    style={{ backgroundColor: "#8B9467" }}
                                >
                                    {cartCount}
                                </span>
                            )}
                        </a>
                    </nav>
                </div>
            </div>
        </header>
    );
}
