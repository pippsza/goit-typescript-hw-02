import css from "./LoadMoreBtn.module.css";
import React from "react";
type Props = {
  onClick: () => void;
};
export default function LoadMoreBtn({ onClick }: Props) {
  return (
    <button className={css.button} onClick={onClick}>
      Load more!
    </button>
  );
}
