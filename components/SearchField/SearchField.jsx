import React from 'react';
import styles from './SearchField.module.scss';
import searchIcon from '../../public/icons/search_icon.svg';
import Image from 'next/image';

function SearchField() {
  return (
    <div>
      {' '}
      <div className={styles.search_img}>
        <Image src={searchIcon} alt='location' />
      </div>
      <input className={styles.search_inp} type='text' placeholder='Искать' />
    </div>
  );
}

export default SearchField;
