import { CloseIcon, EyeCloseIcon, EyeOpenIcon } from "../Icons/Icons";
import css from "./Modal.module.css";
import React, { useEffect, useState } from "react";

interface ModalProps {
  onClose: () => void;
  type: "login" | "register";
}

const Modal = ({ onClose, type }: ModalProps) => {
  const isLogin = type === "login";
  const [showPassword, setShowPassword] = useState<boolean>(false);

  //  Логика закрытия по ESC
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    // Удаляем чтобы не было утечек памяти
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className={css.backdrop} onClick={handleBackdropClick}>
      <div className={css.modal}>
        <button onClick={onClose} className={css.closeBtn} type="button">
          <CloseIcon />
        </button>
        <h2 className={css.title}>{isLogin ? "Log In" : "Registration"}</h2>
        <p className={css.text}>
          {isLogin
            ? "Welcome back! Please enter your credentials to access your account."
            : "Thank you for your interest in our platform! In order to register, we need some information. Please provide us with the following information."}
        </p>
        <form className={css.form}>
          {!isLogin && (
            <div className={css.inputWrapper}>
              <input
                type="text"
                name="Name"
                placeholder="Name"
                className={css.input}
              />
            </div>
          )}

          <div className={css.inputWrapper}>
            <input
              type="email"
              name="Email"
              placeholder="Email"
              className={css.input}
            />
          </div>

          <div className={css.inputWrapper}>
            <input
              type={showPassword ? "text" : "password"}
              name="Password"
              placeholder="Password"
              className={css.input}
            />
            <span
              className={css.iconInside}
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <EyeOpenIcon /> : <EyeCloseIcon />}
            </span>
          </div>

          <button type="submit" className={css.submitBtn}>
            {isLogin ? "Log In" : "Sign Up"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Modal;
