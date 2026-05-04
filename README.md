# Nanny.Services 
## A modern web application designed to connect parents with professional and verified babysitters. 

## The platform allows users to browse a detailed catalog of caregivers, filter them by specific criteria such as price, popularity, and experience, and book a personal meeting through an integrated appointment system. </br> Additionally, the application includes a secure authentication system, allowing users to register and manage their accounts, as well as save preferred nannies to a personal 'Favorites' list for quick access.


<p align="center">
  <img src="https://github.com/user-attachments/assets/64448477-ddf9-4dc4-9af9-414d64de1273" " alt="Nanny.Services App Screenshot" width="450" />
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
- ✅ **Smart Catalog**: A list of babysitters with pagination ("Load More" functionality), responsive cards, and real-time status tracking.
- ✅ **Advanced Filtering & Sorting**: Real-time sorting by name (A-Z, Z-A), price categories (less than/greater than $10/hour), and popularity (rating).
- ✅ **Favorites System**: Authenticated users can save their preferred nannies to a personal "Favorites" list, with state persistence across page refreshes.
- ✅ **Booking System**: A fully validated appointment form (using react-hook-form and yup) for users to request a meeting.
- ✅ **Responsive UI**: A fully adaptive design ensuring a seamless experience across mobile, tablet, and desktop devices.
- ✅ **Theming & Customization:** Utilized CSS variables (root styles) for the design system. This architecture allows for global updates to the color palette, typography, and spacing, enabling rapid branding changes or the implementation of Dark/Light modes with minimal effort.
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
## Фіналізовано роботу над проєктом NoteHub, зосередившись на переходi на свій  [бекенд](https://github.com/id753/nodejs-hw) з авторизацією, який підтримує: захищені маршрути, токени, що зберігаються в куках, перевірку доступу до даних користувача. </br>
Попереднiй https://github.com/id753/08-zustand </br>
...................................................................................... </br>
Використано новий бекенд з авторизацією, який підтримує:</br>

    - Захищені маршрути (доступ лише для авторизованих користувачів)</br>
    - Токени, що зберігаються в куках</br>
    - Перевірку доступу до даних користувача</br>

Розділено маршрути на приватні та публічні</br>
Навігація по сторінкам AuthNavigation</br>
Сторінка профілю користувача. Додано на сторінку профілю усі небхідні meta-теги.</br>

Робота з API. Усі функції для роботи з API розділіть на три файли:</br>
     
     - для створення одного спільного екземпляра axios, з налаштуванням withCredentials: true для підтримки cookies;</br>
     - для функцій, які викликаються у клієнтських компонентах;</br>
     - для функцій, які викликаються у серверних компонентах.</br>

Сторінка реєстрації. Форма має надсилати запит до API з підтримкою cookies.</br>
Сторінка автентифікації. Форма має надсилати запит до API з підтримкою cookies.</br>
Перевірка авторизації.</br>
Для перевірки та зберігання стану авторизації створено Zustand-стор.</br>
Навігація в AuthNavigation.</br>
Внесено зміни в компонент AuthNavigation, щоб додати динамічну логіку залежно від статусу авторизації користувача та можливості перемикатися між новими сторінками.</br>
Захист маршрутів. Додано захист маршрутів на рівні Proxy. Налаштовано перевірку токенів у cookies: якщо неавторизований користувач намагається відкрити приватну сторінку — його перенаправляє на сторінку входу. Якщо авторизований користувач відкриває публічну сторінку — його перенаправляє на профіль.</br>
Сторінка редагування профілю.</br>
...................................................................................... </br>
   Проект розгорнуту на Vercel.</br>
    Проєкт створено за допомогою Next.js (App Router).</br>
    Усі компоненти, які не прив'язані безпосередньо до маршруту та їх частин, зберігаються в папці components, кожен — у власній папці.</br>
    Загальні типи та інтерфейси винесені до файлів types/note.ts, types/user.ts.</br>
    Функції роботи з API винесені в lib/api/ у вигляді окремих модулів.</br>
    Для HTTP-запитів використовується бібліотека axios.</br>
    Стан запитів у CSR-компонентах керується через TanStack Query (React Query).</br>
    Усі компоненти типізовані з використанням TypeScript.</br>
    Код відформатований за допомогою Prettier.</br>
    Стилізація — за допомогою CSS Modules.</br>
    У проєкті реалізована підтримка SSR та CSR відповідно до завдання.</br>
    ...................................................................................... 
## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
-->
