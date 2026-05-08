"use client";
import css from "./SearchInput.module.css";

interface SearchInputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

const SearchInput = ({
  value,
  onChange,
  placeholder = "Search...",
}: SearchInputProps) => {
  return (
    <div className={css.searchWrapper}>
      <input
        type="text"
        className={css.input}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
      />
      {value && (
        <button className={css.clearBtn} onClick={() => onChange("")}>
          ✕
        </button>
      )}
    </div>
  );
};

export default SearchInput;
