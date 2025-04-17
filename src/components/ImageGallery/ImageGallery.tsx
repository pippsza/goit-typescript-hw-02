import ImageCard from "../ImageCard/ImageCard";
import css from "../ImageGallery/ImageGallery.module.css";
import React from "react";
type BackendObj = {
  color: string;
  alt_description: string;
  urls: {
    regular: string;
    small: string;
  };
  user: {
    username: string;
    total_likes: number;
  };
  id: string;
};
type Props = {
  items: BackendObj[];
  openModal: (arg: string) => void;
};
export default function ImageGallery({ items, openModal }: Props) {
  return (
    <div className={css.container}>
      <ul className={css.list}>
        {items.map((image) => (
          <li key={image.id} className={css.item}>
            <ImageCard info={image} openModal={openModal} />
          </li>
        ))}
      </ul>
    </div>
  );
}
