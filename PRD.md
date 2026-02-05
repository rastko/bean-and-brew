# Bean & Brew - Product Requirements Document

**Version:** 1.0  
**Date:** February 5, 2026  
**Status:** MVP - Ready for Launch  
**Product Owner:** Rastko

---

## 📋 Executive Summary

Bean & Brew is a direct-to-consumer e-commerce platform for an artisanal specialty coffee roaster. The MVP focuses on **transparency through storytelling** — showcasing sourcing relationships with farmers, roasting philosophy, and limited-edition reserve offerings.

**Target Launch:** Immediate  
**Development Time:** 8 hours  
**Tech Stack:** Next.js 14 + Supabase + Vercel  
**User Base (Phase 1):** Direct-to-consumer coffee enthusiasts

---

## 🎯 Product Vision

### Problem Statement

Bean & Brew is an excellent specialty coffee roaster currently limited to farmers market distribution. The founders want to:

- **Reach customers directly** without intermediaries
- **Tell their story** about sourcing relationships and roasting craft
- **Build emotional connection** with buyers who care about quality
- **Differentiate from commodity coffee** through transparency

**Why Now?** Coffee enthusiasts increasingly seek artisanal, ethically-sourced products with authentic brand stories. The barriers to direct sales (website, payment, shipping) are now minimal.

### Success Definition (Phase 1)

- ✅ Working online storefront
- ✅ Showcases 5+ specialty coffees with farmer stories
- ✅ Demonstrates sourcing transparency
- ✅ Creates emotional connection through content
- ✅ Positioned for e-commerce (payment/shipping Phase 2)

---

## 👥 User Personas & Stories

### Primary User: Coffee Enthusiast (Sarah)

**Demographics:**

- Age: 28-45
- Income: $60k-$120k+
- Education: College-educated
- Location: Urban/suburban areas

**Motivation:**

- Wants quality coffee that tastes better than commercial brands
- Values understanding origin and craftsmanship
- Willing to pay premium for authenticity
- Enjoys learning about coffee production

**User Stories:**

| Story                                                                                                                   | Acceptance Criteria                                                                                                                                                                         |
| ----------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **As a** coffee enthusiast **I want to** browse specialty coffees **so that** I can discover new origins                | <ul><li>See all coffees on homepage</li><li>View coffee name, description, price, origin</li><li>See farmer story and image</li><li>Understand roast level and flavor notes</li></ul>       |
| **As a** specialty coffee buyer **I want to** filter coffees by roast level **so that** I can find my preferred profile | <ul><li>Filter options: Light, Medium, Medium-Dark, Dark</li><li>Results update instantly</li><li>Reserve coffee highlighted separately</li></ul>                                           |
| **As a** conscious consumer **I want to** learn about coffee sourcing **so that** I can feel good about my purchase     | <ul><li>Farmer name and photo visible on each coffee</li><li>Farmer story displayed prominently</li><li>Coffee origin (country, region) clear</li><li>Processing method explained</li></ul> |
| **As a** roasting enthusiast **I want to** understand the roasting process **so that** I can appreciate the craft       | <ul><li>Behind-the-Scenes section accessible</li><li>Roasting journal entries visible</li><li>Founder philosophy explained</li><li>Educational content about coffee</li></ul>               |

### Secondary User: Coffee Connoisseur (James)

**Demographics:**

- Age: 35-60
- Income: $100k+
- Education: College-educated, often advanced degree
- Location: Urban coffee hotspots
- Equipment: Home espresso machine, burr grinder, multiple brewing methods

**Motivation:**

- Wants to understand technical details of coffee production
- Values transparency about processing and terroir
- Seeks rare, experimental lots and limited editions
- Enjoys exploring different origins and processing methods
- Willing to pay premium for unique coffees

**User Stories:**

| Story                                                                                                                                        | Acceptance Criteria                                                                                                                                                                                                                                             |
| -------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **As a** coffee connoisseur **I want to** know the exact processing method **so that** I can understand how it affects flavor                | <ul><li>Processing method (Washed/Natural/Honey) displayed on every coffee</li><li>Descriptions explain processing choice and impact</li><li>Coffee type (Arabica/Canephora) shown</li><li>Roast level specified with precision</li></ul>                       |
| **As a** experimental coffee enthusiast **I want to** find limited-edition and reserve lots **so that** I can discover unique offerings      | <ul><li>Reserve coffees clearly badged as "Limited"</li><li>Reserve section easily accessible</li><li>Batch size or scarcity visible</li><li>Availability info current</li></ul>                                                                                |
| **As a** coffee expert **I want to** understand the roasting philosophy **so that** I can appreciate the technical roasting choices          | <ul><li>Behind-the-Scenes content explains roasting approach</li><li>Roasting journals detail heat curves and timing decisions</li><li>Founder expertise and credentials visible</li><li>Experimentation and innovation highlighted</li></ul>                   |
| **As a** direct-trade advocate **I want to** know the farmer and sourcing story **so that** I can make informed ethical purchasing decisions | <ul><li>Farmer name, location, country displayed on every coffee</li><li>Detailed farmer bios (background, philosophy, experience)</li><li>Farmer photos to personalize connection</li><li>Sourcing transparency and relationship-building emphasized</li></ul> |

### Tertiary User: Brand Advocate (Mark)

**Demographics:**

- Age: 25-40
- Income: $50k-$90k
- Education: College-educated
- Location: Urban/suburban
- Social Media: Active on Instagram, enjoys sharing discoveries

**Motivation:**

- Wants to share exclusive, unique products with friends
- Enjoys talking about quality and craftsmanship
- Values being "in the know" about limited editions
- Likes supporting small and artisanal businesses

**User Stories:**

| Story                                                                                                                          | Acceptance Criteria                                                                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **As a** social enthusiast **I want to** find limited-edition coffees **so that** I can share something exclusive with friends | <ul><li>Reserve coffees clearly marked as "Limited Edition"</li><li>Exclusivity and scarcity messaging prominent</li><li>Visual design shareable (high-quality photos)</li><li>Supply info visible to create urgency</li></ul>         |
| **As a** brand advocate **I want to** tell my friends the Bean & Brew story **so that** they understand why it's special       | <ul><li>Brand story accessible and compelling</li><li>Farmer stories with visuals shareable</li><li>Content about roasting process educational and interesting</li><li>Clear differentiation from commodity coffee messaging</li></ul> |

### Secondary User: Brand Advocate (Mark)

**Motivation:**

- Wants to share exclusive, unique products with friends
- Enjoys talking about quality and craftsmanship
- Values being "in the know" about limited editions

**Key Need:**

- Reserve coffee clearly labeled as exclusive
- Story compelling enough to share

---

## ✨ Features & Requirements

### Feature 1: Product Catalog

**Description:** Browse all specialty coffees with full specifications

**Functional Requirements:**

- Display all coffees in grid/list layout
- Show for each coffee:
    - Name, description (100-150 chars)
    - Price
    - Roast level badge
    - Coffee type (Arabica/Canephora)
    - Processing method
    - Flavor notes (3-5 tags)
    - Farmer name and country
    - Reserve badge (if applicable)
    - Inventory status
- **Responsive:** Mobile, tablet, desktop
- **Performance:** Load in <2 seconds

**Acceptance Criteria:**

```
GIVEN a user visits the homepage
WHEN the page loads
THEN they see 5 specialty coffees displayed in a grid
AND each coffee card shows: name, price, roast level, flavor notes
AND clicking a coffee provides more details

GIVEN a user wants to filter coffees
WHEN they select "Reserve Coffees"
THEN only reserve coffees display
AND count shows "2 coffees"

GIVEN a user wants light roasts
WHEN they click "Light Roast" filter
THEN only light roasts appear
AND they can see 2 coffees matching

GIVEN a user wants all coffees again
WHEN they click "All Coffees"
THEN all 5 coffees display
```

**Technical Requirements:**

- Fetch coffees from Supabase with SELECT query
- Filter implemented client-side (no additional server calls)
- Images load from Unsplash CDN
- Coffee cards responsive (1 col mobile, 3 col desktop)

---

### Feature 2: Coffee Details

**Description:** Rich information about each coffee

**Functional Requirements:**

- Display on coffee card:
    - Full description
    - Story (how it's sourced, roasted)
    - Flavor notes breakdown
    - Price and availability
    - Farmer information:
        - Name with photo
        - Location and country
        - Farmer story (2-3 paragraphs)
    - Coffee specifications:
        - Type (Arabica/Canephora)
        - Processing method
        - Roast level
    - Reserve badge (if applicable)

**Acceptance Criteria:**

```
GIVEN a user views a coffee card
WHEN they look at the card
THEN they can read the coffee story
AND they see the farmer's name, photo, and story
AND flavor notes are displayed as tags
AND price is clearly visible

GIVEN a user sees "Costa Rican Tarrazú Microlot"
WHEN they look at it
THEN they see "RESERVE" badge
AND the story mentions "limited edition"
```

**Design Requirements:**

- Artisanal color scheme (cream, organic green, burnt sienna)
- Clear visual hierarchy
- Readable typography
- High-quality farmer images

---

### Feature 3: Behind-the-Scenes Content

**Description:** Educational content about roasting and sourcing

**Functional Requirements:**

- Content hub page at `/behind-scenes`
- Display 3+ content items:
    - Roasting journals (text)
    - Videos (embedded player or link)
    - Blog posts (text)
- Each item shows:
    - Title
    - Description
    - Content type badge
    - Publication date
    - Link/embed to full content

**Acceptance Criteria:**

```
GIVEN a user visits /behind-scenes
WHEN the page loads
THEN they see 3 content items
AND each shows title, description, type, and date
AND content is organized by type (video, journal, blog)

GIVEN a user wants to watch the roasting video
WHEN they click "The Art of Roasting"
THEN a video player opens
OR they're directed to the video
```

**Content Strategy:**

- Builds emotional connection
- Shows expertise and passion
- Differentiates from commodity coffee
- Creates repeat visits

---

### Feature 4: Navigation & User Experience

**Description:** Clear navigation and intuitive interface

**Functional Requirements:**

- Header with logo and nav:
    - "Shop" → `/` (product catalog)
    - "Behind-the-Scenes" → `/behind-scenes`
- Footer with links and info
- Mobile-optimized menu
- Responsive design (all devices)

**Acceptance Criteria:**

```
GIVEN a user is on any page
WHEN they look at the header
THEN they see "Bean & Brew" logo
AND navigation options are visible
AND nav is touch-friendly on mobile

GIVEN a user is on mobile
WHEN they need to navigate
THEN menu is accessible and easy to use
AND buttons are large enough to tap
```

---

## 💾 Data Structure

### Coffees Table

```sql
CREATE TABLE coffees (
  id UUID PRIMARY KEY,
  name TEXT NOT NULL,
  description TEXT NOT NULL,
  price DECIMAL(10, 2) NOT NULL,
  roast_date TIMESTAMP NOT NULL,
  is_reserve BOOLEAN DEFAULT FALSE,
  story TEXT NOT NULL,
  flavor_notes TEXT[] NOT NULL,

  -- Coffee specifications
  coffee_type TEXT NOT NULL,      -- Arabica, Canephora
  process TEXT NOT NULL,           -- Washed, Natural, Honey
  roast_level TEXT NOT NULL,       -- Light, Medium, Medium-Dark, Dark

  -- Embedded farmer info
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
```

**Rationale:** Embedding farmer data avoids complex joins and reduces query complexity for MVP. Phase 2 can normalize if needed.

### Content Table

```sql
CREATE TABLE content (
  id UUID PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  content_type TEXT NOT NULL,    -- video, blog, roasting_journal
  media_url TEXT,                 -- YouTube URL or link
  published_at TIMESTAMP DEFAULT NOW(),
  created_at TIMESTAMP DEFAULT NOW()
);
```

### Sample Data (Seed)

**5 Coffees:**

- Colombian Huila Supreme (Arabica, Washed, Medium)
- Ethiopian Yirgacheffe Natural (Arabica, Natural, Light)
- Costa Rican Tarrazú Microlot (Arabica, Honey, Medium-Dark) — RESERVE
- Kenyan AA Grade Bright (Arabica, Washed, Light)
- Roaster's Reserve: Experimental Dark Roast (Arabica, Natural, Dark) — RESERVE

**3 Content Items:**

- The Art of Roasting (video)
- February Roasting Journal (journal)
- Bean Sourcing: Our Partnerships (blog)

---

## 🎨 Design & UX Requirements

### Color Palette

```
Primary Brand: #B85C38 (Burnt Sienna)
Secondary: #8B9467 (Organic Green)
Light: #F9F5EB (Cream)
Text: #2C2C2C (Dark Gray)
```

### Typography

- Headlines: System fonts (bold)
- Body: System fonts (readable)
- High contrast for accessibility

### Responsive Breakpoints

- Mobile: < 640px (1 column)
- Tablet: 640px - 1024px (2 columns)
- Desktop: > 1024px (3 columns)

### Accessibility

- Alt text on all images
- Clear button labels
- Sufficient color contrast
- Touch-friendly tap targets

---

## ⚙️ Technical Requirements

### Frontend

- **Framework:** Next.js 14
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Rendering:** Server-side where possible, client-side for interactivity

### Backend

- **Database:** Supabase (PostgreSQL)
- **Client:** @supabase/supabase-js
- **API:** REST (Supabase-provided)

### Deployment

- **Platform:** Vercel
- **Environment:** Production
- **SSL/TLS:** Automatic

### Performance Targets

- **Page Load:** < 2 seconds
- **First Contentful Paint:** < 1 second
- **Time to Interactive:** < 3 seconds
- **Bundle Size:** < 100KB (optimized)

---

## 🚀 Success Metrics (Phase 1)

| Metric                    | Target                 | Definition                                |
| ------------------------- | ---------------------- | ----------------------------------------- |
| **Feature Completeness**  | 100%                   | All 4 features working                    |
| **Page Load Time**        | < 2s                   | Measured on 4G                            |
| **Mobile Responsiveness** | 100%                   | All pages responsive                      |
| **Uptime**                | 99%                    | Zero errors in first week                 |
| **Code Quality**          | TypeScript strict mode | No `any` types, proper error handling     |
| **Documentation**         | Comprehensive          | README, QUICKSTART, BMAD_APPLICATION, PRD |

---

## ❌ Out of Scope (Phase 2+)

The following features are explicitly **NOT included** in MVP:

- ❌ **Payment processing** (Stripe, PayPal)
- ❌ **Shipping integration** (EasyPost, ShipStation)
- ❌ **User authentication** (login/signup)
- ❌ **Shopping cart**
- ❌ **Wishlist/favorites**
- ❌ **Customer reviews**
- ❌ **Personalization** (recommendations)
- ❌ **Email notifications**
- ❌ **Analytics** (GA4)
- ❌ **Community features** (forums, ratings)
- ❌ **Subscription program**

---

## 📅 Timeline & Milestones

| Milestone                  | Status      | Date  |
| -------------------------- | ----------- | ----- |
| Brainstorming & Analysis   | ✅ Complete | Feb 5 |
| Architecture & Design      | ✅ Complete | Feb 5 |
| Development                | ✅ Complete | Feb 5 |
| Testing & QA               | ✅ Complete | Feb 5 |
| Documentation              | ✅ Complete | Feb 5 |
| Local Testing              | ✅ Complete | Feb 5 |
| Vercel Deployment          | ⏳ Pending  | Feb 5 |
| Job Application Submission | ⏳ Pending  | Feb 5 |

---

## 📚 Documentation Provided

1. **README.md** — Project overview and quick start
2. **QUICKSTART.md** — 5-minute setup guide
3. **BMAD_APPLICATION.md** — Methodology walkthrough
4. **DELIVERABLE.md** — What's been built
5. **PRD.md** — This document
6. **Code Comments** — Inline documentation
7. **TypeScript Types** — Self-documenting code

---

## 🎯 Evaluation Criteria

When evaluating this product, consider:

### Product Thinking

- [ ] Does the MVP solve the core problem?
- [ ] Are features prioritized correctly for launch?
- [ ] Is the scope appropriate for 8 hours?
- [ ] Does the product differentiate from competitors?

### Technical Execution

- [ ] Is code clean and well-structured?
- [ ] Does it follow best practices?
- [ ] Is error handling comprehensive?
- [ ] Are performance targets met?

### BMAD Methodology

- [ ] Is analysis phase clear and thorough?
- [ ] Is architecture decision-making visible?
- [ ] Are implementation patterns professional?
- [ ] Is documentation complete?

### User Experience

- [ ] Does the UI clearly communicate brand?
- [ ] Is navigation intuitive?
- [ ] Are farmer stories prominent?
- [ ] Does it feel like a real product?

---

## 📞 Questions?

For clarifications on requirements, features, or the BMAD methodology used, see:

- **BMAD_APPLICATION.md** — How we arrived at this PRD
- **DELIVERABLE.md** — What was actually built
- **README.md** — Technical architecture

---

**Next Phase:** Phase 2 includes payment processing, shipping integration, user accounts, and community features.
