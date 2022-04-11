import React from "react";
import style from "./History.module.scss";
import HistoryItem from "./HistoryItem";
import HistoryOrders from "./HistoryOrders";

const orders = [
  {
    id: 1,
    date: "24.04.2022",
    orders: [
      {
        id: 1,
        title: "Футболка “Радуга”",
        article: "1111",
        size: "1-7",
        growth: "100-110",
        price: 1300,
        count: 10,
      },
      {
        id: 2,
        title: "Футболка “Радуга”",
        article: "1111",
        size: "1-7",
        growth: "100-110",
        price: 1300,
        count: 10,
      },
      {
        id: 3,
        title: "Футболка “Радуга”",
        article: "1111",
        size: "1-7",
        growth: "100-110",
        price: 1300,
        count: 10,
      },
    ],
  },
  {
    id: 2,
    date: "24.04.2022",
    orders: [
      {
        id: 1,
        title: "Футболка “Радуга”",
        article: "1111",
        size: "1-7",
        growth: "100-110",
        price: 1300,
        count: 10,
      },
      {
        id: 2,
        title: "Футболка “Радуга”",
        article: "1111",
        size: "1-7",
        growth: "100-110",
        price: 1300,
        count: 10,
      },
      {
        id: 3,
        title: "Футболка “Радуга”",
        article: "1111",
        size: "1-7",
        growth: "100-110",
        price: 1300,
        count: 10,
      },
    ],
  },
];

const History = () => {
  return (
    <div className={style.wrapper}>
      {orders.map(({ id, date, orders }) => (
        <HistoryItem key={id} date={date} item={orders}/>
      ))}
    </div>
  );
};

export default History;
