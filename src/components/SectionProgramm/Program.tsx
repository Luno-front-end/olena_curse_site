import React, { FC, MouseEvent, useRef, useState } from "react";
import cn from "classnames";
import { ReactComponent as ArrowDown } from "../../img/arrow_down.svg";

import s from "./Program.module.scss";
import { CustomLink } from "../CustonLink/CustomLink";

interface IListsSteps {
  header: string;
  text: string[];
  day: string;
}

const listsSteps: IListsSteps[] = [
  {
    header: "Як будується бізнес на подобовій оренді",
    text: [
      "основні принципи бізнесу на подобовій оренді",
      "де брати нерухомість для роботи",
      "скільки квартир варто брати на початку шляху",
      "нескінченний потік ідей",
    ],
    day: "1",
  },
  {
    header:
      "Яку локацію (місто/район/мікрорайон) варто вибирати для квартири в суборенду",
    text: ["аналіз ринку", '"магніти" для гостей', "чому Ваш район найкращий"],
    day: "2",
  },
  {
    header: "Як знаходимо квартири",
    text: [
      "де знаходити вигідні квартири",
      "що має бути в квартирі",
      "умови договору з власником",
    ],
    day: "3",
  },
  {
    header: "Маркетинг",
    text: [
      "як здавати квартири 30 днів в місяць",
      "як фотографувати",
      `правильна об'ява`,
      `на яких сайтах розміщувати об'яви`,
    ],
    day: "4",
  },
  {
    header: "Як почати цей бізнес без вкладень та безпека бізнесу",
    text: [
      "які інвестиції потрібно для початку бізнесу",
      "чому цей бізнес безпечний для вас та ваших квартир",
      "як здавати квартири тільки перевіреним гостям",
    ],
    day: "5",
  },
];

export const Program: FC = () => {
  const [isActiveDropdown, setIsActiveDropdown] = useState<number | null>(null);

  const handleClick = (e: MouseEvent<HTMLButtonElement>, ind?: number) => {
    e.preventDefault();
    if (isActiveDropdown === ind) {
      setIsActiveDropdown(null);
    } else {
      setIsActiveDropdown(ind as number);
    }
  };

  return (
    <section className={s.section}>
      <div className="container">
        <h2 className={s.header}>Програма</h2>
        <div className={s.wrapper_content}>
          <ul className={s.list}>
            {listsSteps.map((item, i) => (
              <li className={s.item} key={i}>
                <CustomLink
                  id={`${i}`}
                  type="button"
                  customType="button"
                  customClass={s.wrapper_header_btn}
                  handleClick={(e) => handleClick(e, i)}
                >
                  <p className={s.days_step}>День {item.day}</p>
                  <div className={s.wrapper_header}>
                    <p className={s.header_dropdown}>
                      <span>{item.header}</span>
                    </p>
                    <div>
                      <ArrowDown
                        className={cn(
                          isActiveDropdown === i ? s.arrow_up : s.arrow_down
                        )}
                      />
                    </div>
                  </div>
                </CustomLink>

                <ul
                  className={cn(
                    s.list_text,
                    isActiveDropdown === i ? s.active : ""
                  )}
                >
                  {item.text.map((itemText, ind) => (
                    <li className={s.item_text} key={ind}>
                      <p className={s.text_dropdown}>{itemText}</p>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
