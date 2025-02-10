import Link from "next/link";
import Slider from "react-slick";
import PageBanner from "../src/components/PageBanner";
import Layout from "../src/layout/Layout";
import { newsSlider } from "../src/sliderProps";
import { productActive } from "../src/sliderProps";
import { useRouter } from "next/router";
import { useTransition } from "react";
import Data from "../public/JSON/data.json";
import { useTranslation } from "react-i18next";

const BlogDetails = () => {
  const { t, i18n } = useTranslation();
  const router = useRouter();
  const { id } = router.query;

  console.log(id);
  const blogData = Data.blog;
  const selectedBlog = blogData?.find((item) => item.id === Number(id));

  if (!selectedBlog) {
    return (
      <Layout>
        <PageBanner
          pageName={t("bg")}
          pageImage={"/assets/images/banner/bannerBlog.jpg"}
        />
        <section className="news-details-page rel z-1 pt-65 rpt-35 pb-130 rpb-100">
          <div className="container">
            <div className="row">
              <div className="col-xl-12 mt-65">
                <div className="blog-details-content">
                  <h3 className="title">{t("blogNotFound")}</h3>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    );
  }

  let Blogtitle;
  if (i18n.language === "tr") {
    Blogtitle = selectedBlog.titleTr;
  } else if (i18n.language === "ar") {
    Blogtitle = selectedBlog.titleAr;
  } else {
    Blogtitle = selectedBlog.title;
  }

  let BlogDescription;
  if (i18n.language === "tr") {
    BlogDescription = selectedBlog.descriptionTr;
  } else if (i18n.language === "ar") {
    BlogDescription = selectedBlog.descriptionAr;
  } else {
    BlogDescription = selectedBlog.description;
  }

  return (
    <Layout>
      <PageBanner
        pageName={t("bg")}
        pageImage={"/assets/images/banner/bannerBlog.jpg"}
      />
      <section className="news-details-page rel z-1 pt-65 rpt-35 pb-130 rpb-100">
        <div className="container">
          <div className="row">
            <div className="col-xl-12 mt-65">
              <div className="blog-details-content">
                <h3 className="title">{Blogtitle}</h3>
                <div className="image my-35">
                  <img
                    src={selectedBlog?.image}
                    alt="Blog"
                    style={{
                      width: "100%",
                      borderRadius: 20,
                    }}
                  />
                </div>

                <div dangerouslySetInnerHTML={{ __html: BlogDescription }} />

                <div className="section-title mt-50 mb-40 text-center">
                  <h3>{t("rn")}</h3>
                </div>
                <Slider {...newsSlider} className="news-slider mb-60">
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
                      <div className="" key={index}>
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
                                      (category) =>
                                        category.id === blog.categoryId
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
                                {Blogtitle}
                              </Link>
                            </h4>
                            <Link href={`/blog-details?id=${blog.id}`}>
                              <a className="read-more">
                                {t("rm")}{" "}
                                <i className="fas fa-angle-double-right" />
                              </a>
                            </Link>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </Slider>
                <hr />

                <hr />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};
export default BlogDetails;
