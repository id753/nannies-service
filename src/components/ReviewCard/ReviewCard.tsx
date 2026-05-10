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
  const firstLetter = review.reviewer[0]?.toUpperCase() || "?";
  return (
    <li className={css.container}>
      <div className={css.containerFlex}>
        <div className={css.avatarContainer}>
          <span className={css.avatarLetter}>{firstLetter}</span>
        </div>
        <div className={css.DescripContainer}>
          <h3 className={css.name}>{review.reviewer}</h3>

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
