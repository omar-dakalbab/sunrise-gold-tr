import dynamic from "next/dynamic";
import Link from "next/link";
import { Nav, Tab } from "react-bootstrap";
import Slider from "react-slick";
import ClientLogoSlider from "../src/components/ClientLogoSlider";
import { HomeSlider1 } from "../src/components/HomeSlider";
import CustomerReviews from "../src/components/slider/CustomerReviews";
import PhotoGallery from "../src/components/slider/PhotoGallery";
import Layout from "../src/layout/Layout";
import { productActive } from "../src/sliderProps";
import Data from "../public/JSON/data.json";
import { useEffect } from "react";
import LanguageSwitcher from "../src/components/LanguageSwitcher.js";
import { useTranslation } from "react-i18next";

const MunfimCountdown = dynamic(
  () => import("../src/components/MunfimCountdown"),
  {
    ssr: false,
  }
);
const Index = () => {
  // clear all cache data
  // Force reload logic (set localStorage to avoid multiple reloads)

  const { t, i18n } = useTranslation();

  useEffect(() => {
    const isRefresh = localStorage.getItem("isRefresh");

    if (isRefresh === null) {
      localStorage.setItem("isRefresh", "true");
      location.reload(true);
    }

    if (typeof window !== "undefined") {
      const lang = i18n.language;
      console.log("lang", lang);
      // document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
      document.documentElement.style.fontFamily =
        lang === "ar" && "CustomFontArabic, sans-serif !important";
    }
  }, []);

  return (
    <Layout header={1}>
      {/*End Hidden Sidebar */}
      {/* Slider Section Start */}
      <section className="slider-section bg-lighter">
        <div className="main-slider-active">
          <HomeSlider1 />
        </div>
        <img
          className="bg-leaf"
          src="assets/images/slider/slider-bg-leaf.png"
          alt="Shape"
        />
        <img
          className="bg-shape"
          src="assets/images/slider/slider-bg-shape.png"
          alt="Shape"
        />
      </section>
      {/* Slider Section End */}
      {/* Category Section Start */}
      <section className="category-section pt-130 rpt-100">
        <div className="container">
          <div className="row align-items-end pb-35">
            <div className="col-lg-7 wow fadeInUp delay-0-2s">
              <div className="section-title mb-20">
                <span className="sub-title mb-20">{t("pre")}</span>
                <h2>{t("fpc")}</h2>
              </div>
            </div>
            {/* <div className="col-lg-5 wow fadeInUp delay-0-4s">
              <div className="text mb-20">
                <p>We ensure the application of the highest quality standards in every stage of production, guaranteeing that our clients receive healthy and fresh products that retain their nutritional value.
                </p>
              </div>
            </div> */}
          </div>
          <div className="category-wrap">
            {Data?.categories?.map((category, index) => {
              let categoryTitle;
              if (i18n.language === "tr") {
                categoryTitle = category.titleTr; // Turkish title
              } else if (i18n.language === "ar") {
                categoryTitle = category.titleAr; // Arabic title
              } else {
                categoryTitle = category.title; // Default to English
              }
              let categoryDesc;
              if (i18n.language === "tr") {
                categoryDesc = category.descTr;
              } else if (i18n.language === "ar") {
                categoryDesc = category.descAr;
              } else {
                categoryDesc = category.desc;
              }
              return (
                <div
                  key={index}
                  className={`category-item ${category.animationClass}`}
                >
                  <Link href={`/shop-grid?q=${category.id}`}>
                    <div className="category-content">
                      {/* Icon */}
                      <div className="icon" style={{ cursor: "pointer" }}>
                        <img src={category.icon} alt="Icon" />
                      </div>
                      {/* Title */}
                      <h5>{categoryTitle}</h5>
                      {/* <h8 className="">{categoryDesc}</h8> */}
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      {/* Category Section End */}
      {/* About Section Start */}
      <section className="about-section pt-85 rpt-55 pb-130 rpb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="about-images wow fadeInLeft delay-0-2s">
                <div className="row align-items-center">
                  <div className="col-6">
                    <img src="assets/images/about/about1.png" alt="About" />
                  </div>
                  <div className="col-6">
                    <img src="assets/images/about/about2.png" alt="About" />
                    <img src="assets/images/about/about3.png" alt="About" />
                  </div>
                </div>
                {/* <div className="offer">
                  <img src="assets/images/shapes/organic.png" alt="Offer" />
                </div> */}
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about-content rpt-65 wow fadeInRight delay-0-2s">
                <div className="section-title mb-35">
                  <span className="sub-title mb-20">{t("abt")}</span>
                  {/* <h2>Organic &amp; Helathy Foods Provider Farming</h2> */}
                </div>
                <p>{t("des")}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* About Section End */}
      {/* Offer Banners Start */}
      {/* <section className="offer-banners-area">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xl-4 col-md-6">
              <div className="offer-banner-item color-two wow fadeInUp delay-0-2s">
                <div className="content">
                  <span className="sub-title">35% Off Foods</span>
                  <h4>Organic Vegetables</h4>
                  <p>Best Foods For Your Family</p>
                  <Link href="/shop-grid">
                    <a className="theme-btn style-two">
                      Our Products <i className="fas fa-angle-double-right" />
                    </a>
                  </Link>
                </div>
                <div className="image">
                  <img
                    src="assets/images/offers/offer-banner1.png"
                    alt="Offer Banner"
                  />
                </div>
                <img
                  className="offer-bg"
                  src="assets/images/offers/offer-baner-bg1.png"
                  alt="Offer BG"
                />
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="offer-banner-item wow fadeInUp delay-0-4s">
                <div className="content">
                  <span className="sub-title">35% Off Foods</span>
                  <h4>Fresh Organic Fruits</h4>
                  <p>Best Foods For Your Family</p>
                  <Link href="/shop-grid">
                    <a className="theme-btn style-two">
                      Our Products <i className="fas fa-angle-double-right" />
                    </a>
                  </Link>
                </div>
                <div className="image">
                  <img
                    src="assets/images/offers/offer-banner2.png"
                    alt="Offer Banner"
                  />
                </div>
                <img
                  className="offer-bg"
                  src="assets/images/offers/offer-baner-bg2.png"
                  alt="Offer BG"
                />
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="offer-banner-item color-three wow fadeInUp delay-0-6s">
                <div className="content">
                  <span className="sub-title">35% Off Foods</span>
                  <h4>Ripe Strawberries</h4>
                  <p>Best Foods For Your Family</p>
                  <Link href="/shop-grid">
                    <a className="theme-btn style-two">
                      Our Products <i className="fas fa-angle-double-right" />
                    </a>
                  </Link>
                </div>
                <div className="image">
                  <img
                    src="assets/images/offers/offer-banner3.png"
                    alt="Offer Banner"
                  />
                </div>
                <img
                  className="offer-bg"
                  src="assets/images/offers/offer-baner-bg3.png"
                  alt="Offer BG"
                />
              </div>
            </div>
          </div>
        </div>
      </section> */}
      {/* Offer Banners End */}
      {/* Product Section Start */}
      <section className="product-section pt-100 rpt-70 pb-130 rpb-100">
        <div className="container-fluid">
          <div className="section-title text-center mb-60">
            <span className="sub-title mb-20">{t("pre")}</span>
            <h2>{t("qua")}</h2>
          </div>
          <Slider {...productActive} className="product-active">
            {Data.products.map((product, index) => {
              let productTitle;
              if (i18n.language === "tr") {
                productTitle = product.titleTr;
              } else if (i18n.language === "ar") {
                productTitle = product.titleAr;
              } else {
                productTitle = product.title;
              }

              return (
                <div key={index}>
                  <Link href={product.link + "?product=" + product.id}>
                    <div
                      className={`product-item wow fadeInUp delay-${
                        index * 0.2
                      }s`}
                      style={{
                        fontWeight: 300,
                        cursor: "pointer",
                      }}
                    >
                      {product.offer && (
                        <span
                          style={{
                            fontWeight: 300,
                          }}
                          className={`offer ${
                            product.offer === "sale" ? "bg-red" : ""
                          }`}
                        >
                          {product.offer}
                        </span>
                      )}
                      <div className="image">
                        <img
                          src={product.image}
                          alt="Product"
                          style={{
                            maxHeight: 250,
                          }}
                        />
                      </div>
                      <div
                        className="content"
                        style={{
                          marginTop: 30,
                        }}
                      >
                        <div className="ratting">
                          {[...Array(product.rating)].map((_, i) => (
                            <i key={i} className="fas fa-star" />
                          ))}
                        </div>
                        <h5>{productTitle}</h5>
                      </div>
                    </div>
                  </Link>
                </div>
              );
            })}
          </Slider>
        </div>
      </section>
      {/* Product Section End */}
      {/* Video Area Start */}
      {/* <div className="video-area">
        <div className="container">
          <div
            className="video-inner wow fadeInUp delay-0-2s"
            style={{ backgroundImage: "url(assets/images/video/video-bg.jpg)" }}
          >
            <i className="flaticon-leaf-1" />
            <span className="video-text">Watch Videos</span>
            <a
              href="https://www.youtube.com/watch?v=9Y7ma241N8k"
              className="mfp-iframe video-play"
            >
              <i className="fas fa-play" />
            </a>
          </div>
        </div>
      </div> */}
      {/* Video Area End */}
      {/* Special Offer Start */}
      {/* <section className="special-offer bg-lighter pt-250 pb-80">
        <div className="special-offer-content text-center py-130 rpy-100 wow fadeInUp delay-0-2s">
          <div className="section-title mb-30">
            <span className="sub-title mb-20">35% Off for Fruits</span>
            <h2>Special Deal Of This Week</h2>
          </div>
          <p>
            On the other hand we denounce with righteous indignation and dislike
            men who are beguiled and demoralized by the charms
          </p>
          <MunfimCountdown />
          <div className="count-down-btns mt-10">
            <Link href="/shop-grid">
              <a className="theme-btn">
                Our Products <i className="fas fa-angle-double-right" />
              </a>
            </Link>
            <Link href="/about">
              <a className="theme-btn style-two">
                use code <i className="fas fa-angle-double-right" />
              </a>
            </Link>
          </div>
        </div>
        <img
          className="offer-bg"
          src="assets/images/offers/special-offer-bg.png"
          alt="Offer BG"
        />
        <img
          className="munakoiso"
          src="assets/images/shapes/munakoiso.png"
          alt="Munakoiso"
        />
        <img
          className="litchi"
          src="assets/images/shapes/litchi.png"
          alt="Litchi"
        />
        <img
          className="special-offer-left"
          src="assets/images/offers/offer-left.png"
          alt="Offer"
        />
        <img
          className="special-offer-right"
          src="assets/images/offers/offer-right.png"
          alt="Offer"
        />
      </section> */}
      {/* Special Offer End */}
      {/* Call To Action Area Start */}
      <section className="cta-area">
        <div className="container">
          <div
            className="cta-inner overlay text-white wow fadeInUp delay-0-2s"
            style={{
              backgroundImage: "url(assets/images/background/getintouch.jpg)",
            }}
          >
            <div className="row align-items-center">
              <div className="col-lg-12">
                <div className="section-title mt-20 mb-15">
                  <span className="sub-title mb-15">{t("nas")}</span>
                  <p>{t("ier")}</p>
                </div>
              </div>
              <div className="col-lg-4 text-lg-right">
                <Link href="/contact">
                  <a className="theme-btn btn-white my-15">
                    {t("git")}
                    <i className="fas fa-angle-double-right" />
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Call To Action Area End */}
      {/* Gallery Area Start */}
      {/* <section className="gallery-area pt-130 rpt-100">
        <PhotoGallery />
      </section> */}
      {/* Gallery Area End */}
      {/* Feedback Section Start */}
      {/* <section className="feedback-section pt-50 rpt-20">
        <div className="container">
          <div className="row large-gap">
            <div className="col-lg-6">
              <CustomerReviews />
            </div>
            <div className="col-lg-6">
              <div className="feedback-images wow fadeInRight delay-0-2s">
                <img
                  className="first-image"
                  src="assets/images/reviews/feedback-right.jpg"
                  alt="Feedback"
                />
                <img
                  className="last-image"
                  src="assets/images/reviews/feedback-right.png"
                  alt="Feedback"
                />
                <img
                  className="bg-image"
                  src="assets/images/shapes/feedback-bg.png"
                  alt="Feedback"
                />
              </div>
            </div>
          </div>
        </div>
      </section> */}
      {/* Feedback Section End */}
      {/* News Section Start */}
      <section className="news-section pt-130 rpt-100 pb-70 rpb-40">
        <div className="container">
          <div className="section-title text-center mb-60">
            <span className="sub-title mb-20">{t("rat")}</span>
            <h2>{t("lnb")}</h2>
          </div>
          <div className="row justify-content-center">
            {Data?.blog?.slice(0, 3).map((blog, index) => {
              let Blogtitle;
              if (i18n.language === "tr") {
                Blogtitle = blog.titleTr;
              } else if (i18n.language === "ar") {
                Blogtitle = blog.titleAr;
              } else {
                Blogtitle = blog.title;
              }

              return (
                <div className="col-xl-4 col-md-6" key={index}>
                  <div className="news-item wow fadeInUp delay-0-2s">
                    <div className="image">
                      <img
                        src={blog.image || "/path/to/default-image.jpg"}
                        alt="News"
                      />
                      <span className="date">
                        {blog.date || "Date not available"}
                      </span>
                    </div>
                    <div className="content">
                      <span className="sub-title">
                        {t(
                          Data.categories.find(
                            (category) => category.id === blog.categoryId
                          )
                            ? Data.categories.find(
                                (category) => category.id === blog.categoryId
                              )[
                                i18n.language === "tr"
                                  ? "titleTr" // Turkish title
                                  : i18n.language === "ar"
                                  ? "titleAr" // Arabic title
                                  : "title" // Default to English
                              ]
                            : "Category Not Found"
                        )}
                      </span>
                      <h4>
                        <Link href={`/blog-details?id=${blog.id}`}>
                          {t(Blogtitle) || "Untitled Blog"}
                        </Link>
                      </h4>
                      <Link href={`/blog-details?id=${blog.id}`}>
                        <a className="read-more">
                          {t("rm")} <i className="fas fa-angle-double-right" />
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="news-shapes">
          <img
            className="onion"
            src="assets/images/shapes/onion.png"
            alt="Onion"
          />
          <img
            className="two-leaf"
            src="assets/images/slider/two-lear.png"
            alt="Leaf"
          />
          <img
            className="half-leaf"
            src="assets/images/slider/half-leaf.png"
            alt="Leaf"
          />
          <img
            className="leaf-two"
            src="assets/images/shapes/leaf-three.png"
            alt="Leaf"
          />
          <img
            className="leaf-three"
            src="assets/images/shapes/leaf-four.png"
            alt="Leaf"
          />
        </div>
      </section>
      {/* News Section End */}
      {/* Client Logo Section Start */}
      {/* <div className="client-logo-section text-center bg-light-green py-60">
        <div className="container">
          <ClientLogoSlider />
        </div>
        <div className="client-logo-shapes">
          <img
            className="shape-one"
            src="assets/images/shapes/cl-shape1.png"
            alt="Shape"
          />
          <img
            className="shape-two"
            src="assets/images/shapes/cl-shape2.png"
            alt="Shape"
          />
          <img
            className="shape-three"
            src="assets/images/shapes/cl-shape3.png"
            alt="Shape"
          />
          <img
            className="shape-four"
            src="assets/images/shapes/cl-shape4.png"
            alt="Shape"
          />
          <img
            className="shape-five"
            src="assets/images/shapes/cl-shape5.png"
            alt="Shape"
          />
          <img
            className="shape-six"
            src="assets/images/shapes/cl-shape6.png"
            alt="Shape"
          />
        </div>
      </div> */}
    </Layout>
  );
};
export default Index;
