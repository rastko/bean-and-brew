import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Coffee } from "@/lib/supabase";

interface CoffeeCardProps {
    coffee: Coffee;
}

export default function CoffeeCard({ coffee }: CoffeeCardProps) {
    const getRoastLevel = (level: string): number => {
        const levels: Record<string, number> = {
            Light: 1,
            "Light-Medium": 2,
            Medium: 3,
            "Medium-Dark": 4,
            Dark: 5,
        };
        return levels[level] || 3;
    };

    const getRoastDots = (level: string) => {
        const count = getRoastLevel(level);
        return (
            <div className="flex gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                    <div
                        key={i}
                        className={`w-3 h-3 rounded-full ${
                            i < count ? "bg-coffee-700" : "bg-coffee-200"
                        }`}
                    />
                ))}
            </div>
        );
    };

    const getCountryFlag = (country: string) => {
        const flags: Record<string, string> = {
            Colombia: "🇨🇴",
            Ethiopia: "🇪🇹",
            "Costa Rica": "🇨🇷",
            Kenya: "🇰🇪",
            Brazil: "🇧🇷",
            Guatemala: "🇬🇹",
        };
        return flags[country] || "🌍";
    };

    const getProcessIcon = (process: string) => {
        const icons: Record<string, string> = {
            Washed: "💧",
            Natural: "☀️",
            Honey: "🍯",
        };
        return icons[process] || "⚙️";
    };

    const addToCart = () => {
        const cart = JSON.parse(localStorage.getItem("cart") || "[]");
        const existing = cart.find((item: any) => item.id === coffee.id);

        if (existing) {
            existing.quantity += 1;
        } else {
            cart.push({
                id: coffee.id,
                name: coffee.name,
                price: coffee.price,
                quantity: 1,
                roast_level: coffee.roast_level,
            });
        }

        localStorage.setItem("cart", JSON.stringify(cart));
        window.dispatchEvent(new Event("cartUpdated"));

        alert(`${coffee.name} added to cart!`);
    };

    return (
        <div className="bg-warm rounded-xl border border-cream-300 overflow-hidden hover:shadow-lg hover:border-coffee-300 transition-all duration-500 group">
            {/* Image Section with Add Button */}
            <div className="relative h-48 bg-gradient-to-br from-coffee-700 to-coffee-500 overflow-hidden">
                {/* Product image */}
                <Image
                    src={
                        coffee.image_url ||
                        "https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=600"
                    }
                    alt={coffee.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                {coffee.is_reserve && (
                    <div className="absolute top-4 left-4 bg-accent text-white px-3 py-1 rounded-full text-xs font-bold tracking-widest shadow-lg">
                        RESERVE
                    </div>
                )}
                <button
                    onClick={addToCart}
                    className="absolute top-4 right-4 bg-accent text-white rounded-full p-3 shadow-lg transition-all duration-300 hover:scale-105 z-10 opacity-0 group-hover:opacity-100"
                    aria-label="Add to cart"
                >
                    <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2.5}
                            d="M12 4v16m8-8H4"
                        />
                    </svg>
                </button>
            </div>

            {/* Content Section */}
            <div className="p-6">
                {/* Name */}
                <h3
                    className="font-semibold text-black mb-3 leading-snug"
                    style={{
                        fontFamily: "Georgia, serif",
                        fontSize: "1.25rem",
                    }}
                >
                    {coffee.name}
                </h3>

                {/* Description */}
                <p
                    className="text-coffee-700 mb-4 leading-relaxed line-clamp-3"
                    style={{ color: "rgb(22 101 52)", fontSize: "0.85rem" }}
                >
                    {coffee.description}
                </p>

                {/* Country */}
                <div className="flex items-center gap-2 mb-4 pb-4 border-b border-cream-200">
                    <span className="text-lg">
                        {getCountryFlag(coffee.farmer_country)}
                    </span>
                    <span className="text-sm text-coffee-700 font-medium">
                        {coffee.farmer_country}
                    </span>
                </div>

                {/* Roast Level */}
                <div className="flex items-center justify-between mb-3">
                    <span className="text-coffee-600 text-sm font-medium">
                        Roast Level
                    </span>
                    <div className="flex items-center gap-2">
                        {getRoastDots(coffee.roast_level)}
                        <span className="text-coffee-800 text-sm font-semibold">
                            {getRoastLevel(coffee.roast_level)}/5
                        </span>
                    </div>
                </div>

                {/* Processing */}
                <div className="flex items-center justify-between mb-4">
                    <span className="text-coffee-600 text-sm font-medium">
                        Processing
                    </span>
                    <span className="text-coffee-800 text-sm font-semibold flex items-center gap-1.5">
                        <span>{getProcessIcon(coffee.process)}</span>
                        {coffee.process}
                    </span>
                </div>

                {/* Coffee Details - Species & Altitude */}
                <div className="flex items-center gap-2 mb-4 flex-wrap">
                    <span className="text-coffee-800 text-sm px-3 py-1.5 bg-cream-200 rounded-full font-medium">
                        {coffee.coffee_type}
                    </span>
                    {coffee.altitude_masl && (
                        <span className="text-coffee-800 text-sm px-3 py-1.5 bg-cream-200 rounded-full font-medium">
                            ⛰️ {coffee.altitude_masl}m
                        </span>
                    )}
                </div>

                {/* Stock Indicator */}
                <div className="mb-5">
                    <span className="text-sage text-sm font-medium">
                        {coffee.inventory > 20
                            ? "In stock"
                            : coffee.inventory > 0
                              ? `${coffee.inventory} in stock`
                              : "Out of stock"}
                    </span>
                </div>

                {/* Price */}
                <div className="mb-5 pt-5 border-t border-cream-200">
                    <span
                        className="text-4xl font-semibold text-coffee-900"
                        style={{ fontFamily: "Georgia, serif" }}
                    >
                        ${coffee.price.toFixed(2)}
                    </span>
                    <span className="text-coffee-600 text-sm ml-2">
                        / 250g bag
                    </span>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                    <button
                        onClick={addToCart}
                        disabled={coffee.inventory === 0}
                        className="flex-1 bg-coffee-800 hover:bg-coffee-900 text-white font-medium py-3 px-5 rounded-lg text-sm transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-sm hover:shadow-md"
                    >
                        Add to Cart
                    </button>
                    <Link
                        href={`/products/${coffee.id}`}
                        className="bg-white border-2 border-coffee-400 text-coffee-800 hover:bg-coffee-50 hover:border-coffee-600 font-medium rounded-lg transition-all duration-300 flex items-center justify-center w-12"
                    >
                        <svg
                            className="w-5 h-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <circle cx="12" cy="12" r="10" strokeWidth={1.5} />
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={1.5}
                                d="M12 16v-4m0-4h.01"
                            />
                        </svg>
                    </Link>
                </div>
            </div>
        </div>
    );
}
