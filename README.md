
# 👶Manny.Services

## A modern web platform 👨‍👦 designed to help families quickly find trusted and experienced mannies for childcare and everyday support.

## The application allows users to explore a detailed catalog of 📍professional mannies, search and filter specialists by rating, price, popularity, and experience, and save favorite profiles ❤️ for quick access. </br> The platform also includes secure authentication 🔐, responsive design 📱, and an intuitive interface that makes finding the right childcare specialist simple, fast, and comfortable.

<p align="center">
   <img width="450"  alt="Manny.Services App Screenshot" src="https://github.com/user-attachments/assets/d55f91af-a65f-4e04-bda0-c91dc7e465b8" />
  <br>
  <sub>Manny.Services App Screenshot</sub>
</p>

# Quick Links

## [Live Project](https://manny-service.id753.workers.dev/)
## [Original Technical Requirements](https://docs.google.com/document/d/1NF8-qXrI-G4wSKDRQ99Akfg_BlOpz1x_vX92TbKBJ44/edit?usp=sharing)
## [Original Project Layout](https://www.figma.com/design/u36ajEOsnwio2GDGiabVPD/Nanny-Sevices?node-id=0-1&p=f&t=5qXICKgmNjipRLld-0)

## Tech Stack

- ⚙️ **Core Technologies**
- **Frontend:** Next.js (App Router), React, CSS Modules.
- **Backend & Database:** [Firebase Realtime Database](https://firebase.google.com/docs/database?hl=ru), [Firebase Authentication](https://firebase.google.com/docs/auth?hl=ru).
- **Language:** TypeScript (Type-safe codebase).
- ⚙️ **State & Form Management**
- **State Handling:** React Hooks (`useState`, `useEffect`, `useMemo`).
- **Form Management:** [`react-hook-form`](https://react-hook-form.com/docs) with `yup` for schema validation.
- **Notifications:** [`sonner`](https://sonner.emilkowal.ski/) for rich-color feedback messages.
- ⚙️ **Development & Deployment**
- **Version Control:** Git & GitHub.
- **Deployment:** ~~Netlify (automated CI/CD)~~ -> [Cloudflare Pages](https://pages.cloudflare.com/) (Migrated for better performance and edge functions)
  - **SEO & Performance:** Static metadata, semantic HTML5, and a clean heading structure for better indexing and accessibility
  - **Design Philosophy:** Semantic HTML5, CSS Grid/Flexbox, CSS Modules, root styles, and [framer-motion](https://www.npmjs.com/package/framer-motion?activeTab=readme) for smooth UI interactions.

## Features

### Frontend Experience
- ✅ **User Authentication**: Secure registration and login powered by Firebase Authentication with protected routes for authorized users.
- 👨‍👦 **Custom Manny Catalog**: Independently created and structured a unique database of male babysitters with personalized profiles, optimized images, and dynamic online/offline indicators.
- 🔎 **Search, Filtering & Sorting**: Users can instantly search mannies by name, city, or personality traits, while also sorting results by alphabetical order, hourly rate, and popularity.
- 📄 **Favorites System**: Authenticated users can save preferred mannies to a personal favorites list with persistent state across page refreshes.
- 🗓️ **Booking Functionality**: Integrated appointment form with validation using react-hook-form and yup for requesting personal meetings.
- 🎨 **Responsive Interface**: Fully adaptive UI optimized for desktop, tablet, and mobile devices.
- ✨ **UI/UX Enhancements**: Redesigned homepage content, improved visual hierarchy, and implemented modern interactive elements for a more engaging user experience.
- ⚙️ **Scalable Styling Architecture**: Built a reusable styling system using CSS variables, allowing easy theme customization, global design updates, and future Dark/Light mode support.

## 🔢 Getting Started (Frontend)

Clone the repository

    git clone git@github.com:id753/manny-service.git

Install dependencies

     npm install

Environment Variables
Create a .env file in the root directory (use .env.example as a template):

    VITE_API_URL=http://localhost:3000

Run the app

    npm run dev

Open http://localhost:3000 in your browser.

<!-- 
## ⚠️ Note: The server is hosted on Render's free plan and may “sleep” when idle — the first load after waking up can take 30–50 seconds.
<!--
