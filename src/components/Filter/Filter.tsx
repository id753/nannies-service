import css from "./Filter.module.css";
import React from "react";

const Filter = () => {
  return (
    <div className={css.filterContainer}>
      <form className={css.form}>
        <label htmlFor="filter" className={css.label}>
          Filter
        </label>

        <div className={css.selectWrapper}>
          <select id="filter" name="filter" className={css.select}>
            <option value="az">A to Z</option>
            <option value="za">Z to A</option>
            <option value="less">Less than 10$</option>
            <option value="greater">Greater than 10$</option>
            <option value="pop">Popular</option>
            <option value="notPop">Not popular</option>
            <option value="all">Show all</option>
          </select>
        </div>
      </form>
    </div>
  );
};

export default Filter;
