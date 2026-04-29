"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { HeartIcon, LocationIcon, StarIcon } from "../Icons/Icons";
import css from "./Item.module.css";
import { Babysitter } from "@/src/types";
import { calculateAge } from "@/src/utils/calculateAge";
import ReviewCard from "../ReviewCard/ReviewCard";
import Button from "../UI/Button/Button";
import PopUp from "../PopUp/PopUp";
import { onAuthStateChanged, User } from "firebase/auth";
import { toast } from "sonner";
import { auth } from "@/src/firebase/firebaseConfig";

interface ItemProps {
  item: Babysitter;
}

const Item = ({ item }: ItemProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMoreLoading, setIsMoreLoading] = useState(false);
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  const storageKey = user ? `favorites_${user.uid}` : null;

  useEffect(() => {
    if (!storageKey) {
      setIsFavorite(false);
      return;
    }

    const saved = localStorage.getItem(storageKey);

    if (saved) {
      const favorites: Babysitter[] = JSON.parse(saved);
      setIsFavorite(favorites.some((fav) => fav.id === item.id));
    } else {
      setIsFavorite(false);
    }
  }, [item.id, storageKey]);

  const handleFavoriteClick = () => {
    if (!user || !storageKey) {
      toast.error("This functionality is available only for authorized users!");
      return;
    }

    const saved = localStorage.getItem(storageKey);
    const favorites: Babysitter[] = JSON.parse(saved || "[]");

    if (isFavorite) {
      const updated = favorites.filter((fav) => fav.id !== item.id);
      localStorage.setItem(storageKey, JSON.stringify(updated));
      setIsFavorite(false);
      toast.success("Removed from favorites");
    } else {
      favorites.push(item);
      localStorage.setItem(storageKey, JSON.stringify(favorites));
      setIsFavorite(true);
      toast.success("Added to favorites!");
    }
  };

  const toggleExpand = () => setIsExpanded((prev) => !prev);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleLoadMore = () => {
    setIsMoreLoading(true);
    setTimeout(() => {
      openModal();
      setIsMoreLoading(false);
    }, 500);
  };

  return (
    <li className={css.container}>
      <div className={css.avatarWrapper}>
        <div className={css.avatar}>
          <Image
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
          <button
            type="button"
            onClick={handleFavoriteClick}
            className={css.heartBtn}
          >
            <HeartIcon isFavorite={isFavorite} />
          </button>
        </div>

        <h3 className={css.name}>{item.name}</h3>

        <div className={css.features}>
          <p className={css.featureItem}>
            Age:{" "}
            <span className={css.accent}>{calculateAge(item.birthday)}</span>
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

        {!isExpanded && (
          <button type="button" className={css.readMore} onClick={toggleExpand}>
            Read more
          </button>
        )}

        {isExpanded && (
          <div className={css.expanded}>
            <ul className={css.reviewsList}>
              {item.reviews.map((review, index) => (
                <ReviewCard key={index} review={review} />
              ))}
            </ul>
            <Button
              disabled={isMoreLoading}
              className={css.btn}
              type="button"
              onClick={handleLoadMore}
            >
              {isMoreLoading ? (
                <span className={css.loader}></span>
              ) : (
                "Make an appointment"
              )}
            </Button>
          </div>
        )}

        {isModalOpen && <PopUp item={item} onClose={closeModal} />}
      </div>
    </li>
  );
};

export default Item;
