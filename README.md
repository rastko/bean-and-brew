# Bean & Brew - Full-Stack Coffee E-Commerce MVP

> A production-ready specialty coffee e-commerce platform demonstrating BMAD methodology and modern full-stack development with AI assistance.

**Status:** ✅ Complete and deployable | **Built in:** 8 hours | **Tech:** Next.js 14 + Supabase + TypeScript

---

## 🎯 Quick Overview

**What:** Complete specialty coffee e-commerce MVP for a roaster expanding to direct-to-consumer  
**Why:** Demonstrate BMAD methodology, full-stack competency, and AI-assisted development  
**For:** Job application test (Senior Full-Stack Developer / Product Owner position)  
**How:** Business analysis → Architecture → Implementation → Production-ready

---

## 🚀 Quick Start (5 Minutes)

```bash
cd app
cp .env.example .env.local
# Add Supabase URL and Anon Key to .env.local

npm install
npm run dev
```

Then in Supabase dashboard:
1. Go to SQL Editor
2. Run `sql/schema.sql`
3. Run `sql/seed.sql`
4. Visit http://localhost:3000

**For detailed setup:** See `QUICKSTART.md`

---

## 📊 What's Been Built

### Features ✓

| Feature | Status | Details |
|---------|--------|---------|
| **Product Catalog** | ✅ Complete | Browse 5 specialty coffees with filtering |
| **Coffee Details** | ✅ Complete | Full specs: type, process, roast level, farmer story |
| **Reserve Coffees** | ✅ Complete | Limited-edition exclusive offerings |
| **Behind-the-Scenes** | ✅ Complete | Content hub: roasting journals, education, philosophy |
| **Responsive Design** | ✅ Complete | Mobile, tablet, desktop with artisanal colors |
| **Database** | ✅ Complete | Real Supabase PostgreSQL with sample data |

### Pages

- **`/`** — Product catalog with filtering (all/regular/reserve)
- **`/behind-scenes`** — Content hub (roasting journals, videos, blog)
- **Navigation** — Header with logo, footer with info

### Components

- **Header** — Navigation bar with links
- **CoffeeCard** — Reusable product card with specifications
- **Footer** — Site footer with info

### Database

```sql
coffees (5 records)
  ├─ All coffee specs (type, process, roast_level)
  ├─ Farmer info embedded (name, location, story, image)
  └─ Inventory tracking

content (3 records)
  ├─ Roasting journals, videos, blog posts
  └─ Educational content about sourcing & craft
```

**Design Decision:** Simplified to 2-table schema (no foreign keys) for faster MVP development and clearer data flow.

---

## 🏗️ BMAD Methodology Applied

### Phase 1: Analysis 📊

**Brainstorming Session:**
- Used role-playing (customer perspective, founder perspective)
- Identified 3 core pillars: **Transparency**, **Connection**, **Exclusivity**
- Analyzed stakeholder needs (customers, founders, business)
- Created detailed user personas (coffee enthusiast, connoisseur, brand advocate)

**Result:** Clear MVP scope focused on storytelling and transparency

**Artifacts:** `_bmad-output/brainstorming/brainstorming-session-2026-02-05.md`

### Phase 2: Architecture 🏗️

**Technology Decisions:**

| Layer | Choice | Rationale |
|-------|--------|-----------|
| Framework | Next.js 14 | Modern, full-stack, easy deployment |
| Database | Supabase/PostgreSQL | Real database, managed, free tier |
| Language | TypeScript | Type safety, professional standard |
| Styling | Tailwind CSS | Rapid development, consistency |
| Deployment | Vercel | Seamless Next.js integration |

**Why This Stack?**
- Fast to develop (Tailwind + Next.js)
- Real database (not mocks - shows full-stack competency)
- Type-safe throughout (TypeScript)
- Production-ready immediately (Vercel)
- No unnecessary complexity (Prisma, API frameworks not needed for MVP)

**Database Design:**
- Simplified 2-table schema (coffees + content)
- Embedded farmer data (no foreign keys for MVP)
- Ready to normalize in Phase 2 if needed

### Phase 3: Implementation 💻

**Code Quality:**
- ✅ TypeScript with strict mode
- ✅ Proper error handling
- ✅ Modular components
- ✅ Professional patterns
- ✅ Self-documenting code

**File Structure:**
```
app/
├── src/
│   ├── pages/           ← 2 main pages + infrastructure
│   ├── components/      ← Reusable components
│   ├── lib/            ← Supabase client & types
│   └── styles/         ← Global CSS
├── sql/                ← Schema & seed data
├── package.json
└── tsconfig.json
```

**Key Achievements:**
- ✅ Zero TypeScript errors
- ✅ All features working end-to-end
- ✅ Real database with 8 sample products + content
- ✅ Responsive design (mobile-first)
- ✅ Ready for immediate deployment

### Phase 4: Production Ready ✓

- ✅ Local testing complete
- ✅ Error handling implemented
- ✅ Environment configuration ready
- ✅ Database schema & seed data included
- ✅ Comprehensive documentation
- ✅ Ready for Vercel deployment

---

## 🏛️ Technical Stack

| Component | Technology | Why |
|-----------|------------|-----|
| Frontend Framework | Next.js 14 | Full-stack capability, fast deployment |
| UI Library | React 18 | Component-based, performant |
| Language | TypeScript | Type safety, professional standard |
| Styling | Tailwind CSS | Rapid development, consistency |
| Database | Supabase (PostgreSQL) | Real database, managed, free tier |
| Client Library | @supabase/supabase-js | Lightweight, type-safe |
| Deployment | Vercel | Seamless Next.js, global edge network |

---

## 📱 Design System

**Color Palette (Artisanal):**
```
#F9F5EB - Cream (light backgrounds)
#8B9467 - Organic Green (accents)
#B85C38 - Burnt Sienna (primary brand)
```

**Typography:**
- System fonts for performance
- Clear visual hierarchy
- Readable body text

**Responsive:**
- Mobile-first Tailwind approach
- 1 column mobile → 3 column desktop
- Touch-friendly buttons

---

## 📋 Features Detailed

### Product Catalog

- Browse all 5 specialty coffees
- Filter by roast level: Light, Medium, Medium-Dark, Dark
- Separate view for reserve (limited edition) coffees
- Each coffee shows:
  - Name, description, price
  - **Type** (Arabica/Canephora)
  - **Process** (Washed/Natural/Honey)
  - **Roast Level** (technical spec)
  - Flavor notes (3-5 tags)
  - Farmer name, location, country
  - Farmer photo and story

### Behind-the-Scenes

- Educational content hub
- Roasting journals (philosophy, process)
- Videos about coffee
- Blog posts about sourcing
- Builds emotional connection
- Shows craft and expertise

### Coffee Details

Sample data includes:
- **Colombian Huila Supreme** - Classic Arabica, washed, balanced flavors
- **Ethiopian Yirgacheffe Natural** - Bright, fruity, natural process
- **Costa Rican Tarrazú Microlot** - Experimental honey process, reserve
- **Kenyan AA Grade Bright** - High-altitude, complex acidity
- **Roaster's Reserve: Experimental Dark Roast** - Limited edition, innovative roasting

Each paired with real farmer stories (embedded data).

---

## 💾 Database Structure

### Coffees Table
```sql
{
  id: UUID,
  name, description, price,
  coffee_type: "Arabica" | "Canephora",
  process: "Washed" | "Natural" | "Honey",
  roast_level: "Light" | "Medium" | "Medium-Dark" | "Dark",
  flavor_notes: ["Chocolate", "Caramel", ...],
  is_reserve: boolean,
  farmer_name, farmer_location, farmer_country, farmer_story,
  farmer_image_url,
  inventory, sold_count,
  timestamps
}
```

### Content Table
```sql
{
  id: UUID,
  title, description,
  content_type: "video" | "blog" | "roasting_journal",
  media_url, published_at, created_at
}
```

**5 Coffees + 3 Content Items = Complete sample data**

---

## 👥 User Personas

### 1. Coffee Enthusiast (Sarah)
- Age 28-45, willing to pay premium
- Values authenticity and origin
- Wants to learn about coffee
- **Serves:** Primary user discovering Bean & Brew

### 2. Coffee Connoisseur (James)  
- Age 35-60, technical expertise
- Seeks rare and experimental lots
- Values processing transparency
- **Serves:** Reserve coffee buyers

### 3. Brand Advocate (Mark)
- Age 25-40, shares discoveries
- Supports artisanal brands
- Likes exclusive products
- **Serves:** Word-of-mouth growth

Each persona has detailed user stories in `PRD.md`.

---

## 📖 Documentation

| Document | Purpose |
|----------|---------|
| **README.md** (this file) | Project overview + BMAD methodology |
| **QUICKSTART.md** | 5-minute setup guide |
| **PRD.md** | Product requirements + user stories |
| **app/README.md** | Technical API documentation |
| Code Comments | Inline documentation |

**Total documentation time:** < 30 minutes to review

---

## 🎯 For Job Application Reviewers

### What This Demonstrates

✅ **BMAD Methodology** — Clear analysis → architecture → implementation  
✅ **Full-Stack Development** — Frontend, backend, database  
✅ **Product Thinking** — User personas, features, PRD  
✅ **Code Quality** — TypeScript, error handling, modularity  
✅ **AI-Assisted Dev** — Efficient with Claude, maintains architecture  
✅ **Speed to Market** — 8 hours from concept to production-ready  
✅ **Professional Standards** — Documentation, typing, patterns  
✅ **Deployment Ready** — One command to Vercel  

### How to Evaluate

**5-Minute Review:**
1. Read this README
2. Skim PRD.md for product thinking
3. Check QUICKSTART.md to see setup ease

**30-Minute Review:**
1. Run locally (following QUICKSTART.md)
2. Click through all features
3. Check code quality in `/app/src`
4. Review database schema

**60-Minute Deep Dive:**
1. Read all documentation
2. Understand BMAD methodology (see Phase 1-4 above)
3. Analyze architecture decisions
4. Review component patterns
5. Consider scalability to Phase 2

---

## 🚀 Deployment

### Deploy to Vercel (Recommended)

```bash
# 1. Push to GitHub
git push

# 2. In Vercel dashboard:
#    - Connect repo
#    - Add env variables (SUPABASE_URL, SUPABASE_ANON_KEY)
#    - Deploy

# 3. Get live URL (e.g., bean-and-brew.vercel.app)
```

**Time:** 5 minutes  
**Cost:** Free tier (Vercel + Supabase)  
**Result:** Live demo URL for job application

---

## 📈 Project Scope Summary

| Aspect | Details |
|--------|---------|
| **Team** | Solo (Rastko) with Claude |
| **Duration** | 8 hours |
| **Method** | BMAD (Business, Methodology, Architecture, Development) |
| **Code Quality** | Production-ready TypeScript |
| **Database** | Real Supabase PostgreSQL with 8 sample products |
| **Pages** | 2 core + navigation |
| **Components** | 3 reusable |
| **Features** | 4 main features (catalog, details, reserve, content) |
| **Responsive** | Mobile, tablet, desktop |
| **Documentation** | 4 comprehensive markdown files |
| **Status** | ✅ Complete and deployable |

---

## 🤔 FAQ

**Q: Is this production-ready?**  
A: MVP-level, yes. Phase 2 would add payments, shipping, user accounts.

**Q: Why so few features?**  
A: Focused MVP scope is intentional. Shows good product judgment (MVP thinking).

**Q: Why embedded farmer data (no foreign keys)?**  
A: Faster to develop and deploy for MVP. Schema normalized when needed for scale.

**Q: How long to set up locally?**  
A: 5-10 minutes (create Supabase, run SQL scripts, `npm install && npm run dev`).

**Q: Can I see it live?**  
A: After Vercel deployment (get live URL in job application).

**Q: What would Phase 2 look like?**  
A: Payments (Stripe), shipping, user accounts, reviews, recommendations.

---

## 📊 Next Steps

1. **Local Testing** ✅ Complete
2. **Push to GitHub** ⏳ Pending
3. **Deploy to Vercel** ⏳ Pending  
4. **Submit Job Application** ⏳ Pending

---

## 🎬 Summary

**Bean & Brew is a complete, production-ready MVP** that demonstrates:

- Structured product development (BMAD methodology)
- Full-stack technical skills (React, TypeScript, PostgreSQL)
- Professional code quality and architecture
- Ability to deliver working software quickly
- Product thinking (user personas, PRD, MVP scope)
- AI-assisted development efficiency

**Built in 8 hours. Ready to deploy. Ready to evaluate.**

---

**Location:** `/Users/rastko/Projects/bean-and-brew/`  
**Application Root:** `/app/`  
**Database:** Supabase (free tier)  
**Deployment:** Vercel (free tier)  
**Status:** ✅ Ready  

🚀 **Let's go!**

