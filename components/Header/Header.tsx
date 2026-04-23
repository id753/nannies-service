"use client";

import Link from "next/link";
import css from "./Header.module.css";
import { useState } from "react";
import Modal from "../Modal/Modal";

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <header className={css.header}>
      <div className={css.container}>
        {/* Левая часть с текстом */}
        <div className={css.leftSide}>
          <Link href="/" className={css.logo} aria-label="Home">
            Nanny.Services
          </Link>
        </div>

        {/* Правая часть с картинкой */}
        <div className={css.rightSide}>
          <nav aria-label="Main Navigation">
            <ul className={css.navigation}>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/nannies">Nannies</Link>
              </li>
              {/* <li>
                <Link href="/favorites">Favorites</Link>
              </li> */}
            </ul>
          </nav>
          <div className={css.authButtons}>
            <button className={css.loginBtn} onClick={openModal}>
              Log In
            </button>
            {/* Условие: если true — показываем модалку */}
            {isModalOpen && <Modal onClose={closeModal} />}
            <button className={css.regBtn}>Registration</button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
