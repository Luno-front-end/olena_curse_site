import React from "react";
import s from "./coursePricedLow.module.scss";

export const CoursePricedLow = () => {
  return (
    <section className={s.section}>
      <div className="container">
        <div className={s.wrapper_info}>
          <h2 className={s.header}>Чому цей курс має таку низьку ціну?</h2>
          <div className={s.wrapper_text}>
            <p className={s.text}>
              Я хочу, щоб кожен мав можливість вивчити мою модель побудови
              бізнесу всього за 428грн.
            </p>
            <p className={s.text}>
              Моя місія - дати вам дивовижні результати за допомогою цього
              вступного курсу. А якщо вам все сподобається та ви захочете
              зануритись в цю тему глибше - я запропоную вам повноцінний курс на
              2 місяці, що складається з 12 модулів та 56 уроків, додаткових
              матеріалів та практичних занять, 9 живих онлайн-зустрічей та
              особистого мого менторства над вашими проектами.
            </p>
            <p className={s.text}>
              Не пропустіть цей шанс зробити революцію в запуску бізнесу за
              допомогою моделі VIP apartment. Реєструйтеся на 5-денний освітній
              інтенсив "Як запустити бізнес на подобовій оренді" та розпочніть
              свій шлях до успіху вже сьогодні!
            </p>
            <p className={s.text}>
              Відкрийте для себе потенціал запуску бізнесу та розгадайте
              секрети  постійного заселення, зростання попиту та цін на ваші
              квартири та збільшення прибутку. Цей унікальний підхід до бізнесу
              на чужій нерухомості відкриє перед вами нові можливості та надасть
              вам необхідну перевагу на конкурентному ринку.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
