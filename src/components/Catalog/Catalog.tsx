"use client";
import css from "./Catalog.module.css";
import { useState, useEffect, useMemo } from "react";
import { ref, onValue } from "firebase/database";
import { db } from "../../firebase/firebaseConfig";
import Item from "../Item/Item";
import { Babysitter } from "@/src/types";
import Filter from "../Filter/Filter";
import Button from "../UI/Button/Button";

const NanniesList = () => {
  const [nannies, setNannies] = useState<Babysitter[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState<string>("all");
  const [limit, setLimit] = useState(3);

  useEffect(() => {
    const nanniesRef = ref(db);
    const unsubscribe = onValue(nanniesRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const list = Array.isArray(data) ? data : Object.values(data);
        setNannies(list as Babysitter[]);
      }
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  const handleFilterChange = (newFilter: string) => {
    setFilter(newFilter);
    setLimit(3);
  };

  const sortedNannies = useMemo(() => {
    let result = [...nannies];

    switch (filter) {
      case "A-Z":
        result.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "Z-A":
        result.sort((a, b) => b.name.localeCompare(a.name));
        break;
      case "popular":
        result.sort((a, b) => b.rating - a.rating);
        break;
      case "not-popular":
        result.sort((a, b) => a.rating - b.rating);
        break;
      case "less-10":
        result = result.filter((n) => n.price_per_hour < 10);
        break;
      case "greater-10":
        result = result.filter((n) => n.price_per_hour >= 10);
        break;
      default:
        break;
    }
    return result;
  }, [nannies, filter]);

  const visibleNannies = useMemo(() => {
    return sortedNannies.slice(0, limit);
  }, [sortedNannies, limit]);

  const handleLoadMore = () => {
    setLimit((prev) => prev + 3);
  };

  if (loading)
    return <div className={css.loader}>Searching for nannies...</div>;

  return (
    <div className={css.section}>
      <Filter onChange={handleFilterChange} className={css.filter} />

      <div className={css.container}>
        {visibleNannies.length > 0 ? (
          <ul className={css.list}>
            {visibleNannies.map((item, index) => (
              <Item key={item.id || index} item={item} />
            ))}
          </ul>
        ) : (
          <p className={css.empty}>No nannies found.</p>
        )}

        {sortedNannies.length > limit && (
          <Button type="button" onClick={handleLoadMore} className={css.btn}>
            Load more
          </Button>
        )}
      </div>
    </div>
  );
};

export default NanniesList;
