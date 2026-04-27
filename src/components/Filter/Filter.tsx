import { ArrowDownIcon } from "../Icons/Icons";
import css from "./Filter.module.css";
import React, { useState } from "react";

interface FilterProps {
  className?: string;
  onClick?: () => void;
  onChange: (value: string) => void;
}

const Filter = ({ onChange, className = "" }: FilterProps) => {
  const [open, setOpen] = useState(false);
  const [label, setLabel] = useState("A to Z");

  const options = [
    { label: "A to Z", value: "A-Z" },
    { label: "Z to A", value: "Z-A" },
    { label: "Less than 10$", value: "less-10" },
    { label: "Greater than 10$", value: "greater-10" },
    { label: "Popular", value: "popular" },
    { label: "Not popular", value: "not-popular" },
    { label: "Show all", value: "all" },
  ];

  const handleSelect = (selectedLabel: string, selectedValue: string) => {
    setLabel(selectedLabel);
    setOpen(false);
    onChange(selectedValue);
  };

  return (
    <div className={`${css.filterContainer} ${className}`}>
      <div className={css.select} onClick={() => setOpen(!open)}>
        <div className={css.selected}>{label}</div>
        <div className={css.icon}>
          <ArrowDownIcon />
        </div>
      </div>

      {open && (
        <ul className={css.dropdown}>
          {options.map((opt) => (
            <li
              key={opt.value}
              onClick={() => handleSelect(opt.label, opt.value)}
            >
              {opt.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Filter;
