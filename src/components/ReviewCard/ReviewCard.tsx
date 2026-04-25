import { StarIcon } from "../Icons/Icons";
import css from "./ReviewCard.module.css";

import React from "react";

const ReviewCard = () => {
  return (
    <li className={css.container}>
      <div className={css.containerFlex}>
        <div className={css.avatarContainer}>
          <span className={css.avatarLetter}>H</span>
        </div>
        <div className={css.DescripContainer}>
          <h4 className={css.name}>Olga K.</h4>

          <span className={css.rating}>
            <StarIcon className={css.icon} /> 5.0
          </span>
        </div>
      </div>
      <p className={css.text}>
        Anna is wonderful! My kids loved her and she was always punctual.
      </p>
    </li>
  );
};

export default ReviewCard;
