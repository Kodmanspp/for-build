import React, { useMemo } from "react";
import style from "./Menu.module.scss";
import FavoriteIcon from "../../static/favorites-icon.svg";
import ProfileIcon from "../../static/profile-icon.svg";
import HistoryIcon from "../../static/history-icon.svg";
import LogoutIcon from "../../static/logout-icon.svg";
import Image from "next/image";



const Menu = ({ tabs, activePage, setActivePage }) => {
  const isActivePage = (page) => {
    // return useMemo(() => activePage.includes(page), [activePage]);
  };
  return (
    <div className={style.menu}>
      {tabs.map(({ id, title, page, icon }) => (
        <div key={id} onClick={() => setActivePage(page)}>
          <p
            className={`${style.link} ${
              isActivePage(page) && style.link_active
            }`}
          >
            <Image width={35} height={35} src={icon} />
            {title}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Menu;
