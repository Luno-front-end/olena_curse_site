import React from "react";

import s from "./howTraining.module.scss";
import img from "../../img/olena_course_mob.png";

export const HowTraining = () => {
  return (
    <section className={s.section}>
      <div className="container">
        <h2 className={s.header}>Як проходить навчання</h2>
        <div className={s.wrapper_content}>
          <img src={img} alt="Олена" className={s.img_section} />
          <div className={s.wrapper_text}>
            <div className={s.background}></div>
            <p className={s.text}>
              Після оплати ви отримуєте доступ до чату, де буде проходити
              інтенсив.
            </p>
            <p className={s.text}>
              Всі теми я буду розкривати голосовими повідомленнями, а також
              надаватиму короткий підсумок. Після кожної теми я буду давати вам
              коротке домашнє завдання. Паралельно буду відповідати на ваші
              питання. Ще в кінці нашого курсу ми зробимо сесію
              "Питання-відповіді".
            </p>
            <p className={s.text}>
              Ви можете займатись в будь-який зручний для вас час, в будь-якому
              місці, крім телефону або ноутбуку (за бажанням) вам нічого більше
              не потрібно.
            </p>
            <p className={s.text}>
              Доступ до уроків буде зберігатись для вас 1 місяць, та за бажанням
              ви завжди можете його продовжити. Ви можете передивлятись уроки
              скільки вам потрібно для розуміння кроків побудови вашого бізнесу
              на подобовій оренді.
            </p>
            <p className={s.text}>
              Всі теми на інтенсиві будуть розкриватись голосовими
              повідомленнями для кращого освоєння та включає в себе запуск
              бізнесу від початку і маштабування та переходу на автоматизацію
              процесу.
            </p>
          </div>
        </div>
        {/* <div className={ s.wrapper_content}></div> */}
      </div>
    </section>
  );
};
