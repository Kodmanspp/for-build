import { DownOutlined } from '@ant-design/icons';
import React, { useState } from 'react';
import ClothesCard from '../MainPageCards/ClothesCard';
import cl from './Catalog.module.scss';
import img from "../../public/icons/baby_clothes.png";
export const cardArray = [
  {
    title: 'Футболка “Радуга”',
    image: img,
    years: '2-4 лет',
    type: 'новинка',
    article: '1111',
    height: '54-56',
    priceOf: 'за 10 шт',
    size: '1-7',
    price: '1300',
  },
  {
    title: 'Футболка “Пионер”',
    years: '2-4 лет',
    image: img,
    type: null,
    article: '1111',
    height: '54-56',
    priceOf: 'за 10 шт',
    size: '1-7',
    price: '900',
  },
  {
    title: 'Футболка “Радуга”',
    image: img,
    years: '2-4 лет',
    type: 'новинка',
    article: '1111',
    height: '54-56',
    priceOf: 'за 10 шт',
    size: '1-7',
    price: '1300',
  },
  {
    title: 'Футболка “Радуга”',
    image: img,
    years: '2-4 лет',
    type: null,
    article: '1111',
    height: '54-56',
    priceOf: 'за 10 шт',
    size: '1-7',
    price: '1300',
  },
  {
    title: 'Футболка “Радуга”',
    image: img,
    years: '2-4 лет',
    type: null,
    article: '1111',
    height: '54-56',
    priceOf: 'за 10 шт',
    size: '1-7',
    price: '1300',
  },
  {
    title: 'Футболка “Радуга”',
    image: img,
    years: '2-4 лет',
    type: 'новинка',
    article: '1111',
    height: '54-56',
    priceOf: 'за 10 шт',
    size: '1-7',
    price: '1300',
  },
  {
    title: 'Футболка “Радуга”',
    image: img,
    years: '2-4 лет',
    type: 'новинка',
    article: '1111',
    height: '54-56',
    priceOf: 'за 10 шт',
    size: '1-7',
    price: '1300',
  },
  {
    title: 'Футболка “Радуга”',
    image: img,
    years: '2-4 лет',
    type: 'новинка',
    article: '1111',
    height: '54-56',
    priceOf: 'за 10 шт',
    size: '1-7',
    price: '1300',
  },
  {
    title: 'Футболка “Радуга”',
    image: img,
    years: '2-4 лет',
    type: 'новинка',
    article: '1111',
    height: '54-56',
    priceOf: 'за 10 шт',
    size: '1-7',
    price: '1300',
  },
  {
    title: 'Футболка “Радуга”',
    image: img,
    years: '2-4 лет',
    type: 'новинка',
    article: '1111',
    height: '54-56',
    priceOf: 'за 10 шт',
    size: '1-7',
    price: '1300',
  },
  {
    title: 'Футболка “Радуга”',
    image: img,
    years: '2-4 лет',
    type: 'новинка',
    article: '1111',
    height: '54-56',
    priceOf: 'за 10 шт',
    size: '1-7',
    price: '1300',
  },
  {
    title: 'Футболка “Радуга”',
    image: img,
    years: '2-4 лет',
    type: 'новинка',
    article: '1111',
    height: '54-56',
    priceOf: 'за 10 шт',
    size: '1-7',
    price: '1300',
  },
  {
    title: 'Футболка “Радуга”',
    image: img,
    years: '2-4 лет',
    type: 'новинка',
    article: '1111',
    height: '54-56',
    priceOf: 'за 10 шт',
    size: '1-7',
    price: '1300',
  },
  {
    title: 'Футболка “Радуга”',
    image: img,
    years: '2-4 лет',
    type: 'новинка',
    article: '1111',
    height: '54-56',
    priceOf: 'за 10 шт',
    size: '1-7',
    price: '1300',
  },
  {
    title: 'Футболка “Радуга”',
    image: img,
    years: '2-4 лет',
    type: 'новинка',
    article: '1111',
    height: '54-56',
    priceOf: 'за 10 шт',
    size: '1-7',
    price: '1300',
  },
  {
    title: 'Футболка “Радуга”',
    years: '2-4 лет',
    image: img,
    type: 'новинка',
    article: '1111',
    height: '54-56',
    priceOf: 'за 10 шт',
    size: '1-7',
    price: '1300',
  },
];
const categories = [
  'Штаны',
  'Футболки',
  'Шорты',
  'Футболки',
  'Штаны',
  'Шорты',
  'Футболки',
  'Футболки',
  'Штаны',
  'Шорты',
  'Футболки',
  'Штаны',
  'Шорты',
  'Футболки',
  'Штаны',
  'Шорты',
  'Футболки',
  'Футболки',
  'Штаны',
  'Футболки',
  'Футболки',
  'Штаны',
  'Футболки',
  'Футболки',
  'Штаны',
  'Шорты',
  'Футболки',
];
const buttons = [
  { text: 'Весна' },
  { text: 'Лето' },
  { text: 'Осень' },
  { text: 'Зима' },
];
function Catalog() {
  const [select, setSelect] = useState('Для мужчин');
  const [activeCategory, setActiveCategory] = useState(-1);
  function handleActoveCategory(index) {
    setActiveCategory(index);
  }
  function handleSelect(select) {
    console.log(select.target.value);
  }
  return (
    <div>
      <div className={cl.buttons}>
        {buttons.map((item, index) => {
          return (
            <button
              key={`${index}_${item.text}`}
              style={{
                backgroundColor:
                  activeCategory === index ? '#E9A6A3' : '#A8A8A8',
              }}
              className={cl.button}
              onClick={() => handleActoveCategory(index)}
            >
              {item.text}
            </button>
          );
        })}
      </div>
      <div className={cl.selects}>
        <button className={cl.select}>
          Для мальчиков <DownOutlined />
        </button>
        <button className={cl.select}>
          Для Девочек <DownOutlined />
        </button>
        <div className={cl.dropdown}>
          <select>
            <option value='1'>1-2 года</option>
            <option value='2'>2 лет</option>
            <option value='3'>3 лет</option>
            <option value='4'>4 лет</option>
            <option value='5'>5 лет</option>
            <option value='6'>6 лет</option>
            <option value='7'>7 лет</option>
            <option value='8'>8 лет</option>
            <option value='9'>9 лет</option>
            <option value='10'>10 лет</option>
          </select>
          <DownOutlined className={cl.dropdownOutlined} />
        </div>
      </div>
      <div className={cl.categories}>
        {categories.map((category, index) => {
          return <p key={`${category}__item_${index}`}>{category}</p>;
        })}
      </div>
      <div className={cl.catalog__container}>
        <div className={cl.catalog}>
          <ClothesCard cardArray={cardArray} />
        </div>
        <div className={cl.all_catalog_btn}>
          <button>Весь каталог</button>
        </div>
      </div>
    </div>
  );
}

export default Catalog;
