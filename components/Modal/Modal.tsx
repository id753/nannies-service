import { ArrowIcon, CheckIcon, CloseIcon, EyeOpenIcon } from "../Icons/Icons";
import css from "./Modal.module.css";
import React from "react";

interface ModalProps {
  onClose: () => void;
}

const Modal = ({ onClose }: ModalProps) => {
  return (
    <div className={css.backdrop}>
      <div className={css.modal}>
        <button className={css.closeBtn}>
          <CloseIcon />
        </button>

        <h2 className={css.title}>Log In</h2>
        <p className={css.text}>
          Welcome back! Please enter your credentials to access your account and
          continue your babysitter search.
        </p>

        <form className={css.form}>
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
            Log In
          </button>
        </form>
      </div>
    </div>
  );
};

export default Modal;
