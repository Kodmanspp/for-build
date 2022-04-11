import React from 'react';
import styles from './Cart.module.scss';
import CartCard from './CartCard';

function Card() {
  return (
    <div className={styles.cart_wrapper}>
      <div className={styles.cart_header_wrapper}>
        <div className={styles.cart_header_wrapper_child}>
          <div>
            <span>Товар</span>
          </div>
          <div>
            <span>Наименование</span>
          </div>
          <div>
            <span>Количество</span>
          </div>
          <div>
            <span>Наличие</span>
          </div>
          <div>
            <span>Цена</span>
          </div>
        </div>
      </div>
      <div className={styles.price}>
        <div>Сумма заказов: 1300 ₽</div>
        <button>Оформить заказ</button>
      </div>
      <div className={styles.cart_card_wrapper}>
        <CartCard />
        <CartCard />
        <CartCard />
        <CartCard />
      </div>
    </div>
  );
}

export default Card;
