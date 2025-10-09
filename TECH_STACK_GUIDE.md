# Portfolio Tech Stack & Setup Guide

## Tech Stack Overview

### Core Technologies
- **React 18.3.1** - Frontend framework
- **TypeScript** - Type-safe JavaScript
- **Vite** - Build tool and dev server
- **React Router DOM 6.30.1** - Client-side routing
- **Tailwind CSS** - Utility-first CSS framework

### UI Component Libraries
- **shadcn/ui** - Customizable UI components built on Radix UI
- **Radix UI** - Unstyled, accessible UI primitives
- **Lucide React** - Icon library
- **Sonner** - Toast notifications

### Styling
- **Tailwind CSS 3.x** - Utility classes
- **tailwindcss-animate** - Animation utilities
- **class-variance-authority** - Component variants
- **tailwind-merge & clsx** - Conditional classes

### Form & Validation
- **React Hook Form 7.61.1** - Form state management
- **Zod 3.25.76** - Schema validation
- **@hookform/resolvers** - Form validation integration

### Fonts
- **Google Fonts: Saira** - Primary font family

---

## Installation Instructions

### Prerequisites
Make sure you have Node.js and npm installed on your system.

### Setup Steps

1. **Clone or navigate to your project directory**
```bash
cd your-portfolio-directory
```

2. **Install all dependencies**
```bash
npm install
```

This will install all the packages listed in `package.json`.

3. **Run the development server**
```bash
npm run dev
```

The app will be available at `http://localhost:5173` (or another port if 5173 is busy).

4. **Build for production**
```bash
npm run build
```

5. **Preview production build**
```bash
npm run preview
```

---

## How to Add Images

### Method 1: Using placeholder.svg (Current Setup)

Right now, all images use `/placeholder.svg`. To replace them:

1. **Prepare your images**
   - Save your images in the `public/images/` folder
   - Create subfolders for organization: `public/images/projects/`, `public/images/research/`, `public/images/hero/`

2. **Update image paths in data files**

For **Projects**, edit `src/data/projectsData.ts`:
```typescript
{
  id: 1,
  title: \"Building an LLM from Scratch\",
  images: [
    \"/images/projects/llm-1.jpg\",
    \"/images/projects/llm-2.jpg\",
    \"/images/projects/llm-3.jpg\"
  ],
  // ... rest of the data
}
```

For **Research**, edit `src/data/researchData.ts`:
```typescript
{
  id: 1,
  title: \"Dynamic Analysis...\",
  images: [
    \"/images/research/mis-robot-1.jpg\",
    \"/images/research/mis-robot-2.jpg\"
  ],
  // ... rest of the data
}
```

For **Hero Image**, edit `src/components/Hero.tsx`:
```tsx
<img
  src=\"/images/hero/rudra-sharma.jpg\"  // Update this line
  alt=\"Rudra Sharma\"
  className=\"w-full h-full object-cover rounded-2xl shadow-lg\"
/>
```

### Method 2: Using src/assets (Alternative)

If you prefer to import images as modules:

1. **Add images to** `src/assets/images/`
2. **Import in the component**:
```tsx
import heroImage from '@/assets/images/hero.jpg';
// Then use: <img src={heroImage} alt=\"...\" />
```

### Recommended Image Sizes

- **Hero Image**: 800x800px minimum (square)
- **Project/Research Images**: 1200x675px (16:9 aspect ratio)
- **Thumbnails**: 600x400px

### Supported Formats
- JPG/JPEG (recommended for photos)
- PNG (recommended for graphics with transparency)
- WebP (best compression, modern browsers)
- SVG (for logos and icons)

---

## VS Code Extensions (Recommended)

### Essential Extensions

1. **ES7+ React/Redux/React-Native snippets**
   - Install: Search \"ES7+ React\" in VS Code Extensions
   - Provides React code snippets

2. **Tailwind CSS IntelliSense**
   - Install: Search \"Tailwind CSS IntelliSense\"
   - Autocomplete for Tailwind classes

3. **TypeScript and JavaScript Language Features** (Built-in)
   - Should be enabled by default

4. **ESLint**
   - Install: Search \"ESLint\"
   - Linting for JavaScript/TypeScript

5. **Prettier - Code formatter**
   - Install: Search \"Prettier\"
   - Code formatting

### Nice-to-Have Extensions

6. **Auto Rename Tag**
   - Automatically rename paired HTML/JSX tags

7. **Path Intellisense**
   - Autocomplete for file paths

8. **GitLens** (if using Git)
   - Enhanced Git integration

### How to Install Extensions in VS Code

1. Open VS Code
2. Click the Extensions icon in the sidebar (or press `Ctrl+Shift+X` / `Cmd+Shift+X`)
3. Search for the extension name
4. Click \"Install\"

---

## Project Structure

```
portfolio/
├── public/
│   ├── images/           # Add your images here
│   ├── placeholder.svg
│   └── robots.txt
├── src/
│   ├── assets/           # Alternative location for images
│   ├── components/       # React components
│   │   ├── About.tsx
│   │   ├── Connect.tsx
│   │   ├── Footer.tsx
│   │   ├── Hero.tsx
│   │   ├── Navigation.tsx
│   │   ├── Projects.tsx
│   │   ├── Research.tsx
│   │   ├── Skills.tsx
│   │   └── ui/           # shadcn UI components
│   ├── data/             # Data files
│   │   ├── projectsData.ts
│   │   └── researchData.ts
│   ├── pages/            # Route pages
│   │   ├── Index.tsx
│   │   ├── ProjectDetail.tsx
│   │   └── ResearchDetail.tsx
│   ├── hooks/            # Custom React hooks
│   ├── lib/              # Utility functions
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── index.html
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── vite.config.ts
```

---

## Customization Quick Reference

### Updating Personal Information

1. **Hero Section**: Edit `src/components/Hero.tsx`
2. **About Section**: Edit `src/components/About.tsx`
3. **Footer**: Edit `src/components/Footer.tsx`
4. **Connect Section**: Edit `src/components/Connect.tsx`
5. **Skills**: Edit `src/components/Skills.tsx`

### Updating Projects & Research

1. **Projects**: Edit `src/data/projectsData.ts`
2. **Research**: Edit `src/data/researchData.ts`

### Changing Colors

Edit `src/index.css` to modify the color scheme:
```css
:root {
  --background: ...;
  --foreground: ...;
  --primary: ...;
  /* etc */
}
```

### Adding New Fonts

1. Add font link to `index.html`:
```html
<link href=\"https://fonts.googleapis.com/css2?family=YourFont:wght@400;700&display=swap\" rel=\"stylesheet\">
```

2. Update `tailwind.config.ts`:
```typescript
fontFamily: {
  sans: ['YourFont', 'sans-serif'],
}
```

---

## Troubleshooting

### Common Issues

**Issue**: `npm install` fails
- **Solution**: Delete `node_modules` and `package-lock.json`, then run `npm install` again

**Issue**: Images not showing
- **Solution**: Make sure images are in the `public/` folder and paths start with `/`

**Issue**: Hot reload not working
- **Solution**: Restart the dev server with `npm run dev`

**Issue**: TypeScript errors
- **Solution**: Check your type definitions and ensure all imports are correct

---

## Deployment

### Build for Production
```bash
npm run build
```

The built files will be in the `dist/` folder, ready to deploy to:
- Vercel
- Netlify
- GitHub Pages
- Any static hosting service

---

## Additional Resources

- [React Documentation](https://react.dev/)
- [TypeScript Docs](https://www.typescriptlang.org/docs/)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [shadcn/ui Components](https://ui.shadcn.com/)
- [Vite Guide](https://vitejs.dev/guide/)

---

## Support

If you encounter any issues or need help:
1. Check the console for errors (`F12` in browser)
2. Review the TypeScript/ESLint errors in VS Code
3. Consult the documentation links above
4. Search for solutions on Stack Overflow

---

**Good luck with your portfolio!** 🚀
