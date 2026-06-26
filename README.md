# 🚀 Gokul M — Personal Portfolio Website

A modern, animated personal portfolio website built with **React.js + Vite**.  
Live at → **[gokul-portfolio.netlify.app](https://gokul-portfolio.netlify.app)**

---

## ✨ Features

- ⚡ Lightning-fast Vite build
- 🎨 Deep-space UI with violet + cyan gradient palette
- 🌟 Typewriter animation (react-type-animation)
- 📊 Animated skill progress bars (Intersection Observer)
- 🗂️ Project cards with hover-reveal details
- 🕐 Zigzag experience timeline
- 📬 Contact form wired to Express backend (sends real emails)
- 📱 Fully responsive — mobile, tablet, desktop
- ♿ Accessible — keyboard nav, focus styles, reduced-motion support
- 🔝 Scroll progress bar + back-to-top button

---

## 🛠️ Tech Stack

| Layer      | Technology                          |
|------------|-------------------------------------|
| Framework  | React 18 + Vite 5                   |
| Styling    | Pure CSS with CSS Variables         |
| Animations | CSS keyframes + Intersection Observer|
| Fonts      | Syne · Space Grotesk · JetBrains Mono|
| Icons      | Inline SVG                          |
| Deployment | Netlify                             |

---

## 📁 Project Structure

```
gokul-portfolio/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Navbar.jsx / .css
│   │   ├── Hero.jsx / .css
│   │   ├── About.jsx / .css
│   │   ├── Skills.jsx / .css
│   │   ├── Projects.jsx / .css
│   │   ├── Experience.jsx / .css
│   │   ├── Contact.jsx / .css
│   │   └── Footer.jsx / .css
│   ├── App.jsx / App.css
│   ├── main.jsx
│   └── index.css
├── .env                  ← VITE_BACKEND_URL (not committed)
├── .gitignore
├── index.html
├── vite.config.js
└── package.json
```

---

## 🚀 Run Locally

```bash
# 1. Clone the repo
git clone https://github.com/Gokul999coder/gokul-portfolio.git
cd gokul-portfolio

# 2. Install dependencies
npm install

# 3. Create environment file
echo "VITE_BACKEND_URL=http://localhost:5000" > .env

# 4. Start development server
npm run dev
```

Open **http://localhost:5173** in your browser.

---

## 🔧 Environment Variables

Create a `.env` file in the root:

```env
VITE_BACKEND_URL=http://localhost:5000
```

For production, set this to your deployed backend URL (e.g. Render).

---

## 📦 Build for Production

```bash
npm run build
```

Output goes to the `dist/` folder — deploy this to Netlify.

---

## 🌐 Deployment (Netlify)

1. Run `npm run build`
2. Drag the `dist/` folder to [netlify.com](https://netlify.com)
3. Set environment variable `VITE_BACKEND_URL` in Netlify dashboard

Or connect this GitHub repo to Netlify for auto-deploy on every push.

---

## 📬 Contact Form

The contact form posts to the Express backend (`/api/contact`).  
Backend repo → [portfolio-backend](https://github.com/Gokul999coder/portfolio-backend)

---

## 👤 About Me

**Gokul M** — 4th year B.Tech IT student at R.M.K Engineering College, Chennai.  
Passionate about Full Stack Development, React.js, and building things people love to use.

- 📧 itsgokul555@gmail.com  
- 💼 [LinkedIn](https://linkedin.com/in/gokul-m)  
- 🐙 [GitHub](https://github.com/Gokul999coder)

---

## 📄 License

MIT — free to use as inspiration. Please don't copy it directly as your own. ⭐ Star the repo if you found it helpful!
