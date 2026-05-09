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
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        const storageKey = `favorites_${user.uid}`;
        const saved = localStorage.getItem(storageKey);
        if (saved) {
          try {
            setFavorites(JSON.parse(saved));
          } catch (e) {
            console.error("Error parsing favorites", e);
            setFavorites([]);
          }
        }
      } else {
        setFavorites([]);
      }
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  const filteredFavorites = useMemo(() => {
    const searchWords = searchTerm
      .toLowerCase()
      .split(" ")
      .filter((word) => word.length > 0);

    let result = favorites.filter((n) => {
      if (searchWords.length === 0) return true;

      return searchWords.every((word) => {
        return (
          n.name?.toLowerCase().includes(word) ||
          n.location?.toLowerCase().includes(word) ||
          n.characters?.some((char) => char.toLowerCase().includes(word))
        );
      });
    });

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
      case "price-low":
        result.sort((a, b) => a.price_per_hour - b.price_per_hour);
        break;
      case "price-high":
        result.sort((a, b) => b.price_per_hour - a.price_per_hour);
        break;
      default:
        break;
    }

    return result;
  }, [favorites, filter, searchTerm]);

  const visible = filteredFavorites.slice(0, limit);

  const handleRemove = (id: string, isFav: boolean) => {
    if (!isFav) {
      setFavorites((prev) => prev.filter((n) => n.id !== id));
    }
  };

  return (
    <NanniesList
      nannies={visible}
      limit={limit}
      totalLength={filteredFavorites.length}
      isLoading={loading}
      searchValue={searchTerm}
      onSearchChange={(val) => {
        setSearchTerm(val);
        setLimit(3);
      }}
      onFilterChange={(val) => {
        setFilter(val);
        setLimit(3);
      }}
      onLoadMore={() => setLimit((prev) => prev + 3)}
      onItemChange={handleRemove}
      isMoreLoading={false}
      emptyMessage={
        searchTerm ? "No matches found." : "Your favorites list is empty."
      }
      description={
        searchTerm
          ? "Try adjusting your search keywords."
          : "Explore our mannies and click the heart icon to save them here."
      }
    />
  );
};
