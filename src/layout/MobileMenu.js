import { useState } from "react";
import { Blog, Contact, Home, PagesMobile, Portfolio, Shop } from "./Menus";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "../components/LanguageSwitcher";

const MobileMenu = () => {
  const {t} = useTranslation();
  const [activeMenu, setActiveMenu] = useState("");
  const activeMenuSet = (value) =>
    setActiveMenu(activeMenu === value ? "" : value),
    activeLi = (value) =>
      value === activeMenu ? { display: "block" } : { display: "none" };
  return (
    <ul className="navigation clearfix d-block d-lg-none mobile-header">
      <li className="dropdown">
        <Link
          href="/"
        >
          <a>{t('home')}</a></Link>

      </li>
      <li className="dropdown">
        <Link href="/shop-grid">{t('pre')}</Link>
      </li>

      <li className="dropdown">
        {/* <a href="/about">About</a> */}
        <Link href="/about">
          <a>{t('about')}</a>
        </Link>

      </li>

      <li className="dropdown">
        <Link href="/blog-grid">{t('blog')}</Link>
      </li>



      <li>
      <Link href="/contact">{t('contact')}</Link>
    </li>

    <li>
    <div className="mt-5 mb-5"> 
        <LanguageSwitcher />
    </div>
    </li>
      
      <li>
        <Link href="/consultation">
          <a className="theme-btn" style={{
            color: "#fff"
          }}>
            {t('nc')} <i className="fas fa-angle-double-right" />
          </a>
        </Link>
      </li>
    </ul>
  );
};
export default MobileMenu;
