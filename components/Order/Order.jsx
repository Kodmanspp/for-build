import React, { useState } from 'react';
import styles from './Order.module.scss';
import OrderList from './OrderList';

function Order() {
  const buttonArray = [
    { id: 1, title: 'СДЭК' },
    { id: 2, title: 'Magic Trans' },
    { id: 3, title: 'Почта России' },
    { id: 4, title: 'Байкал сервис' },
    { id: 5, title: 'ПЭК' },
    { id: 6, title: 'ТК Виктория' },
  ];

  const [activeButton, setActiveButton] = useState(1);

  function handleActoveButton(id) {
    setActiveButton(id);
  }

  return (
    <>
      <h1 style={{ textAlign: 'center' }}>Оформить заказ</h1>
      <div className={styles.order_wrapper}>
        <div className={styles.order_left__side}>
          <OrderList />
        </div>
        <div className={styles.order_right__side}>
          <div className={styles.order_detail}>
            <h3 style={{ textAlign: 'center' }}>Детали оплаты</h3>
            <div className={styles.order_detail_wrapper}>
              <div className={styles.order_detail__left}>
                <div className={styles.order_detail__inputwrapper}>
                  <label>ФИО*</label>
                  <br />
                  <input className={styles.order_detail__input} type='text' />
                </div>
                <div className={styles.order_detail__inputwrapper}>
                  <label> E-mail*</label>
                  <br />
                  <input className={styles.order_detail__input} type='text' />
                </div>
                <div className={styles.order_detail__inputwrapper}>
                  <label> Адрес</label>
                  <br />
                  <input className={styles.order_detail__input} type='text' />
                </div>
              </div>
              <div className={styles.order_detail__right}>
                <div className={styles.order_detail__inputwrapper}>
                  <label> E-mail*</label>
                  <br />
                  <input className={styles.order_detail__input} type='text' />
                </div>
                <div className={styles.order_detail__textareawrapper}>
                  <label> Примечание (необязательно)</label>
                  <br />
                  <textarea className={styles.order_detail__textarea} />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.order_delivery}>
            <h3 style={{ textAlign: 'center' }}>Способ доставки</h3>
            <div className={styles.oreder_delivery__wrapper}>
              {buttonArray.map((item) => {
                return (
                  <button
                    key={item.id}
                    onClick={() => handleActoveButton(item.id)}
                    className={activeButton === item.id ? styles.active : ''}
                  >
                    {item.title}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Order;
