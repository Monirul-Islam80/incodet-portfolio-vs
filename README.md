# Incodet Portfolio Website

A modern, dark-themed SaaS agency portfolio website for **Incodet**, inspired by the [Conicorn template](https://conicorn.webflow.io/). Built with Next.js, TypeScript, Tailwind CSS, GSAP, and Framer Motion.

## Features

- Dark-first premium design with gradient accents
- Video background hero section
- Numbered eyebrow sections (001-010) following Conicorn style
- Infinite scrolling logo/tech marquee
- Glass morphism cards and blur effects
- Smooth scroll animations
- Fully responsive design
- Working contact form with SMTP email delivery

---

## Sections

| # | Section | Description |
|---|---------|-------------|
| - | Navbar | Sticky navbar with blur effect |
| - | Preloader | Logo animation on page load |
| - | Hero | Video background with gradient overlays, animated headline |
| - | Logo Marquee | Infinite scrolling technology stack logos |
| 001 | About | Company intro with stats and video |
| 002 | Values | 3 core value cards with icons |
| 003 | Services | Service offerings grid with images |
| 004 | Process | 4-step development timeline |
| 005 | Projects | Real GitHub projects (Animal Rescue, PawSwipes, Cholo-Jai) |
| 006 | Integrations | Tech stack grid by category |
| 007 | Testimonials | Client testimonial cards |
| 008 | Pricing | MVP package with "Let's Talk" CTA |
| 009 | Team | 4 team member cards (placeholder) |
| 010 | FAQ | Accordion-style FAQ |
| - | Contact | Glass card contact form |
| - | Footer | Links and social icons |

---

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Animations:** GSAP + ScrollTrigger, Framer Motion
- **Icons:** Lucide React
- **Email:** Nodemailer (SMTP)

---

## Project Structure

```text
incodet-portfolio/
├── src/
│   ├── app/
│   │   ├── api/contact/route.ts
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components/
│   │   ├── navbar.tsx
│   │   ├── preloader.tsx
│   │   ├── footer.tsx
│   │   ├── sections/
│   │   │   ├── hero-section.tsx
│   │   │   ├── logo-marquee.tsx
│   │   │   ├── about-section.tsx
│   │   │   ├── values-section.tsx
│   │   │   ├── services-section.tsx
│   │   │   ├── process-section.tsx
│   │   │   ├── projects-section.tsx
│   │   │   ├── integrations-section.tsx
│   │   │   ├── testimonials-section.tsx
│   │   │   ├── pricing-section.tsx
│   │   │   ├── team-section.tsx
│   │   │   ├── faq-section.tsx
│   │   │   └── contact-section.tsx
│   │   └── ui/
│   │       └── button.tsx
│   └── lib/utils.ts
├── .env.example
└── README.md
```

---

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Configure environment variables

Copy the env template:

```bash
cp .env.example .env.local
```

Fill in your SMTP credentials in `.env.local`:

```env
SMTP_HOST=smtp.your-provider.com
SMTP_PORT=587
SMTP_USER=your_smtp_username
SMTP_PASS=your_smtp_password
CONTACT_FROM_EMAIL=hello@yourdomain.com
CONTACT_TO_EMAIL=inbox@yourdomain.com
```

### 3. Run development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |

---

## Contact API

**Endpoint:** `POST /api/contact`

**Request body:**

```json
{
  "name": "John Doe",
  "email": "john@company.com",
  "company": "Company Inc",
  "goals": "We need an MVP for our SaaS analytics platform."
}
```

**Behavior:**
- Validates all fields
- Sends email via SMTP using Nodemailer
- Returns success/error JSON response

---

## Customization

### Update Team Members
Edit the `team` array in `src/components/sections/team-section.tsx`

### Update Projects
Edit the `projects` array in `src/components/sections/projects-section.tsx`

### Update Pricing
Edit the pricing content in `src/components/sections/pricing-section.tsx`

### Update Contact Email
Modify `CONTACT_TO_EMAIL` in your `.env.local` file

---

## Deployment

When deploying to Vercel or other platforms:

1. Add environment variables from `.env.local` to your hosting provider
2. Run pre-deploy checks:

```bash
npm run lint
npm run build
```

---

## Design Credits

Design inspired by [Conicorn Webflow Template](https://conicorn.webflow.io/)

---

## License

Private project for Incodet.
