"use client";

import { useState, useEffect, useMemo } from "react";
import { ref, onValue } from "firebase/database";
import { db } from "../../firebase/firebaseConfig";
import NanniesList from "../NanniesList/NanniesList";
import { Babysitter } from "@/src/types";

const Catalog = () => {
  const [nannies, setNannies] = useState<Babysitter[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("all");
  const [limit, setLimit] = useState(3);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const unsubscribe = onValue(ref(db), (snap) => {
      const data = snap.val();
      if (data) {
        const list = Array.isArray(data) ? data : Object.values(data);
        setNannies(list as Babysitter[]);
      }
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  const sorted = useMemo(() => {
    const searchWords = searchTerm
      .toLowerCase()
      .split(" ")
      .filter((word) => word.length > 0);

    let result = nannies.filter((n) => {
      if (searchWords.length === 0) return true;

      return searchWords.every((word) => {
        const matchesName = n.name?.toLowerCase().includes(word);
        const matchesCity = n.location?.toLowerCase().includes(word);
        const matchesCharacters = n.characters?.some((char) =>
          char.toLowerCase().includes(word)
        );

        return matchesName || matchesCity || matchesCharacters;
      });
    });

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
  }, [nannies, filter, searchTerm]);

  const visible = sorted.slice(0, limit);

  return (
    <NanniesList
      nannies={visible}
      limit={limit}
      totalLength={sorted.length}
      isLoading={loading}
      searchValue={searchTerm}
      onFilterChange={(value) => {
        setFilter(value);
        setLimit(3);
      }}
      onSearchChange={(value) => {
        setSearchTerm(value);
        setLimit(3);
      }}
      onLoadMore={() => setLimit((prev) => prev + 3)}
      isMoreLoading={false}
    />
  );
};

export default Catalog;
