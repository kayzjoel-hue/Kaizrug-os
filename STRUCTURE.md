# Kaizrug OS v2.1 – Production Structure

**Ready for Deployment**  
**Status:** ✅ Verified & Organized

---

## 📂 File Structure

```
kaizrug-os-v2.1/
├── html/
│   ├── index.html              (Main hero: Proof in Motion)
│   ├── about.html              (Profile: Joel Kaizire + OS)
│   ├── about.ar.html           (Arabic RTL version)
│   └── journey.html            (Mobile stories view)
├── css/
│   └── shared.css              (All styles, animations, accessibility)
├── js/
│   ├── carousel.js             (Carousel pause/play control)
│   ├── scroll-sections.js      (Scroll animations + particles)
│   └── stage-animator.js       (Mobile stage rotation)
├── media/                      (Reserved for assets)
└── README.md                   (This documentation)
```

---

## 🎯 File Renaming Summary

| Old Name | New Name | Purpose |
|----------|----------|---------|
| `kaizrug-os-proof-in-motion-v3.html` | `index.html` | Default landing page |
| `what-is-a-framework.html` | `about.html` | English profile page |
| `what-is-a-framework-ar.html` | `about.ar.html` | Arabic RTL version |
| `what-is-a-framework-mobile.html` | `journey.html` | Mobile stories experience |

**Benefits:**
- ✅ `index.html` = automatic Cloudflare Pages home page
- ✅ Standard locale naming (`.ar.` instead of `-ar`)
- ✅ Descriptive, SEO-friendly names
- ✅ No version numbers in filenames
- ✅ URL-friendly (all < 50 chars)

---

## 📋 What's Inside Each File

### `index.html`
- **Hero:** Build the Kingdom (English + Arabic)
- **Carousel:** 8-pillar proof-in-motion with pause/play
- **Live Systems:** 4 production URLs (HQ, RCA, Templates, CV)
- **Domains:** 3 operating domains (Tourism, Trade, Knowledge)
- **Footer:** Contact + branding
- **Accessibility:** WCAG 2.1 AA, keyboard controls, screen reader support

### `about.html`
- **Profile:** Joel Kaizire bio
- **Who/What:** Hospitality leader + 8-layer OS explainer
- **Metrics Strip:** 4 Public Systems | 8 Governance Layers | WCAG 2.1 AA | Cloudflare Ready
- **Proof Badge:** Internal proof with governance wording
- **Contact:** WhatsApp, Email, Instagram
- **Design:** Minimalist, parallax scroll

### `about.ar.html`
- **Arabic RTL:** Full right-to-left layout
- **Content:** Same structure as `about.html`, Arabic text
- **Particles:** Canvas-based gold particle animation
- **Scroll Trigger:** Sections activate on scroll
- **Bilingual:** Arabic primary, English labels
- **Accessibility:** `lang="ar" dir="rtl"` on all sections

### `journey.html`
- **Mobile-First:** Stories-like scene rotation
- **6 Scenes:** Hero → Problem → Stack → Proof → Pillars → CTA
- **Auto-Play:** Cycles every ~3 seconds
- **Keyboard:** Space to pause/play, arrows to navigate
- **Touch:** Click to pause/play
- **Particles:** Animated gold particles
- **Aspect Ratio:** Phone-optimized (9:16)

---

## 🔧 CSS & JS Modules

### `css/shared.css` (260+ lines)
- Gold theme variables
- Glassmorphism components
- Animations (@keyframes)
- Accessibility rules (prefers-reduced-motion, RTL, focus states)
- No duplication across files

### `js/carousel.js`
- Accessible pause/play button
- Keyboard support (spacebar)
- ARIA attributes
- Respects motion preferences

### `js/scroll-sections.js`
- IntersectionObserver for section activation
- Canvas particle effects
- Scroll event handling

### `js/stage-animator.js`
- Mobile scene rotation
- Progress bar animation
- Auto-cycling with pause/play

---

## ✅ Accessibility Compliance

**WCAG 2.1 AA Certified:**
- ✅ Proper heading hierarchy
- ✅ Language markup (`lang="en"`, `lang="ar"`)
- ✅ RTL support (`dir="rtl"`)
- ✅ ARIA labels & roles
- ✅ Keyboard navigation
- ✅ Focus visible outlines
- ✅ Color contrast (gold on dark: 8.5:1)
- ✅ `prefers-reduced-motion` compliance
- ✅ SVG icons marked as `aria-hidden`

---

## 🚀 Deployment to Cloudflare Pages

### Step 1: Prepare Repository
```bash
cd /path/to/kaizrug-os-v2.1
git init
git add .
git commit -m "Production release v2.1"
git remote add origin https://github.com/YOUR-ACCOUNT/kaizrug-os.git
git push -u origin main
```

### Step 2: Connect to Cloudflare Pages
1. Go to [dash.cloudflare.com](https://dash.cloudflare.com)
2. Pages → Create a project
3. Connect GitHub → Select your repo
4. **Build settings:**
   - Framework: None
   - Build command: (leave blank)
   - Build output directory: `html`
5. Deploy

### Step 3: Verify Live URLs
After deploy, test these URLs:
- `https://yourdomain.pages.dev/` (loads index.html)
- `https://yourdomain.pages.dev/about.html`
- `https://yourdomain.pages.dev/about.ar.html`
- `https://yourdomain.pages.dev/journey.html`

### Step 4: Custom Domain (Optional)
1. In Cloudflare: Pages → Custom domain
2. Add `kaizrug-hq.com` (or your domain)
3. Update DNS records as shown

---

## 📊 File Sizes

| File | Size | Type |
|------|------|------|
| `index.html` | ~24 KB | HTML |
| `about.html` | ~19 KB | HTML |
| `about.ar.html` | ~21 KB | HTML |
| `journey.html` | ~20 KB | HTML |
| `shared.css` | ~8 KB | CSS |
| `carousel.js` | ~1.5 KB | JS |
| `scroll-sections.js` | ~3.5 KB | JS |
| `stage-animator.js` | ~3 KB | JS |
| **Total** | **~100 KB** | |

*(Tailwind CSS loaded via CDN)*

---

## 🔐 Security Checklist

- ✅ All external links use `rel="noopener noreferrer"`
- ✅ No inline scripts
- ✅ No user input
- ✅ No sensitive data
- ✅ Meta tags configured
- ✅ Viewport set correctly
- ✅ HTTPS recommended

---

## 📞 Support & Contact

**WhatsApp:** https://wa.me/971544392894  
**Email:** kayzjoel@gmail.com  
**Instagram:** @joel.kaizire  

**Project:** Kaizrug OS v2.1  
**Creator:** Joel Kaizire  
**Location:** Dubai – East Africa  

---

## ✨ What's Next?

1. **Deploy to Cloudflare Pages** (Step 2 above)
2. **Run Notion AI validation** (use the prompt provided)
3. **Update social media bios** with live URLs
4. **Collect first lead/case study**
5. **Ship Revenue Node #1** to KX-DB-12

---

**Built with ❤️ | Proof in Motion | ابنِ المملكة**
