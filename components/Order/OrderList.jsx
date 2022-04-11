import React from 'react';
import { cardArray } from '../Catalog/Catalog';
import styles from './Order.module.scss';
import {nanoid} from "nanoid";

function OrderList() {
  return (
    <div className={styles.orderlist_wrapper}>
      <h2>Ваш заказ</h2>
      <div className={styles.orderlist_header}>
        <div>
          <span>Товар</span>
        </div>
        <div>
          <span>Итого:</span>
        </div>
      </div>
      <div className={styles.orderlist_main}>
        {cardArray.map((item) => {
          return (
            <div key={nanoid()} className={styles.order_info}>
              <div className={styles.order_title__wrapper}>
                <span className={styles.order_title}>{item.title}</span>
                <button className={styles.order_color}></button>
              </div>
              <div>
                <span className={styles.order_about__info}>Артикуль: </span>
                <span className={styles.order_about__title}>
                  {item.article}
                </span>
              </div>
              <div>
                <span className={styles.order_about__info}> Рост: </span>
                <span className={styles.order_about__title}>{item.height}</span>
              </div>
              <div className={styles.card_about__wrapper}>
                <span className={styles.order_about__info}>Цена: </span>
                <div className={styles.order_about__child}>
                  <div className={styles.card_about__title}>{item.priceOf}</div>
                  <div className={styles.card_about__title_price}>
                    {item.price} ₽
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default OrderList;
