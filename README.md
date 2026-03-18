# 🚀 Ritik Kumar | Personal Portfolio

A modern, responsive personal portfolio website built with **React**, **TypeScript**, **Tailwind CSS**, and deployed on **Cloudflare** using **Vite**.

🌐 **Live Demo:** [my-portfolio-scxy-nsj3zp1ep-ritik9931s-projects.vercel.app](https://my-portfolio-scxy-nsj3zp1ep-ritik9931s-projects.vercel.app/)

---

## 📋 Table of Contents

- [About](#about)
- [Tech Stack](#tech-stack)
- [Features](#features)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Available Scripts](#available-scripts)
- [Deployment](#deployment)
- [Contact](#contact)

---

## About

This is a personal portfolio website created by **Ritik Kumar** to showcase skills, projects, and experience as a Software Developer. The app is built using modern web technologies and deployed to Cloudflare Workers.

---

## 🛠️ Tech Stack

| Category        | Technology                          |
|-----------------|-------------------------------------|
| Frontend        | React 19, TypeScript                |
| Styling         | Tailwind CSS, tailwind-merge        |
| Routing         | React Router v7                     |
| UI Components   | Radix UI, class-variance-authority  |
| Icons           | Lucide React                        |
| Backend / API   | Hono (lightweight web framework)    |
| Validation      | Zod, @hono/zod-validator            |
| Build Tool      | Vite                                |
| Deployment      | Cloudflare Workers (via Wrangler)   |
| Linting         | ESLint, typescript-eslint           |
| Dead Code Check | Knip                                |

---

## ✨ Features

- ⚡ **Fast & Lightweight** — Built with Vite for lightning-fast development and optimized production builds
- 📱 **Responsive Design** — Fully mobile-friendly layout using Tailwind CSS
- 🎨 **Modern UI** — Clean interface with Radix UI primitives and smooth animations via `tailwindcss-animate`
- 🔒 **Type-Safe** — Full TypeScript coverage across the codebase
- ☁️ **Edge Deployment** — Hosted on Cloudflare Workers for global low-latency performance
- 🧹 **Code Quality** — ESLint + Knip for linting and dead code detection

---

## 📁 Project Structure

```
My_Portfolio/
├── public/              # Static assets
├── src/                 # Application source code
│   ├── components/      # Reusable UI components
│   ├── pages/           # Route-level page components
│   └── ...
├── index.html           # HTML entry point
├── vite.config.ts       # Vite configuration
├── tailwind.config.js   # Tailwind CSS configuration
├── tsconfig.json        # TypeScript config (root)
├── tsconfig.app.json    # TypeScript config (app)
├── tsconfig.node.json   # TypeScript config (node)
├── tsconfig.worker.json # TypeScript config (Cloudflare Worker)
├── wrangler.json        # Cloudflare Workers deployment config
├── knip.json            # Knip unused code config
├── eslint.config.js     # ESLint configuration
└── package.json         # Dependencies and scripts
```

---

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- npm (comes with Node.js)

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/ritik9931/My_Portfolio.git
   cd My_Portfolio
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Start the development server:**

   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173`

---

## 📜 Available Scripts

| Script            | Description                                              |
|-------------------|----------------------------------------------------------|
| `npm run dev`     | Start the local development server                       |
| `npm run build`   | Compile TypeScript and create a production build         |
| `npm run lint`    | Run ESLint across the project                            |
| `npm run knip`    | Detect unused files, exports, and dependencies           |
| `npm run check`   | Full check: TypeScript + Vite build + Wrangler dry run   |
| `npm run cf-typegen` | Generate Cloudflare Worker type definitions           |

---

## ☁️ Deployment

This project is configured for deployment to **Cloudflare Workers** using [Wrangler](https://developers.cloudflare.com/workers/wrangler/).

To deploy:

```bash
npx wrangler deploy
```

Make sure you are authenticated with Cloudflare before deploying:

```bash
npx wrangler login
```

---

## 📬 Contact

**Ritik Kumar**
- 📧 Email: [ritikraj6699@gmail.com](mailto:ritikraj6699@gmail.com)
- 💻 GitHub: [@ritik9931](https://github.com/ritik9931)
- 🌐 Portfolio: [Live Site](https://my-portfolio-scxy-nsj3zp1ep-ritik9931s-projects.vercel.app/)

---

> Built with ❤️ by Ritik Kumar
