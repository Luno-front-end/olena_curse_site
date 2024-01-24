import React from "react";
import cn from "classnames";

import s from "./hero.module.scss";
import { CustomLink } from "../CustonLink/CustomLink";

export const Hero = () => {
  return (
    <section className={s.hero}>
      <div className={s.wrapper}>
        <div className={s.wrapper_info}>
          <div className={cn(s.wrapper_banner)}>
            <p className={s.info_top}>
              <span className={s.first_info_top}>5-ти денний інтенсив від</span>{" "}
              <span>Олени Лєньшиної</span>
            </p>
          </div>
          <p className={s.start}>старт # січня</p>
          <div className={s.wrapper_header_business}>
            <h1 className={s.info}>Бізнес - це просто!</h1>
          </div>
          <div className={s.wrapper_banner_hero}>
            <h2 className={s.banner}>Запуск бізнесу на подобовій оренді.</h2>
          </div>{" "}
        </div>
        <div className={s.wrapper_bonus}>
          <CustomLink customClass={s.link_sale} id="id">
            хочу знижку 61%
          </CustomLink>

          <div>
            <p className={s.bonus}>
              Після реєстрації ви отримаєте бонус : ТОП-50 сервісів для реклами.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
