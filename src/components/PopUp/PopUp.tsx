"use client";

import css from "./PopUp.module.css";
import { CloseIcon, TimeIcon } from "../Icons/Icons";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Button from "../UI/Button/Button";
import { Babysitter } from "@/src/types";
import { generateTimeOptions } from "@/src/utils/generateTimeOptions";

interface ModalProps {
  onClose: () => void;
  item: Babysitter;
}

const PopUp = ({ onClose, item }: ModalProps) => {
  const [open, setOpen] = useState(false);
  const [time, setTime] = useState("Meeting time");

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) onClose();
  };

  const handleSelect = (label: string) => {
    setTime(label);
    setOpen(false);
  };

  const options = generateTimeOptions();

  return (
    <div className={css.backdrop} onClick={handleBackdropClick}>
      <div className={css.modal}>
        <button onClick={onClose} className={css.closeBtn} type="button">
          <CloseIcon />
        </button>

        <h3 className={css.title}>Make an appointment with a babysitter</h3>
        <p className={css.text}>
          Arranging a meeting with a caregiver for your child is the first step
          to creating a safe and comfortable environment. Fill out the form
          below so we can match you with the perfect care partner.
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

        <form className={css.form} onSubmit={(e) => e.preventDefault()}>
          <div className={css.inputGroup}>
            <input type="text" placeholder="Address" className={css.input} />
            <input type="text" placeholder="+380" className={css.input} />
          </div>

          <div className={css.inputGroup}>
            <input
              type="text"
              placeholder="Child's age"
              className={css.input}
            />

            <div className={css.timeSelector} onClick={() => setOpen(!open)}>
              <div className={css.timeSelected}>{time}</div>
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
          </div>

          <input
            type="text"
            placeholder="Father's or mother's name"
            className={css.inputLong}
          />
          <input type="email" placeholder="Email" className={css.inputLong} />
          <textarea placeholder="Comment" className={css.textarea}></textarea>

          <Button type="submit" className={css.submitBtn}>
            Send
          </Button>
        </form>
      </div>
    </div>
  );
};

export default PopUp;
