import React, { useEffect, useState } from 'react';
import styles from './MainPage.module.scss';
import pocan from '../../public/icons/pocan.png';
import telka from '../../public/icons/telka.png';
import elipse from '../../public/icons/Ellipse.png';
import Image from 'next/image';
import ClothesCard from '../MainPageCards/ClothesCard';
import Card from '../MainPageReviewCard/Card';
import { accordionArray, cardArray, headerArray } from './MainPageData';
import SimpleAccordion from '../Accordion/Accordion';
import {
  fetchNewCollection,
  newCollectionSelectors,
} from '../../redux/slice/newCollection.slice';
import { useDispatch, useSelector } from 'react-redux';
import Link from 'next/link';

function MainPage() {
  const dispatch = useDispatch();
  const allNewCollection = useSelector((state) =>
    newCollectionSelectors.selectAll(state)
  );

  useEffect(() => {
    dispatch(fetchNewCollection());
  }, []);
  return (
    <>
      <div className={styles.main_wrapper}>
        <div className={styles.left_side}>
          <div className={styles.header_title}>
            <h1>ДЕТСКАЯ ОДЕЖДА ОПТОМ В МОСКВЕ</h1>
          </div>
          {headerArray.map((item) => (
            <div key={item.title} className={styles.hedaer_sub_title}>
              <Image src={elipse} alt='elipse' />
              <span>{item.title}</span>
            </div>
          ))}
          <div>
            <Link href={'/catalog'}>
              <a>
                <button className={styles.header_button}>
                  СМОТРЕТЬ КАТАЛОГ
                </button>
              </a>
            </Link>
          </div>
        </div>
        <div className={styles.right_side}>
          <div className={styles.baby_wrapper}>
            <Image src={pocan} alt={'lol'} />
            <Image src={telka} alt={'lol'} />
          </div>
        </div>

        {/* new collection wrapper */}
      </div>
      <div className={styles.new_collection_wrapper}>
        <h1 className={styles.new_collection_title}>новая коллекция</h1>
        <div className={styles.new_collection_card}>
          <ClothesCard cardArray={allNewCollection} />
        </div>
        <div className={styles.all_catalog_button}>
          <Link href={'/catalog'}>
            <a>
              <button>Весь каталог</button>
            </a>
          </Link>
        </div>
      </div>
      <div className={styles.reviews_wrapper}>
        <div className={styles.reviews}>
          <Card />
          <Card />
          <Card />
        </div>
        <div className={styles.all_reviews_button}>
          <button>все отзывы</button>
        </div>
        <div className={styles.send_reviews_wrapper}>
          <div style={{ width: '100%' }}>
            <div style={{ marginBottom: 20 }}>
              <span>Анонимный пользователь</span>
            </div>
            <div className={styles.send_review_action}>
              <div className={styles.textarea_wrapper}>
                <textarea />
              </div>
              <div className={styles.action_button_wrapper}>
                <div>
                  <button className={styles.login_button}>войти</button>
                </div>
                <div>
                  <button className={styles.publish_button}>
                    опубликовать
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.accordion_wrapper}>
          <h2>ВОПРОС-ОТВЕТ</h2>
          <div className={styles.accordion_zxc}>
            {accordionArray.map((item, index) => {
              return (
                <SimpleAccordion
                  key={index}
                  title={item.question}
                  content={item.answer}
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default MainPage;
