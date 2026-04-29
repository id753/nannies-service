import { FavoritesList } from "@/src/components/FavoritesList/FavoritesList";
import css from "./page.module.css";

const FavoritesPage = () => {
  return (
    <section className={css.section}>
      {/* <div className={css.container}> */}
      <FavoritesList />
      {/* </div> */}
    </section>
  );
};

export default FavoritesPage;
