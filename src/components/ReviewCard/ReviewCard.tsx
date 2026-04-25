import { StarIcon } from "../Icons/Icons";
import css from "./ReviewCard.module.css";

import React from "react";
interface Review {
  reviewer: string;
  rating: number;
  comment: string;
}

interface ReviewCardProps {
  review: Review;
}

const ReviewCard = ({ review }: ReviewCardProps) => {
  return (
    <li className={css.container}>
      <div className={css.containerFlex}>
        <div className={css.avatarContainer}>
          <span className={css.avatarLetter}>G</span>
        </div>
        <div className={css.DescripContainer}>
          <h4 className={css.name}>{review.reviewer}</h4>

          <span className={css.rating}>
            <StarIcon className={css.icon} /> {review.rating.toFixed(1)}
          </span>
        </div>
      </div>
      <p className={css.text}>{review.comment}</p>
    </li>
  );
};

export default ReviewCard;
