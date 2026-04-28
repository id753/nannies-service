"use client";

import { Toaster } from "sonner";

export default function ToasterProvider() {
  return (
    <Toaster
      position="top-right"
      // expand={true}
      richColors
      closeButton
      duration={2000}
      visibleToasts={3}
      style={{ top: "80px" }}
      toastOptions={{
        style: {
          fontFamily: "var(--font-inter)",
          fontSize: "16px",
        },
      }}
    />
  );
}
