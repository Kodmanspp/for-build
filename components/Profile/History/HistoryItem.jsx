import React from "react";
import style from "./History.module.scss";
import HistoryOrders from "./HistoryOrders";

const HistoryItem = ({ id, date, item }) => {
  return (
    <div className={style.history_item}>
      <div className={style.header}>
        <h3 className={style.title}>Ваш заказ</h3>
        <div>
          <h3>Товар</h3>
          <h3>Итого:</h3>
        </div>
      </div>
      {item?.map((elem) => (
        <>
          <HistoryOrders key={id} orders={elem} />
          {item[item.length - 1].id !== elem.id && <hr />}
        </>
      ))}
      <p className={style.date}>{date}</p>
    </div>
  );
};

export default HistoryItem;
