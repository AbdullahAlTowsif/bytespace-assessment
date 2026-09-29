# ByteSpace – Landing Page

Landing page for the ByteSpace online-course platform, built from the provided Figma design.

**Live:** https://bytespace-assessment.vercel.app/

## Tech stack
- Next.js (App Router) + TypeScript
- Tailwind CSS
- lucide-react (icons)

## Getting started
```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build
```

## Project structure
```
src/
  app/                 layout, page, global styles / theme tokens
  components/
    layout/            Navbar, Footer
    sections/          Hero, LogoStrip, DiscoverCourses, LearningPaths,
                       ProfessionalGrowth, CreateCourses, CreatorCTA, Testimonials
    ui/                Button, Container, CourseCard, AvatarStack, ProgressCard, ...
  data/                courses and testimonials data
public/images/         exported design assets
```

## Notes
- Sections are composed from small reusable UI components; content lives in `src/data`.
- Fully responsive (mobile, tablet, desktop).
- Login and Signup pages were not part of this submission.
