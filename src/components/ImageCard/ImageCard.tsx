import css from "./ImageCard.module.css";
import React from "react";

type Props = {
  info: {
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
