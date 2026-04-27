"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import css from "./PopUp.module.css";
import { CloseIcon, TimeIcon } from "../Icons/Icons";
import Button from "../UI/Button/Button";
import { Babysitter } from "@/src/types";
import { generateTimeOptions } from "@/src/utils/generateTimeOptions";

interface ModalProps {
  onClose: () => void;
  item: Babysitter;
}

interface FormData {
  address: string;
  tel: string;
  childAge: string;
  parentName: string;
  email: string;
  comment: string;
  meetingTime: string;
}

const validationSchema = yup.object().shape({
  address: yup.string().required("Address is required"),
  tel: yup
    .string()
    .required("Telephone is required")
    .matches(/^\+380\d{9}$/, "Format: +380XXXXXXXXX"),
  childAge: yup.string().required("Required"),
  parentName: yup.string().required("Parent's name is required"),
  email: yup.string().email("Invalid email").required("Email is equired"),
  comment: yup.string().required("Required"),
  meetingTime: yup
    .string()
    .required("Please select a time")
    .notOneOf(["Meeting time"], "Please select a time"),
});

const PopUp = ({ onClose, item }: ModalProps) => {
  const [open, setOpen] = useState(false);
  const [time, setTime] = useState("Meeting time");

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    trigger,
  } = useForm<FormData>({
    resolver: yupResolver(validationSchema),
    defaultValues: {
      tel: "+380",
      meetingTime: "Meeting time",
      email: "",
      comment: "",
      address: "",
      parentName: "",
      childAge: "",
    },
  });

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  const handleSelect = (label: string) => {
    setTime(label);
    setOpen(false);

    setValue("meetingTime", label);
    trigger("meetingTime");
  };

  const options = generateTimeOptions();

  const onSubmit = (data: FormData) => {
    const fullData = { ...data, nannyId: item.id };
    console.log("Form Data:", fullData);
    onClose();
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

        <h3 className={css.title}>Make an appointment with a babysitter</h3>
        <p className={css.text}>
          Arranging a meeting with a caregiver for your child is the first step
          to creating a safe and comfortable environment.
        </p>

        <div className={css.avatarWrapper}>
          <Image
            src={item.avatar_url || "/default-avatar.png"}
            alt={item.name}
            width={44}
            height={44}
            className={css.avatar}
          />
          <div className={css.nannyInfo}>
            <span className={css.tag}>Your nanny</span>
            <h4 className={css.nannyName}>{item.name}</h4>
          </div>
        </div>

        <form className={css.form} onSubmit={handleSubmit(onSubmit)}>
          <div className={css.inputGroup}>
            <div className={css.fieldWrapper}>
              <input
                {...register("address")}
                placeholder="Address"
                className={css.input}
              />
              {errors.address && (
                <span className={css.error}>{errors.address.message}</span>
              )}
            </div>
            <div className={css.fieldWrapper}>
              <input
                {...register("tel")}
                type="tel"
                placeholder="+380"
                className={css.input}
              />
              {errors.tel && (
                <span className={css.error}>{errors.tel.message}</span>
              )}
            </div>
          </div>

          <div className={css.inputGroup}>
            <div className={css.fieldWrapper}>
              <input
                {...register("childAge")}
                placeholder="Child's age"
                className={css.input}
              />
              {errors.childAge && (
                <span className={css.error}>{errors.childAge.message}</span>
              )}
            </div>
            <div className={css.fieldWrapper}>
              <div className={css.timeSelector} onClick={() => setOpen(!open)}>
                <span className={css.timeSelected}>{time}</span>
                <div className={css.iconTime}>
                  <TimeIcon />
                </div>
                {open && (
                  <ul className={css.dropdown}>
                    {options.map((opt) => (
                      <li
                        key={opt}
                        onClick={(e) => {
                          e.stopPropagation();
                          handleSelect(opt);
                        }}
                      >
                        {opt}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
              {errors.meetingTime && (
                <span className={css.error}>{errors.meetingTime.message}</span>
              )}
            </div>
          </div>

          <div className={css.fieldWrapper}>
            <input
              {...register("parentName")}
              placeholder="Father's or mother's name"
              className={css.inputLong}
            />
            {errors.parentName && (
              <span className={css.error}>{errors.parentName.message}</span>
            )}
          </div>

          <div className={css.fieldWrapper}>
            <input
              {...register("email")}
              type="email"
              placeholder="Email"
              className={css.inputLong}
            />
            {errors.email && (
              <span className={css.error}>{errors.email.message}</span>
            )}
          </div>

          <div className={css.fieldWrapper}>
            <textarea
              {...register("comment")}
              placeholder="Comment"
              className={css.textarea}
            ></textarea>
            {errors.email && (
              <span className={css.error}>{errors.comment.message}</span>
            )}
          </div>

          <Button type="submit" className={css.submitBtn}>
            Send
          </Button>
        </form>
      </div>
    </div>
  );
};

export default PopUp;
