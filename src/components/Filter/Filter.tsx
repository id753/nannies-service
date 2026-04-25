import { ArrowDownIcon } from "../Icons/Icons";
import css from "./Filter.module.css";
import React, { useState } from "react";

interface FilterProps {
  className?: string;
  onClick?: () => void;
}

const Filter = ({ className = "" }: FilterProps) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("A to Z");

  const options = [
    { label: "A to Z", value: "A to Z" },
    { label: "Z to A", value: "Z to A" },
    { label: "Less than 10$", value: "Less" },
    { label: "Greater than 10$", value: "Greater" },
    { label: "Popular", value: "Popular" },
    { label: "Not popular", value: "Not popular" },
    { label: "Show all", value: "Show all" },
  ];

  const handleSelect = (label: string) => {
    setValue(label);
    setOpen(false);
  };

  return (
    <div className={`${css.filterContainer} ${className}`}>
      <div className={css.select} onClick={() => setOpen(!open)}>
        <div className={css.selected}>{value}</div>
        <div className={css.icon}>
          <ArrowDownIcon />
        </div>
      </div>

      {open && (
        <ul className={css.dropdown}>
          {options.map((opt) => (
            <li key={opt.value} onClick={() => handleSelect(opt.label)}>
              {opt.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Filter;
