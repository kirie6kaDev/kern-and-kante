# Kern & Kante — Global Refactor v1

This is a clean UI-layer refactor of the uploaded project, not another override patch.

## Removed
- SceneFocus / custom wheel autoscroll
- ScrollAssist / immediate-scene-scroll logic
- sticky 100svh Scene wrapper for normal content sections
- duplicate global project/team CSS generations
- dead ProjectCard / Scene code

## Scroll strategy
- Native browser scrolling
- CSS Scroll Snap `y proximity`
- Motion only reads scroll progress for the Hero morph

## Components
- `Magnetic` progressive enhancement (fine pointer only + reduced-motion aware)
- `Reveal` for restrained section reveals

## Sections
- Hero: stable first project, scroll morph, project-aware overlays/themes, magnetic controls
- About: restored `craft.jpg` through centralized site data
- Services: editorial rows
- Selected Work: compact 3-card desktop carousel; native horizontal scroll + buttons; swipe mobile
- Process: editorial timeline
- Testimonials: calm cards
- Team: compact centered cards, never sticky/clipped
- Contact: reusable local-business/contact skeleton with explicitly fictional data
- Footer: CTA + utility navigation

## CSS architecture
- `tokens.css`
- `reset.css`
- `global.css`
- component/section-scoped CSS imports

## Universality
`src/data/site.ts` centralizes brand/about/business content so the same foundations can later be reused for a photographer, psychologist, or other local-service client without rewriting primitives.

## Important
This is still a fictional demo. Contact/location data are labeled as demo data and must be replaced before any real deployment.
