import React from 'react';
import styles from './About.module.scss';
import img1 from '../../public/icons/img1.png';
import img2 from '../../public/icons/img2.png';
import Image from 'next/image';
import greyElipse from '../../public/icons/grey_zalupa.svg';
import {nanoid} from "nanoid";

const Index = () => {
  const brandsFirst = [
    { title: 'Sim-Sim' },
    { title: 'Звёздочка' },
    { title: 'Sabah' },
    { title: 'Zari for kids' },
  ];
  const brandsSecond = [
    { title: 'Gavhar' },
    { title: 'Nuriya' },
    { title: 'Sabah' },
    { title: 'Zeyrek' },
  ];
  const aboutMagaz = [
    { title: 'Качественные товары' },
    { title: 'Низкие цены' },
    { title: 'На связи 24 часа' },
    { title: 'Доставка по всей России' },
    { title: 'прямой поставщик' },
    { title: 'Успешное и плодотворное сотрудничество' },
  ];
  return (
    <div>
      <h2 className={styles.about_title}>Об оптовом магазине «Baby Shop»</h2>

      <div className={styles.about_block}>
        <div className={styles.about_one}>
          <p>
            Дорогие клиенты, приветствуем вас на нашем официальном сайте «Baby
            Shop»! Мы рады предотавить вам возможность легко и удобно заказать
            детскую вещь для вашего бизнеса!
          </p>
        </div>
        <div className={styles.about_two}>
          <Image width={200} height={280} src={img1} alt='error' />
        </div>
      </div>

      <div className={styles.about_block_two}>
        <div className={styles.about_two_img}>
          <Image width={200} height={280} src={img2} alt='error' />
        </div>

        <div className={styles.about_one}>
          <p>
            Закупаясь, наши специалисты компании смотрят на качество товаров и
            оценивают их с точки зрения качества материалов и удобства. Поэтому
            наши вещи пользуются повышенным спросом у покупателей. Большое
            внимание мы уделяем вопросам цен. Работаем над тем, чтобы наши
            клиенты могли покупать качественные вещи по оптимальной стоимости.
          </p>
        </div>
      </div>
      <div className={styles.about_block_three}>
        <h2>С какими брендами мы сотрудничаем?</h2>
        <div className={styles.brands_wrapper}>
          <div>
            {brandsFirst.map((item) => {
              return (
                <div key={nanoid()}>
                  <Image src={greyElipse} alt='elipse' />
                  <span>{item.title}</span>
                </div>
              );
            })}
          </div>
          <div>
            {brandsSecond.map((item) => {
              return (
                <div key={nanoid()}>
                  <Image src={greyElipse} alt='elipse' />
                  <span>{item.title}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className={styles.about_block_fourth}>
        <h2>Почему мы ?</h2>
        <div className={styles.brands_wrapper}>
          <div>
            {aboutMagaz.map((item) => {
              return (
                <div key={nanoid()}>
                  <Image src={greyElipse} alt='elipse' />
                  <span>{item.title}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
