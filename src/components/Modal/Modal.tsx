"use client";

import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { signUp, logIn } from "@/src/firebase/auth";
import { CloseIcon, EyeCloseIcon, EyeOpenIcon } from "../Icons/Icons";
import css from "./Modal.module.css";

//  Понятная схема валидации
const validationSchema = yup.object().shape({
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup
    .string()
    .min(6, "Min 6 characters")
    .required("Password is required"),
  name: yup.string().when("$isRegister", {
    is: true,
    then: (schema) => schema.required("Name is required"),
    otherwise: (schema) => schema.notRequired(),
  }),
});

interface ModalProps {
  onClose: () => void;
  type: "login" | "register";
}

const Modal = ({ onClose, type }: ModalProps) => {
  const isLogin = type === "login";
  const [showPassword, setShowPassword] = useState(false);
  const [firebaseError, setFirebaseError] = useState<string | null>(null);

  // Настройка формы
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
    context: { isRegister: type === "register" },
    mode: "onTouched",
  });

  // Закрытие по ESC
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  const onSubmit = async (data: any) => {
    setFirebaseError(null);
    try {
      if (isLogin) {
        await logIn(data.email, data.password);
      } else {
        await signUp(data.email, data.password, data.name);
      }
      onClose();
    } catch (err: any) {
      //   обработка ошибок Firebase
      if (err.code === "auth/invalid-credential") {
        setFirebaseError("Wrong email or password");
      } else if (err.code === "auth/email-already-in-use") {
        setFirebaseError("This email is already taken");
      } else {
        setFirebaseError("Something went wrong. Try again.");
      }
    }
  };

  return (
    <div
      className={css.backdrop}
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className={css.modal}>
        <button onClick={onClose} className={css.closeBtn} type="button">
          <CloseIcon />
        </button>

        <h2 className={css.title}>{isLogin ? "Log In" : "Registration"}</h2>
        <p className={css.text}>
          {isLogin
            ? "Welcome back! Please enter your details."
            : "Fill in the form to create an account."}
        </p>

        <form className={css.form} onSubmit={handleSubmit(onSubmit)}>
          {/* Поле NAME (только для регистрации) */}
          {!isLogin && (
            <div className={css.inputWrapper}>
              <input
                {...register("name")}
                placeholder="Name"
                className={`${css.input} ${errors.name ? css.errorBorder : ""}`}
              />
              {errors.name && (
                <span className={css.errorLabel}>{errors.name.message}</span>
              )}
            </div>
          )}

          {/* Поле EMAIL */}
          <div className={css.inputWrapper}>
            <input
              {...register("email")}
              type="email"
              placeholder="Email"
              className={`${css.input} ${errors.email ? css.errorBorder : ""}`}
            />
            {errors.email && (
              <span className={css.errorLabel}>{errors.email.message}</span>
            )}
          </div>

          {/* Поле PASSWORD */}
          <div className={css.inputWrapper}>
            <input
              {...register("password")}
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className={`${css.input} ${errors.password ? css.errorBorder : ""}`}
            />
            <span
              className={css.iconInside}
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <EyeOpenIcon /> : <EyeCloseIcon />}
            </span>
            {errors.password && (
              <span className={css.errorLabel}>{errors.password.message}</span>
            )}
          </div>

          {/* Ошибка от Firebase  */}
          <p className={css.firebaseError}>
            {firebaseError ? firebaseError : ""}
          </p>

          <button type="submit" className={css.submitBtn}>
            {isLogin ? "Log In" : "Sign Up"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Modal;
