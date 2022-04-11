import React from "react";
import Image from "next/image";
import style from "./History.module.scss";
import Circle from "../../../static/circle-icon.svg";

const HistoryOrders = ({
  orders: { id, title, article, size, growth, price, count },
}) => {
  return (
    <>
      <div className={style.order_item}>
        <h3>
          {title} <Image width={20} height={20} src={Circle} />
        </h3>
        <p>
          Артикул: <span>{article}</span>
        </p>
        <p>
          Размер: <span>{size}</span>
        </p>
        <p>
          Рост: <span>{growth}</span>
        </p>
        <p className={style.price}>
          Цена: за <span> {count} </span> шт <span>{price}</span>
        </p>
      </div>
    </>
  );
};

export default HistoryOrders;
