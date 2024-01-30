import React from "react";

import Logo from "../../img/Logo2.svg";
import { PiPhone } from "react-icons/pi";
import { VscMail } from "react-icons/vsc";
import { FaViber } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { LiaTelegram } from "react-icons/lia";
import { FiInstagram } from "react-icons/fi";
import { SlSocialFacebook } from "react-icons/sl";

import s from "./footer.module.scss";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={s.footer}>
      <div className="container">
        <div className={s.wrapper_content}>
          <div className={s.contact_nav_disclaimer_position}>
            <div className={s.contact_nav_position}>
              <div className={s.contact}>
                <div className={s.logo}>
                  <a href="#123">
                    <img
                      src={Logo}
                      className={s.logo_img}
                      alt="VIP Apartmens ELENA"
                    />
                  </a>
                </div>
                <ul>
                  <li className={s.fop}>
                    <p className={s.fop_item}>ФОП Лєньшина О. І.</p>
                    <p className={s.fop_item}>3127407982</p>
                  </li>
                  <li className={s.info}>
                    <h3 className={s.info_titel}>Контакти</h3>
                    <ul>
                      <li className={s.info_item}>
                        <a href="tel:+380991419490" className={s.info_link}>
                          <PiPhone className={s.icon_tel} />
                          <span>+38 0991419490</span>
                        </a>
                      </li>
                      <li className={s.info_item}>
                        <a
                          href="mailto:Vipapartmentinfo@gmail.com"
                          className={s.info_link}
                        >
                          <VscMail className={s.icon_mail} />
                          <span>Vipapartmentinfo@gmail.com</span>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className={s.social}>
                    <h3 className={s.social_titel}>Соціальні мережі</h3>
                    <ul className={s.social_list}>
                      <li className={s.social_item}>
                        <a href="#123">
                          <FaViber className={s.icon_social} />
                        </a>
                      </li>
                      <li className={s.social_item}>
                        <a href="#123">
                          <FaWhatsapp className={s.icon_social} />
                        </a>
                      </li>
                      <li className={s.social_item}>
                        <a href="#123">
                          <LiaTelegram className={s.icon_social} />
                        </a>
                      </li>
                      <li className={s.social_item}>
                        <a href="#123">
                          <FiInstagram className={s.icon_social} />
                        </a>
                      </li>
                      <li className={s.social_item}>
                        <a href="#123">
                          <SlSocialFacebook className={s.icon_social} />
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
              <div className={s.nav}>
                <ul className={s.nav_list}>
                  <li className={s.nav_item}>
                    <a href="#123">Головна</a>
                  </li>
                  <li className={s.nav_item}>
                    <a href="#123">Для кого ?</a>
                  </li>
                  <li className={s.nav_item}>
                    <a href="#123">Після курсу</a>
                  </li>
                  <li className={s.nav_item}>
                    <a href="#123">Ціна</a>
                  </li>
                  <li className={s.nav_item}>
                    <a href="#123">Програма</a>
                  </li>
                </ul>

                <ul className={s.nav_list}>
                  <li className={s.nav_item}>
                    <a href="#123">Автор</a>
                  </li>
                  <li className={s.nav_item}>
                    <a href="#123">Q&A</a>
                  </li>
                  <li className={s.nav_item}>
                    <a href="#123">Відгуки</a>
                  </li>
                  <li className={s.nav_item}>
                    <a href="#123">Політика конфіденційності</a>
                  </li>
                  <li className={s.nav_item}>
                    <a href="#123">Публічна оферта</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className={s.disclaimer}>
              <p className={s.disclaimer_text}>
                ВАЖЛИВО: не вводьте свою контактну інформацію, доки не
                прочитаєте Правову відмову від відповідальності. Ми не даємо
                жодних гарантій, що ви досягнете якихось результатів за
                допомогою наших інструментів, стратегій або інформації. Всі
                продукти і сервіси компанії призначені для освітніх цілей. Жодна
                інформація на цьому сайті або будь-яких інших сайтах компанії не
                гарантує і не обіцяє отримання результатів. Ви несете
                відповідальність за свої дії і результати. Реєструючись на
                даному сайті, ви знімаєте з нас відповідальність за ваші дії та
                результати.
              </p>
              <p className={s.disclaimer_text}>
                IMPORTANT: Do not enter your name and email until you have read
                the Legal Disclaimer. We are not able to make any guarantees and
                we will not make any guarantees about your ability to generate
                results with our ideas, information, tools and resources, or
                strategies. You should know that all products and services by
                our company are for educational and informational purposes only.
                Nothing on this website, or any of our websites, or any of our
                content or curriculum is a implication, promise, or guarantee of
                results. Use caution and always consult your accountant, lawyer
                or professional adviser before acting on this or any information
                related to a lifestyle change, your business and finances. You
                are responsible for your decisions, actions and results. By
                registering on this website you agree not to attempt to hold us
                liable for your decisions, actions or results, at any time,
                under any circumstance.
              </p>
            </div>
          </div>
          <div className={s.copyright}>
            <div className={s.copyright_copy}>
              <p className={s.copyright_text}>
                <span className={s.copy_icon}>&copy;</span>
                <span className={s.copy_year}>{currentYear}</span> VIP
                Apartments ELENA.
              </p>
              <p className={s.copyright_text}>Всі права захищені.</p>
            </div>
            <p className={s.copyright_text}>
              Будь-яке копіювання матеріалів дозволяється тільки з погодження
              правовласників
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
