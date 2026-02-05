import React, { useEffect, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CoffeeCard from "@/components/CoffeeCard";
import { supabase, Coffee } from "@/lib/supabase";

export default function Home() {
    const [coffees, setCoffees] = useState<Coffee[]>([]);
    const [loading, setLoading] = useState(true);
    const [filter, setFilter] = useState<"all" | "light" | "medium" | "dark" | "reserve">("all");

    useEffect(() => {
        fetchCoffees();
    }, [filter]);

    async function fetchCoffees() {
        try {
            setLoading(true);
            let query = supabase.from("coffees").select("*");

            if (filter === "light") {
                query = query.eq("roast_level", "Light");
            } else if (filter === "medium") {
                query = query.in("roast_level", ["Medium", "Medium-Dark"]);
            } else if (filter === "dark") {
                query = query.eq("roast_level", "Dark");
            } else if (filter === "reserve") {
                query = query.eq("is_reserve", true);
            }

            const { data, error } = await query;

            if (error) throw error;
            setCoffees(data || []);
        } catch (err) {
            console.error("Error fetching coffees:", err);
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="min-h-screen bg-light flex flex-col">
            <Header />

            <main className="flex-1 w-full">
                {/* HERO SECTION */}
                <section className="bg-gradient-to-r from-primary via-secondary to-primary text-light py-24 md:py-32 relative overflow-hidden">
                    {/* Background pattern */}
                    <div className="absolute inset-0 opacity-10">
                        <div className="absolute top-0 right-0 w-96 h-96 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
                        <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
                    </div>

                    <div className="relative max-w-7xl mx-auto px-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                            {/* Left: Story */}
                            <div>
                                <p className="text-accent uppercase text-xs font-bold tracking-widest mb-4">
                                    SINCE 1952
                                </p>
                                <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight tracking-tight font-georgia">
                                    Three generations. One obsession: the perfect roast.
                                </h1>
                                <p className="text-lg text-light mb-8 leading-relaxed font-georgia">
                                    From the highlands of Ethiopia to the volcanic soils of Guatemala, we've spent over 70 years perfecting the art of coffee roasting. Every bean tells a story of land, labor, and love.
                                </p>

                                {/* CTAs */}
                                <div className="flex gap-4">
                                    <button className="bg-accent text-primary px-8 py-4 rounded-lg font-bold uppercase tracking-wider hover:shadow-xl transition-all duration-200 hover:scale-105">
                                        SHOP COLLECTION
                                    </button>
                                    <button className="border-2 border-accent text-accent px-8 py-4 rounded-lg font-bold uppercase tracking-wider hover:bg-accent hover:text-primary transition-all duration-200">
                                        LEARN MORE
                                    </button>
                                </div>
                            </div>

                            {/* Right: Visual */}
                            <div className="flex justify-center md:justify-end">
                                <div className="relative w-80 h-80 md:w-96 md:h-96">
                                    <div className="absolute inset-0 bg-accent rounded-full opacity-20 blur-2xl"></div>
                                    <div className="absolute inset-0 flex items-center justify-center text-9xl opacity-50">
                                        ☕
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* TRUST SIGNALS SECTION */}
                <section className="bg-light py-16 border-b border-border">
                    <div className="max-w-7xl mx-auto px-4">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                            {/* Rating */}
                            <div className="text-center">
                                <p className="text-4xl font-bold text-accent mb-2">4.9★</p>
                                <p className="text-sm text-text-muted font-semibold uppercase tracking-wide">Customer Rating</p>
                                <p className="text-xs text-text-muted mt-1">1,200+ reviews</p>
                            </div>

                            {/* Origins */}
                            <div className="text-center">
                                <p className="text-4xl font-bold text-secondary mb-2">50+</p>
                                <p className="text-sm text-text-muted font-semibold uppercase tracking-wide">Coffee Origins</p>
                                <p className="text-xs text-text-muted mt-1">Six continents</p>
                            </div>

                            {/* Customers */}
                            <div className="text-center">
                                <p className="text-4xl font-bold text-accent mb-2">10k+</p>
                                <p className="text-sm text-text-muted font-semibold uppercase tracking-wide">Happy Customers</p>
                                <p className="text-xs text-text-muted mt-1">And growing daily</p>
                            </div>

                            {/* Direct Trade */}
                            <div className="text-center">
                                <p className="text-4xl font-bold text-secondary mb-2">100%</p>
                                <p className="text-sm text-text-muted font-semibold uppercase tracking-wide">Direct Trade</p>
                                <p className="text-xs text-text-muted mt-1">Fair prices always</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* COLLECTION HEADER */}
                <section className="bg-light max-w-7xl mx-auto w-full px-4 pt-16">
                    <h2 className="text-4xl font-bold text-primary mb-2">Our Collection</h2>
                    <p className="text-text-muted mb-8">Hand-selected coffees from direct relationships with farmers worldwide.</p>

                    {/* FILTER PILLS */}
                    <div className="flex flex-wrap gap-3 mb-12">
                        <button
                            onClick={() => setFilter("all")}
                            className={`px-5 py-3 rounded-full uppercase text-xs font-bold tracking-wider transition-all duration-200 ${
                                filter === "all"
                                    ? "bg-primary text-light shadow-md"
                                    : "bg-light border-2 border-primary text-primary hover:bg-primary hover:text-light"
                            }`}
                        >
                            All Coffees
                        </button>
                        <button
                            onClick={() => setFilter("light")}
                            className={`px-5 py-3 rounded-full uppercase text-xs font-bold tracking-wider transition-all duration-200 ${
                                filter === "light"
                                    ? "bg-secondary text-light shadow-md"
                                    : "bg-light border-2 border-secondary text-secondary hover:bg-secondary hover:text-light"
                            }`}
                        >
                            Light Roast
                        </button>
                        <button
                            onClick={() => setFilter("medium")}
                            className={`px-5 py-3 rounded-full uppercase text-xs font-bold tracking-wider transition-all duration-200 ${
                                filter === "medium"
                                    ? "bg-secondary text-light shadow-md"
                                    : "bg-light border-2 border-secondary text-secondary hover:bg-secondary hover:text-light"
                            }`}
                        >
                            Medium Roast
                        </button>
                        <button
                            onClick={() => setFilter("dark")}
                            className={`px-5 py-3 rounded-full uppercase text-xs font-bold tracking-wider transition-all duration-200 ${
                                filter === "dark"
                                    ? "bg-primary text-light shadow-md"
                                    : "bg-light border-2 border-primary text-primary hover:bg-primary hover:text-light"
                            }`}
                        >
                            Dark Roast
                        </button>
                        <button
                            onClick={() => setFilter("reserve")}
                            className={`px-5 py-3 rounded-full uppercase text-xs font-bold tracking-wider transition-all duration-200 ${
                                filter === "reserve"
                                    ? "bg-accent text-primary shadow-md"
                                    : "bg-light border-2 border-accent text-accent hover:bg-accent hover:text-primary"
                            }`}
                        >
                            🎖️ Roaster's Reserve
                        </button>
                    </div>
                </section>

                {/* COFFEE GRID */}
                <section className="max-w-7xl mx-auto w-full px-4 pb-16">
                    {loading ? (
                        <div className="flex justify-center items-center h-64">
                            <div className="text-secondary text-xl font-semibold">
                                Brewing up our selection...
                            </div>
                        </div>
                    ) : coffees.length === 0 ? (
                        <div className="flex justify-center items-center h-64">
                            <div className="text-text-muted text-xl">
                                No coffees found for this filter
                            </div>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {coffees.map((coffee) => (
                                <CoffeeCard key={coffee.id} coffee={coffee} />
                            ))}
                        </div>
                    )}
                </section>
            </main>

            <Footer />
        </div>
    );
}
