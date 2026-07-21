# DOs and DON'Ts — Universal Project Checklist

> Har project ke root mein copy karo aur relevant sections follow karo.
> **Sab examples generic hain** — kisi specific project ke terms use nahi hue.

---

## 1. SEO

| #   | DO                                                                                                                | DON'T                                                              |
| --- | ----------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ |
| 1   | Root layout / `_app` / `_document` mein **Google Site Verification** meta tag daalo                               | Har page mein alag se mat daalo — ek hi jagah kaafi hai            |
| 2   | **Google Analytics (gtag)** root layout mein daalo + ek client component har route change par pageview track kare | Sirf gtag script daal ke mat chhodo — SPA navigation miss hota hai |
| 3   | Har page ka **unique title** + **meta description** do                                                            | Sab pages par same title/description mat rakho                     |
| 4   | **Canonical URL** har page par set karo                                                                           | Duplicate content mat chhodo — canonical zaroori hai               |
| 5   | **Open Graph** (`og:title`, `og:description`, `og:image`) + **Twitter Cards** daalo                               | Social share pe broken preview mat chhodo                          |
| 6   | **Structured data** (JSON-LD) daalo — `Product`, `BreadcrumbList`, `Organization`, `LocalBusiness`                | Structured data ke bina Google rich results nahi dikhayega         |
| 7   | `robots.txt` + `sitemap.xml` daalo                                                                                | Sitemap ke bina pages index time more hota hai                     |
| 8   | **Semantic HTML** use karo — `<header>`, `<main>`, `<nav>`, `<section>`, `<article>`, `<footer>`                  | Pure `<div>` se page mat banao                                     |
| 9   | Images ke liye hamesha `alt` text do                                                                              | Accessible aur SEO dono ke liye `alt` zaroori hai                  |
| 10  | **Heading hierarchy** sahi rakho — single `<h1>`, phir `<h2>`, `<h3>`                                             | Multiple `<h1>` ya skip headings mat karo                          |

---

## 2. Performance

| #   | DO                                                                                                 | DON'T                                                                         |
| --- | -------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| 1   | Heavy components ko **dynamic import** karo                                                        | Sab kuch eagerly import mat karo — bundle size bht hota hai                   |
| 2   | **Loading skeletons** daalo har route / page ke liye                                               | Bina loading state ke user ko blank screen mat dikhao                         |
| 3   | Animations ke liye content pehle dikhao, baad me animate karo — `initial={false}` in framer-motion | Entrance animation ka wait mat karwao — user pehle content dekhe              |
| 4   | Images ko modern format me convert karo (WebP / AVIF), framework ka image component use karo       | RAW PNGs / JPEGs seedha serve mat karo                                        |
| 5   | Font subsetting karo, `display: swap` use karo                                                     | Pura font family load mat karo — sirf needed glyphs rakho                     |
| 6   | **Bundle analyzer** chalao kabhi kabhi — large dependencies check karo                             | Heavy library sirf ek feature ke liye mat daalo                               |
| 7   | Data fetching server-side karo, client-side nahi                                                   | Client-side waterfall API calls mat banao                                     |
| 8   | Debounce / throttle karo search, resize, scroll events                                             | Har keystroke / scroll par API mat chhodo                                     |
| 9   | CSS animations prefer karo JS animations par (`transform`, `opacity`)                              | `width`, `height`, `top`, `left` animate mat karo — layout thrashing hota hai |
| 10  | **Tree-shakeable** imports use karo — sirf needed components import karo                           | Pura library import mat karo                                                  |

---

## 3. Code Quality & Architecture

| #   | DO                                                                                                 | DON'T                                                     |
| --- | -------------------------------------------------------------------------------------------------- | --------------------------------------------------------- |
| 1   | Types / Interfaces banake rakho — har entity ka ek type ho                                         | `any` type use mat karo — type safety foreach             |
| 2   | Type guards / type narrowing use karo                                                              | Runtime par type check ke liye raw operators mat use karo |
| 3   | **Server & Client** components ka separation rakho — server me data fetch, client me interactivity | Server component me `useEffect`, `useState` mat daalo     |
| 4   | **Environment variables** `.env.local` me rakho, `.env.example` banao                              | Secrets ko code me hardcode mat karo                      |
| 5   | Git hooks (husky + lint-staged) daalo — auto format + lint on commit                               | Dirty code push mat karo                                  |
| 6   | Error boundaries daalo                                                                             | Unhandled errors se blank page / crash mat aane do        |
| 7   | `console.log` production build me remove karo                                                      | Debug logs production me mat chhodo                       |
| 8   | Components ko **feature / domain based** folders me rakho                                          | Saare components ek flat folder me mat daalo              |
| 9   | Constants ko central file me rakho                                                                 | Hardcoded strings har jagah mat chhido                    |
| 10  | DRY principle follow karo — duplicate code avoid karo                                              | Copy-paste karke components mat banao                     |

---

## 4. Framework Best Practices

| #   | DO                                                                           | DON'T                                                              |
| --- | ---------------------------------------------------------------------------- | ------------------------------------------------------------------ |
| 1   | `"use client"` sirf tab lagao jab browser APIs / hooks chahiye               | Har component ko client component mat banao                        |
| 2   | **Server-side rendering** ka full advantage lo                               | Client-side rendering sirf tab karo jab truly needed ho            |
| 3   | Dynamic metadata / SEO framework API se generate karo                        | `useEffect` me `document.title` set mat karo                       |
| 4   | Framework ka built-in Link component use karo navigation ke liye             | Raw `<a>` ya `window.location` mat use karo internal links ke liye |
| 5   | Framework ka optimized image component use karo                              | Raw `<img>` seedha use mat karo                                    |
| 6   | Framework ka font optimization use karo                                      | External fonts ko manually link karke mat daalo                    |
| 7   | `useMemo` / `useCallback` sirf tab lagao jab profiled performance issue ho   | Har function ko memoize mat karo — unnecessary complexity          |
| 8   | **Props drilling** se bacho — Context / Provider / State management use karo | 5+ level deep props pass mat karo                                  |
| 9   | `Suspense` boundary daalo jahan dynamic hooks use ho                         | Static generation break mat karo                                   |
| 10  | Route groups / layouts use karo for proper page structure                    | Ek hi layout sab pages ke liye mat lagao                           |

---

## 5. CSS / Styling

| #   | DO                                                              | DON'T                                                        |
| --- | --------------------------------------------------------------- | ------------------------------------------------------------ |
| 1   | Utility classes prefer karo custom CSS par                      | Har component ke liye alag `.css` file mat banao             |
| 2   | CSS variables use karo theming ke liye — colors, spacing, fonts | Hardcoded values har jagah mat chhido                        |
| 3   | `gap`, `flex`, `grid` use karo layout ke liye                   | Margin / padding se layouts manually adjust mat karo         |
| 4   | Responsive design — mobile-first approach                       | Desktop pehle banao, phir mobile adjust mat karo             |
| 5   | `@media (prefers-reduced-motion)` ka respect karo               | Sab users ko animations force mat karo                       |
| 6   | Z-index values ko consistent rakho (themes / constants me)      | Random `z-index: 999999` har jagah mat daalo                 |
| 7   | Dark mode support daalo                                         | Light mode only mat rakho — dark mode aaj kal expected hai   |
| 8   | `:focus-visible` styles daalo keyboard navigation ke liye       | Sirf `:focus` mat lagao — unnecessary outlines sabko dikhega |

---

## 6. Accessibility (a11y)

| #   | DO                                                             | DON'T                                                           |
| --- | -------------------------------------------------------------- | --------------------------------------------------------------- |
| 1   | **Keyboard navigation** test karo — Tab, Enter, Escape         | Mouse ke bina site usable nahi hai to mat publish karo          |
| 2   | **ARIA labels** daalo jahan semantic HTML kaafi nahi           | Over-ARIA mat karo — `role="button"` on `<button>` is redundant |
| 3   | Color contrast maintain karo — text/bg me at least 4.5:1 ratio | Light grey text on white background mat daalo                   |
| 4   | Form inputs ke saath `<label>` ya `aria-label` zaroori         | Placeholder ko label ki tarah use mat karo                      |
| 5   | Focus trap implement karo modals / drawers me                  | Tab karte hi focus background par nahi jaana chahiye            |
| 6   | Skip to content link daalo                                     | Bina skip link ke keyboard users struggling karenge             |
| 7   | `aria-live` for dynamic content updates (screen readers)       | Screen readers ko pata nahi chalega content change hua          |

---

## 7. Security

| #   | DO                                                   | DON'T                                                     |
| --- | ---------------------------------------------------- | --------------------------------------------------------- |
| 1   | API routes me **input validation** karo              | User input ko bina validate kiye trust mat karo           |
| 2   | **Rate limiting** daalo API routes / forms par       | Unlimited form submissions se spam / abuse aayega         |
| 3   | Secrets in `.env.local` — do NOT commit `.env` files | `.env` file ko git me kabhi mat daalo                     |
| 4   | **CORS** properly configure karo                     | Wildcard CORS in production mat daalo                     |
| 5   | `dangerouslySetInnerHTML` / `v-html` avoid karo      | User content ko innerHTML me mat daalo                    |
| 6   | CSP (Content Security Policy) headers set karo       | Inline scripts ke liye CSP exception properly manage karo |

---

## 8. Deployment & CI/CD

| #   | DO                                                     | DON'T                                                     |
| --- | ------------------------------------------------------ | --------------------------------------------------------- |
| 1   | Build locally test karo (`npm run build` / equivalent) | Deploy karke broken build dekho — pehle local verify karo |
| 2   | Lint + TypeScript check CI me daalo                    | Warnings ke saath deploy mat karo                         |
| 3   | Lighthouse score check karo — 90+ target               | Performance / SEO low hai to deploy mat karo              |
| 4   | Production bundle size monitor karo                    | Oversized JS bundle unexpected nahi hona chahiye          |
| 5   | Environment vars CI/CD me set karo                     | Missing env vars se build fail hoga                       |

---

## 9. Git & Version Control

> Is project mein **feature branches nahi** — sab kuch `main` branch par direct commit hota hai.

| #   | DO                                                                                  | DON'T                                             |
| --- | ----------------------------------------------------------------------------------- | ------------------------------------------------- |
| 1   | Small, atomic commits karo — ek commit = ek logical change                          | Ek commit me 20 files change mat karo             |
| 2   | Descriptive commit messages do — "feat: add login", "fix: broken nav link"          | Vague messages "fixed stuff", "changes" mat likho |
| 3   | `.gitignore` properly set karo — `node_modules/`, `.next/`, `.env`, build artifacts | Build artifacts / dependencies commit mat karo    |
| 4   | Commit se pehle `git status` + `git diff` dekh lo                                   | `git add .` blindly mat karo                      |
| 5   | Pre-commit hooks hain to build / test local me pehle karo                           | Broken code `main` par push mat karo              |

---

## Quick Pre-Deploy Checklist

- [ ] Build passes (no errors, no warnings)
- [ ] Lighthouse — Performance ≥ 90, SEO ≥ 90, Accessibility ≥ 85
- [ ] All routes render correctly (no 404 / 500)
- [ ] Analytics tracking working (all pages)
- [ ] Meta tags / OG image present on all pages
- [ ] Mobile responsive — test on 375px, 768px, 1440px
- [ ] No `console.log` in production
- [ ] No hardcoded secrets / API keys
- [ ] Images optimized (modern format, responsive sizes)
- [ ] Sitemap submitted to Google Search Console
