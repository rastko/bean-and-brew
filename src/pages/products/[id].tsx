import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { supabase, Coffee } from "@/lib/supabase";

export default function ProductDetailPage() {
    const router = useRouter();
    const { id } = router.query;
    const [coffee, setCoffee] = useState<Coffee | null>(null);
    const [loading, setLoading] = useState(true);
    const [quantity, setQuantity] = useState(1);

    useEffect(() => {
        if (id) {
            fetchCoffee();
        }
    }, [id]);

    async function fetchCoffee() {
        try {
            setLoading(true);
            const { data, error } = await supabase
                .from("coffees")
                .select("*")
                .eq("id", id)
                .single();

            if (error) throw error;
            setCoffee(data);
        } catch (err) {
            console.error("Error fetching coffee:", err);
            setCoffee(null);
        } finally {
            setLoading(false);
        }
    }

    const addToCart = () => {
        if (!coffee) return;

        const cart = JSON.parse(localStorage.getItem("cart") || "[]");
        const existing = cart.find((item: any) => item.id === coffee.id);

        if (existing) {
            existing.quantity += quantity;
        } else {
            cart.push({
                id: coffee.id,
                name: coffee.name,
                price: coffee.price,
                quantity: quantity,
                roast_level: coffee.roast_level,
            });
        }

        localStorage.setItem("cart", JSON.stringify(cart));
        window.dispatchEvent(new Event("cartUpdated"));

        alert(`${quantity} x ${coffee.name} added to cart!`);
    };

    const decrementQuantity = () => {
        if (quantity > 1) setQuantity(quantity - 1);
    };

    const incrementQuantity = () => {
        setQuantity(quantity + 1);
    };

    const roastColors: Record<string, string> = {
        Light: "bg-amber-100 text-amber-900",
        Medium: "bg-amber-200 text-amber-900",
        "Medium-Dark": "bg-amber-300 text-amber-900",
        Dark: "bg-amber-900 text-white",
    };

    const getRoastDots = (level: string) => {
        const levels: Record<string, number> = {
            Light: 1,
            Medium: 2,
            "Medium-Dark": 3,
            Dark: 4,
        };
        const count = levels[level] || 2;
        return (
            <div className="flex gap-1">
                {Array.from({ length: 4 }).map((_, i) => (
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

    const getStockStatus = (inventory: number) => {
        if (inventory > 20) {
            return <span className="text-sage font-semibold">In Stock</span>;
        } else if (inventory > 0) {
            return (
                <span className="text-accent font-semibold">
                    Low Stock ({inventory} left)
                </span>
            );
        } else {
            return (
                <span className="text-red-600 font-semibold">Out of Stock</span>
            );
        }
    };

    if (loading) {
        return (
            <div className="min-h-screen bg-primary flex flex-col">
                <Header />
                <main className="flex-1 flex items-center justify-center">
                    <div className="text-center">
                        <div className="text-6xl mb-4">☕</div>
                        <p className="text-text-muted">
                            Loading coffee details...
                        </p>
                    </div>
                </main>
                <Footer />
            </div>
        );
    }

    if (!coffee) {
        return (
            <div className="min-h-screen bg-primary flex flex-col">
                <Header />
                <main className="flex-1 flex items-center justify-center">
                    <div className="text-center max-w-md mx-auto px-4">
                        <div className="text-6xl mb-4">😔</div>
                        <h1 className="font-display text-3xl font-bold text-text-primary mb-4">
                            Coffee Not Found
                        </h1>
                        <p className="text-text-muted mb-8">
                            We couldn't find that coffee in our collection.
                        </p>
                        <Link
                            href="/products"
                            className="btn-primary inline-block"
                        >
                            Back to Products
                        </Link>
                    </div>
                </main>
                <Footer />
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-primary flex flex-col">
            <Header />

            <main className="flex-1 w-full">
                {/* Breadcrumb */}
                <section className="bg-secondary py-4">
                    <div className="max-w-7xl mx-auto px-4">
                        <Link
                            href="/products"
                            className="text-sage hover:underline flex items-center gap-2"
                        >
                            ← Back to Products
                        </Link>
                    </div>
                </section>

                {/* Product Detail */}
                <section className="py-12">
                    <div className="max-w-7xl mx-auto px-4">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                            {/* Left: Image */}
                            <div className="space-y-4">
                                <div className="relative aspect-square bg-gradient-to-br from-cream-100 to-cream-200 rounded-lg overflow-hidden flex items-center justify-center shadow-lg">
                                    <div className="text-[12rem] opacity-40">
                                        ☕
                                    </div>
                                    {coffee.is_reserve && (
                                        <div className="absolute top-6 right-6 bg-accent text-white px-4 py-2 rounded-full text-sm font-bold shadow-md">
                                            LIMITED RESERVE
                                        </div>
                                    )}
                                </div>
                            </div>

                            {/* Right: Details */}
                            <div className="space-y-6">
                                {/* Header */}
                                <div>
                                    <h1 className="font-display text-4xl lg:text-5xl font-bold text-text-primary mb-4">
                                        {coffee.name}
                                    </h1>
                                    <div className="flex items-center gap-4 mb-4">
                                        <span className="text-4xl font-bold text-accent">
                                            ${coffee.price.toFixed(2)}
                                        </span>
                                        <span className="text-text-muted">
                                            / 250g bag
                                        </span>
                                    </div>
                                    <div className="mb-4">
                                        {getStockStatus(coffee.inventory)}
                                    </div>
                                </div>

                                {/* Description */}
                                <div>
                                    <p className="text-text-primary text-lg leading-relaxed">
                                        {coffee.description}
                                    </p>
                                </div>

                                {/* Specifications Grid */}
                                <div className="bg-cream-50 rounded-lg p-6 space-y-4">
                                    <h3 className="font-display text-xl font-bold text-text-primary mb-4">
                                        Specifications
                                    </h3>

                                    <div className="grid grid-cols-2 gap-4">
                                        {/* Country */}
                                        <div>
                                            <div className="text-sm text-text-muted mb-1">
                                                Origin
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <span className="text-2xl">
                                                    {getCountryFlag(
                                                        coffee.farmer_country,
                                                    )}
                                                </span>
                                                <span className="font-semibold text-text-primary">
                                                    {coffee.farmer_country}
                                                </span>
                                            </div>
                                        </div>

                                        {/* Roast Level */}
                                        <div>
                                            <div className="text-sm text-text-muted mb-1">
                                                Roast Level
                                            </div>
                                            <div className="flex items-center gap-3">
                                                {getRoastDots(
                                                    coffee.roast_level,
                                                )}
                                                <span
                                                    className={`inline-block ${
                                                        roastColors[
                                                            coffee.roast_level
                                                        ]
                                                    } px-3 py-1 rounded-full text-xs font-semibold`}
                                                >
                                                    {coffee.roast_level}
                                                </span>
                                            </div>
                                        </div>

                                        {/* Processing */}
                                        <div>
                                            <div className="text-sm text-text-muted mb-1">
                                                Processing
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <span className="text-xl">
                                                    {getProcessIcon(
                                                        coffee.process,
                                                    )}
                                                </span>
                                                <span className="font-semibold text-text-primary">
                                                    {coffee.process}
                                                </span>
                                            </div>
                                        </div>

                                        {/* Species */}
                                        <div>
                                            <div className="text-sm text-text-muted mb-1">
                                                Species
                                            </div>
                                            <span className="inline-block bg-sage/20 text-sage px-3 py-1 rounded-full text-sm font-semibold">
                                                {coffee.coffee_type}
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                {/* Flavor Notes */}
                                {coffee.flavor_notes &&
                                    coffee.flavor_notes.length > 0 && (
                                        <div>
                                            <h3 className="font-display text-xl font-bold text-text-primary mb-3">
                                                Flavor Profile
                                            </h3>
                                            <div className="flex flex-wrap gap-2">
                                                {coffee.flavor_notes.map(
                                                    (note, i) => (
                                                        <span
                                                            key={i}
                                                            className="bg-cream-100 text-coffee-800 px-4 py-2 rounded-full text-sm font-medium"
                                                        >
                                                            {note}
                                                        </span>
                                                    ),
                                                )}
                                            </div>
                                        </div>
                                    )}

                                {/* Farmer Info */}
                                <div className="bg-sage/10 rounded-lg p-6">
                                    <h3 className="font-display text-xl font-bold text-text-primary mb-3">
                                        Direct Trade Partner
                                    </h3>
                                    <div className="space-y-2">
                                        <p className="font-semibold text-text-primary">
                                            {coffee.farmer_name}
                                        </p>
                                        <p className="text-text-muted text-sm">
                                            {coffee.farmer_location},{" "}
                                            {coffee.farmer_country}
                                        </p>
                                        {coffee.farmer_story && (
                                            <p className="text-text-primary text-sm leading-relaxed mt-3">
                                                {coffee.farmer_story}
                                            </p>
                                        )}
                                    </div>
                                </div>

                                {/* Add to Cart Section */}
                                <div className="border-t border-cream-300 pt-6">
                                    <div className="flex items-center gap-4 mb-4">
                                        <label className="text-text-muted font-medium">
                                            Quantity:
                                        </label>
                                        <div className="flex items-center gap-3 border border-cream-400 rounded-lg">
                                            <button
                                                onClick={decrementQuantity}
                                                className="px-4 py-2 hover:bg-cream-100 transition-colors"
                                                aria-label="Decrease quantity"
                                            >
                                                −
                                            </button>
                                            <span className="px-4 py-2 font-semibold min-w-[3rem] text-center">
                                                {quantity}
                                            </span>
                                            <button
                                                onClick={incrementQuantity}
                                                className="px-4 py-2 hover:bg-cream-100 transition-colors"
                                                aria-label="Increase quantity"
                                            >
                                                +
                                            </button>
                                        </div>
                                    </div>

                                    <button
                                        onClick={addToCart}
                                        disabled={coffee.inventory === 0}
                                        className="btn-primary w-full text-lg py-4 disabled:opacity-50 disabled:cursor-not-allowed"
                                    >
                                        {coffee.inventory === 0
                                            ? "Out of Stock"
                                            : `Add ${quantity} to Cart — $${(
                                                  coffee.price * quantity
                                              ).toFixed(2)}`}
                                    </button>

                                    <p className="text-sm text-text-muted text-center mt-4">
                                        Free shipping on orders over $50
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
