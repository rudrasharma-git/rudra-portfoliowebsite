# Rudra Sharma - Portfolio Website Guide

## 📋 Overview

This is a modern, professional portfolio website for Rudra Sharma - Robotics and AI Engineer. Built with React, TypeScript, and Tailwind CSS, featuring smooth animations, responsive design, and alternating section themes.

## 🎨 Design System

### Color Palette
- **Primary (Deep Navy)**: `hsl(220 60% 10%)` - Main dark sections
- **Secondary (Teal Accent)**: `hsl(190 100% 50%)` - Highlights and CTAs
- **Accent (Warm Orange)**: `hsl(15 100% 60%)` - Secondary highlights
- **Background**: `hsl(0 0% 98%)` - Light sections

### Typography
- **Primary Font**: Inter - Clean, professional sans-serif
- **Display Font**: Space Grotesk - Bold headings and emphasis

### Animations
- Fade-in effects for section entries
- Slide-in left/right for content
- Scale-in for cards and images
- Smooth transitions on all interactive elements

## 📁 Project Structure

```
src/
├── components/
│   ├── Navigation.tsx       # Fixed navbar with hamburger menu
│   ├── Hero.tsx            # Landing section with name and intro
│   ├── About.tsx           # Education and experience
│   ├── Projects.tsx        # Horizontal scrolling project cards
│   ├── Research.tsx        # Research publications carousel
│   ├── Skills.tsx          # Collapsible skill categories
│   ├── Connect.tsx         # Contact information
│   └── Footer.tsx          # Footer with copyright
├── pages/
│   ├── Index.tsx           # Main portfolio page
│   ├── ProjectDetail.tsx   # Individual project pages
│   ├── ResearchDetail.tsx  # Individual research pages
│   └── NotFound.tsx        # 404 page
├── index.css               # Design system tokens (HSL colors only)
└── App.tsx                 # Routing configuration
```

## 🖼️ Where to Add Your Images

### Hero Section Image
**File**: `src/components/Hero.tsx`  
**Line**: ~24

```tsx
<img
  src="/placeholder.svg"  // ← REPLACE THIS
  alt="Rudra Sharma"
  className="w-full h-full object-cover rounded-2xl shadow-lg"
/>
```

**How to add your image:**
1. Save your professional photo in `public/images/` folder (create if doesn't exist)
2. Name it something like `profile.jpg` or `hero-image.jpg`
3. Replace `/placeholder.svg` with `/images/profile.jpg`

### Project Images
**File**: `src/components/Projects.tsx`  
**Line**: ~10-100 (in the `projectsData` array)

```tsx
images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
```

Replace these placeholder paths with your actual project images:
```tsx
images: ["/images/llm-project-1.jpg", "/images/llm-project-2.jpg"],
```

### Research Images
**File**: `src/components/Research.tsx`  
**Line**: ~10-100 (in the `researchData` array)

Same process as project images.

## ✏️ Content to Customize

### 1. About Section
**File**: `src/components/About.tsx`

**Lines to edit:**
- Line ~20-23: Add your personal description
- Line ~32-50: Replace education placeholders with your college, school details
- Line ~65-85: Add your work experience

### 2. Projects Section
**File**: `src/components/Projects.tsx`

For each project, update:
- `title`: Project name
- `images`: Array of image paths
- `description`: Short description (2-3 sentences)
- `skills`: Array of technologies used

**Detailed Project Info:**
**File**: `src/pages/ProjectDetail.tsx`

Add comprehensive project details in the `fullDescription` field for each project.

### 3. Research Section
**File**: `src/components/Research.tsx`

Similar to projects - update title, images, description, status, and skills.

**File**: `src/pages/ResearchDetail.tsx`

Add full research paper details in `fullDescription`.

### 4. Skills Section
**File**: `src/components/Skills.tsx`

Edit the `skillsData` array (around line 12-60):
```tsx
{
  title: "Robotics",
  skills: ["ROS/ROS2", "Path Planning", ...], // Add your skills here
  color: "secondary",
}
```

### 5. Connect Section
**File**: `src/components/Connect.tsx`

**Lines to update:**
- Line ~21: Replace LinkedIn URL with your profile
- Line ~32: Replace GitHub URL with your profile

The phone and email are already set to your provided details.

## 🔧 Tech Stack

### Core Technologies
- **React 18.3.1** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework

### UI Components
- **shadcn/ui** - Pre-built accessible components
- **Radix UI** - Headless UI primitives
- **Lucide React** - Icon library

### Routing & State
- **React Router DOM** - Client-side routing
- **TanStack Query** - Data fetching (for future backend integration)

### Styling & Animations
- **tailwindcss-animate** - Animation utilities
- **class-variance-authority** - Component variants
- **clsx & tailwind-merge** - Class name utilities

## 📦 Installation & Setup

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Install Dependencies
```bash
npm install
```

### Run Development Server
```bash
npm run dev
```

The site will be available at `http://localhost:8080`

### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

## 🎯 Key Features

### 1. Responsive Navigation
- Desktop: Fixed navbar with section links
- Mobile: Full-screen hamburger menu with animated transitions
- Smooth scroll to sections

### 2. Alternating Section Themes
- Light background sections (Hero, Projects, Skills)
- Dark background sections (About, Research, Connect)
- Smooth color transitions

### 3. Project & Research Carousels
- Horizontal scrolling cards
- Image carousels within each card
- "Read More" links to detailed pages
- Navigation arrows and indicators

### 4. Collapsible Skills
- Click to expand skill categories
- Grid layout on desktop
- Vertical stack on mobile
- Color-coded by category

### 5. Accessibility
- Semantic HTML tags (`<header>`, `<main>`, `<section>`, `<footer>`)
- ARIA labels on interactive elements
- Keyboard navigation support
- High contrast color ratios

## 🔍 SEO Features

Already implemented:
- Proper meta tags (title, description, author, keywords)
- Open Graph tags for social sharing
- Twitter Card meta tags
- Semantic HTML structure
- Descriptive alt text placeholders for images

**Remember to:**
- Add descriptive alt text when you upload images
- Update meta description if needed in `index.html`

## 📝 Customization Checklist

- [ ] Add your profile image in Hero section
- [ ] Fill in "About Me" description
- [ ] Add your education details (college, schools)
- [ ] Add your work experience
- [ ] Upload and link all project images
- [ ] Write detailed project descriptions
- [ ] Upload and link research paper images
- [ ] Write full research descriptions
- [ ] Update skills in each category
- [ ] Add your LinkedIn URL
- [ ] Add your GitHub URL
- [ ] Test all "Read More" links
- [ ] Review all placeholder text marked with `[TODO:]`

## 🎨 Design Customization

### Change Colors
Edit `src/index.css` lines 10-50:
```css
--primary: 220 60% 10%;      /* Deep navy */
--secondary: 190 100% 50%;   /* Teal */
--accent: 15 100% 60%;       /* Orange */
```

**IMPORTANT**: All colors must be in HSL format!

### Change Fonts
Already configured in `index.html` (Google Fonts) and `tailwind.config.ts`.

To use different fonts:
1. Update Google Fonts link in `index.html`
2. Update font family in `tailwind.config.ts` lines 16-19

### Modify Animations
Edit animation timing in `tailwind.config.ts` lines 128-135.

## 🚀 Deployment

Your site can be deployed via:
1. Click "Publish" in Lovable interface (easiest)
2. Deploy to Vercel, Netlify, or any static hosting
3. Use GitHub Pages

## 📧 Support

For questions about customizing this portfolio:
- Check the code comments marked with `TODO`
- All customizable content is clearly marked
- Each section component is self-contained and easy to edit

## 🎉 Final Notes

This portfolio is designed to be:
- **Professional**: Clean, modern design suitable for engineering roles
- **Flexible**: Easy to customize content without touching complex code
- **Performant**: Optimized animations and lazy-loaded images
- **Accessible**: Follows WCAG guidelines for accessibility

Good luck with your job search, Rudra! 🚀
