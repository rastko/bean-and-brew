import React from "react";

export default function Header() {
    return (
        <header className="sticky top-0 z-50 bg-primary text-text-primary shadow-md">
            <nav className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center h-20">
                {/* Logo Section */}
                <div>
                    <h1 className="text-2xl font-bold tracking-wider">BEAN & BREW</h1>
                    <p className="text-xs text-secondary tracking-widest">EST. 1952</p>
                </div>

                {/* Navigation */}
                <div className="flex space-x-8">
                    <a href="/" className="text-sm uppercase tracking-widest hover:text-accent transition">
                        Shop
                    </a>
                    <a href="/behind-scenes" className="text-sm uppercase tracking-widest hover:text-accent transition">
                        Origins
                    </a>
                    <a href="/behind-scenes" className="text-sm uppercase tracking-widest hover:text-accent transition">
                        Stories
                    </a>
                </div>
            </nav>
        </header>
    );
}
