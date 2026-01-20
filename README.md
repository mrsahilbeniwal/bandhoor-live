# Bandhoor - Wedding Decision Platform

<p align="center">
  <img src="client/public/logo.jpg" alt="Bandhoor Logo" width="200">
</p>

<p align="center">
  <strong>Where Celebrations Find Their Perfect Match</strong>
</p>

<p align="center">
  <a href="#features">Features</a> •
  <a href="#tech-stack">Tech Stack</a> •
  <a href="#getting-started">Getting Started</a> •
  <a href="#project-structure">Structure</a> •
  <a href="#deployment">Deployment</a>
</p>

---

## 🎊 About

**Bandhoor** is India's premium wedding decision platform, connecting couples with curated wedding vendors through exclusive exhibition experiences. Our platform bridges the gap between premium wedding service providers and discerning couples seeking an elevated wedding planning journey.

## ✨ Features

- 🏛️ **Premium Design** - Elegant maroon & gold color scheme with modern animations
- 📱 **Fully Responsive** - Mobile-first design that works on all devices
- 🎯 **6 Core Pages** - Home, About, How It Works, Vendors, Register, Contact
- 📝 **Registration Forms** - Separate forms for visitors and vendor applications
- 🎨 **Animated Effects** - Floating orbs, shimmer effects, gradient text

## 🛠️ Tech Stack

### Frontend
- **React 18** - UI library
- **Vite** - Build tool & dev server
- **React Router** - Client-side routing
- **Framer Motion** - Animations
- **CSS3** - Custom styling with CSS variables

### Fonts
- **Cormorant Garamond** - Display headings
- **Inter** - Body text

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/mrsahilbeniwal/bandhoor-live.git

# Navigate to project
cd bandhoor-live

# Install frontend dependencies
cd client
npm install

# Start development server
npm run dev
```

The app will be available at `http://localhost:5173`

### Build for Production

```bash
cd client
npm run build
```

## 📁 Project Structure

```
bandhoor-website/
├── client/                 # React frontend
│   ├── public/
│   │   └── logo.jpg       # Brand logo
│   ├── src/
│   │   ├── components/    # Reusable components
│   │   │   ├── Navbar.jsx
│   │   │   └── Footer.jsx
│   │   ├── pages/         # Page components
│   │   │   ├── Home.jsx
│   │   │   ├── About.jsx
│   │   │   ├── HowItWorks.jsx
│   │   │   ├── Vendors.jsx
│   │   │   ├── Register.jsx
│   │   │   └── Contact.jsx
│   │   ├── App.jsx        # Main app with routing
│   │   └── index.css      # Global styles & design system
│   ├── index.html
│   └── package.json
├── server/                 # Backend API (Phase 2)
├── README.md
└── .gitignore
```

## 🎨 Design System

### Brand Colors
| Color | Hex | Usage |
|-------|-----|-------|
| Primary (Maroon) | `#6B1E2B` | Backgrounds, buttons |
| Accent (Gold) | `#C9A962` | Highlights, accents |
| Cream | `#FDF8F3` | Light backgrounds |

### Typography
- **Headings**: Cormorant Garamond (serif)
- **Body**: Inter (sans-serif)

## 🌐 Deployment

### Vercel (Recommended)

1. Connect your GitHub repository to Vercel
2. Set the root directory to `client`
3. Build command: `npm run build`
4. Output directory: `dist`

### Manual Deployment

```bash
cd client
npm run build
# Deploy the 'dist' folder to your hosting provider
```

## 📋 Roadmap

- [x] Frontend MVP with 6 pages
- [x] Premium visual design
- [x] Responsive mobile design
- [ ] Backend API (Node.js + MongoDB)
- [ ] Form submissions to database
- [ ] Admin dashboard
- [ ] Email/WhatsApp notifications

## 📄 License

This project is proprietary. All rights reserved.

## 📞 Contact

**Bandhoor**  
📧 hello@bandhoor.com  
📍 India

---

<p align="center">Made with ❤️ for Indian weddings</p>
