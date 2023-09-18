import React from 'react';
import style from './menu.module.css'
export const Menu = () => {
  return (
    <div>
      <ul className={style.menu}>
        <li><u>home</u></li>
        <li><u>about</u></li>
        <li><u>contact</u></li>
      </ul>
    </div>
  );
}

