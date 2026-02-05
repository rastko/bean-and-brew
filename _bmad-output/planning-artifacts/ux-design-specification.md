# Bean & Brew - UX Design Specification

**Version:** 1.0  
**Date:** February 5, 2026  
**Designer:** Sally (UX Designer)  
**Reference:** https://bean-and-brew-sandy.vercel.app/

---

## 🎨 Design Vision

**Story:** Three generations. One obsession: the perfect roast.

**Feeling:** Authentic, premium, story-driven. A company that's been perfecting craft since 1952, now sharing directly with coffee lovers who care about quality and origin.

**Target Emotion:** Trust + Aspiration + Discovery

---

## � User Personas & Stories

### Primary Persona: Sarah - The Coffee Enthusiast

**Demographics:** 28-45, urban professional, college-educated, $60k-$120k income

**Behavior:** Currently buys specialty coffee at farmers markets, willing to pay premium for quality and story

**Goal:** Understand if specialty coffee is worth 2x the price of commodity coffee

**Tech Comfort:** High - mobile-first, expects fast, intuitive interface

### Primary User Story - Sarah

| Story                                                                                                                   | Acceptance Criteria                                                                                                                                                                                                                                     |
| ----------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **As a** coffee enthusiast **I want to** browse specialty coffees **so that** I can discover new origins                | <ul><li>See all coffees on homepage with clear navigation</li><li>View coffee name, description, price, origin on product card</li><li>See farmer story and understand roast level</li><li>Read flavor notes to match my taste preference</li></ul>     |
| **As a** specialty coffee buyer **I want to** filter coffees by roast level **so that** I can find my preferred profile | <ul><li>Filter buttons for Light, Medium, Medium-Dark, Dark roasts</li><li>Results update instantly without page reload</li><li>Reserve coffees clearly highlighted separately</li><li>Filter selection persists when browsing</li></ul>                |
| **As a** conscious consumer **I want to** learn about coffee sourcing **so that** I can feel good about my purchase     | <ul><li>Farmer name and background visible on product card</li><li>Coffee origin (country, region) clearly stated</li><li>Processing method (Washed/Natural/Honey) explained</li><li>Coffee type (Arabica/Canephora) identified with context</li></ul>  |
| **As a** roasting enthusiast **I want to** understand the roasting process **so that** I can appreciate the craft       | <ul><li>Behind-the-Scenes page accessible from navigation</li><li>Roasting journals and philosophy clearly written</li><li>Founder expertise and experience visible</li><li>Educational content about coffee growing and processing available</li></ul> |

---

### Secondary Persona: James - The Coffee Connoisseur

**Demographics:** 35-60, high income ($100k+), likely has home espresso machine and burr grinder

**Behavior:** Seeks rare, experimental lots and limited editions; explores multiple brewing methods

**Goal:** Find unique, technically-detailed coffees that demonstrate roasting expertise

**Tech Comfort:** High - expects detailed specifications and technical information

### Secondary User Story - James

| Story                                                                                                                                        | Acceptance Criteria                                                                                                                                                                                                                                                                                     |
| -------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **As a** coffee connoisseur **I want to** know the exact processing method **so that** I can understand how it affects flavor                | <ul><li>Processing method (Washed/Natural/Honey) displayed on every coffee</li><li>Descriptions explain processing choice and flavor impact</li><li>Coffee type (Arabica/Canephora) with elevation and origin</li><li>Roast level specified with precision (Light, Medium, Medium-Dark, Dark)</li></ul> |
| **As a** experimental coffee enthusiast **I want to** find limited-edition and reserve lots **so that** I can discover unique offerings      | <ul><li>Reserve coffees clearly badged as "Limited Edition"</li><li>Reserve section easily accessible from catalog</li><li>Availability information current and honest</li><li>Batch information and scarcity signals visible</li></ul>                                                                 |
| **As a** coffee expert **I want to** understand the roasting philosophy **so that** I can appreciate technical roasting choices              | <ul><li>Behind-the-Scenes content explains temperature control approach</li><li>Roasting journals detail heat curves and timing decisions</li><li>Founder credentials and roasting experience visible</li><li>Innovation and experimentation with new origins highlighted</li></ul>                     |
| **As a** direct-trade advocate **I want to** know the farmer and sourcing story **so that** I can make informed ethical purchasing decisions | <ul><li>Farmer name, location, and country on every coffee</li><li>Detailed farmer bios showing background and philosophy</li><li>Farmer photos to personalize connection</li><li>Sourcing transparency and relationship-building emphasized</li></ul>                                                  |

---

### Tertiary Persona: Mark - The Brand Advocate

**Demographics:** 25-40, social media active (Instagram), values artisanal/small business support

**Behavior:** Enjoys sharing exclusive products with friends; likes being "in the know"

**Goal:** Share unique, limited-edition coffees and tell the brand story

**Tech Comfort:** High - Instagram-native, expects shareable content and compelling visuals

### Tertiary User Story - Mark

| Story                                                                                                                          | Acceptance Criteria                                                                                                                                                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **As a** social enthusiast **I want to** find limited-edition coffees **so that** I can share something exclusive with friends | <ul><li>Reserve coffees clearly marked as "Limited Edition"</li><li>Exclusivity messaging prominent on cards</li><li>Visual design is high-quality and Instagram-shareable</li><li>Supply/scarcity information visible to create intrigue</li></ul>              |
| **As a** brand advocate **I want to** tell my friends the Bean & Brew story **so that** they understand why it's special       | <ul><li>Brand story accessible and compelling on homepage</li><li>Farmer stories with visuals shareable across platforms</li><li>Roasting philosophy content educational and interesting</li><li>Clear differentiation from commodity coffee messaging</li></ul> |

---

## 🎨 Design Vision

### Color Palette (Warm Earth Tones)

```
Primary: #F5E6D3 (Warm Cream - welcoming, coffee-adjacent)
Secondary: #D4885A (Warm Brown - authentic, earthy)
Accent: #C85A3A (Rust/Orange - warmth, energy, calls-to-action)
Light BG: #FFFBF7 (Warm Off-white - inviting, soft)
Text: #5C4A3D (Warm Brown - natural, readable)
Muted: #9B8B7E (Warm Gray - secondary info)
Border: #E8DCC8 (Warm Beige - subtle dividers)
```

**Why this warm palette?**

- Immediately evokes coffee and warmth
- Approachable and inviting (not cold/dark)
- Sarah's first impression: "This feels authentic and artisanal"
- Marcus's first impression: "This feels trustworthy and premium"
- Cream + warm brown create natural coffee aesthetic
- Rust accent draws eyes to CTAs without aggression

### Typography

```
Headlines: Georgia (serif) or System serif
  - h1: 48px, bold, line-height 1.2
  - h2: 32px, medium, line-height 1.3
  - h3: 24px, medium, line-height 1.4

Body: -apple-system, BlinkMacSystemFont (clean sans-serif)
  - Body: 16px, regular, line-height 1.6
  - Small: 14px, regular, line-height 1.5
  - Caption: 12px, regular, line-height 1.4

CTA Buttons: 16px, semi-bold, uppercase letter-spacing
```

**Rationale:** Serif headers = premium + heritage, sans-serif body = modern + readable

### Spacing Grid (8px base)

- xs: 4px (tight spacing)
- sm: 8px (default spacing)
- md: 16px (comfortable spacing)
- lg: 24px (section spacing)
- xl: 32px (major sections)
- 2xl: 48px (hero spacing)

---

## 🏠 Page Layouts

### Homepage (`/`)

**Structure:**

1. **Hero Section** (Full viewport height)
2. **Brand Story** (Feature row)
3. **Product Grid** (3-column)
4. **Trust/Social Proof** (Stats row)
5. **CTA Section** (Call-to-action)
6. **Footer**

#### 1. Hero Section

```
┌─────────────────────────────────────────┐
│ [Header with minimal nav]              │
│                                         │
│ BEAN & BREW                             │
│                                         │
│ Three generations. One obsession:       │
│ the perfect roast.                      │
│                                         │
│ Since 1952, we've sourced              │
│ single-origin beans from farmers       │
│ we know by name.                       │
│                                         │
│ [Shop Collection]  [Learn More]        │
│                                         │
│                [Hero Image]             │
│                (Premium coffee photo)   │
└─────────────────────────────────────────┘
```

**Design Details:**

- Full viewport height (100vh)
- Split layout: 50% text (left), 50% image (right)
- Dark background (#1a1a1a) with white text
- Large, readable headline (48px)
- Serif font for headline (heritage feel)
- Two primary CTAs with clear differentiation:
    - "Shop Collection" (filled, primary)
    - "Learn More" (outline, secondary)
- High-quality hero image (coffee beans, roasting, craftsmanship)

#### 2. Brand Story / Trust Section

```
┌─────────────────────────────────────────┐
│                                         │
│    ⭐ 4.9 Rating        🌍 50+ Origins │
│    From 1,200+ reviews    Single-origin │
│                                         │
│    ☕ 10k+ Loved         🤝 Direct Trade │
│    by coffee drinkers     Fair pricing  │
│                                         │
│  [Shop Our Coffee Collection →]        │
│                                         │
└─────────────────────────────────────────┘
```

**Design Details:**

- Four stat cards in 2x2 grid
- Large icons (emoji or custom SVG)
- Trust signals prominently displayed
- Light background (#FAFAF8)
- Centered layout
- CTA button at bottom

#### 3. Product Grid

```
┌──────────────────────────────────────────────────────┐
│ COFFEE COLLECTION                                    │
│                                                      │
│ ┌──────────────┐  ┌──────────────┐  ┌──────────────┐│
│ │              │  │              │  │              ││
│ │   Product    │  │   Product    │  │   Product    ││
│ │    Image     │  │    Image     │  │    Image     ││
│ │              │  │              │  │              ││
│ ├──────────────┤  ├──────────────┤  ├──────────────┤│
│ │ Coffee Name  │  │ Coffee Name  │  │ Coffee Name  ││
│ │ $24.99       │  │ $26.99       │  │ $29.99 ⭐    ││
│ │ Origin, Type │  │ Origin, Type │  │ Origin, Type ││
│ │ Flavor notes │  │ Flavor notes │  │ Flavor notes ││
│ └──────────────┘  └──────────────┘  └──────────────┘│
│                                                      │
│ [View All Coffees →]                               │
└──────────────────────────────────────────────────────┘
```

**Design Details:**

- 3-column grid on desktop, 1 column mobile
- Coffee cards with:
    - Large, high-quality image (80% of card)
    - Name, price, origin
    - Roast level badge
    - Flavor notes as tags
    - Reserve badge (if applicable) with gold accent
- Cards have subtle shadow/hover effect
- Padding: 16px between cards
- View All CTA at bottom

#### 4. Filters/Sorting

```
FILTER BY:  [All ✓] [Light Roast] [Medium Roast] [Dark Roast] [Reserve]
```

**Design Details:**

- Sticky filter bar above product grid
- Pill-style buttons
- Selected state: filled with primary color
- Smooth transitions when filtering

### Behind-the-Scenes Page (`/behind-scenes`)

**Structure:**

1. **Page Header** (Introduction)
2. **Content Grid** (Featured content)
3. **Newsletter Signup** (Optional CTA)
4. **Footer**

```
┌──────────────────────────────────────┐
│ BEHIND THE SCENES                    │
│                                      │
│ Stories from our roastery            │
│ Learn how we craft excellence        │
│                                      │
├──────────────────────────────────────┤
│ ┌──────────────┐  ┌──────────────┐  │
│ │              │  │              │  │
│ │ Video/Post   │  │ Video/Post   │  │
│ │              │  │              │  │
│ ├──────────────┤  ├──────────────┤  │
│ │ Title        │  │ Title        │  │
│ │ Description  │  │ Description  │  │
│ │ Date         │  │ Date         │  │
│ └──────────────┘  └──────────────┘  │
│                                      │
│     [More Stories →]                 │
└──────────────────────────────────────┘
```

---

## 🧩 Component Designs

### Header/Navigation

```
┌─────────────────────────────────────────────────┐
│ BEAN & BREW      [Shop] [Origins] [Cart]       │
│ EST. 1952                                       │
└─────────────────────────────────────────────────┘
```

**Design Details:**

- Dark background (#1a1a1a)
- White text
- Logo on left (text-based)
- Minimal navigation on right (3-4 items)
- Sticky on scroll
- Height: 80px (spacious, premium)
- Font: Sans-serif, uppercase, letter-spacing

### Coffee Card

**State: Default**

```
┌──────────────────────┐
│                      │
│   [Coffee Image]     │  ← 300x300px
│   High quality       │
│                      │
├──────────────────────┤
│ Colombian Huila      │  ← Product name (18px, bold)
│                      │
│ Premium Arabica      │  ← Type/Process (14px, muted)
│ Washed, Medium Roast │
│                      │
│ $24.99               │  ← Price (20px, bold, coffee-brown)
│                      │
│ [Chocolate] [Nutty]  │  ← Flavor tags (12px, light bg)
│ [Smooth]             │
│                      │
│ Maria Santos         │  ← Farmer (14px, muted)
│ Huila, Colombia      │
│                      │
│ [Add to Cart]        │  ← CTA (uppercase)
└──────────────────────┘
```

**Hover State:**

- Slight scale (1.02x)
- Shadow deepens
- Image brightens slightly
- Button becomes more prominent (color change)

**Reserve Variant:**

- Gold badge in corner: "⭐ RESERVE"
- Higher price point
- Different color treatment

### Buttons

**Primary Button**

```
[SHOP COLLECTION]
Background: #8B7355 (Coffee Brown)
Color: White
Padding: 12px 32px
Font: 16px, semi-bold, uppercase
Hover: Darken background
```

**Secondary Button**

```
[LEARN MORE]
Background: Transparent
Border: 2px solid #8B7355
Color: #8B7355
Padding: 10px 30px
Hover: Fill background
```

**Tertiary/Small Button**

```
[+] or [View Details]
Smaller scale, subtle styling
```

---

## 📱 Responsive Design

### Mobile (< 640px)

- 1-column product grid
- Full-width hero (stacked layout instead of split)
- Navigation: Hamburger menu
- Font sizes: Reduced 10-15%
- Spacing: Reduced to 12px base

### Tablet (640px - 1024px)

- 2-column product grid
- Hero: Side-by-side (if space allows)
- Navigation: Visible but compact
- Font sizes: 90% of desktop

### Desktop (> 1024px)

- 3-column product grid
- Full split hero
- Full navigation visible
- Full font sizes

---

## 🎭 Interaction Patterns

### Filtering

- Click filter pill → Smooth fade of non-matching cards
- No page reload
- Clear count of results
- "Reset" option if filters applied

### Product Hover

- Image: Slight zoom (1.02x)
- Card: Shadow deepens
- Button: Color change/emphasis

### Navigation

- Hover: Text color change to gold accent
- Current page: Underline in gold
- Smooth transitions (0.2s)

### CTA Buttons

- Hover: Background color change, slight scale
- Click: Brief feedback (opacity change)
- Loading state: Spinner or text change

---

## 🎯 Information Hierarchy

1. **Hero Section** — Brand story + value prop
2. **Trust Signals** — Credibility (ratings, origins, customers)
3. **Product Grid** — Core offering with filters
4. **Product Cards** — Name, image, key info (price, origin, flavors)
5. **Farmer Stories** — Trust + differentiation
6. **Footer** — Company info + secondary navigation

---

## 📋 Content Priorities

### Homepage

**Must Show:**

- Brand story (heritage, craft)
- High-quality product images
- Price and basic coffee specs
- Farmer info (name, location)
- Clear CTA to shop

**Should Show:**

- Roast level filters
- Reserve offerings
- Trust signals (ratings, reviews count)

**Nice to Have:**

- Farmer photos
- Detailed flavor notes
- Behind-the-scenes preview

### Product Cards

**Must Show:** (visible without scrolling card)

- Product name
- Image
- Price
- Roast level
- Reserve badge (if applicable)

**Scroll reveals:**

- Farmer name
- Origin (country)
- Flavor notes
- CTA button

---

## 🎨 Design Tokens Summary

| Token            | Value                     | Usage                      |
| ---------------- | ------------------------- | -------------------------- |
| Primary Color    | #1a1a1a                   | Headers, backgrounds, text |
| Secondary Color  | #8B7355                   | Buttons, accents           |
| Accent Color     | #D4A574                   | Reserve badge, highlights  |
| Light Background | #FAFAF8                   | Section backgrounds        |
| Border           | #EEEEEE                   | Subtle dividers            |
| Text Primary     | #2C2C2C                   | Body text                  |
| Text Muted       | #999999                   | Secondary info             |
| Shadow           | rgba(0,0,0,0.1)           | Card shadows               |
| Border Radius    | 8px                       | Cards, buttons             |
| Button Padding   | 12px 32px                 | Standard buttons           |
| Card Shadow      | 0 2px 8px rgba(0,0,0,0.1) | Product cards              |

---

## 🚀 Implementation Order

1. **Update Header** — New dark theme, navigation
2. **Update Hero Section** — New layout, messaging
3. **Update Color Tokens** — Tailwind config changes
4. **Update Coffee Cards** — New design, spacing
5. **Update Footer** — Clean up styling
6. **Test on Mobile** — Responsive adjustments
7. **Implement Interactions** — Hover effects, filters

---

**This specification is ready to hand to the dev team for implementation!**
