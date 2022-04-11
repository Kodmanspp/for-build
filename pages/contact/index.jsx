import React from "react";
import styles from "./Contact.module.scss";
import Image from "next/image";

const About = () => {
  return (
    <div>
      <h2 className={styles.contact_title}>
        Контакты интернет-магазина “Baby Shop”
      </h2>

      <div className={styles.contact}>
        <div className={styles.contact_block}>
          <div>
            <h3>Главный офис и центральный склад:</h3>
            <p>Город Москва , МКАД , 14-й километр, дом 4 стр 1</p>
          </div>
          <div>
            <h3>время работы:</h3>
            <p>с 7 утра до 20.0 вечера</p>

            <h3>Заказы принимаются круглосуточно 24/7!</h3>
          </div>
        </div>

        <div className={styles.contact_block_two}>
          <div>
            <h3>контакты:</h3>
            <p>8(000)111-22-33</p>
          </div>
          <div>
            <h3>What’sapp :</h3>
            <p>+79258123132</p>
            <p>+79630387870</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default About;
