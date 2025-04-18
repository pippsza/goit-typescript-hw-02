import css from "./ImageCard.module.css";
import React from "react";
import { BackendObj } from "../../types/BackendObj";
type Props = {
  info: BackendObj;
  openModal: (arg: string) => void;
};

export default function ImageCard({ info, openModal }: Props) {
  return (
    <div
      className={css.container}
      style={{
        cursor: "pointer",
        border: `solid 4px ${info.color}`,
      }}
    >
      <img
        onClick={() => {
          openModal(info.urls.regular);
        }}
        className={css.img}
        src={info.urls.small}
        alt={info.alt_description}
      />
      <p>UserName: {info.user.username}</p>
      <p>Likes: {info.user.total_likes}</p>
    </div>
  );
}
