import React from "react";
import s from "./extendedGuarantee.module.scss";

export const ExtendedGuarantee = () => {
  return (
    <section className={s.section}>
      <div className="container">
        <div className={s.wrapper_info}>
          <div className={s.background}></div>
          <h2 className={s.header}>Розширена гарантія повернення коштів</h2>
          <div className={s.wrapper_text}>
            <p className={s.text}>
              Ваш результат - мій головний пріоритет. Саме тому я пропоную
              розширену 14-денну гарантію повернення коштів за Інтенсив бізнесу
              на подобовій оренді. Я впевнена, що мій курс буде корисним для
              вас, але якщо з якихось причин ви не будете повністю задоволені,
              просто повідомте мені про це протягом 14 днів після покупки, і я
              поверну вам гроші без жодних запитань.
            </p>
            <p className={s.text}>
              Я хочу, щоб ви могли інвестувати в мій інтенсив без жодного
              ризику, і ця розширена гарантія - спосіб показати мою відданість
              вашому успіху.
            </p>
            <p className={s.text}>
              Отже, реєструйтеся на Інтенсив побудови бізнесу на подобовій
              оренді сьогодні, знаючи, що у вас є цілих 14 днів, щоб спробувати
              його і зрозуміти, чи підходить він вам. Якщо ні, я поверну ваші
              інвестиції без жодних проблем.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
