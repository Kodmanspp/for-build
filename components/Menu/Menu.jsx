import { MenuOutlined } from '@ant-design/icons';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import styles from './Menu.module.scss';
import profileIcon from '../../public/icons/people_icon.svg';
import favoriteIcon from '../../public/icons/favorite_icon.svg';
import cartIcon from '../../public/icons/cart_icon.svg';

function Menu({ menuActive, setMenuActive }) {
  return (
    <div className={menuActive ? styles.menuActive : styles.menu}>
      <div className={styles.menu_content}>
        <div className={styles.navbar_burger}>
          <button onClick={() => setMenuActive(!menuActive)}>
            <MenuOutlined />
          </button>
        </div>
        <div className={styles.navbar_links}>
          <div>
            <Link href={'/'}>
              <a>главная</a>
            </Link>
          </div>
          <div>
            <Link href='/'>
              <a>каталог</a>
            </Link>
          </div>
          <div>
            <Link href={'/'}>
              <a>о магазине</a>
            </Link>
          </div>
          <div>
            <Link href={'/'}>
              <a>Как заказать</a>
            </Link>
          </div>
          <div>
            <Link href={'/'}>
              <a>Доставка</a>
            </Link>
          </div>
          <div>
            <Link href={'/'}>
              <a>Отзывы</a>
            </Link>
          </div>
          <div>
            <Link href={'/'}>
              <a>Контакты</a>
            </Link>
          </div>
          <div
            style={{
              display: 'flex',
              width: '100%',
            }}
          >
            <div style={{ marginRight: 20 }} className={styles.profile_wrapper}>
              <Link href={'/'}>
                <a>
                  <Image width={50} height={50} src={profileIcon} alt='loca' />
                </a>
              </Link>
            </div>
            <div
              style={{ marginRight: 20 }}
              className={styles.favorite_wrapper}
            >
              <Link href={'/'}>
                <a>
                  <Image width={50} height={50} src={favoriteIcon} alt='loca' />
                </a>
              </Link>
            </div>
            <div className={styles.cart_wrapper}>
              <Link href={'/'}>
                <a>
                  <Image width={50} height={50} src={cartIcon} alt='loca' />
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Menu;
