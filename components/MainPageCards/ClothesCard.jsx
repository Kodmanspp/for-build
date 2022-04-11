import React from 'react';
import styles from './ClothesCard.module.scss';
import clothe from '../../public/icons/baby_clothes.png';
import Image from 'next/image';
import favoriteIcon from '../../public/icons/favorite.svg';
import palkaIcon from '../../public/icons/palkaebanaya.svg';
import cartIcon from '../../public/icons/cart.svg';
import {nanoid} from "nanoid";
function ClothesCard({cardRef, cardArray }) {
  return (
    <>
      {cardArray.map((item) => {
        return (
          <div ref={cardRef} key={nanoid()} className={styles.card_wrapper}>
            <span className={styles.card_year}>{item.year} лет</span>
            <span className={styles.card_type}>новинка</span>
            <div className={styles.card_clothes__image}>
              {item.image ?
                <Image width={180} height={180} src={item?.image} alt='clothes' layout="fixed" />
                :
                <img width={180} height={180} src={item?.image} alt='clothes' layout="fixed" />
              }
            </div>
            <div className={styles.card_about_clothes}>
              <div>
                <div>
                  <span className={styles.card_title}>{item.title}</span>
                </div>
                <div>
                  Артикуль:{' '}
                  <span className={styles.card_about__title}>11111</span>
                </div>
                <div>
                  Рост: <span className={styles.card_about__title}> 54-56</span>
                </div>
                <div>
                  Цена:{' '}
                  <span className={styles.card_about__title}>
                    за {item.price_for} шт
                  </span>
                </div>
                <div>
                  Размер: <span className={styles.card_about__title}>1-7</span>
                </div>
              </div>
              <div className={styles.price_wrapper}>
                <h4>{item.price} ₽</h4>
              </div>
            </div>
            <div className={styles.card_action_buttons}>
              <div>
                <button>
                  <Image src={favoriteIcon} alt='knopka' />
                </button>
              </div>
              <div>
                <Image src={palkaIcon} alt='knopka' />
              </div>
              <div>
                <button>
                  <Image src={cartIcon} alt='knopka' />
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default ClothesCard;
