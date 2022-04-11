import React from 'react';
import { cardArray } from '../MainPage/MainPageData';
import styles from './Favorite.module.scss';
import ClothesCard from '../MainPageCards/ClothesCard';

function Favorite() {
  return (
    <div className={styles.favorite}>
      <div className={styles.favorite_wrapper}>
        <ClothesCard cardArray={cardArray} />
      </div>
      <div className={styles.all_catalog}>
        <button className={styles.all_catalog__button}>смотреть каталог</button>
      </div>
    </div>
  );
}

export default Favorite;
