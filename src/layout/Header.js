import Link from "next/link";
import { useState } from "react";
import MobileMenu from "./MobileMenu";
import { useTranslation } from "react-i18next"; // Added the missing import for translation
import LanguageSwitcher from "../components/LanguageSwitcher";

const Header = ({ header }) => {
  const { t } = useTranslation();
  switch (header) {
    case 1:
      return <Header1 />;
    default:
      return <DefaultHeader />;
  }
};

const DaskTopMenu = () => {
  const { t } = useTranslation();
  return (
    <ul className="navigation clearfix d-none d-lg-flex">
      <li className="dropdown">
        <Link href="/">
          <a>{t("home")}</a>
        </Link>
      </li>
      <li className="dropdown">
        <Link href="/shop-grid">{t("p")}</Link>
      </li>
      <li className="dropdown">
        <Link href="/about">
          <a>{t("about")}</a>
        </Link>
      </li>
      <li className="dropdown">
        <Link href="/blog-grid">{t("blog")}</Link>
      </li>
      <li>
        <Link href="/contact">{t("contact")}</Link>
      </li>
    </ul>
  );
};

const Nav = () => {
  const [nav, setNav] = useState(false);
  return (
    <nav className="main-menu navbar-expand-lg mobile-nav">
      <div className="navbar-header">
        <div className="mobile-logo my-15">
          <Link href="/">
            <a>
              <img
                src="assets/images/logos/logo.png"
                alt="Logo"
                title="Logo"
                style={{ maxWidth: "150px" }}
              />
              <img
                src="assets/images/logos/logo-white.png"
                alt="Logo"
                title="Logo"
              />
            </a>
          </Link>
        </div>
        {/* Toggle Button */}
        <button
          type="button"
          className="navbar-toggle"
          data-toggle="collapse"
          data-target=".navbar-collapse"
          onClick={() => setNav(!nav)}
        >
          <span className="icon-bar" />
          <span className="icon-bar" />
          <span className="icon-bar" />
        </button>
      </div>
      <div className={`navbar-collapse collapse clearfix ${nav ? "show" : ""}`}>
        <DaskTopMenu />
        <MobileMenu />
      </div>
    </nav>
  );
};

const DefaultHeader = () => {
  const { t } = useTranslation();
  return (
    <header className="main-header">
      <div className="header-top-wrap bg-light-green text-white py-10">
        <div className="container-fluid">
          <div className="header-top">
            <div
              className="row"
              style={{
                alignItems: "center",
              }}
            >
              <div className="col-xl-7 col-lg-6 row">
                <div className="top-left">
                  <ul>
                    <li style={{ fontWeight: 200 }}>
                      <i className="far fa-envelope" /> <b>{t("es")} :</b>{" "}
                      <a href="mailto:info@sunrisegold-tr.com">
                        info@sunrisegold-tr.com
                      </a>
                    </li>
                  </ul>
                </div>
                <div
                  style={{
                    marginLeft: "20px",
                  }}
                >
                  <LanguageSwitcher />
                </div>
              </div>

              <div className="col-xl-5 col-lg-6">
                <div className="top-right text-lg-right">
                  <ul>
                    <li>
                      <i className="far fa-phone" />{" "}
                      <b
                        style={{
                          fontWeight: 200,
                        }}
                      >
                        {t("cl")}
                      </b>{" "}
                      <a href="http://wa.me/905524477306">+90 552 447 73 06</a>
                    </li>
                    <li>
                      <div className="social-style-one">
                        <a href="https://www.facebook.com/people/%D8%B4%D8%B1%D9%83%D8%A9-%D8%B3%D9%86-%D8%B1%D9%8A%D8%B2/61563993771173/?mibextid=ZbWKwL">
                          <i className="fab fa-facebook-f" />
                        </a>
                        <a href="https://www.instagram.com/sunrisegold.tr">
                          <i className="fab fa-instagram" />
                        </a>
                        <a href="https://api.whatsapp.com/send/?phone=905524477306&text&type=phone_number&app_absent=0">
                          <i className="fab fa-whatsapp" />
                        </a>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*Header-Upper*/}
      <div className="header-upper">
        <div className="container-fluid clearfix">
          <div className="header-inner d-flex align-items-center">
            <div className="logo-outer">
              <div className="logo">
                <Link href="/">
                  <a>
                    <img
                      src="assets/images/logos/logo.png"
                      alt="Logo"
                      title="Logo"
                      style={{ maxWidth: "150px" }}
                    />
                  </a>
                </Link>
              </div>
            </div>
            <div className="nav-outer clearfix">
              <Nav />
            </div>
            <div className="menu-icons">
              <Link href="/consultation">
                <a className="theme-btn">
                  {t("nc")} <i className="fas fa-angle-double-right" />
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

// Define other headers (Header1, Header2, Header3) here, similar to DefaultHeader

const Header1 = () => {
  const { t } = useTranslation();
  return (
    <header className="main-header menu-absolute">
      <div className="header-top-wrap bg-light-green text-white py-10">
        <div className="container-fluid">
          <div className="header-top">
            <div className="row">
              <div className="col-xl-7 col-lg-6 row">
                <div className="top-left">
                  <ul>
                    <li
                      style={{
                        fontWeight: 200,
                      }}
                    >
                      <i className="far fa-envelope" />{" "}
                      <b
                        style={{
                          fontWeight: 200,
                        }}
                      >
                        {t("es")} :
                      </b>{" "}
                      <a href="mailto:info@sunrisegold-tr.com">
                        info@sunrisegold-tr.com
                      </a>
                    </li>
                  </ul>
                </div>
                <div
                  style={{
                    marginLeft: "20px",
                  }}
                >
                  <LanguageSwitcher />
                </div>
              </div>
              <div className="col-xl-5 col-lg-6">
                <div className="top-right text-lg-right">
                  <ul>
                    <li>
                      <i className="far fa-phone" />{" "}
                      <b
                        style={{
                          fontWeight: 200,
                        }}
                      >
                        {t("cl")}
                      </b>{" "}
                      <a href="http://wa.me/905524477306">+90 552 447 73 06</a>
                    </li>
                    <li>
                      <div className="social-style-one">
                        <a href="https://www.facebook.com/people/%D8%B4%D8%B1%D9%83%D8%A9-%D8%B3%D9%86-%D8%B1%D9%8A%D8%B2/61563993771173/?mibextid=ZbWKwL">
                          <i className="fab fa-facebook-f" />
                        </a>
                        <a href="https://www.instagram.com/sunrisegold.tr">
                          <i className="fab fa-instagram" />
                        </a>
                        <a href="https://api.whatsapp.com/send/?phone=905524477306&text&type=phone_number&app_absent=0">
                          <i className="fab fa-whatsapp" />
                        </a>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*Header-Upper*/}
      <div className="header-upper">
        <div className="container-fluid clearfix">
          <div className="header-inner d-flex align-items-center">
            <div className="logo-outer">
              <div className="logo">
                <Link href="/">
                  <a>
                    <img
                      src="assets/images/logos/logo.png"
                      alt="Logo"
                      title="Logo"
                      style={{
                        maxWidth: "150px",
                      }}
                    />
                  </a>
                </Link>
              </div>
            </div>
            <div className="nav-outer clearfix">
              {/* Main Menu */}
              <Nav />
              {/* Main Menu End*/}
            </div>
            {/* Menu Button */}
            <div className="menu-icons">
              {/* Nav Search */}

              <Link href="/consultation">
                <a className="theme-btn">
                  {t("nc")} <i className="fas fa-angle-double-right" />
                </a>
              </Link>
              {/* menu sidbar */}
            </div>
          </div>
        </div>
      </div>
      {/*End Header Upper*/}
    </header>
  );
};

export default Header;
