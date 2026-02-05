import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export type Coffee = {
    id: string;
    name: string;
    description: string;
    price: number;
    roast_date: string;
    is_reserve: boolean;
    story: string;
    flavor_notes: string[];
    coffee_type: string; // Arabica or Canephora
    process: string; // Washed, Natural, Honey, etc.
    roast_level: string; // Light, Medium, Medium-Dark, Dark
    farmer_name: string;
    farmer_location: string;
    farmer_country: string;
    farmer_story: string;
    farmer_image_url: string | null;
    inventory: number;
    sold_count: number;
    created_at: string;
};

export type Content = {
    id: string;
    title: string;
    description: string;
    content_type: string;
    media_url: string | null;
    published_at: string;
};
