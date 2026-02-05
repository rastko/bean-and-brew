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

## 📐 Visual System

### Color Palette (Premium + Warm)

```
Primary: #1a1a1a (Deep Black - authority, premium)
Secondary: #8B7355 (Coffee Brown - warmth, authenticity)
Accent: #D4A574 (Gold/Tan - luxury, exclusivity)
Light BG: #FAFAF8 (Off-white - clean, readable)
Text: #2C2C2C (Near-black - high contrast)
Muted: #999999 (Gray - secondary info)
```

**Why this over the cream/green/sienna?**

- More premium and sophisticated
- Coffee brown references the product directly
- Gold accent creates luxury/exclusivity feeling
- Darker backgrounds feel more upscale
- Better contrast for readability

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
