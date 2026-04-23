import Link from "next/link";
import { HeartIcon, LocationIcon, StarIcon } from "../Icons/Icons";
import css from "./Item.module.css";
import Image from "next/image";

const Item = () => {
  return (
    <div className={css.container}>
      <div className={css.avatarWrapper}>
        <div className={css.avatar}>
          <Image
            src="/test.jpg"
            alt="Maria Kovalenko"
            width={96}
            height={96}
            className={css.image}
          />
          <span className={css.onlineBadge}></span>
        </div>
      </div>

      {/* Правая колонка: Весь контент */}
      <div className={css.rightBlock}>
        {/* Верхняя строка: Статус, Локация, Рейтинг, Цена и Сердце */}
        <div className={css.headerRow}>
          <div className={css.infoSummary}>
            <span className={css.tag}>Nanny</span>

            <div className={css.stats}>
              <p className={css.statItem}>
                <LocationIcon /> Lviv, Ukraine
              </p>
              <p className={css.statItem}>
                <StarIcon /> Rating: 4.5
              </p>
              <p className={css.statItem}>
                Price / 1 hour: <span className={css.priceValue}>16$</span>
              </p>
            </div>
          </div>

          <button className={css.heartBtn}>
            <HeartIcon className={css.icon} />
          </button>
        </div>

        <h3 className={css.name}>Maria Kovalenko</h3>

        {/* Сетка характеристик   */}
        <div className={css.features}>
          <p className={css.featureItem}>
            Age: <span className={css.accent}>32</span>
          </p>
          <p className={css.featureItem}>
            Experience: <span className={css.accent}>7 years</span>
          </p>
          <p className={css.featureItem}>
            Kids Age:{" "}
            <span className={css.accent}>6 months to 8 years old</span>
          </p>
          <p className={css.featureItem}>
            Characters:{" "}
            <span className={css.accent}>
              Compassionate, Knowledgeable, Adaptive, Trustworthy
            </span>
          </p>
          <p className={css.featureItem}>
            Education:{" "}
            <span className={css.accent}>
              Masters in Child Psychology, CPR Ce
            </span>
          </p>
        </div>

        <p className={css.description}>
          I have a passion for teaching and mentoring children. I aim to help
          them grow and learn in a safe and loving environment. I am also a
          trained child psychologist, which helps me in understanding and
          catering to the unique needs of every child.
        </p>

        <Link href="/" className={css.readMore}>
          Read more
        </Link>
      </div>
    </div>
  );
};

export default Item;
