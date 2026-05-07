"use client";

import css from "./NanniesList.module.css";
import Item from "../Item/Item";
import { Babysitter } from "@/src/types";
import Filter from "../Filter/Filter";
import Button from "../UI/Button/Button";
import Loader from "../UI/Loader/Loader";
import { HeartBrokenIcon } from "../Icons/Icons";
import { EmptyState } from "../EmptyState/EmptyState";
import { useMemo } from "react";

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
  description?: string;
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
  emptyMessage = "No mannies found.",
  description = "We couldn't find any mannies for your current search criteria.",
}: NanniesListProps) => {
  const nanniesWithStatus = useMemo(() => {
    return nannies.map((item): Babysitter => {
      const idCode = item.id ? item.id.charCodeAt(item.id.length - 1) : 0;

      const status: "online" | "offline" =
        idCode % 2 === 0 ? "online" : "offline";

      return {
        ...item,
        status,
      };
    });
  }, [nannies]);

  if (isLoading) return <Loader />;

  return (
    <section className={css.section}>
      <div className={css.container}>
        <Filter onChange={onFilterChange} className={css.filter} />

        {nannies.length > 0 ? (
          <ul className={css.list}>
            {nanniesWithStatus.map((item) => (
              <Item key={item.id} item={item} onFavoriteChange={onItemChange} />
            ))}
          </ul>
        ) : (
          <div className={css.empty}>
            <EmptyState message={emptyMessage} description={description} />
          </div>
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
