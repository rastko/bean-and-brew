import React from "react";

export default function Footer() {
    return (
        <footer className="bg-primary text-light mt-16 border-t-4 border-accent">
            <div className="max-w-7xl mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
                    {/* About */}
                    <div>
                        <h4 className="text-2xl font-bold tracking-wider mb-4">
                            BEAN & BREW
                        </h4>
                        <p className="text-light text-sm leading-relaxed mb-4">
                            Specialty coffee roasted fresh, sourced directly
                            from farmers we know and trust. Three generations of
                            roasting excellence.
                        </p>
                        <p className="text-accent text-xs font-bold tracking-widest">
                            EST. 1952
                        </p>
                    </div>

                    {/* Links */}
                    <div>
                        <h5 className="font-bold text-accent mb-5 uppercase tracking-wider text-sm">
                            Explore
                        </h5>
                        <ul className="text-light space-y-3 text-sm">
                            <li>
                                <a
                                    href="/"
                                    className="hover:text-accent transition duration-200"
                                >
                                    Shop Collection
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/behind-scenes"
                                    className="hover:text-accent transition duration-200"
                                >
                                    Behind the Scenes
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/"
                                    className="hover:text-accent transition duration-200"
                                >
                                    Our Origins
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/"
                                    className="hover:text-accent transition duration-200"
                                >
                                    Sustainability
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h5 className="font-bold text-accent mb-5 uppercase tracking-wider text-sm">
                            Get in Touch
                        </h5>
                        <p className="text-light text-sm mb-2">
                            hello@beanandbrew.coffee
                        </p>
                        <p className="text-light text-sm mb-6">
                            +1 (555) COFFEE-1
                        </p>
                        <p className="text-text-muted text-xs">
                            Available Monday-Friday, 9am-5pm EST
                        </p>
                    </div>
                </div>

                {/* Bottom Border & Copyright */}
                <div className="border-t border-secondary pt-8 text-center">
                    <p className="text-text-muted text-sm mb-2">
                        &copy; 2026 Bean & Brew Coffee. All rights reserved.
                    </p>
                    <p className="text-accent text-xs font-semibold tracking-wider">
                        ☕ DIRECT TRADE • FRESHLY ROASTED ☕
                    </p>
                </div>
            </div>
        </footer>
    );
}
