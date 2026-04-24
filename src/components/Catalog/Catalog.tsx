"use client";
import css from "./Catalog.module.css";
import { useState, useEffect } from "react";
import { ref, onValue } from "firebase/database";
import { db } from "../../firebaseConfig";
import Item from "../Item/Item";
import { Babysitter } from "@/src/types";
import Filter from "../Filter/Filter";

const NanniesList = () => {
  const [nannies, setNannies] = useState<Babysitter[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const nanniesRef = ref(db);

    const unsubscribe = onValue(
      nanniesRef,
      (snapshot) => {
        const data = snapshot.val();
        if (data) {
          const list = Array.isArray(data) ? data : Object.values(data);
          setNannies(list as Babysitter[]);
        }
        setLoading(false);
      },
      (error) => {
        console.error("Ошибка при получении данных:", error);
        setLoading(false);
      }
    );

    return () => unsubscribe();
  }, []);

  if (loading) return <div>Searching for nannies...</div>;

  return (
    <div className={css.container}>
      <Filter />
      <ul className={css.list}>
        {nannies.map((item, index) => (
          <Item key={index} item={item} />
        ))}
      </ul>
    </div>
  );
};

export default NanniesList;
