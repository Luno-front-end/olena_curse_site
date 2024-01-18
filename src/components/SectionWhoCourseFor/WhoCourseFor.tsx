import React, { FC } from "react";

import s from "./whoCourseFor.module.scss";

import { ReactComponent as QuestionMarkMob } from "../../img/question_mark_mob.svg";
import { ReactComponent as QuestionMarkDesk } from "../../img/question_mark_desk.svg";
import { useViewportSizeDetection } from "../../hooks/useViewportSizeDetection";

const dataSection = [
  {
    header: "Найманий робітник",
    text: "Який втомився від рутинної роботи, хоче свободи, розвитку та фінансового зростання",
  },
  {
    header: "Мама в декреті",
    text: `Яка шукає додатковий заробіток, який зможе поєднувати з сім'єю`,
  },
  {
    header: "Власник нерухомості",
    text: "Який хоче збільшити прибуток від своєї нерухомості більше ніж в 2 рази",
  },
  {
    header: "Підприємець",
    text: "Який шукає додаткове джерело доходу, щоб витрачати не більше 2х годин в день, і в перспективі перевести на пасивний дохід",
  },
  {
    header: "Бажаєш освоїти нову професію",
    text: "І заробляти додатково від 1000$, витрачаючи дві години на добу",
  },
  {
    header: "Студент",
    text: "Який шукає себе і справу, в якій зможе реалізувати свій потенціал, отримувати прибуток і не заважати навчанню",
  },
];

export const WhoCourseFor: FC = () => {
  const { viewportSize } = useViewportSizeDetection();

  return (
    <section className={s.section}>
      <div className="container">
        <h2 className={s.g_header}>Для кого цей курс?</h2>
        <div className={s.wrapper_lists}>
          <ul className={s.first_list}>
            {dataSection.map((item, i) => {
              if (i < 3) {
                return (
                  <li key={i} className={s.first_list_item}>
                    <h3 className={s.header}>{item.header}</h3>
                    <p className={s.text}>{item.text}</p>
                  </li>
                );
              }
            })}
          </ul>
          <ul className={s.last_list}>
            {dataSection.map((item, i) => {
              if (i > 2) {
                return (
                  <li key={i} className={s.last_list_item}>
                    <h3 className={s.header}>{item.header}</h3>
                    <p className={s.text}>{item.text}</p>
                  </li>
                );
              }
            })}
          </ul>
        </div>
      </div>
      {viewportSize.width < 1280 ? (
        <QuestionMarkMob className={s.QuestionMarkMob} />
      ) : (
        <QuestionMarkDesk className={s.QuestionMarkMob} />
      )}
    </section>
  );
};
