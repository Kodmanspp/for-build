import React, { useEffect, useState } from 'react';
import styles from './ReviewsPage.module.scss';
import { Rate } from 'antd';
// import rectangleOne from '../../public/icons/Rectangle163.png';
// import Image from 'next/image';
import { StarOutlined } from '@ant-design/icons';
import Card from '../MainPageReviewCard/Card';
import 'antd/dist/antd.css';
import { Formik } from 'formik';

function ReviewsPage() {
  const [rateAnt, setRateAnt] = useState(0);
  const [inpCheck, setInpCheck] = useState(0);
  const [SpamNum1, setSpamNum1] = useState(1);
  const [SpamNum2, setSpamNum2] = useState(1);

  useEffect(() => {
    setSpamNum1(Math.floor(Math.random() * 100));
    setSpamNum2(Math.floor(Math.random() * 100));
  }, []);

  const handleSubmitForm = ({ values, resetForm }) => {
    console.log({ ...values, grade: rateAnt });
  };

  return (
    <div className={styles.reviews_wrapper}>
      <h2 className={styles.title}> Отзывы об интернет-магазине “Baby Shop”</h2>
      <Formik
        initialValues={{
          name: '',
          email: '',
          grade: '',
          review: '',
          agreement: false,
        }}
        onSubmit={(values, { resetForm }) => {
          handleSubmitForm({ values, resetForm });
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleSubmit,
          handleBlur,
        }) => (
          <form onSubmit={handleSubmit}>
            <div className={styles.reviews_action}>
              <h3 className={styles.rew_title}>Оставьте ваш отзыв:</h3>
              <div className={styles.form_wrapper}>
                <div className={styles.input_wrapper}>
                  <div className={styles.label_name}>
                    <label>Имя *</label>
                    <input
                      className={styles.name_input}
                      type='text'
                      name='name'
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.name}
                    />
                  </div>
                  <div>
                    <label>Email</label>
                    <input
                      className={styles.email_input}
                      type='text'
                      name='email'
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.email}
                    />
                  </div>
                  <div className={styles.rate_wrapper}>
                    <label>Оценка:</label>
                    <Rate
                      value={rateAnt}
                      onChange={(value) => setRateAnt(value)}
                      defaultValue={2}
                    />
                  </div>
                  <div style={{ marginTop: 100 }}>
                    <div>
                      <h3 className={styles.title_maga}>
                        Общий рейтинг магазина:
                      </h3>
                      <h4 className={styles.title_maga}>
                        4.5 на основе 12 отзывов
                      </h4>
                      <div>
                        <div>
                          <button className={styles.star_button}>
                            <StarOutlined
                              style={{ color: 'orange', marginLeft: 5 }}
                            />
                          </button>
                        </div>
                        <div>
                          <button className={styles.star_button}>
                            <StarOutlined
                              style={{ color: 'orange', marginLeft: 5 }}
                            />
                            <StarOutlined
                              style={{ color: 'orange', marginLeft: 5 }}
                            />
                          </button>
                        </div>
                        <div>
                          <button className={styles.star_button}>
                            <StarOutlined
                              style={{ color: 'orange', marginLeft: 5 }}
                            />
                            <StarOutlined
                              style={{ color: 'orange', marginLeft: 5 }}
                            />
                            <StarOutlined
                              style={{ color: 'orange', marginLeft: 5 }}
                            />
                          </button>
                        </div>
                        <div>
                          <button className={styles.star_button}>
                            <StarOutlined
                              style={{ color: 'orange', marginLeft: 5 }}
                            />
                            <StarOutlined
                              style={{ color: 'orange', marginLeft: 5 }}
                            />
                            <StarOutlined
                              style={{ color: 'orange', marginLeft: 5 }}
                            />
                            <StarOutlined
                              style={{ color: 'orange', marginLeft: 5 }}
                            />
                          </button>
                        </div>
                        <div>
                          <button className={styles.star_button}>
                            <StarOutlined
                              style={{ color: 'orange', marginLeft: 5 }}
                            />
                            <StarOutlined
                              style={{ color: 'orange', marginLeft: 5 }}
                            />
                            <StarOutlined
                              style={{ color: 'orange', marginLeft: 5 }}
                            />
                            <StarOutlined
                              style={{ color: 'orange', marginLeft: 5 }}
                            />
                            <StarOutlined
                              style={{ color: 'orange', marginLeft: 5 }}
                            />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.textarea_wrapper}>
                  <label>Отзыв:</label>
                  <textarea
                    name='review'
                    value={values.review}
                    onBlur={handleBlur}
                    onChange={handleChange}
                  />
                  <div className={styles.textarea_spam}>
                    <div>
                      <span>Проверка на спам:</span>
                    </div>
                    <div className={styles.spam_check}>
                      <span>
                        {SpamNum1} + {SpamNum2} ={' '}
                      </span>
                      <input
                        type='number'
                        value={inpCheck}
                        onChange={(e) => setInpCheck(e.target.value)}
                      />
                      {/* {inpCheck == SpamNum1 + SpamNum2
                        ? 'Правильно'
                        : 'Не правильно'} */}
                    </div>
                    <div className={styles.checkbox_wrapper}>
                      <input
                        type='checkbox'
                        name='agreement'
                        value={values.agreement}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      <span>
                        {' '}
                        Нажимая на кнопку “Отправить отзыв”, я даю согласиена
                        обработку персональных данных*
                      </span>
                    </div>
                    <div className={styles.send_button_wrapper}>
                      <button
                        type='submit'
                        disabled={
                          inpCheck == SpamNum1 + SpamNum2 ? false : true
                        }
                        className={
                          inpCheck == SpamNum1 + SpamNum2
                            ? ''
                            : styles.button_disable
                        }
                      >
                        Отправить отзыв
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        )}
      </Formik>
      <div className={styles.reviews}>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <div className={styles.all_otsivs}>
        <button>все отзывы</button>
      </div>
    </div>
  );
}

export default ReviewsPage;
