"use client";

import Link from 'next/link';
import Styles from "./Footer.module.css";
import { usePathname } from "next/navigation";

const Footer = () => {
  const pathname = usePathname();
  return (
    <footer className={Styles["footer"]}>
      {pathname === "/" ? (
        <div className={Styles["footer__logo"]}>
          <span className={Styles["footer__logo-name"]}>pindie</span>
          <span className={Styles["footer__logo-copy"]}>, XXI век</span>
        </div>
      ) : (
        <Link href="/" className={Styles["footer__logo"]}>
          <span className={Styles["footer__logo-name"]}>pindie</span>
          <span className={Styles["footer__logo-copy"]}>, XXI век</span>
        </Link>
      )}
      <ul className={Styles["social-list"]}>
        <li className={Styles["social-list__item"]}>
          <Link href="" className={'button ${Styles["social-list__link"]}'}>
            YT
          </Link>
        </li>
        <li className={Styles["social-list__item"]}>
          <Link href="" className={'button ${Styles["social-list__link"]}'}>
            ВК
          </Link>
        </li>
        <li className={Styles["social-list__item"]}>
          <Link href="" className={'button ${Styles["social-list__link"]}'}>
            TG
          </Link>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
