import React from "react";
import { Header } from "../Header/Header";
import cn from "classnames";

import s from "./hero.module.scss";

export const Hero = () => {
  return (
    <section className={s.hero}>
      <div className={cn("container")}>
        <div className={s.wrapper}>
          <div className={s.wrapper_info}>
            <p className={s.start}>старт # січня</p>
            <h1 className={s.info}>Бізнес - це просто!</h1>
            <h2 className={s.banner}>Запуск бізнесу на подобовій оренді.</h2>
          </div>
          <div className={s.wrapper_bonus}>
            <a href="#id" className={s.link_sale}>
              хочу зниижку 61%
            </a>
            <p className={s.bonus}>
              Після реєстрації ви отримаєте бонус : ТОП-50 сервісів для реклами.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
