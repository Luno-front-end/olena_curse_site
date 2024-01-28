import React from "react";
import s from "./reviews.module.scss";

export const Reviews = () => {
  return (
    <section className={s.section}>
      <div className="container">
        <h2 className={s.header}>Відгуки</h2>
        <div className={s.wrapper_list}></div>
      </div>
    </section>
  );
};
