import React from "react";
import s from "./answersToQuestions.module.scss";

const textList = [
  {
    question: "1. Скільки часу потрібно кожен день для проходження міні-курсу?",
    answer:
      "Вам будуть надіслані голосові повідомлення, це зручний формат, для того, щоб ви будь-де могли їх прослуховувати, загалом з домашнім завданням ви будете витрачати від 15 до 60 хвилин на день.",
  },
  {
    question:
      "2. Чи потрібна спеціальна освіта для того, щоб запустити такий бізнес?",
    answer:
      "Ні, не потрібна, програма так побудована, що підходить людям різної діяльності та віку.",
  },
  {
    question: "3. Що ще мені потрібно мати для проходження міні-курсу?",
    answer:
      "Вам потрібен лише телефон та бажання почати новий цікавий етап в своєму житті 🥰",
  },
  {
    question:
      "4. Чи можу я продовжувати свою основну діяльність під час проходження міні-курсі та побудови бізнесу?",
    answer:
      "Так, зможете. Ми рекомендуємо перший час побудови бізнесу не лишати свою звичну діяльність до моменту, поки бізнес на подобовій оренді почне приносити такий прибуток, який ви отримуєте з основної діяльності.",
  },
  {
    question:
      "5. Що робити, якщо у мене виникнуть запитання або проблеми під час міні-курсу?",
    answer:
      "Ви також можете поставити свої запитання через контактну інформацію, зазначену на сайті або в особисті повідомлення, після того, як вас додадуть до чату курсу. Ми завжди готові допомогти вам і забезпечити необхідну підтримку.",
  },
  {
    question: "6. Скільки часу потрібно, щоб побачити результати?",
    answer:
      "Інтенсив розроблений для швидких результатів, оскільки він зосереджений на запуску бізнесу без тривалих очікувань. Ви можете розраховувати на швидке повернення ваших  інвестицій, часто протягом декількох днів або тижнів.",
  },
  {
    question:
      "7. У мене немає досвіду створення бізнесу. Чи підходить такий метод запуску для новачків ?",
    answer:
      "Безумовно! Інтенсив розроблений так, щоб бути простим для розуміння і реалізації, що робить його ідеальним для початківців. Ми допоможемо вам на кожному етапі процесу, від вибору району до заселення гостей та вибору покоївки.",
  },
];

export const AnswersToQuestions = () => {
  return (
    <section className={s.section}>
      <div className="container">
        <h2 className={s.header}>Відповіді на питання</h2>
        <div className={s.wrapper_list}>
          <ol className={s.list}>
            {textList.map((item) => (
              <li className={s.item}>
                <p className={s.question}>{item.question}</p>
                <p className={s.answer}>{item.answer}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
};
