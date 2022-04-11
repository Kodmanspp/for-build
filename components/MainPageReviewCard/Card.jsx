import React from 'react';
import styles from './Card.module.scss';
import oksana from '../../public/icons/Oksana.png';
import Image from 'next/image';
import { useRouter } from 'next/router';

function Card() {
  const router = useRouter();

  return (
    <div className={styles.card_wrapper}>
      <div className={styles.profile_info}>
        {router.pathname === '/mainpage' ? (
          ''
        ) : (
          <div>
            <Image src={oksana} alt='oksana' />
          </div>
        )}
        <div className={styles.profile_name}>
          <span>Марина Собчак</span>
          <br />
          <span>г. Кремль</span>
        </div>
      </div>
      <div className={styles.comment_wrapper}>
        <span>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </span>
      </div>
    </div>
  );
}

export default Card;
