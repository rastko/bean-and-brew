-- Bean & Brew Database Schema - MVP Simplified
-- Create tables for the coffee e-commerce platform

-- Coffees table (farmer info embedded)
CREATE TABLE coffees (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  description TEXT NOT NULL,
  price DECIMAL(10, 2) NOT NULL,
  roast_date TIMESTAMP NOT NULL,
  is_reserve BOOLEAN DEFAULT FALSE,
  story TEXT NOT NULL,
  flavor_notes TEXT[] NOT NULL,
  
  -- Coffee characteristics
  coffee_type TEXT NOT NULL,    -- Arabica or Canephora
  process TEXT NOT NULL,         -- Washed, Natural, Honey, etc.
  roast_level TEXT NOT NULL,     -- Light, Medium, Medium-Dark, Dark
  
  -- Embedded farmer info (no foreign key for MVP simplicity)
  farmer_name TEXT NOT NULL,
  farmer_location TEXT NOT NULL,
  farmer_country TEXT NOT NULL,
  farmer_story TEXT NOT NULL,
  farmer_image_url TEXT,
  
  inventory INT DEFAULT 100,
  sold_count INT DEFAULT 0,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Content (behind-the-scenes) table
CREATE TABLE content (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  content_type TEXT NOT NULL,
  media_url TEXT,
  published_at TIMESTAMP DEFAULT NOW(),
  created_at TIMESTAMP DEFAULT NOW()
);

-- Indexes for performance
CREATE INDEX idx_coffees_is_reserve ON coffees(is_reserve);
CREATE INDEX idx_coffees_roast_level ON coffees(roast_level);

-- Disable Row Level Security for MVP (enable public read access)
ALTER TABLE coffees ENABLE ROW LEVEL SECURITY;
ALTER TABLE content ENABLE ROW LEVEL SECURITY;

-- Allow anonymous read access
CREATE POLICY "Allow public read access on coffees" ON coffees FOR SELECT USING (true);
CREATE POLICY "Allow public read access on content" ON content FOR SELECT USING (true);
