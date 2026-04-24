"use client";

import Link from "next/link";
import css from "./Header.module.css";
import { useState } from "react";
import Modal from "../Modal/Modal";

const Header = () => {
  const [modalType, setModalType] = useState<"login" | "register" | null>(null);

  const closeModal = () => setModalType(null);

  return (
    <header className={css.header}>
      <div className={css.container}>
        {/* Левая часть: Логотип */}
        <div className={css.leftSide}>
          <Link href="/" className={css.logo} aria-label="Home">
            Nanny.Services
          </Link>
        </div>

        {/* Правая часть: Навигация и Кнопки */}
        <div className={css.rightSide}>
          <nav aria-label="Main Navigation">
            <ul className={css.navigation}>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/nannies">Nannies</Link>
              </li>
            </ul>
          </nav>

          <div className={css.authButtons}>
            <button
              onClick={() => setModalType("login")}
              className={css.loginBtn}
            >
              Log In
            </button>

            <button
              onClick={() => setModalType("register")}
              className={css.regBtn}
            >
              Registration
            </button>
          </div>
        </div>
      </div>

      {modalType && <Modal type={modalType} onClose={closeModal} />}
    </header>
  );
};

export default Header;
