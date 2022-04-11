import React, {useEffect, useRef, useState} from 'react';
import img from "../../public/icons/baby_clothes.png";
import cl from "./Swiper.module.scss";
import ClothesCard from "../MainPageCards/ClothesCard";
import {LeftCircleFilled, RightCircleFilled} from "@ant-design/icons";

const cardArray = [
  {
    title: "Футболка “Радуга”",
    years: "2-4 лет",
    image: img,
    type: "новинка",
    article: "1111",
    height: "54-56",
    priceOf: "за 10 шт",
    size: "1-7",
    price: "1300",
  },
  {
    title: "Футболка “Пионер”",
    years: "2-4 лет",
    image: img,
    type: null,
    article: "1111",
    height: "54-56",
    priceOf: "за 10 шт",
    size: "1-7",
    price: "900",
  },
  {
    title: "Футболка “Радуга”",
    years: "2-4 лет",
    type: "новинка",
    image: img,
    article: "1111",
    height: "54-56",
    priceOf: "за 10 шт",
    size: "1-7",
    price: "1300",
  },
  {
    title: "Футболка “Радуга”",
    years: "2-4 лет",
    type: null,
    article: "1111",
    image: img,
    height: "54-56",
    priceOf: "за 10 шт",
    size: "1-7",
    price: "1300",
  },
  {
    title: "Футболка “Радуга”",
    years: "2-4 лет",
    image: img,
    type: null,
    article: "1111",
    height: "54-56",
    priceOf: "за 10 шт",
    size: "1-7",
    price: "1300",
  },
  {
    title: "Футболка “Радуга”",
    years: "2-4 лет",
    image: img,
    type: "новинка",
    article: "1111",
    height: "54-56",
    priceOf: "за 10 шт",
    size: "1-7",
    price: "1300",
  },
  {
    title: "Футболка “Радуга”",
    years: "2-4 лет",
    image: img,
    type: "новинка",
    article: "1111",
    height: "54-56",
    priceOf: "за 10 шт",
    size: "1-7",
    price: "1300",
  },
  {
    title: "Футболка “Радуга”",
    years: "2-4 лет",
    type: "новинка",
    image: img,
    article: "1111",
    height: "54-56",
    priceOf: "за 10 шт",
    size: "1-7",
    price: "1300",
  },
  {
    title: "Футболка “Радуга”",
    years: "2-4 лет",
    image: img,
    type: "новинка",
    article: "1111",
    height: "54-56",
    priceOf: "за 10 шт",
    size: "1-7",
    price: "1300",
  },
  {
    title: "Футболка “Радуга”",
    years: "2-4 лет",
    type: "новинка",
    image: img,
    article: "1111",
    height: "54-56",
    priceOf: "за 10 шт",
    size: "1-7",
    price: "1300",
  },
  {
    title: "Футболка “Радуга”",
    years: "2-4 лет",
    image: img,
    type: "новинка",
    article: "1111",
    height: "54-56",
    priceOf: "за 10 шт",
    size: "1-7",
    price: "1300",
  },
  {
    title: "Футболка “Радуга”",
    years: "2-4 лет",
    image: img,
    type: "новинка",
    article: "1111",
    height: "54-56",
    priceOf: "за 10 шт",
    size: "1-7",
    price: "1300",
  },
  {
    title: "Футболка “Радуга”",
    years: "2-4 лет",
    image: img,
    type: "новинка",
    article: "1111",
    height: "54-56",
    priceOf: "за 10 шт",
    size: "1-7",
    price: "1300",
  },
  {
    title: "Футболка “Радуга”",
    years: "2-4 лет",
    type: "новинка",
    image: img,
    article: "1111",
    height: "54-56",
    priceOf: "за 10 шт",
    size: "1-7",
    price: "1300",
  },
  {
    title: "Футболка “Радуга”",
    years: "2-4 лет",
    type: "новинка",
    image: img,
    article: "1111",
    height: "54-56",
    priceOf: "за 10 шт",
    size: "1-7",
    price: "1300",
  },
  {
    title: "Футболка “Радуга”",
    years: "2-4 лет",
    type: "новинка",
    image: img,
    article: "1111",
    height: "54-56",
    priceOf: "за 10 шт",
    size: "1-7",
    price: "1300",
  },
];

function SpeakersSwiper() {

  const carousel = useRef(null);
  const card = useRef(null);

  function handleScrollRight() {
    carousel.current.scrollBy({left: card.current.clientWidth + 30, top: 0, behavior: "smooth"});
  }

  function handleScrollLeft() {
    console.log(carousel);
    carousel.current.scrollBy({left: -(card.current.clientWidth + 30), top: 0, behavior: "smooth"});
  }

  function checkDisabledBtn(position) {
    const filter = position ? progress === visibleCard : progress >= speakers.length;
    return filter ? "gray" : "blue";
  }

  return (
    <div className={cl.container}>
      <button onClick={handleScrollLeft} className={cl.leftBtn}>
        <LeftCircleFilled />
      </button>
      <div ref={carousel} className={cl.swipeItems}>
        <ClothesCard cardRef={card} cardArray={cardArray}/>
      </div>
      <button onClick={handleScrollRight} className={cl.rightBtn}>
        <RightCircleFilled />
      </button>
    </div>
  );
}

export default SpeakersSwiper;