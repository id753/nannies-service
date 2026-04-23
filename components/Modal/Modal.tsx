import { ArrowIcon, CheckIcon, CloseIcon, EyeOpenIcon } from "../Icons/Icons";
import css from "./Modal.module.css";
import React from "react";

interface ModalProps {
  onClose: () => void;
  type: "login" | "register";
}

const Modal = ({ onClose, type }: ModalProps) => {
  const isLogin = type === "login";
  return (
    <div className={css.backdrop}>
      <div className={css.modal}>
        <button className={css.closeBtn}>
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
              type="password"
              name="Password"
              placeholder="Password"
              className={css.input}
            />
            <span className={css.iconInside}>
              <EyeOpenIcon />
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
