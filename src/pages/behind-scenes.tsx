import React, { useEffect, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { supabase } from "@/lib/supabase";

interface ContentItem {
    id: string;
    title: string;
    description: string;
    content_type: string;
    media_url: string | null;
    published_at: string;
}

export default function BehindTheScenes() {
    const [content, setContent] = useState<ContentItem[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchContent();
    }, []);

    async function fetchContent() {
        try {
            const { data, error } = await supabase
                .from("content")
                .select("*")
                .order("published_at", { ascending: false });

            if (error) throw error;
            setContent(data || []);
        } catch (err) {
            console.error("Error fetching content:", err);
        } finally {
            setLoading(false);
        }
    }

    const getIcon = (type: string) => {
        switch (type) {
            case "video":
                return "🎬";
            case "roasting_journal":
                return "📔";
            case "blog":
                return "📝";
            default:
                return "📚";
        }
    };

    return (
        <div className="min-h-screen bg-light flex flex-col">
            <Header />

            <main className="flex-1 w-full">
                {/* Page Header */}
                <section className="bg-primary text-light py-16">
                    <div className="max-w-7xl mx-auto px-4">
                        <h1 className="text-5xl font-bold mb-4 font-georgia">
                            Behind the Scenes
                        </h1>
                        <p className="text-lg text-light max-w-2xl leading-relaxed">
                            Discover the art and craft behind Bean & Brew. From roasting journals to behind-the-scenes stories, see how we create exceptional coffee from seed to cup.
                        </p>
                    </div>
                </section>

                {/* Content Grid */}
                <section className="max-w-7xl mx-auto w-full px-4 py-16">
                    {loading ? (
                        <div className="flex justify-center items-center h-64">
                            <div className="text-secondary text-xl font-semibold">
                                Loading stories...
                            </div>
                        </div>
                    ) : content.length === 0 ? (
                        <div className="text-center py-12">
                            <p className="text-text-muted text-lg">
                                No stories yet. Check back soon!
                            </p>
                        </div>
                    ) : (
                        <div className="space-y-8">
                            {content.map((item) => (
                                <div
                                    key={item.id}
                                    className="bg-light border-l-4 border-accent rounded-lg p-8 hover:shadow-lg transition-all duration-200"
                                >
                                    <div className="flex items-start gap-6">
                                        {/* Icon */}
                                        <div className="text-6xl flex-shrink-0">
                                            {getIcon(item.content_type)}
                                        </div>

                                        {/* Content */}
                                        <div className="flex-1">
                                            <div className="flex items-center gap-3 mb-3">
                                                <h3 className="text-2xl font-bold text-primary font-georgia">
                                                    {item.title}
                                                </h3>
                                                <span className="bg-accent text-primary text-xs px-3 py-1 rounded-full font-bold uppercase tracking-wider">
                                                    {item.content_type.replace(
                                                        "_",
                                                        " ",
                                                    )}
                                                </span>
                                            </div>
                                            <p className="text-text-primary mb-4 leading-relaxed">
                                                {item.description}
                                            </p>
                                            <p className="text-xs text-text-muted font-semibold uppercase tracking-wider">
                                                Published{" "}
                                                {new Date(
                                                    item.published_at,
                                                ).toLocaleDateString(
                                                    "en-US",
                                                    {
                                                        year: "numeric",
                                                        month: "long",
                                                        day: "numeric",
                                                    },
                                                )}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </section>

                {/* Roasting Philosophy Section */}
                <section className="bg-gradient-to-r from-primary via-secondary to-primary text-light py-20">
                    <div className="max-w-7xl mx-auto px-4">
                        <h2 className="text-4xl font-bold mb-12 text-center font-georgia">
                            Our Roasting Philosophy
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                            {/* Temperature */}
                            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-8 hover:bg-opacity-20 transition">
                                <div className="text-6xl mb-6">🌡️</div>
                                <h3 className="text-2xl font-bold mb-4 font-georgia">
                                    Temperature Control
                                </h3>
                                <p className="text-light leading-relaxed">
                                    Precise heat management brings out the best in each bean's unique characteristics. We monitor every degree to achieve perfect balance.
                                </p>
                            </div>

                            {/* Timing */}
                            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-8 hover:bg-opacity-20 transition">
                                <div className="text-6xl mb-6">⏱️</div>
                                <h3 className="text-2xl font-bold mb-4 font-georgia">
                                    Timing Precision
                                </h3>
                                <p className="text-light leading-relaxed">
                                    Every second matters. We roast to exact specifications for consistency and quality, honoring decades of expertise.
                                </p>
                            </div>

                            {/* Sensory */}
                            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-8 hover:bg-opacity-20 transition">
                                <div className="text-6xl mb-6">👃</div>
                                <h3 className="text-2xl font-bold mb-4 font-georgia">
                                    Sensory Expertise
                                </h3>
                                <p className="text-light leading-relaxed">
                                    Our roasters use sight, smell, and sound to achieve the perfect roast every time. Experience matters.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
