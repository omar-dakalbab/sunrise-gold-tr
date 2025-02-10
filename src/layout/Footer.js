import dynamic from "next/dynamic";
import Link from "next/link";
import { useTranslation } from "react-i18next";

const Counter = dynamic(() => import("../components/Counter"), {
  ssr: false,
});



const Footer = () => {

const {t} = useTranslation();

  
  return (
  <footer className="main-footer bg-green text-white" style={{
    paddingTop: "50px",
  }}>
    <div className="container">
      {/* <div className="footer-top-newsletter py-80 mb-75">
        <div className="section-title">
          <h2>Newsletter Subscribe</h2>
        </div>
        <form onSubmit={(e) => e.preventDefault()} action="#">
          <input type="email" placeholder="Email Address" required="" />
          <button className="theme-btn">
            subscribe now <i className="fas fa-angle-double-right" />
          </button>
        </form>
      </div> */}
      <div className="row justify-content-center">
        <div className="col-lg-4 col-md-6 order-md-2">
          <div className="footer-widget about-widget text-center">
            <div className="footer-logo mb-30">
              <Link href="/">
                <a>
                  <img src="assets/images/logos/logo.png" alt="Logo" />
                </a>
              </Link>
            </div>
            <p>
              {t('fd')}
            </p>
            <div className="social-style-two pt-10">
            <ul>
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
        <div className="col-lg-4 col-md-6 order-md-1">
          <div className="footer-widget menu-widget">
            <h4 className="footer-title">{t('fql')}</h4>
            <ul>
              <li className="dropdown">
                <Link
                  href="/"
                >
                  <a>{t('home')}</a></Link>

              </li>

              <li className="dropdown">
                <Link href="/blog-grid">{t('blog')}</Link>

              </li>
              <li className="dropdown">
                <Link href="/shop-grid">{t('pfp')}</Link>

              </li>
              <li className="dropdown">

                <Link href="/about">
                  <a>{t('about')}</a>
                </Link>

              </li>


              <li>
                <Link href="/contact">
                  {t('contact')}</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 order-md-3">
          <div className="footer-widget contact-widget">
            <h4 className="footer-title"></h4>
            <p>
              {t('hqoi')}{" "}
            </p>
            <ul>
              <li>
                <i className="fal fa-map-marker-alt" />
                Çilek, 139. Cd. 1-1, 33020 Akdeniz/Mersin
              </li>
              <li>
                <i className="far fa-envelope" />
                <a href="mailto:info@sunrisegold-tr.com">info@sunrisegold-tr.com</a>
              </li>
              <li>
                <i className="far fa-phone" />
                <a href="http://wa.me/905524477306">+90 552 447 73 06</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="copyright-area pt-25 pb-10">
        <p>Copyright © 2024 Sun Rise Gold. All Rights Reserved.</p>

        {/* Scroll Top Button */}
      </div>
    </div>
    <div className="footer-shapes">
      <img
        className="footer-bg"
        src="assets/images/background/footer-bg-shape.png"
        alt="Shape"
      />
      <img
        className="shape-one"
        src="assets/images/shapes/footer1.png"
        alt="Shape"
      />
      <img
        className="shape-two"
        src="assets/images/shapes/footer2.png"
        alt="Shape"
      />
      <img
        className="shape-three"
        src="assets/images/shapes/footer3.png"
        alt="Shape"
      />
      <img
        className="shape-four"
        src="assets/images/shapes/footer4.png"
        alt="Shape"
      />
    </div>
  </footer> 
  );
};


export default Footer;