import React from "react";
import s from "./header.module.scss";
import cn from "classnames";

export const Header = () => {
  return (
    <header className={s.header}>
      <div className={cn("container", s.flex_size)}>
        <p className={s.info}>
          <span className={s.first_info}>5-ти денний інтенсив від</span>{" "}
          <span>Олени Лєньшиної</span>
        </p>
      </div>
    </header>
  );
};
