import React from 'react';
import styles from './Navbar.module.scss';
import locationIcon from '../../../public/icons/location_clothes.svg';
import commentIcon from '../../../public/icons/comment_icon.svg';
import phoneIcon from '../../../public/icons/phone.svg';
import questionIcon from '../../../public/icons/vopros_icon.svg';
import logoIcon from '../../../public/icons/logo.svg';
import profileIcon from '../../../public/icons/people_icon.svg';
import favoriteIcon from '../../../public/icons/favorite_icon.svg';
import cartIcon from '../../../public/icons/cart_icon.svg';
import activeCartIcon from '../../../public/icons/active_cart.svg';
import activeFavoriteIcon from '../../../public/icons/active_favorite.svg';
import SearchField from '../../SearchField/SearchField';
import Image from 'next/image';
import Link from 'next/link';
import { MenuOutlined } from '@ant-design/icons';
import { useRouter } from 'next/router';

function Navbar({ menuActive, setMenuActive }) {
  const router = useRouter();
  const locationArray = ['Москва', 'Москва', 'Москва', 'Москва'];

  return (
    <div className={styles.navbar_wrapper}>
      <div className={styles.navbar_info}>
        <div className={styles.left_side}>
          <div className={styles.select_wrapper}>
            <Image width='16' height='16' src={locationIcon} alt='location' />
            <select>
              {locationArray.map((item, index) => (
                <option key={index} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </div>
          <div className={styles.info_wrapper}>
            <Image width='16' height='16' src={commentIcon} alt='location' />
            <span>info@baby-shop.ru</span>
          </div>
          <div className={styles.phone_wrapper}>
            <Image width='16' height='16' src={phoneIcon} alt='location' />
            <span>8(000)111-22-33</span>
          </div>
        </div>
        <div className={styles.right_side}>
          <div>
            <Image src={questionIcon} alt='location' />
          </div>
        </div>
      </div>
      <div className={styles.navbar_action}>
        <div className={styles.logo_navbar}>
          <Link href={'/'}>
            <a>
              <Image width={35} height={35} src={logoIcon} alt='location' />
            </a>
          </Link>
        </div>
        <div className={styles.right_side}>
          <div className={styles.search_wrapper}>
            <SearchField />
          </div>
          <div className={styles.navbar_burger}>
            <button onClick={() => setMenuActive(!menuActive)}>
              <MenuOutlined style={{ color: 'white' }} />
            </button>
          </div>
          <div className={styles.profile_wrapper}>
            <Link href={'/profile'}>
              <a>
                <Image width={35} height={35} src={profileIcon} alt='loca' />
              </a>
            </Link>
          </div>
          <div className={styles.favorite_wrapper}>
            <Link href={'/favorite'}>
              <a>
                <Image
                  width={35}
                  height={35}
                  src={
                    router.pathname === '/favorite'
                      ? activeFavoriteIcon
                      : favoriteIcon
                  }
                  alt='loca'
                />
              </a>
            </Link>
          </div>
          <div className={styles.cart_wrapper}>
            <Link href={'/cart'}>
              <a>
                <Image
                  width={35}
                  height={35}
                  src={router.pathname === '/cart' ? activeCartIcon : cartIcon}
                  alt='loca'
                />
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
