# 👶Nanny.Services 
## A modern web application 👩‍👧‍👦 designed to connect parents with professional and verified babysitters. 

## The platform allows users to browse a detailed catalog of📍babysitters, filter them by specific criteria such as price, popularity, and experience, and book a personal meeting 🏠 through an integrated appointment system. </br> Additionally, the application includes a secure authentication system, allowing users to register and manage their accounts, as well as save preferred nannies to a personal 'Favorites' list for quick access.


<p align="center">
   <img src="https://github.com/user-attachments/assets/21ab1c57-15b9-4eba-a1d6-ff7979f33ca6" alt="Nanny.Services App Screenshot"  />
  <br>
  <sub>Nanny.Services App Screenshot</sub>
</p>

# Quick Links
## [Live Project](https://nannies-service.netlify.app/) 
## [Technical Requirements](https://docs.google.com/document/d/1NF8-qXrI-G4wSKDRQ99Akfg_BlOpz1x_vX92TbKBJ44/edit?usp=sharing) 
## [Project Layout](https://www.figma.com/design/u36ajEOsnwio2GDGiabVPD/Nanny-Sevices?node-id=0-1&p=f&t=5qXICKgmNjipRLld-0) 

## Tech Stack
**Core Technologies**
- **Frontend:** Next.js (App Router), React, CSS Modules.
- **Backend & Database:** [Firebase Realtime Database](https://firebase.google.com/docs/database?hl=ru),  [Firebase Authentication](https://firebase.google.com/docs/auth?hl=ru).
- **Language:** TypeScript (Type-safe codebase).
**State & Form Management**
- **State Handling:** React Hooks (`useState`, `useEffect`, `useMemo`).
- **Form Management:** [`react-hook-form`](https://react-hook-form.com/docs) with `yup` for schema validation.
- **Notifications:** [`sonner`](https://sonner.emilkowal.ski/) for rich-color feedback messages.
**Development & Deployment**
- **Version Control:** Git & GitHub.
- **Deployment:** [Netlify](https://www.netlify.com/) (automated CI/CD).
- SEO & Performance:** Implementation of dynamic meta-tags for each nanny to enhance search engine visibility and social sharing.
- **Design Philosophy:** Semantic HTML5, fluid layout using CSS Grid/Flexbox, CSS Modules (Modular and scoped styling), root styles.
  
## Features
### Frontend Experience
- ✅ **User Authentication**: Secure registration and login powered by Firebase Auth, with private routes for authenticated users.
- 🎓 **Smart Catalog**: A list of babysitters with pagination ("Load More" functionality), responsive cards, and real-time status tracking.
- 🔎 **Advanced Filtering & Sorting**: Real-time sorting by name (A-Z, Z-A), price categories (less than/greater than $10/hour), and popularity (rating).
- 📄 **Favorites System**: Authenticated users can save their preferred nannies to a personal "Favorites" list, with state persistence across page refreshes.
- 🗓️ **Booking System**: A fully validated appointment form (using react-hook-form and yup) for users to request a meeting.
- 🎨 **Responsive UI**: A fully adaptive design ensuring a seamless experience across mobile, tablet, and desktop devices.
- ✨ **Theming & Customization:** Utilized CSS variables (root styles) for the design system. This architecture allows for global updates to the color palette, typography, and spacing, enabling rapid branding changes or the implementation of Dark/Light modes with minimal effort.
- 
## 🔢 Getting Started (Frontend)
Clone the repository
      
    git clone git@github.com:id753/nannies-service.git
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
