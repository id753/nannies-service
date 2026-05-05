"use client";

import css from "./NanniesList.module.css";
import Item from "../Item/Item";
import { Babysitter } from "@/src/types";
import Filter from "../Filter/Filter";
import Button from "../UI/Button/Button";
import Loader from "../UI/Loader/Loader";

interface NanniesListProps {
  nannies: Babysitter[];
  onFilterChange: (val: string) => void;
  onLoadMore: () => void;
  onItemChange?: (id: string, isFav: boolean) => void;
  limit: number;
  totalLength: number;
  isMoreLoading: boolean;
  isLoading: boolean;
  emptyMessage?: string;
}

const NanniesList = ({
  nannies,
  onFilterChange,
  onLoadMore,
  onItemChange,
  limit,
  totalLength,
  isMoreLoading,
  isLoading,
  emptyMessage,
}: NanniesListProps) => {
  if (isLoading) return <Loader />;

  return (
    <section className={css.section}>
      <div className={css.container}>
        <Filter onChange={onFilterChange} className={css.filter} />

        {nannies.length > 0 ? (
          <ul className={css.list}>
            {nannies.map((item) => (
              <Item key={item.id} item={item} onFavoriteChange={onItemChange} />
            ))}
          </ul>
        ) : (
          <p className={css.empty}>{emptyMessage || "No nannies found."}</p>
        )}

        {totalLength > limit && (
          <Button
            onClick={onLoadMore}
            className={css.btn}
            disabled={isMoreLoading}
          >
            {isMoreLoading ? <span className={css.loader}></span> : "Load more"}
          </Button>
        )}
      </div>
    </section>
  );
};

export default NanniesList;
