import React, { useEffect, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CoffeeCard from "@/components/CoffeeCard";
import { supabase, Coffee } from "@/lib/supabase";

type SpeciesFilter = "all" | "Arabica" | "Canephora";
type ProcessFilter = "all" | "Washed" | "Natural" | "Honey";
type RoastFilter =
    | "all"
    | "Light"
    | "Light-Medium"
    | "Medium"
    | "Medium-Dark"
    | "Dark";

export default function ProductsPage() {
    const [coffees, setCoffees] = useState<Coffee[]>([]);
    const [filteredCoffees, setFilteredCoffees] = useState<Coffee[]>([]);
    const [loading, setLoading] = useState(true);
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const [speciesFilter, setSpeciesFilter] = useState<SpeciesFilter>("all");
    const [processFilter, setProcessFilter] = useState<ProcessFilter>("all");
    const [roastFilter, setRoastFilter] = useState<RoastFilter>("all");

    useEffect(() => {
        fetchCoffees();
    }, []);

    useEffect(() => {
        applyFilters();
    }, [coffees, speciesFilter, processFilter, roastFilter]);

    async function fetchCoffees() {
        try {
            setLoading(true);
            const { data, error } = await supabase.from("coffees").select("*");

            if (error) throw error;
            setCoffees(data || []);
        } catch (err) {
            console.error("Error fetching coffees:", err);
        } finally {
            setLoading(false);
        }
    }

    function applyFilters() {
        let filtered = coffees;

        // Species filter
        if (speciesFilter !== "all") {
            filtered = filtered.filter((c) => c.coffee_type === speciesFilter);
        }

        // Process filter
        if (processFilter !== "all") {
            filtered = filtered.filter((c) => c.process === processFilter);
        }

        // Roast level filter
        if (roastFilter !== "all") {
            filtered = filtered.filter((c) => c.roast_level === roastFilter);
        }

        setFilteredCoffees(filtered);
    }

    const RadioButton = ({
        name,
        value,
        checked,
        onChange,
        label,
    }: {
        name: string;
        value: string;
        checked: boolean;
        onChange: () => void;
        label: string;
    }) => (
        <label className="flex items-center gap-3 cursor-pointer hover:bg-cream-100/60 rounded-lg transition-all duration-200">
            <input
                type="radio"
                name={name}
                value={value}
                checked={checked}
                onChange={onChange}
                className="w-5 h-5 text-accent focus:ring-2 focus:ring-accent/50 cursor-pointer"
            />
            <span className="text-sm text-coffee-800 font-medium">{label}</span>
        </label>
    );

    return (
        <div className="min-h-screen bg-white flex flex-col">
            <Header />

            <main className="flex-1 w-full">
                {/* TWO-COLUMN LAYOUT */}
                <section className="max-w-7xl mx-auto w-full px-4 py-8">
                    <div className="flex flex-col lg:flex-row gap-8">
                        {/* LEFT SIDEBAR - FILTERS */}
                        <aside className="lg:w-1/4">
                            <div className="bg-warm border border-cream-300 rounded-xl p-6 sticky top-4 shadow-sm hover:shadow-md transition-shadow duration-300">
                                {/* Filter Header */}
                                <button
                                    onClick={() => setSidebarOpen(!sidebarOpen)}
                                    className="flex items-center justify-between w-full mb-8 lg:cursor-default"
                                >
                                    <h2
                                        className="font-semibold text-coffee-900 text-lg"
                                        style={{ fontFamily: "Georgia, serif" }}
                                    >
                                        Filter Coffee
                                    </h2>
                                </button>

                                {/* Filter Content */}
                                <div
                                    className={`space-y-6 ${
                                        sidebarOpen ? "block" : "hidden"
                                    } lg:block`}
                                >
                                    {/* Species Filter */}
                                    <div>
                                        <h3 className="font-semibold text-coffee-900 mb-3 text-xs uppercase tracking-widest pb-2 border-b border-cream-300">
                                            Species
                                        </h3>
                                        <div className="space-y-2 pl-1">
                                            <RadioButton
                                                name="species"
                                                value="all"
                                                checked={
                                                    speciesFilter === "all"
                                                }
                                                onChange={() =>
                                                    setSpeciesFilter("all")
                                                }
                                                label="All Species"
                                            />
                                            <RadioButton
                                                name="species"
                                                value="Arabica"
                                                checked={
                                                    speciesFilter === "Arabica"
                                                }
                                                onChange={() =>
                                                    setSpeciesFilter("Arabica")
                                                }
                                                label="Arabica"
                                            />
                                            <RadioButton
                                                name="species"
                                                value="Canephora"
                                                checked={
                                                    speciesFilter ===
                                                    "Canephora"
                                                }
                                                onChange={() =>
                                                    setSpeciesFilter(
                                                        "Canephora",
                                                    )
                                                }
                                                label="Canephora"
                                            />
                                        </div>
                                    </div>

                                    {/* Process Filter */}
                                    <div>
                                        <h3 className="font-semibold text-coffee-900 mb-3 text-xs uppercase tracking-widest pb-2 border-b border-cream-300">
                                            Process
                                        </h3>
                                        <div className="space-y-2 pl-1">
                                            <RadioButton
                                                name="process"
                                                value="all"
                                                checked={
                                                    processFilter === "all"
                                                }
                                                onChange={() =>
                                                    setProcessFilter("all")
                                                }
                                                label="All Processes"
                                            />
                                            <RadioButton
                                                name="process"
                                                value="Washed"
                                                checked={
                                                    processFilter === "Washed"
                                                }
                                                onChange={() =>
                                                    setProcessFilter("Washed")
                                                }
                                                label="Washed"
                                            />
                                            <RadioButton
                                                name="process"
                                                value="Natural"
                                                checked={
                                                    processFilter === "Natural"
                                                }
                                                onChange={() =>
                                                    setProcessFilter("Natural")
                                                }
                                                label="Natural"
                                            />
                                            <RadioButton
                                                name="process"
                                                value="Honey"
                                                checked={
                                                    processFilter === "Honey"
                                                }
                                                onChange={() =>
                                                    setProcessFilter("Honey")
                                                }
                                                label="Honey"
                                            />
                                        </div>
                                    </div>

                                    {/* Roast Level Filter */}
                                    <div>
                                        <h3 className="font-semibold text-coffee-900 mb-3 text-xs uppercase tracking-widest pb-2 border-b border-cream-300">
                                            Roast Level
                                        </h3>
                                        <div className="space-y-2 pl-1">
                                            <RadioButton
                                                name="roast"
                                                value="all"
                                                checked={roastFilter === "all"}
                                                onChange={() =>
                                                    setRoastFilter("all")
                                                }
                                                label="All Roast Levels"
                                            />
                                            <RadioButton
                                                name="roast"
                                                value="Light"
                                                checked={
                                                    roastFilter === "Light"
                                                }
                                                onChange={() =>
                                                    setRoastFilter("Light")
                                                }
                                                label="Light (1)"
                                            />
                                            <RadioButton
                                                name="roast"
                                                value="Light-Medium"
                                                checked={
                                                    roastFilter ===
                                                    "Light-Medium"
                                                }
                                                onChange={() =>
                                                    setRoastFilter(
                                                        "Light-Medium",
                                                    )
                                                }
                                                label="Light-Medium (2)"
                                            />
                                            <RadioButton
                                                name="roast"
                                                value="Medium"
                                                checked={
                                                    roastFilter === "Medium"
                                                }
                                                onChange={() =>
                                                    setRoastFilter("Medium")
                                                }
                                                label="Medium (3)"
                                            />
                                            <RadioButton
                                                name="roast"
                                                value="Medium-Dark"
                                                checked={
                                                    roastFilter ===
                                                    "Medium-Dark"
                                                }
                                                onChange={() =>
                                                    setRoastFilter(
                                                        "Medium-Dark",
                                                    )
                                                }
                                                label="Medium-Dark (4)"
                                            />
                                            <RadioButton
                                                name="roast"
                                                value="Dark"
                                                checked={roastFilter === "Dark"}
                                                onChange={() =>
                                                    setRoastFilter("Dark")
                                                }
                                                label="Dark (5)"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </aside>

                        {/* RIGHT CONTENT - PRODUCT GRID */}
                        <div className="lg:w-3/4 px-4">
                            {loading ? (
                                <div className="flex justify-center items-center h-64">
                                    <div className="text-coffee-700 text-xl font-semibold">
                                        ☕ Brewing up our selection...
                                    </div>
                                </div>
                            ) : filteredCoffees.length === 0 ? (
                                <div className="flex flex-col justify-center items-center h-64 text-center">
                                    <div className="text-6xl mb-4">😔</div>
                                    <div className="text-text-muted text-xl mb-2">
                                        No coffees found
                                    </div>
                                    <p className="text-sm text-text-muted">
                                        Try adjusting your filters
                                    </p>
                                </div>
                            ) : (
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {filteredCoffees.map((coffee) => (
                                        <CoffeeCard
                                            key={coffee.id}
                                            coffee={coffee}
                                        />
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
