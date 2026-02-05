# 🚀 Bean & Brew MVP - Quick Start Guide

## 5-Minute Setup Instructions

### Step 1: Supabase Project Setup (2 minutes)

1. Go to https://supabase.com and sign up (free)
2. Create new project called "bean-and-brew"
3. Copy your **Project URL** and **Anon Key** from Settings → API

### Step 2: Database Setup (2 minutes)

1. In Supabase dashboard, go to **SQL Editor**
2. Create new query
3. Copy-paste entire contents of `/app/sql/schema.sql`
4. Click "Run" and wait for completion
5. Repeat with `/app/sql/seed.sql` to add sample data

### Step 3: Environment Variables (1 minute)

1. In `/app/` folder, copy `.env.example` to `.env.local`
2. Add your Supabase credentials:
    ```
    NEXT_PUBLIC_SUPABASE_URL=your_project_url
    NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
    ```

### Step 4: Run Locally (1 minute)

```bash
cd app
npm install
npm run dev
```

Visit: `http://localhost:3000`

---

## What You'll See

✅ **Product Catalog** - Browse 5 specialty coffees
✅ **Farmer Profiles** - Meet 4 partner farmers
✅ **Community Reviews** - See customer feedback
✅ **Behind-the-Scenes** - Content hub
✅ **Reserve Drops** - Limited-edition coffees

---

## Deploy to Vercel (3 minutes)

1. Push to GitHub
2. Go to https://vercel.com and connect repo
3. Add environment variables in Vercel dashboard
4. Click "Deploy"

Your MVP is live! 🎉

---

## Troubleshooting

**Issue:** "Cannot connect to database"

- Check `.env.local` has correct Supabase URL/key
- Verify SQL setup completed in Supabase dashboard

**Issue:** "No coffees showing"

- Make sure `seed.sql` was executed (not just schema)
- Check Supabase dashboard → Data → coffees table has data

**Issue:** Port 3000 already in use

```bash
npm run dev -- -p 3001
```

---

## File Structure

```
/app
├── src/pages/          ← Main pages
│   ├── index.tsx       (Product catalog)
│   ├── farmers.tsx     (Farmer transparency)
│   ├── community.tsx   (Reviews & tasting notes)
│   └── behind-scenes.tsx (Content)
├── src/components/     ← Reusable components
├── src/lib/           ← Supabase client config
├── sql/              ← Database setup
├── package.json      ← Dependencies
└── README.md         ← Full documentation
```

---

## Key Features Demo

### 1. Browse Coffees

- Homepage shows all products
- Filter by "Regular" or "Reserve" status
- Click each to see full details

### 2. Meet Farmers

- `/farmers` page
- Real farmer stories and transparency
- Shows Bean & Brew's commitment

### 3. Community

- `/community` page
- See reviews and tasting notes
- Social proof for products

### 4. Behind-the-Scenes

- `/behind-scenes` page
- Roasting journal, videos, content
- Emotional connection to craft

---

## Database at a Glance

```
farmers (4)
  → name, location, country, story

coffees (5)
  → name, price, story, flavor notes
  → linked to farmers
  → reserve status

reviews (8)
  → customer ratings and comments

tasting_notes (5)
  → detailed flavor descriptions

content (3)
  → roasting journals, videos, blogs
```

---

## Next: Show This to Evaluators

1. Run locally: `npm run dev`
2. Walk through all 4 pages
3. Show Supabase database
4. Explain BMAD methodology (see BMAD_APPLICATION.md)
5. Highlight code quality (TypeScript, components, error handling)
6. Deploy to Vercel for live demo

---

**Questions?** Check the full README.md for detailed documentation.

**Ready to review?** All code is in `/app` directory - clean, typed, production-ready! ✨
