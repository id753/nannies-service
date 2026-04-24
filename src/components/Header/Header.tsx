"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

import css from "./Header.module.css";
import Modal from "../Modal/Modal";
import { UserIcon } from "../Icons/Icons";

const Header = () => {
  const [modalType, setModalType] = useState<"login" | "register" | null>(null);

  const pathname = usePathname() ?? "";

  const isHome = pathname === "/";
  const isNannies = pathname.startsWith("/nannies");
  const isFavorites = pathname.startsWith("/favorites");

  const isLoggedIn = false;
  // const isLoggedIn = true;
  const userName = "Ilona";

  const headerClasses = `${css.header} ${isHome ? css.homePage : css.colored}`;

  const Nav = (
    <ul className={css.navigation}>
      <li>
        <Link href="/" className={isHome ? css.active : ""}>
          Home
        </Link>
      </li>

      <li>
        <Link href="/nannies" className={isNannies ? css.active : ""}>
          Nannies
        </Link>
      </li>

      {isLoggedIn && (
        <li>
          <Link href="/favorites" className={isFavorites ? css.active : ""}>
            Favorites
          </Link>
        </li>
      )}
    </ul>
  );

  const AuthBlock = isLoggedIn ? (
    <div className={css.userMenu}>
      <div className={css.userAvatar}>
        <UserIcon />
      </div>
      <span className={css.userName}>{userName}</span>
      <button className={css.logoutBtn}>Log out</button>
    </div>
  ) : (
    <div className={css.authButtons}>
      <button className={css.loginBtn} onClick={() => setModalType("login")}>
        Log In
      </button>
      <button className={css.regBtn} onClick={() => setModalType("register")}>
        Registration
      </button>
    </div>
  );

  return (
    <header className={headerClasses}>
      <div className={css.container}>
        {/* LOGO */}
        <Link href="/" className={css.logo}>
          Nanny.Services
        </Link>

        {/* NAV */}
        {isHome ? (
          <div className={css.rightSide}>
            <nav className={css.nav}>{Nav}</nav>
            {AuthBlock}
          </div>
        ) : (
          <>
            <nav className={css.navDefault}>{Nav}</nav>
            <div className={css.rightSide}>{AuthBlock}</div>
          </>
        )}
      </div>

      {modalType && (
        <Modal type={modalType} onClose={() => setModalType(null)} />
      )}
    </header>
  );
};

export default Header;
