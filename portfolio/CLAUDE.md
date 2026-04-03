# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Quick Start Commands

```bash
# Development server (runs with Turbopack for fast HMR)
pnpm dev

# Production build
pnpm build

# Start production server
pnpm start

# Lint code (ESLint + TypeScript)
pnpm lint

# Auto-fix linting issues
pnpm lint:fix

# Format code with Prettier
pnpm format

# Check formatting without modifying
pnpm format:check
```

## Project Architecture

This is a **Next.js 16 portfolio and blog** built with the App Router. Key characteristics:

### Tech Stack
- **Framework**: Next.js 16.2.1 with Turbopack (dev mode)
- **Styling**: Tailwind CSS 4.2.2 with custom theme variables
- **Content**: Velite (MDX-based static site generation for blog posts)
- **Components**: Custom component library (Radix UI primitives + CVA for variants)
- **Forms**: React Hook Form + Zod validation
- **Icons**: Lucide React + Tabler Icons
- **Analytics**: Vercel Analytics + Speed Insights (lazy-loaded)
- **Fonts**: Google Fonts (Raleway) with font-display: swap

### Directory Structure

```
portfolio/
├── app/                      # Next.js App Router
│   ├── (home)/              # Home page route group
│   │   ├── page.tsx         # Home page
│   │   └── _components/     # Home-specific components (Hero, Features, etc.)
│   ├── blog/                # Blog routes
│   │   ├── page.tsx         # Blog listing page
│   │   └── [...slug]/       # Dynamic blog post pages
│   ├── contatti/            # Contact page
│   │   ├── _actions/        # Server actions for form submission
│   │   └── _components/     # Form components
│   ├── layout.tsx           # Root layout (metadata, fonts, providers)
│   ├── globals.css          # Tailwind @import + CSS theme variables
│   ├── manifest.json        # PWA manifest
│   ├── robots.txt           # SEO robots file
│   ├── sitemap.ts           # Dynamic sitemap
│   └── vercel-providers.tsx # Analytics providers (lazy-loaded)
│
├── components/              # Shared components
│   ├── ui/                  # Primitive UI components (Button, Input, etc.)
│   │   └── *-client.tsx     # Client-side interactive components
│   ├── layout/              # Navigation and Footer
│   └── *.tsx                # Feature components (FAQs, ArticleCard, etc.)
│
├── lib/                     # Utilities and constants
│   ├── constants.tsx        # Static data (NAVBAR_ITEMS, FEATURES_ITEMS, etc.)
│   ├── schemas.ts           # Zod schemas for form validation
│   └── utils.ts             # Helpers (cn(), formatDate(), sortBlogPosts())
│
├── content/                 # Velite source
│   └── blog/                # MDX blog posts
│
├── public/                  # Static assets served at root
│   └── assets/              # Organized by feature (hero, features, etc.)
│
├── next.config.ts           # Next.js configuration
├── velite.config.ts         # Velite MDX configuration
├── tsconfig.json            # TypeScript config (paths: @/*, #site/content)
└── tailwind.config.ts       # (Not found - uses CSS @theme inline in globals.css)
```

### Path Aliases
- `@/*` → project root (import from `@/components`, `@/lib`, etc.)
- `#site/content` → `.velite` directory (generated Velite content)

## Key Architectural Patterns

### 1. **Content Management with Velite + MDX**
Blog posts are in `content/blog/*.mdx` and automatically processed by Velite into `.velite/` (gitignored). Each post requires:
```yaml
slug: /blog/post-title
title: Post Title
description: Short description
date: 2024-01-15
published: true
timing: 5  # estimated reading time
image: /path/to/image
alt: Image description
```

Dynamic route handler: `app/blog/[...slug]/page.tsx` renders posts from the generated collection.

### 2. **Component Library Pattern**
All UI components use **CVA (Class Variance Authority)** for variant-based styling:
- Base styles + variant states defined declaratively
- Example: `buttonVariants` with `primary|secondary|ghost|overlay` variants and `base|sm|none` sizes
- Use `cn()` utility (clsx + tailwind-merge) to safely merge Tailwind classes

### 3. **Form Validation with Zod**
Contact form uses React Hook Form + Zod schema validation:
- Schema defined in `lib/schemas.ts` (contactFormSchema)
- Server actions in `app/contatti/_actions/` handle form submission
- reCAPTCHA v3 integration for spam protection

### 4. **Responsive Design Breakpoints**
Defined in CSS theme variables (globals.css):
- `small-smartphone: 480px`, `large-smartphone: 640px`, `tablet: 768px`
- `small-laptop: 1024px`, `desktop: 1280px`, `large-monitor: 1536px`
- Use custom breakpoints in Tailwind: `tablet:`, `desktop:`, etc.

### 5. **Lazy-Loaded Providers**
Analytics (Vercel Speed Insights + Analytics) and dynamic Navbar are lazy-loaded via `next/dynamic` with `ssr: false` to avoid blocking renders.

### 6. **Image Optimization**
- Use `next/image` with `sizes` prop for responsive images
- Set `priority={true}` only for LCP candidates (Hero, above-fold)
- Use `loading='lazy'` for below-fold images
- Preload critical images via `<link rel="preload">` in Head

## Common Development Tasks

### Add a New Blog Post
1. Create `content/blog/my-post.mdx` with required frontmatter
2. Set `published: true` to make it visible
3. Run `pnpm dev` (Velite watches for changes)
4. Post appears in `/blog` listing and at `/blog/my-post`

### Add a New Component
1. Create in `components/ui/` if reusable, or feature folder if specific
2. Use CVA for variants if component has multiple states
3. Export from `components/index.ts` (if creating barrel exports)
4. Use `cn()` for conditional class merging

### Modify Tailwind Theme
Edit `app/globals.css` `@theme inline` block:
- Colors: `--color-primary`, `--color-secondary`, etc.
- Breakpoints: `--breakpoint-tablet`, `--breakpoint-desktop`, etc.
- Rounded: `--radius-sm`, `--radius-md`, `--radius-lg`, `--radius-xl`

## Important Notes

### Styling Philosophy
- **Tailwind CSS 4.2.2**: All CSS is utility-first in globals.css with `@import 'tailwindcss'`
- **No separate component files**: No separate `.module.css` or styled-components
- **Color tokens**: Custom palette (primary purple #703f85, secondary red, etc.) defined in CSS theme

### Performance Considerations
- **Turbopack** is enabled in dev for fast refresh
- **productionBrowserSourceMaps: false** in next.config.ts (no sourcemaps in production)
- **Dynamic imports** for Navbar and heavy components to reduce initial bundle
- **Image preload** for LCP in Hero section

### Git Workflow
- Main branch: `main` (production)
- Feature branch: `preview` (staging)
- Commits include optimization work (see recent: "images refactoring", "optimization test")

### Content Integrity
- Blog posts: All metadata in MDX frontmatter
- Constants: Centralized in `lib/constants.tsx` (navbar items, feature cards, technologies, etc.)
- Schemas: Form validation in `lib/schemas.ts` (contactFormSchema with reCAPTCHA)

## Default Behaviors
- Prettier configured with Tailwind plugin (sorts class names)
- ESLint extends Next.js and TypeScript presets
- No pre-commit hooks configured (add via package.json `"prepare": "husky install"` if needed)
- Markdown posts support JSX and mdx components (see `components/mdx-components.tsx`)
