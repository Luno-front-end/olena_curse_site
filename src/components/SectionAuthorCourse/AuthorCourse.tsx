import React from "react";
import s from "./authorCourse.module.scss";

import imgMob from "../../img/olena_author_mob.jpeg";
import imgTablet from "../../img/olena_author_tablet.png";
import imgDesk from "../../img/olena_author_desk.png";
import { ReactComponent as BgImgTablet } from "../../img/bg_olena_author_tab.svg";
import { ReactComponent as BgImgDesk } from "../../img/bg_olena_author_desk.svg";
import cn from "classnames";
import { useViewportSizeDetection } from "../../hooks/useViewportSizeDetection";

const listInfo = [
  {
    text: "Успішний власник бізнесу на подобовій оренді вже більше 5-и років. ",
  },
  { text: "Автор навчального курсу побудови бізнесу на подобовій оренді" },
  { text: "Допомогла відкрити свій бізнес понад 50 осіб" },
  {
    text: "Отримала декілька нагород від всесвітньовідомих сайтів Booking.com та Airbnb",
  },
  {
    text: "Пройшла цей шлях сама без стартового капіталу. За перші два місяці вийшла на чистий дохід 900 $, коли було 5 квартир, чистий прибуток бізнесу становив 2000 $.",
  },
];

export const AuthorCourse = () => {
  const { viewportSize } = useViewportSizeDetection();
  const { width } = viewportSize;

  // const currentRenderImgBlock = () => {

  // }

  return (
    <section className={s.section}>
      <div className={cn("container", s.g_section_container)}>
        <h2 className={s.header}>Автор курсу</h2>
        <div className={s.container_img_with_firstInfo}>
          {width < 768 && (
            <div className={s.wrapper_img_author}>
              <img src={imgMob} alt="Олена автор" className={s.img_author} />

              <div className={s.container_author}>
                <div className={cn(s.wrapper_author)}>
                  <h3 className={s.name_author}>Лєньшина Олена</h3>
                </div>
              </div>
            </div>
          )}
          <div className={s.wrapper_list}>
            {width >= 768 && (
              <>
                <div className={s.bg_img_tablet_wrapper}>
                  {width >= 768 && width <= 1279 ? (
                    <BgImgTablet />
                  ) : (
                    <BgImgDesk className={s.bg_svg} />
                  )}
                </div>

                <img
                  src={width >= 768 && width <= 1279 ? imgTablet : imgDesk}
                  alt="Олена автор"
                  className={s.img_author}
                />
              </>
            )}
            <div>
              {width >= 768 && (
                <div className={s.container_author}>
                  <div className={cn(s.wrapper_author)}>
                    <h3 className={s.name_author}>Лєньшина Олена</h3>
                  </div>
                </div>
              )}
              <ul className={s.list}>
                {listInfo.map((item) => (
                  <li className={s.item}>
                    <p className={s.text}> {item.text}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className={s.wrapper_down_content_bg}>
          <div className={s.wrapper_down_content}>
            <h3 className={s.header_down_content}>
              Чому я вирішила цьому навчати?
            </h3>
            <p className={s.text_down_content}>
              Тому що хочу показати, що бізнес – це просто. Не потрібен якийсь
              особливий талант, або "підприємницька жилка". На оренді подобово
              може заробляти практично кожен, головне ваше бажання!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
