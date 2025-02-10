import Link from "next/link";
import PageBanner from "../src/components/PageBanner";
import Layout from "../src/layout/Layout";
import { useTranslation } from "react-i18next";
const E404 = () => {
  const {t} = useTranslation();
  return (
    <Layout>
      <PageBanner pageName={"404"} pageTitle={"404 Error"} />
      <section className="error-section rel z-1 py-130 rpy-100">
        <div className="container">
          <div className="error-inner text-center wow fadeInUp delay-0-2s">
            <div className="image mb-70">
              <img src="assets/images/404.png" alt="404 Error" />
            </div>
            <div className="content">
              <div className="section-title mb-20">
                <h2>{t('stpcbf')}</h2>
              </div>
          
              <Link href="/">
                <a className="theme-btn style-three mt-15">
                  {t('home')} <i className="fas fa-angle-double-right" />
                </a>
              </Link>
            </div>
          </div>
        </div>
        <div className="error-shapes">
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
            src="assets/images/shapes/leaf-1.png"
            alt="Leaf"
          />
          <img
            className="leaf-three"
            src="assets/images/shapes/leaf-2.png"
            alt="Leaf"
          />
        </div>
      </section>
    </Layout>
  );
};
export default E404;
