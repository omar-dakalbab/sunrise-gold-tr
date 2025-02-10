import Link from "next/link";
import ClientLogoSlider from "../src/components/ClientLogoSlider";
import FeedbackTwoSlider from "../src/components/FeedbackTwoSlider";
import PageBanner from "../src/components/PageBanner";
import ExperienceTeam from "../src/components/slider/ExperienceTeam";
import PhotoGallery from "../src/components/slider/PhotoGallery";
import Layout from "../src/layout/Layout";
import { useTranslation } from "react-i18next";

import { Wheat } from "lucide";
import FeaturesSection from "../src/components/FeautersSection";

const About = () => {
  const { t, i18n } = useTranslation();

  return (
    <Layout>
      <PageBanner
        pageName={t("about")}
        pageImage={"assets/images/banner/banner.jpg"}
      />
      {/* Page Banner End */}
      {/* About Section Start */}
      <section className="about-page-section rel z-1 py-120 rpy-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="about-three-content rmb-35 wow fadeInLeft delay-0-2s">
                <div className="section-title mb-20">
                  <span className="sub-title mb-20">{t("abt")}</span>
                </div>
                <h3>{t("wwa")}</h3>
                <p>{t("des")}</p>

                {/* <h3
                  style={{
                    marginTop: 20,
                  }}
                >
                  Food Products Category
                </h3> */}
                <FeaturesSection />
              </div>
            </div>
            <div className="col-lg-6 text-lg-right">
              <div className="about-video wow fadeInRight delay-0-2s">
                <img
                  className="image"
                  src="assets/images/about/about-page.jpg"
                  alt="About"
                />
                <img
                  className="bg-shape"
                  src="assets/images/about/about-bg-shape.png"
                  alt="Shape"
                />
              </div>
            </div>
          </div>
          <br />
          <br />
        </div>
        <img
          src="assets/images/shapes/about-page.png"
          alt="Shape"
          className="shape"
        />
      </section>

      <section className="about-page-section rel z-1 py-50 rpy-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="about-three-content rmb-35 wow fadeInLeft delay-0-2s">
                <h3>{t("ov")}</h3>

                <p>{t("tbtypp")}</p>

                <h3>{t("om")}</h3>

                <p>{t("ttt")}</p>
              </div>
            </div>
            <div className="col-lg-6 text-lg-right">
              <div className="about-video wow fadeInRight delay-0-2s">
                <img
                  className="image"
                  src="assets/images/about/about2.png"
                  alt="About"
                />
                <img
                  className="bg-shape"
                  src="assets/images/about/about-bg-shape.png"
                  alt="Shape"
                />
              </div>
            </div>
          </div>
          <br />
          <br />
        </div>
      </section>
      {/* About Section End */}
      {/* Features Section Start */}
      {/* <section className="feature-section pb-100 rpb-70 rel z-1">
        <div className="container">
          <div className="row">
            <div className="col-xl-4 col-md-6">
              <div className="feature-item wow fadeInUp delay-0-2s">
                <div className="content">
                  <span className="number">01</span>
                  <div className="image">
                    <img
                      src="assets/images/features/feature1.png"
                      alt="Feature"
                    />
                  </div>
                  <h4>Organic Vegetables</h4>
                  <p>
                    Quis autem vel eum reprehenderit quiea voluptate velit esse
                    quam niyate smolestiae consequatur nulla
                  </p>
                </div>
                <Link href="/service-details">
                  <a className="read-more">
                    Read More <i className="fas fa-angle-double-right" />
                  </a>
                </Link>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="feature-item color-two wow fadeInUp delay-0-4s">
                <div className="content">
                  <span className="number">02</span>
                  <div className="image">
                    <img
                      src="assets/images/features/feature2.png"
                      alt="Feature"
                    />
                  </div>
                  <h4>Organic Fruits</h4>
                  <p>
                    Quis autem vel eum reprehenderit quiea voluptate velit esse
                    quam niyate smolestiae consequatur nulla
                  </p>
                </div>
                <Link href="/service-details">
                  <a className="read-more">
                    Read More <i className="fas fa-angle-double-right" />
                  </a>
                </Link>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="feature-item color-three wow fadeInUp delay-0-6s">
                <div className="content">
                  <span className="number">03</span>
                  <div className="image">
                    <img
                      src="assets/images/features/feature3.png"
                      alt="Feature"
                    />
                  </div>
                  <h4>Agriculture &amp; Farming</h4>
                  <p>
                    Quis autem vel eum reprehenderit quiea voluptate velit esse
                    quam niyate smolestiae consequatur nulla
                  </p>
                </div>
                <Link href="/service-details">
                  <a className="read-more">
                    Read More <i className="fas fa-angle-double-right" />
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      {/* Features Section End */}
      {/* Gallery Area Start */}
      {/* <section className="gallery-area">
        <PhotoGallery noHeader />
      </section> */}
      {/* Gallery Area End */}
      {/* Team Area Start */}
      {/* <section className="team-area pt-50 rpt-20 pb-95 rpb-65">
        <div className="container">
          <ExperienceTeam />
        </div>
      </section> */}
      {/* Team Area End */}
      {/* About Section Start */}
      <section className="about-section-two rel z-1 mb-4">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="about-two-image not-rounded wow fadeInUp delay-0-2s">
                <img
                  className="image"
                  src="assets/images/about/about-page-left.jpg"
                  alt="About"
                />
                <img
                  className="about-over"
                  src="assets/images/about/about-left-over.png"
                  alt="About"
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about-two-content pt-60 wow fadeInUp delay-0-4s">
                <div className="section-title mb-35">
                  <span className="sub-title mb-20">{t("wcs")}</span>
                  <h2>{t("scfo")}</h2>
                </div>
                <div className="about-features mt-60">
                  <div className="row">
                    <div className="col-xl-4 col-md-6">
                      <div className="about-feature-item wow fadeInUp delay-0-5s">
                        <span className="number">1</span>
                        <div className="icon">
                          <i className="flaticon-offer" />
                        </div>

                        <p>{t("abtone")}</p>

                        <img src="assets/images/about/arrow.png" alt="Arrow" />
                      </div>
                    </div>
                    <div className="col-xl-4 col-md-6">
                      <div className="about-feature-item wow fadeInUp delay-0-6s">
                        <span className="number">2</span>
                        <div className="icon">
                          <i className="flaticon-return-box" />
                        </div>
                        <p>{t("abttwo")}</p>
                        <img src="assets/images/about/arrow.png" alt="Arrow" />
                      </div>
                    </div>
                    <div className="col-xl-4 col-md-6">
                      <div className="about-feature-item wow fadeInUp delay-0-7s">
                        <span className="number">3</span>
                        <div className="icon">
                          <i className="flaticon-24-hours" />
                        </div>

                        <p>{t("abtthree")}</p>

                        <img src="assets/images/about/arrow.png" alt="Arrow" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="about-shapes">
          <img src="assets/images/shapes/about-shape1.png" alt="Shape" />
          <img src="assets/images/shapes/about-shape2.png" alt="Shape" />
        </div>
      </section>

      {/* About Section End */}
      {/* Feedback Section Start */}
      {/* <section className="feedback-section pt-100 rpt-70 pb-130 rpb-100">
        <div className="container">
          <div className="section-title text-center mb-60">
            <span className="sub-title mb-20">Customer Reviews</span>
            <h2>Valuable Customer’s Feedback</h2>
          </div>
        </div>
        <FeedbackTwoSlider />
      </section> */}
      {/* Feedback Section End */}
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
export default About;
