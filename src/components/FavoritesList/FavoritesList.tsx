"use client";

import { useEffect, useState, useMemo } from "react";
import { auth } from "@/src/firebase/firebaseConfig";
import NanniesList from "../NanniesList/NanniesList";
import { Babysitter } from "@/src/types";

export const FavoritesList = () => {
  const [favorites, setFavorites] = useState<Babysitter[]>([]);
  const [filter, setFilter] = useState("all");
  const [limit, setLimit] = useState(3);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        const storageKey = `favorites_${user.uid}`;
        const saved = localStorage.getItem(storageKey);
        if (saved) {
          setFavorites(JSON.parse(saved));
        }
      } else {
        setFavorites([]);
      }
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  const sorted = useMemo(() => {
    let result = [...favorites];

    switch (filter) {
      case "A-Z":
      case "asc":
        result.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "Z-A":
      case "desc":
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
  }, [favorites, filter]);

  const visible = sorted.slice(0, limit);

  const handleRemove = (id: string, isFav: boolean) => {
    if (!isFav) {
      setFavorites((prev) => prev.filter((n) => n.id !== id));
    }
  };

  return (
    <NanniesList
      nannies={visible}
      limit={limit}
      totalLength={sorted.length}
      isLoading={loading}
      onFilterChange={(val) => {
        setFilter(val);
        setLimit(3);
      }}
      onLoadMore={() => setLimit((prev) => prev + 3)}
      onItemChange={handleRemove}
      isMoreLoading={false}
      emptyMessage="Your favorites list is empty."
      description="Explore our mannies and click the heart icon to save them here."
    />
  );
};
