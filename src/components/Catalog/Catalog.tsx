// components/Catalog/Catalog.tsx
"use client";
import rawData from "../../data/babysitters.json";
import { useState } from "react";
// import { Car, getCars } from "../../services/lib/api";
import Item from "../Item/Item";
import css from "./Catalog.module.css";
import { useSearchParams } from "next/navigation";

interface CatalogProps {
  // initialCars: Car[];
  totalPages: number;
}

const Catalog = ({ totalPages }: CatalogProps) => {
  // const [cars, setCars] = useState<Car[]>(initialCars);
  const [page, setPage] = useState(1);
  // const [isLoading, setIsLoading] = useState(false);
  const babysitters = rawData.map((sitter, index) => ({
    ...sitter,
    id: sitter.name + index, // Создаем временный ID из имени и индекса
  }));
  // const searchParams = useSearchParams();

  const showButton = page < totalPages;

  // const handleLoadMore = async () => {
  //   if (isLoading) return;
  //   setIsLoading(true);

  //   const nextPage = page + 1;

  //   try {
  //     const currentFilters = Object.fromEntries(searchParams.entries());

  //     const data = await getCars(nextPage, 12, currentFilters);

  //     const newCars = data.cars;

  //     if (newCars && newCars.length > 0) {
  //       setCars((prev) => [...prev, ...newCars]);
  //       setPage(nextPage);
  //     }
  //   } catch (error) {
  //     console.error("Failed to load cars", error);
  //   } finally {
  //     setIsLoading(false);
  //   }
  // };

  return (
    <section className={css.section}>
      <ul className={css.list}>
        {babysitters.map((item) => (
          <li key={item.id}>
            <Item item={item} />
          </li>
        ))}
      </ul>

      {/* {showButton && (
        <button
          onClick={handleLoadMore}
          className={css.button}
          disabled={isLoading}
        >
          {isLoading ? "Loading..." : "Load more"}
        </button>
      )} */}
    </section>
  );
};

export default Catalog;
