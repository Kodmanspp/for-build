import Link from "next/link";
import React from "react";
import cl from "./Auth.module.scss";
import { useRouter } from "next/router";
import google from "../../static/gmail-icon.svg";
import yandex from "../../static/yandex-icon.svg";
import mail from "../../static/mail-icon.svg";
import vk from "../../static/vk-icon.svg";
import Image from "next/image";
import { Input } from "antd";

function Auth() {
  const router = useRouter();
  return (
    <div className={cl.container}>
      <div className={cl.breadcrumb}>
        <div
          className={`${cl.link} ${
            router.pathname === "/auth" ? cl.active : cl.noramal
          }`}
        >
          <Link href={"/auth"}>Войти</Link>
        </div>
        /
        <div
          className={`${cl.link} ${
            router.pathname === "/registration" ? cl.active : cl.noramal
          }`}
        >
          <Link href={"/registration"}>Регистрация</Link>
        </div>
      </div>
      <form className={cl.form}>
        <div className={cl.inputs}>
        <Input className={cl.input} placeholder="Электронная почта" />
        <Input className={cl.input} placeholder="Пароль" />
        </div>
        <button type="submit">Войти на сайт</button>
      </form>
      <div className={cl.anotherAuth}>
        <p>Войти через</p>
        <div className={cl.links}>
          <Image src={vk} alt="mail" />
          <Image src={google} alt="mail" />
          <Image src={yandex} alt="mail" />
          <Image src={mail} alt="mail" />
        </div>
      </div>
    </div>
  );
}

export default Auth;
