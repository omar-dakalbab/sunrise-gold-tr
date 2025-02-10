import React, { Fragment, useEffect } from "react";
import "../styles/globals.css";
import "../src/i18n";
import { appWithTranslation, useTranslation } from "next-i18next";
import Head from "next/head";
import "react-circular-progressbar/dist/styles.css";
import "@radix-ui/themes/styles.css";

const APP_VERSION = "1.0.4"; // Change this on every deployment

function MyApp({ Component, pageProps }) {
  const language = useTranslation();

  useEffect(() => {
    document.documentElement.lang = language.i18n.language;

    // Hard refresh logic
    const storedVersion = localStorage.getItem("app_version");
    if (storedVersion !== APP_VERSION) {
      localStorage.setItem("app_version", APP_VERSION);
      window.location.reload(true); // Force hard refresh
    }
  }, [language.i18n.language]);

  return (
    <Fragment>
      <Head>
        <title>Sun Rise Gold - Pure & Natural Food Solutions</title>
        <meta
          name="description"
          content="Sun Rise Gold is a trusted food manufacturer and exporter, offering high-quality legumes, grains, oils, and tahini to global markets. We specialize in providing premium food products to meet your health and wellness needs."
        />
        <meta
          name="keywords"
          content="Sun Rise Gold, food manufacturer, food exporter, legumes, grains, oils, tahini, natural food solutions, healthy food, premium food products"
        />
        <meta name="robots" content="index, follow" />
        <meta
          property="og:title"
          content="Sun Rise Gold - Pure & Natural Food Solutions"
        />
        <meta
          property="og:description"
          content="Sun Rise Gold is a trusted food manufacturer and exporter, offering high-quality legumes, grains, oils, and tahini to global markets."
        />
        <meta
          property="og:image"
          content="https://sunrisegold-tr.com/assets/images/og-image.jpg"
        />
        <meta property="og:url" content="https://sunrisegold-tr.com" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Sun Rise Gold - Pure & Natural Food Solutions"
        />
        <meta
          name="twitter:description"
          content="Sun Rise Gold is a trusted food manufacturer and exporter, offering high-quality legumes, grains, oils, and tahini to global markets."
        />
        <meta
          name="twitter:image"
          content="https://sunrisegold-tr.com/assets/images/og-image.jpg"
        />
        {/* Favicon */}
        <link
          rel="shortcut icon"
          href="assets/images/favicon.png"
          type="image/x-icon"
        />
        {/* Google Fonts */}
        <link
          href="https://fonts.googleapis.com/css2?family=Mulish:wght@400;500;600;700&family=Oswald:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        {/* Stylesheets */}
        <link rel="stylesheet" href="assets/css/flaticon.min.css" />
        <link rel="stylesheet" href="assets/css/fontawesome-5.14.0.min.css" />
        <link rel="stylesheet" href="assets/css/bootstrap-4.5.3.min.css" />
        <link rel="stylesheet" href="assets/css/magnific-popup.min.css" />
        <link rel="stylesheet" href="assets/css/nice-select.min.css" />
        <link rel="stylesheet" href="assets/css/animate.min.css" />
        <link rel="stylesheet" href="assets/css/slick.min.css" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/lipis/flag-icons@7.2.3/css/flag-icons.min.css"
        />
        <link rel="stylesheet" href="assets/css/style.css" />
      </Head>

      <div
        style={{
          fontFamily:
            language.i18n.language === "ar"
              ? "CustomFontArabic"
              : "CustomFontName",
        }}
      >
        <Component {...pageProps} />
      </div>
    </Fragment>
  );
}

export default appWithTranslation(MyApp);
