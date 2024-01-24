import React, { FC } from "react";

import s from "./actionTimer.module.scss";
import { CustomLink } from "../CustonLink/CustomLink";

export const ActionTimer: FC = () => {
  return (
    <section className={s.section}>
      <div className="container">
        <div className={s.wrapper_content}>
          <div className={s.g_list}>
            <div className={s.g_item_row}>
              <div className={s.g_item_list}>
                <div className={s.timer}>
                  <h2 className={s.header_timer}>До кінця акції</h2>
                  <ul className={s.list}>
                    <li className={s.list_item}>
                      <div className={s.time_wrapper}>
                        <p className={s.time_number}>12</p>
                      </div>
                      <p className={s.time_name}>години</p>
                    </li>
                    <li className={s.list_item}>
                      <div className={s.time_wrapper}>
                        <p className={s.time_number}>12</p>
                      </div>
                      <p className={s.time_name}>хвилини</p>
                    </li>
                    <li className={s.list_item}>
                      <div className={s.time_wrapper}>
                        <p className={s.time_number}>12</p>
                      </div>
                      <p className={s.time_name}>секунди</p>
                    </li>
                  </ul>
                </div>
              </div>
              <div className={s.g_item_list}>
                <div className={s.action}>
                  <h3 className={s.header_action}>
                    Приєднайся до інтенсиву вже зараз та отримуй знижку!
                  </h3>
                  <p className={s.price}>428 грн</p>
                  <p className={s.orig_price}>1100 грн</p>
                </div>
              </div>
            </div>
            <div className={s.g_item_row}>
              <div className={s.g_item_list}>
                <div className={s.info}>
                  <p className={s.info_reg}>
                    Після реєстрації ви отримаєте бонус : ТОП-50 сервісів для
                    реклами.
                  </p>
                  <p className={s.guarantee}>
                    Гарантія повернення коштів впродовж 14-ти днів.
                  </p>
                </div>
              </div>
              <div className={s.g_item_list}>
                <div className={s.wrapper_btn}>
                  <CustomLink customClass={s.link_sale} id="id">
                    Отримати знижку 61%
                  </CustomLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
