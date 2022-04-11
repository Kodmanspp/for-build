import React from 'react';
import styles from './Footer.module.scss';
import logoIcon from '../../../public/icons/logo.svg';
import vk from '../../../public/icons/vk.svg';
import telega from '../../../public/icons/telega.svg';
import whasap from '../../../public/icons/whasap.svg';
import insta from '../../../public/icons/instagram.svg';
import facebook from '../../../public/icons/facebook.svg';
import Image from 'next/image';
import Link from 'next/link';
import SearchField from '../../SearchField/SearchField';

function Footer(props) {
  return (
    <div className={styles.footer_wrapper}>
      <div className={styles.header_footer}>
        <div className={styles.logo_img}>
          <button>
            <Image src={logoIcon} width={160} height={100} alt='logo' />
          </button>
        </div>
        <div className={styles.catalog_wrapper}>
          <div className={styles.title}>
            <span>Каталог одежды</span>
          </div>
          <div>
            <Link href={'/'}>
              <a>Новинки</a>
            </Link>
          </div>
          <div>
            <Link href={'/'}>
              <a>Весна;</a>
            </Link>
          </div>
          <div>
            <Link href={'/'}>
              <a>Лето;</a>
            </Link>
          </div>
          <div>
            <Link href={'/'}>
              <a>Осень</a>
            </Link>
          </div>
          <div>
            <Link href={'/'}>
              <a>Зима</a>
            </Link>
          </div>
          <div>
            <Link href={'/'}>
              <a>Для девочек</a>
            </Link>
          </div>
          <div>
            <Link href={'/'}>
              <a>Для мальчиков</a>
            </Link>
          </div>
        </div>
        <div className={styles.about_baby__shop}>
          <div className={styles.title}>
            <span>BABY SHOP</span>
          </div>
          <div>
            <Link href={'/'}>
              <a>О нас</a>
            </Link>
          </div>
          <div>
            <Link href={'/'}>
              <a>Сотрудничество</a>
            </Link>
          </div>
          <div>
            <Link href={'/'}>
              <a>Оплата и доставка</a>
            </Link>
          </div>
          <div>
            <Link href={'/'}>
              <a>Политика конфиденциальности</a>
            </Link>
          </div>
        </div>
        <div className={styles.contacts_wrapper}>
          <div className={styles.contacts_first}>
            <div>
              <span className={styles.title}>контакты</span>
            </div>
            <div>
              <span>8(000)111-22-33</span>
            </div>
          </div>
          <div className={styles.contacts_second}>
            <div>
              <span className={styles.title}>Email</span>
            </div>
            <div>
              <span>K_eldar_1998@icloud.com</span> <br />
              <span>q.kurbonov_1998@mail.ru</span>
            </div>
          </div>
          <div>
            <div>
              <span className={styles.title}>адресс</span>
            </div>
            <div>
              <span>Город Москва , МКАД , 14-й километр, дом 4 стр 1</span>
            </div>
          </div>
        </div>
        <div className={styles.search_wrapper}>
          <SearchField />
          <div className={styles.search_title}>
            <span>время работы</span> <br />
            <span>с 7 утра до 20.00 вечера</span>
          </div>
        </div>
      </div>
      <div className={styles.social_wrapper}>
        <div>
          <Link href={'/'}>
            <a>
              <Image src={insta} alt='lol' />
            </a>
          </Link>
        </div>
        <div>
          <Link href={'/'}>
            <a>
              <Image src={facebook} alt='lol' />
            </a>
          </Link>
        </div>
        <div>
          <Link href={'/'}>
            <a>
              <Image src={vk} alt='lol' />
            </a>
          </Link>
        </div>
        <div>
          <Link href={'/'}>
            <a>
              <Image src={telega} alt='lol' />
            </a>
          </Link>
        </div>
        <div>
          <Link href={'/'}>
            <a>
              <Image src={whasap} alt='lol' />
            </a>
          </Link>
        </div>
      </div>
      <div className={styles.footer_text}>
        <span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
          maxime explicabo minima perferendis fuga nostrum magni tempore
          voluptate ipsum numquam!
        </span>
      </div>
    </div>
  );
}

export default Footer;
