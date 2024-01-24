import React, { FC } from "react";

import s from "./afterCourse.module.scss";

import imgOlena from "../../img/olena_mob.png";
import { ReactComponent as OlenaName } from "../../img/olena_name_mob.svg";
import { ReactComponent as OlenaNameDesk } from "../../img/olena_name_desk.svg";
import { useViewportSizeDetection } from "../../hooks/useViewportSizeDetection";

const dataSection = [
  {
    text: "Зможете відкрити власний працюючий бізнес!",
  },
  {
    text: "Дізнаєтесь, як почати бізнес на подобовій оренді без вкладень.",
  },
  {
    text: "Зможете розрізняти прибуткові квартири від неприбуткових.",
  },
  {
    text: "Дізнаєтесь, як здавати квартири 30 днів в місяць без простоїв.",
  },
  {
    text: "Будете знати де шукати гостей та як вони знаходять вас.",
  },
  {
    text: "Навчитесь переконувати власників, що саме ви - найкращий орендар для них.",
  },
  {
    text: "Навчитесь вести цей бізнес віддалено, з допомогою делегування та дистанційного заселення гостей.",
  },
];

export const AfterCourse: FC = () => {
  const { viewportSize } = useViewportSizeDetection();

  return (
    <section className={s.section}>
      <div className="container">
        <h2 className={s.g_header}>Після курсу</h2>
        <div className={s.wrapper_content}>
          <div className={s.wrapper_img}>
            <div className={s.gradient_overlay}></div>
            <img src={imgOlena} alt="Олена" className={s.img_olena} />
            {viewportSize.width < 1280 ? (
              <OlenaName className={s.olenaName_svg} />
            ) : (
              <OlenaNameDesk className={s.olenaName_svg} />
            )}
          </div>
          <div className={s.wrapper_lists}>
            <ul className={s.list}>
              {dataSection.map((item, i) => (
                <li key={i} className={s.list_item}>
                  <p className={s.text}>{item.text}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
