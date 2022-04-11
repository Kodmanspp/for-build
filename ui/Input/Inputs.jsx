import React from 'react';
import style from './Input.module.scss'

const Input = ({label, type, name}) => {
  return (
    <div className={style.inputBlock}>
      <label htmlFor={name}>{label}</label>
      <input id={name} type="text"/>
    </div>
  );
};

export default Input;
