import React, { useState } from "react";
import style from "./Layout.module.scss";
import Menu from "../Tabs Menu/Menu";
import ProfileIcon from "../../static/profile-icon.svg";
import HistoryIcon from "../../static/history-icon.svg";
import FavoriteIcon from "../../static/favorites-icon.svg";
import LogoutIcon from "../../static/logout-icon.svg";
import Profile from "./Profile/Profile";
import Favorite from "../Favorite/Favorite";
import History from "./History/History";

const navs = [
  { id: 1, title: "Профиль", page: "profile", icon: ProfileIcon },
  {
    id: 2,
    title: "История заказов",
    page: "history",
    icon: HistoryIcon,
  },
  { id: 3, title: "Избранное", page: "favorites", icon: FavoriteIcon },
  { id: 4, title: "Выход", page: "log-out", icon: LogoutIcon },
];

const Layout = () => {
  const [activePage, setActivePage] = useState("profile");
  return (
    <div className={style.container}>
      <h2 className={style.title}>Личный кабинет покупателя</h2>
      <div className={style.wrapper}>
        <div>
          <Menu
            tabs={navs}
            activePage={activePage}
            setActivePage={setActivePage}
          />
        </div>
        <div>
          {activePage === "profile" && <Profile />}
          {activePage === "favorites" && <h1>Favorites</h1>}
          {activePage === "history" && <History />}
        </div>
      </div>
    </div>
  );
};

export default Layout;
