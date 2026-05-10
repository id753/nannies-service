"use client";

import css from "./SearchInput.module.css";

interface SearchInputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  label?: string;
}

const SearchInput = ({
  value,
  onChange,
  placeholder = "Search...",
  label = "Search",
}: SearchInputProps) => {
  const inputId = "search-input";

  return (
    <div className={css.searchWrapper}>
      <label htmlFor={inputId} className="visuallyHidden">
        {label}
      </label>

      <input
        id={inputId}
        type="text"
        className={css.input}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
      />

      {value && (
        <button
          className={css.clearBtn}
          onClick={() => onChange("")}
          aria-label="Clear search"
        >
          ✕
        </button>
      )}
    </div>
  );
};

export default SearchInput;
