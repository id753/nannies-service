import { FavoritesList } from "@/src/components/FavoritesList/FavoritesList";
import css from "./page.module.css";

const FavoritesPage = () => {
  return (
    <section className={css.section}>
      <FavoritesList />
    </section>
  );
};

export default FavoritesPage;
