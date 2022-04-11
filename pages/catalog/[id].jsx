import Image from "next/image";
import React from "react";
import cl from "./details.module.scss";
import img from "../../public/icons/baby_clothes.png";
import SpeakersSwiper from "../../components/speakers-swiper/Swiper";
import favorite from "../../public/icons/favorite.svg";
import cartIcon from '../../public/icons/cart_icon.svg';
import {ShoppingCartOutlined} from "@ant-design/icons";
const detailsInfo = {
  title: "Футболка “Пионер”",
  image: img,
  details: [
    {
      name: "Артикул:",
      value: "22222"
    },
    {
      name: "Размер:",
      value: "1-7",
    },
    {
      name: "Рост:",
      value: "54-56",
    },
    {
      name: "Материал:",
      value: "100% хлопок",
    },
    {
      name: "Производитель:",
      value: "Gavhar",
    },
    {
      name: "Пол:",
      value: "Девочка",
    },
    {
      name: "Возраст:",
      value: "2-4",
    },
  ],
  price: {
    quantity: 10,
    value: 900,
  },
  description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
     magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea 
     commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla 
     pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est 
     laborum`,
};

function Detailt() {
  return (
    <>
      <div className={cl.container}>
        <div className={cl.details}>
          <h1>{detailsInfo.title}</h1>
          <div className={cl.content}>
            <div className={cl.image}><Image src={detailsInfo.image} alt="img"/></div>
            <div className={cl.properties_container}>
              <div className={cl.properties}>
                {detailsInfo.details.map((item) => {
                  return (
                    <p key={item.name}>{item.name} <strong>{item.value}</strong></p>
                  )
                })}
              </div>
              <div className={cl.price}>
                <p>Цена за: <strong>{detailsInfo.price.quantity} шт</strong></p>
                <strong className={cl.prive_value}>{detailsInfo.price.value} ₽</strong>
              </div>
            </div>
            <div className={cl.buttons}>
              <button className={cl.favorite_btn}>
                <Image src={favorite} alt="alt"/>
                Добавить в избранные
              </button>
              <button className={cl.busket_btn}>
                <ShoppingCartOutlined style={{color: "gray", fontSize: "30px"}} />
                Добавить в корзину
              </button>
            </div>
          </div>
          <div className={cl.description_container}>
            <h2 className={cl.description__title}>Описание</h2>
            <p className={cl.description__text}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur
              distinctio iure placeat repellat veritatis? A consequatur modi necessitatibus rem voluptatem. Fugiat
              magnam
              nisi Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab asperiores aspernatur culpa deleniti ea
              enim
              itaque nihil non nostrum provident, recusandae saepe voluptatum. Accusantium eligendi est optio sapiente
              vel
              veniam. praesentium recusandae! Aperiam facilis fugiat nisi totam.</p>
          </div>
        </div>
        <h2 className={cl.swiper__title}>Похожие товары</h2>
      </div>
        <SpeakersSwiper/>
    </>
  );
}

export default Detailt;
