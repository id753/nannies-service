"use client";

import { CloseIcon, EyeCloseIcon, EyeOpenIcon } from "../Icons/Icons";
import css from "./Modal.module.css";
import React, { useEffect, useState } from "react";
import { signUp, logIn } from "@/src/firebase/auth";

interface ModalProps {
  onClose: () => void;
  type: "login" | "register";
}

const Modal = ({ onClose, type }: ModalProps) => {
  const isLogin = type === "login";
  const [showPassword, setShowPassword] = useState<boolean>(false);

  // Стейты для полей формы
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);

  // Логика закрытия по ESC
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);

    try {
      if (isLogin) {
        await logIn(email, password);
      } else {
        await signUp(email, password, name);
      }
      onClose();
    } catch (err: any) {
      // Обработка типичных ошибок Firebase для пользователя
      let message = "An error occurred. Please try again.";

      if (err.code === "auth/invalid-credential") {
        message = "Invalid email or password.";
      } else if (err.code === "auth/email-already-in-use") {
        message = "This email is already registered.";
      } else if (err.code === "auth/weak-password") {
        message = "Password should be at least 6 characters.";
      }

      setError(message);
      console.error("Auth error code:", err.code);
    }
  };

  return (
    <div className={css.backdrop} onClick={handleBackdropClick}>
      <div className={css.modal}>
        <button
          onClick={onClose}
          className={css.closeBtn}
          type="button"
          aria-label="Close modal"
        >
          <CloseIcon />
        </button>

        <h2 className={css.title}>{isLogin ? "Log In" : "Registration"}</h2>

        <p className={css.text}>
          {isLogin
            ? "Welcome back! Please enter your credentials to access your account."
            : "Thank you for your interest in our platform! In order to register, we need some information. Please provide us with the following information."}
        </p>

        <form className={css.form} onSubmit={handleSubmit}>
          {!isLogin && (
            <div className={css.inputWrapper}>
              <input
                type="text"
                name="name"
                placeholder="Name"
                className={css.input}
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
          )}

          <div className={css.inputWrapper}>
            <input
              type="email"
              name="email"
              placeholder="Email"
              className={css.input}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className={css.inputWrapper}>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Password"
              className={css.input}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <span
              className={css.iconInside}
              onClick={() => setShowPassword(!showPassword)}
              style={{ cursor: "pointer" }}
            >
              {showPassword ? <EyeOpenIcon /> : <EyeCloseIcon />}
            </span>
          </div>

          {error && <p className={css.errorText}>{error}</p>}

          <button type="submit" className={css.submitBtn}>
            {isLogin ? "Log In" : "Sign Up"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Modal;
