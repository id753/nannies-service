import Link from "next/link";
import css from "./not-found.module.css";

export default function NotFound() {
  return (
    <div className={css.container}>
      <h1>404</h1>
      <h2>Page Not Found</h2>
      <p>Sorry, the page you are looking for does not exist.</p>
      <Link href="/" className={css.link}>
        Return to home page
      </Link>
    </div>
  );
}
