import Link from "next/link";
import { useTranslation } from "react-i18next";
const PageBanner = ({ pageName, pageTitle, pageImage }) => {
  const {t} = useTranslation();
  return (
    <section
      className="page-banner text-white py-165 rpy-130"
      style={{
        backgroundImage:
          `url(${pageImage ? pageImage : "/assets/images/banner/banner.jpg"})`
      }}
    >
      <div className="container">
        <div className="banner-inner">
          <h1 className="page-title wow fadeInUp delay-0-2s">
            {pageTitle ? pageTitle : pageName}
          </h1>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb justify-content-center wow fadeInUp delay-0-4s">
              <li className="breadcrumb-item">
                <Link href="/">{t('home')}</Link>
              </li>
              <li className="breadcrumb-item active">{pageName}</li>
            </ol>
          </nav>
        </div>
      </div>
    </section>
  );
};
export default PageBanner;
