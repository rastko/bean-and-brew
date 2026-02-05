import React from "react";
import { Coffee } from "@/lib/supabase";

interface CoffeeCardProps {
    coffee: Coffee;
}

export default function CoffeeCard({ coffee }: CoffeeCardProps) {
    const roastColors = {
        Light: "bg-amber-100 text-amber-900",
        Medium: "bg-amber-100 text-amber-900",
        "Medium-Dark": "bg-amber-200 text-amber-900",
        Dark: "bg-secondary text-light",
    };

    const color =
        roastColors[coffee.roast_level as keyof typeof roastColors] ||
        "bg-light text-primary";

    return (
        <div className="bg-light rounded-xl shadow-md overflow-hidden hover:shadow-2xl hover:scale-105 transition-all duration-300 h-full flex flex-col group">
            {/* Image Section - 75% of card height */}
            <div className="relative h-80 bg-gradient-to-br from-secondary to-primary flex items-center justify-center overflow-hidden">
                <div className="text-8xl opacity-40 group-hover:opacity-60 transition">
                    ☕
                </div>
                {coffee.is_reserve && (
                    <div className="absolute top-4 right-4 bg-accent text-primary px-3 py-2 rounded-full text-xs font-bold uppercase tracking-wider shadow-lg">
                        🎖️ RESERVE
                    </div>
                )}
            </div>

            {/* Content Section - 25% of card height */}
            <div className="p-6 flex-1 flex flex-col">
                {/* Tags */}
                <div className="mb-4 flex flex-wrap gap-2">
                    <span
                        className={`inline-block ${color} px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide`}
                    >
                        {coffee.roast_level}
                    </span>
                    <span className="inline-block bg-primary text-light px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide">
                        {coffee.coffee_type}
                    </span>
                    <span className="inline-block bg-secondary text-light px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide">
                        {coffee.process}
                    </span>
                </div>

                {/* Name */}
                <h3 className="text-xl font-bold text-primary mb-2">
                    {coffee.name}
                </h3>

                {/* Description */}
                <p className="text-text-muted text-sm mb-4 line-clamp-2">
                    {coffee.description}
                </p>

                {/* Flavor Notes */}
                <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                        {coffee.flavor_notes
                            ?.slice(0, 3)
                            .map((note: string, i: number) => (
                                <span
                                    key={i}
                                    className="bg-light border border-secondary text-secondary text-xs px-3 py-1 rounded-full font-semibold"
                                >
                                    {note}
                                </span>
                            ))}
                    </div>
                </div>

                {/* Farmer Info - More Prominent */}
                <p className="text-xs text-text-muted mb-6 font-semibold">
                    Direct Trade •{" "}
                    <span className="text-secondary">{coffee.farmer_name}</span>
                    , {coffee.farmer_country}
                </p>

                {/* Price & CTA */}
                <div className="mt-auto flex justify-between items-center">
                    <span className="text-3xl font-bold text-accent">
                        ${coffee.price.toFixed(2)}
                    </span>
                    <button className="bg-primary text-light px-5 py-2 rounded-lg hover:bg-accent hover:text-primary transition-all duration-200 text-sm font-bold uppercase tracking-wider shadow-md hover:shadow-lg">
                        Add
                    </button>
                </div>
            </div>
        </div>
    );
}
