"use client";

import { useEffect } from "react";
import css from "./error.module.css";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className={css.container}>
      <h2>Something went wrong!</h2>
      <p>An unexpected error occurred on this page.</p>
      <button onClick={() => reset()} className={css.btn}>
        Try again
      </button>
    </div>
  );
}
