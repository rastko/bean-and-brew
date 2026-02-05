import React, { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

interface CartItem {
    id: string;
    name: string;
    price: number;
    quantity: number;
    image_url?: string;
    roast_level: string;
}

export default function Cart() {
    const [cartItems, setCartItems] = useState<CartItem[]>([]);

    useEffect(() => {
        loadCart();
    }, []);

    const loadCart = () => {
        const saved = localStorage.getItem("cart");
        if (saved) {
            setCartItems(JSON.parse(saved));
        }
    };

    const saveCart = (items: CartItem[]) => {
        localStorage.setItem("cart", JSON.stringify(items));
        setCartItems(items);
    };

    const updateQuantity = (id: string, delta: number) => {
        const updated = cartItems.map((item) =>
            item.id === id
                ? { ...item, quantity: Math.max(1, item.quantity + delta) }
                : item,
        );
        saveCart(updated);
    };

    const removeItem = (id: string) => {
        const updated = cartItems.filter((item) => item.id !== id);
        saveCart(updated);
    };

    const subtotal = cartItems.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0,
    );

    return (
        <div className="min-h-screen bg-light flex flex-col">
            <Header />

            <main className="flex-1 w-full max-w-7xl mx-auto px-4 py-16">
                <h1 className="text-4xl font-bold mb-8 text-text-primary">
                    Shopping Cart
                </h1>

                {cartItems.length === 0 ? (
                    <div className="text-center py-16">
                        <p className="text-text-muted text-xl mb-6">
                            Your cart is empty
                        </p>
                        <a
                            href="/"
                            className="inline-block bg-accent text-white px-8 py-3 rounded-lg hover:opacity-90 transition"
                        >
                            Continue Shopping
                        </a>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Cart Items */}
                        <div className="lg:col-span-2 space-y-4">
                            {cartItems.map((item) => (
                                <div
                                    key={item.id}
                                    className="bg-white rounded-lg p-6 shadow-sm border border-border flex gap-6"
                                >
                                    {/* Image */}
                                    {item.image_url && (
                                        <img
                                            src={item.image_url}
                                            alt={item.name}
                                            className="w-24 h-24 object-cover rounded-lg"
                                        />
                                    )}

                                    {/* Details */}
                                    <div className="flex-1">
                                        <h3 className="text-lg font-semibold text-text-primary mb-1">
                                            {item.name}
                                        </h3>
                                        <p className="text-sm text-text-muted mb-3">
                                            {item.roast_level} Roast
                                        </p>

                                        <div className="flex items-center gap-6">
                                            {/* Quantity Controls */}
                                            <div className="flex items-center gap-3">
                                                <button
                                                    onClick={() =>
                                                        updateQuantity(
                                                            item.id,
                                                            -1,
                                                        )
                                                    }
                                                    className="w-8 h-8 rounded-full border border-border hover:bg-secondary transition"
                                                >
                                                    −
                                                </button>
                                                <span className="w-8 text-center font-semibold">
                                                    {item.quantity}
                                                </span>
                                                <button
                                                    onClick={() =>
                                                        updateQuantity(
                                                            item.id,
                                                            1,
                                                        )
                                                    }
                                                    className="w-8 h-8 rounded-full border border-border hover:bg-secondary transition"
                                                >
                                                    +
                                                </button>
                                            </div>

                                            {/* Price */}
                                            <div className="text-lg font-semibold text-accent">
                                                $
                                                {(
                                                    item.price * item.quantity
                                                ).toFixed(2)}
                                            </div>

                                            {/* Remove */}
                                            <button
                                                onClick={() =>
                                                    removeItem(item.id)
                                                }
                                                className="ml-auto text-text-muted hover:text-red-600 transition"
                                            >
                                                Remove
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Order Summary */}
                        <div className="lg:col-span-1">
                            <div className="bg-white rounded-lg p-6 shadow-sm border border-border sticky top-24">
                                <h2 className="text-xl font-semibold mb-6 text-text-primary">
                                    Order Summary
                                </h2>

                                <div className="space-y-3 mb-6">
                                    <div className="flex justify-between text-text-muted">
                                        <span>
                                            Subtotal ({cartItems.length} items)
                                        </span>
                                        <span>${subtotal.toFixed(2)}</span>
                                    </div>
                                    <div className="flex justify-between font-semibold text-lg text-text-primary border-t border-border pt-3">
                                        <span>Total</span>
                                        <span className="text-accent">
                                            ${subtotal.toFixed(2)}
                                        </span>
                                    </div>
                                </div>

                                <button
                                    disabled
                                    className="w-full bg-gray-300 text-gray-500 px-6 py-3 rounded-lg font-semibold cursor-not-allowed mb-3"
                                >
                                    Checkout (Coming Soon)
                                </button>

                                <a
                                    href="/"
                                    className="block text-center text-accent hover:underline"
                                >
                                    Continue Shopping
                                </a>
                            </div>
                        </div>
                    </div>
                )}
            </main>

            <Footer />
        </div>
    );
}
