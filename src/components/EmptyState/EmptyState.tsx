import { HeartBrokenIcon } from "@/src/components/Icons/Icons";
import css from "./EmptyState.module.css";

interface EmptyStateProps {
  message: string;
  description?: string;
}

export const EmptyState = ({ message, description }: EmptyStateProps) => {
  return (
    <div className={css.wrapper}>
      <div className={css.iconContainer}>
        <HeartBrokenIcon className={css.icon} />
      </div>
      <p className={css.title}>{message}</p>
      {description && <p className={css.text}>{description}</p>}
    </div>
  );
};
