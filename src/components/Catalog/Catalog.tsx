"use client";

import { useState, useEffect } from "react";
import { ref, onValue } from "firebase/database";
import { db } from "../../firebaseConfig";
import Image from "next/image";
import Item from "../Item/Item";

// 1. Опишем интерфейс няни, чтобы TS не ругался
interface Nanny {
  id: string | number;
  name: string;
  avatar_url: string;
  birthday: string;
  experience: string;
  price_per_hour: number;
  // добавь остальные поля, которые есть в твоем JSON
}

const NanniesList = () => {
  // Указываем тип состояния <Nanny[]>
  const [nannies, setNannies] = useState<Nanny[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const nanniesRef = ref(db);

    const unsubscribe = onValue(
      nanniesRef,
      (snapshot) => {
        const data = snapshot.val();
        if (data) {
          const list = Array.isArray(data) ? data : Object.values(data);
          setNannies(list as Nanny[]);
        }
        setLoading(false);
      },
      (error) => {
        console.error("Ошибка при получении данных:", error);
        setLoading(false);
      }
    );

    return () => unsubscribe(); // Чистим подписку при размонтировании
  }, []);

  if (loading) return <div>Загрузка нянь...</div>;

  return (
    <ul style={{ listStyle: "none", padding: 0 }}>
      {nannies.map((item, index) => (
        <Item key={index} item={item} />
      ))}
    </ul>
  );
};

export default NanniesList;
