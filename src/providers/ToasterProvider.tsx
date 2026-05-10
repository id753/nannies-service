"use client";

import { Toaster } from "sonner";
import css from "./ToasterProvider.module.css";

export default function ToasterProvider() {
  return (
    <Toaster
      // expand={true}
      position="top-right"
      // richColors
      closeButton
      duration={2000}
      visibleToasts={3}
      offset={80}
      toastOptions={{
        classNames: {
          toast: css.toast,
          success: css.success,
          error: css.error,
        },
      }}
    />
  );
}
