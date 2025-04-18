import ImageCard from "../ImageCard/ImageCard";
import css from "../ImageGallery/ImageGallery.module.css";
import React from "react";
import { BackendObj } from "../../types/BackendObj";
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
