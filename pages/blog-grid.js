import Link from "next/link";
import PageBanner from "../src/components/PageBanner";
import Pagination from "../src/components/Pagination";
import Layout from "../src/layout/Layout";
import Data from "../public/JSON/data.json";
import { useTranslation } from "react-i18next";

const BlogGrid = () => {
  const { t, i18n } = useTranslation();
  const blogData = Data.blog;



  return (
    <Layout>
      <PageBanner pageName={t('blog')} pageImage={"/assets/images/banner/bannerBlog.jpg"} />
      <section className="news-page-section rel z-1 py-130 rpy-100">
        <div className="container">
          <div className="row justify-content-center blog-grid">
            {blogData.map((item) => (
              <div key={item.id} className="col-xl-4 col-md-6">
                <div className="news-item wow fadeInUp delay-0-2s">
                  <div className="image">
                    <img src={item.image} alt="News" />
                    <span className="date">
                      <b>{item.date.split(' ')[0]}</b> {item.date.split(' ')[1]}
                    </span>
                  </div>
                  <div className="content">
                    <span className="sub-title">
                    {t(
                          Data.categories.find(category => category.id === item.categoryId)
                            ? Data.categories.find(category => category.id === item.categoryId)[
                            i18n.language === 'tr'
                              ? 'titleTr'  // Turkish title
                              : i18n.language === 'ar'
                                ? 'titleAr'  // Arabic title
                                : 'title'    // Default to English
                            ]
                            : 'Category Not Found'
                        )}
                    </span>
                    <h4>
                      <Link href={item.link + "?id=" + item.id}>
                        {
                          i18n.language === 'en' ? item.title :
                            i18n.language === "tr" ? item.titleTr :
                              item.titleAr
                        }
                      </Link>
                    </h4>
                    <Link href={item.link + "?id=" + item.id}>
                      <a className="read-more">
                        {t('rm')} <i className="fas fa-angle-double-right" />
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default BlogGrid;
