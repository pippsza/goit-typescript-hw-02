import css from "./SearchBar.module.css";
import React, { FormEvent } from "react";
type Props = { onSearch: (arg: string) => void };
export default function SearchBar({ onSearch }: Props) {
  const handleSubmit = (ev: FormEvent) => {
    ev.preventDefault();
    onSearch(ev.target[0].value);
  };
  return (
    <header className={css.header}>
      <form className={css.form} onSubmit={handleSubmit}>
        <input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <button type="submit">Search</button>
      </form>
    </header>
  );
}
