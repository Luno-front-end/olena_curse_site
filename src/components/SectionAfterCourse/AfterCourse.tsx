import React, { FC } from "react";

import s from "./afterCourse.module.scss";

// import { ReactComponent as QuestionMarkMob } from "../../img/question_mark_mob.svg";
// import { ReactComponent as QuestionMarkDesk } from "../../img/question_mark_desk.svg";
// import { useViewportSizeDetection } from "../../hooks/useViewportSizeDetection";

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
  // const { viewportSize } = useViewportSizeDetection();

  // console.log(viewportSize);
  return (
    <section className={s.section}>
      <div className="container">
        <h2 className={s.g_header}>Після курсу</h2>
        <div className={s.wrapper_lists}>
          <img src="" alt="" />
          <ul className={s.last_list}>
            {dataSection.map((item, i) => (
              <li key={i} className={s.last_list_item}>
                <p className={s.text}>{item.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {/* {viewportSize.width < 1280 ? (
        <QuestionMarkMob className={s.QuestionMarkMob} />
      ) : (
        <QuestionMarkDesk className={s.QuestionMarkMob} />
      )} */}
    </section>
  );
};
