# Honeydew — Austin Make-Ready Partner

A premium marketing website for Honeydew, an Austin-based make-ready contractor serving real estate professionals.

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: CSS Modules with custom design tokens
- **Typography**: Telegraf Regular
- **Images**: Next/Image with local assets

## How to Run Locally

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

The site runs at `http://localhost:3000`

## Project Structure

```
src/
├── app/
│   ├── globals.css      # Design system & global styles
│   ├── layout.tsx       # Root layout with Navbar/Footer
│   └── page.tsx         # Homepage sections
├── components/
│   ├── HeroSlideshow/   # Hero with image slideshow
│   ├── Intro/           # Centered intro paragraph
│   ├── Services/        # Services grid
│   ├── Process/         # 3-step process
│   ├── ImageBand/       # Full-bleed gallery image
│   ├── Validation/      # Trust signals
│   ├── Contact/         # Contact form
│   ├── Navbar/          # Fixed navigation
│   └── Footer/          # Site footer
└── config/
    └── site.ts          # Site configuration & content
```

## How to Add Slideshow Images

1. Add images to `/public/assets/slideshow/`
2. Update the `heroSlides` array in `src/config/site.ts`:

```typescript
heroSlides: [
  {
    src: "/assets/slideshow/your-image.jpg",
    alt: "Description of the image",
    fit: "cover",
    position: "center", // or "center top", "center bottom", etc.
  },
  // ... more slides
],
```

**Image Guidelines:**
- Use JPG for photos, PNG for graphics
- Optimize images for web (aim for under 500KB per image)
- Images should be at least 1920px wide for best quality
- Both horizontal (16:9) and vertical (9:16) images are supported

## Design Tokens

The design system uses CSS custom properties defined in `globals.css`:

- **Colors**: Warm off-white background, near-black text, muted gold accent
- **Typography**: Telegraf Regular with size-based hierarchy
- **Spacing**: 4px base scale (xs, sm, md, lg, xl, 2xl, 3xl, 4xl)
- **Breakpoints**: 768px (tablet), 1024px (desktop), 1440px (large desktop)

## Accessibility

- WCAG 2.1 AA compliant color contrast
- Keyboard navigation support
- Focus states for interactive elements
- Reduced motion support for animations
- Semantic HTML structure
