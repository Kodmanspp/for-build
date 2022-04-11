import React from 'react';
import styles from './Cart.module.scss';
import clothe from '../../public/icons/baby_clothes.png';
import Image from 'next/image';
import galka from '../../public/icons/galka.svg';
import close from '../../public/icons/cross 1.svg';

function CartCard({ item }) {
  return (
    <div className={styles.cart_card}>
      <div className={styles.cart_image}>
        <Image width={194} height={186} src={clothe} alt='clothe' />
      </div>
      <div className={styles.cart_info}>
        <div>
          <span className={styles.card_title}>
            {(item = 'Футболка “Радуга”')}
          </span>
        </div>
        <div>
          Артикуль:{' '}
          <span className={styles.card_about__title}>{(item = '11111')}</span>
        </div>
        <div>
          Рост:{' '}
          <span className={styles.card_about__title}> {(item = '54-56')}</span>
        </div>
        <div>
          Цена:{' '}
          <span className={styles.card_about__title}>
            {(item = 'за 10 шт')}
          </span>
        </div>
        <div className={styles.card_color__button}>
          <button className={styles.color__yellow}></button>
          <button className={styles.color__pink}></button>
          <button className={styles.color__blue}></button>
        </div>
      </div>
      <div className={styles.cart_amount}>
        <div>
          <button>-</button>
          <span>1</span>
          <button>+</button>
        </div>
      </div>
      <div className={styles.cart_existence}>
        <Image src={galka} alt='galke' />
      </div>
      <div className={styles.cart_price}>
        <span>1300 ₽</span>
        <div>
          <button>
            <Image src={close} alt='close' />
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartCard;
