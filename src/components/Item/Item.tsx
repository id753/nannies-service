import Link from "next/link";
import { HeartIcon, LocationIcon, StarIcon } from "../Icons/Icons";
import css from "./Item.module.css";
import Image from "next/image";
import { Babysitter } from "@/src/types";
import { calculateAge } from "@/src/utils/calculateAge";

interface ItemProps {
  item: Babysitter;
}
const Item = ({ item }: ItemProps) => {
  return (
    <li className={css.container}>
      <div className={css.avatarWrapper}>
        <div className={css.avatar}>
          <Image
            // todo /default-avatar
            src={item.avatar_url || "/default-avatar.png"}
            alt={item.name}
            width={96}
            height={96}
            className={css.image}
            unoptimized
          />
          <span className={css.onlineBadge}></span>
        </div>
      </div>

      <div className={css.rightBlock}>
        <div className={css.headerRow}>
          <div className={css.infoSummary}>
            <span className={css.tag}>Nanny</span>

            <div className={css.stats}>
              <p className={css.statItem}>
                <LocationIcon /> {item.location}
              </p>
              <p className={css.statItem}>
                <StarIcon /> Rating: {item.rating}
              </p>
              <p className={css.statItem}>
                Price / 1 hour:{" "}
                <span className={css.priceValue}>{item.price_per_hour}$</span>
              </p>
            </div>
          </div>

          <button className={css.heartBtn}>
            <HeartIcon className={css.icon} />
          </button>
        </div>

        <h3 className={css.name}>{item.name}</h3>

        <div className={css.features}>
          <p className={css.featureItem}>
            Age:{" "}
            <span className={`${css.accent} ${css.underlined}`}>
              {calculateAge(item.birthday)}
            </span>
          </p>
          <p className={css.featureItem}>
            Experience: <span className={css.accent}>{item.experience}</span>
          </p>
          <p className={css.featureItem}>
            Kids Age: <span className={css.accent}>{item.kids_age}</span>
          </p>
          <p className={css.featureItem}>
            Characters:{" "}
            <span className={css.accent}>
              {Array.isArray(item.characters)
                ? item.characters.join(", ")
                : item.characters}
            </span>
          </p>
          <p className={css.featureItem}>
            Education: <span className={css.accent}>{item.education}</span>
          </p>
        </div>

        <p className={css.description}>{item.about}</p>

        <Link href={`/nannies/${item.name}`} className={css.readMore}>
          Read more
        </Link>
      </div>
    </li>
  );
};

export default Item;
