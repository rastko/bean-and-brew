-- Bean & Brew Database - Complete Initialization
-- Schema + Seed Data (with product images)

-- Drop existing tables if they exist (optional, uncomment if needed)
-- DROP TABLE IF EXISTS content CASCADE;
-- DROP TABLE IF EXISTS coffees CASCADE;

-- Coffees table (farmer info embedded)
CREATE TABLE IF NOT EXISTS coffees (
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
  altitude_masl INT,             -- Altitude in meters above sea level
  
  -- Embedded farmer info (no foreign key for MVP simplicity)
  farmer_name TEXT NOT NULL,
  farmer_location TEXT NOT NULL,
  farmer_country TEXT NOT NULL,
  farmer_story TEXT NOT NULL,
  farmer_image_url TEXT,
  
  -- Product image
  image_url TEXT,
  
  inventory INT DEFAULT 100,
  sold_count INT DEFAULT 0,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Content (behind-the-scenes) table
CREATE TABLE IF NOT EXISTS content (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  content_type TEXT NOT NULL,
  media_url TEXT,
  published_at TIMESTAMP DEFAULT NOW(),
  created_at TIMESTAMP DEFAULT NOW()
);

-- Indexes for performance
CREATE INDEX IF NOT EXISTS idx_coffees_is_reserve ON coffees(is_reserve);
CREATE INDEX IF NOT EXISTS idx_coffees_roast_level ON coffees(roast_level);

-- Enable Row Level Security
ALTER TABLE coffees ENABLE ROW LEVEL SECURITY;
ALTER TABLE content ENABLE ROW LEVEL SECURITY;

-- Allow anonymous read access
DROP POLICY IF EXISTS "Allow public read access on coffees" ON coffees;
DROP POLICY IF EXISTS "Allow public read access on content" ON content;
CREATE POLICY "Allow public read access on coffees" ON coffees FOR SELECT USING (true);
CREATE POLICY "Allow public read access on content" ON content FOR SELECT USING (true);

-- ============================================================================
-- SEED DATA
-- ============================================================================

-- Clear existing data (optional, uncomment if needed)
-- DELETE FROM content;
-- DELETE FROM coffees;

-- Insert coffees with product images
INSERT INTO coffees (
  name, description, price, roast_date, is_reserve, story, flavor_notes, 
  coffee_type, process, roast_level, altitude_masl,
  farmer_name, farmer_location, farmer_country, farmer_story, farmer_image_url,
  image_url,
  inventory, sold_count
) VALUES
(
  'Colombian Huila Supreme',
  'A smooth, balanced coffee with chocolate and caramel notes from the mountains of Huila. Perfect for espresso or pour-over.',
  24.99,
  NOW() - INTERVAL '5 days',
  false,
  'Grown on a 40-hectare farm at 1,800 meters. This lot was carefully processed using the washed method and dried on raised beds for perfect flavor development.',
  ARRAY['Chocolate', 'Caramel', 'Nuts', 'Smooth'],
  'Arabica',
  'Washed',
  'Medium',
  1800,
  'Maria Santos',
  'Huila Region',
  'Colombia',
  'Maria has been growing specialty coffee for 20 years in the mountains of Huila. She practices sustainable farming and maintains relationships with coffee buyers worldwide.',
  'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400',
  'https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=400&h=400&fit=crop',
  120,
  45
),
(
  'Ethiopian Yirgacheffe Natural',
  'Bright and fruity with floral notes. The natural processing brings out berry and jasmine characteristics that coffee enthusiasts love.',
  26.99,
  NOW() - INTERVAL '3 days',
  false,
  'From a high-altitude farm in the Yirgacheffe zone. This coffee is naturally processed, dried in the sun for weeks to develop complex fruity flavors.',
  ARRAY['Berry', 'Floral', 'Jasmine', 'Fruity'],
  'Arabica',
  'Natural',
  'Light',
  2100,
  'Yohannes Tesfai',
  'Yirgacheffe Zone',
  'Ethiopia',
  'Yohannes is a third-generation coffee farmer in the birthplace of coffee. His farm sits at 2000+ meters altitude, producing some of the world''s most sought-after washed Arabicas.',
  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400',
  'https://images.unsplash.com/photo-1511920170033-f8396924c348?w=400&h=400&fit=crop',
  85,
  62
),
(
  'Costa Rican Tarrazú Microlot',
  'An experimental roast showcasing honey processing innovation. Complex, sweet, with brown sugar and fruit notes.',
  29.99,
  NOW() - INTERVAL '1 day',
  true,
  'A latest microlot experiment using honey processing (pulped natural). Only 50kg produced this season, making this a truly limited offering.',
  ARRAY['Honey', 'Brown Sugar', 'Fruit', 'Subtle Spice'],
  'Arabica',
  'Honey',
  'Medium-Dark',
  1650,
  'Juan Carlos Moreno',
  'Tarrazú Region',
  'Costa Rica',
  'Juan Carlos runs a family farm known for microlot experimentation. He invests heavily in innovation while respecting traditional growing methods.',
  'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400',
  'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=400&h=400&fit=crop',
  25,
  8
),
(
  'Kenyan AA Grade Bright',
  'Vibrant and acidic with grapefruit and blackcurrant notes. This is what specialty coffee tastes like.',
  25.99,
  NOW() - INTERVAL '2 days',
  false,
  'From a cooperative of smallholder farmers. AA grade indicates the largest bean size. Each lot is meticulously sorted and processed for consistency and quality.',
  ARRAY['Grapefruit', 'Blackcurrant', 'Wine-Like', 'Bright Acidity'],
  'Arabica',
  'Washed',
  'Light',
  1850,
  'Amara Kiprotich',
  'Mount Kenya Region',
  'Kenya',
  'Amara manages a cooperative of smallholder farmers focusing on traceability and quality. Each lot is carefully processed to highlight the bright, fruity notes Kenya is famous for.',
  'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400',
  'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=400&h=400&fit=crop',
  95,
  38
),
(
  'Roaster''s Reserve: Experimental Dark Roast',
  'Our roasters took an experimental natural processed Colombian bean and roasted it with a new technique. Complex, bold, and unprecedented.',
  34.99,
  NOW(),
  true,
  'This month''s roaster''s reserve is a bold experiment. We roasted a Colombian natural process bean using a modified heat curve we''ve been perfecting. Only 30 bags available.',
  ARRAY['Dark Cherry', 'Chocolate', 'Bold', 'Experimental'],
  'Arabica',
  'Natural',
  'Dark',
  1800,
  'Maria Santos',
  'Huila Region',
  'Colombia',
  'Maria has been growing specialty coffee for 20 years in the mountains of Huila. She practices sustainable farming and maintains relationships with coffee buyers worldwide.',
  'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400',
  'https://images.unsplash.com/photo-1509785307050-d4066910ec1e?w=800',
  30,
  0
);

-- Insert content (behind-the-scenes)
INSERT INTO content (title, description, content_type, media_url, published_at) VALUES
('The Art of Roasting', 'A deep dive into our roasting philosophy. Watch as our master roaster explains how heat, time, and intuition come together.', 'video', 'https://example.com/roasting-video', NOW() - INTERVAL '2 days'),
('February Roasting Journal', 'This month we experimented with a new roasting curve inspired by natural fermentation research. Early results are promising.', 'roasting_journal', NULL, NOW() - INTERVAL '1 day'),
('Bean Sourcing: Our Partnerships', 'We don''t just buy coffee - we build relationships. Learn how we work with farmers across Colombia, Ethiopia, Costa Rica and Kenya.', 'blog', NULL, NOW() - INTERVAL '3 days');
