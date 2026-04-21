import Link from "next/link";
import css from "./Header.module.css";

const Header = () => {
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
            <button className={css.loginBtn}>Log In</button>
            <button className={css.regBtn}>Registration</button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
