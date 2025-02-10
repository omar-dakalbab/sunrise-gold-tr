import Link from "next/link";
import { Nav, Tab } from "react-bootstrap";
import Slider from "react-slick";
import Layout from "../src/layout/Layout";
import { productActiveTwo } from "../src/sliderProps";
import Data from "../public/JSON/data.json";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const ProductDetails = () => {
  const { t, i18n } = useTranslation();

  const [product, setProduct] = useState(null);
  const products = Data?.products?.filter((item) => item.id === Number(product));
  useEffect(() => {
    if (typeof window !== "undefined") {
      const query = window.location.search;
      const params = new URLSearchParams(query);
      setProduct(params.get("product"));
    }
  }, [
    typeof window !== "undefined" ? window.location.search : null,
  ]);


  return (
    <Layout>
      {/* <PageBanner pageName={"Product Details"} /> */}
      <section className="product-details-area pt-50 rpt-100">
        <div className="container">
          <div style={{
            minHeight: '50vh'
          }} className="row align-items-center justify-content-between">
            <div className="col-lg-6">
              <div className="product-preview-images rmb-55 wow fadeInLeft delay-0-2s">
                <a href={products[0]?.image}>
                  <img
                    src={products[0]?.image}
                    alt={t(products[0]?.titleKey) || 'Default Title'}
                    style={{
                      maxHeight: 400
                    }}
                  />
                </a>

              </div>
            </div>
            <div className="col-xl-5 col-lg-6">
              <div className="product-details-content mb-30 wow fadeInRight delay-0-2s">
                <div className="off-ratting mb-15">
                  {/* <span className="off">20 Off</span> */}
                  <div className="ratting">
                    {
                      products[0]?.rating && [...Array(products[0]?.rating)].map((_, i) => (
                        <i key={i} className="fas fa-star" />
                      ))
                    }

                  </div>
                </div>
                <div className="section-title mb-20">
                  <h2>
                    <h2>
                      {i18n.language === 'tr' ? products[0]?.titleTr :
                        i18n.language === 'ar' ? products[0]?.titleAr :
                          products[0]?.title || 'Default Title'}
                    </h2>
                  </h2>
                </div>

                {/* <span className="price mb-20">{
                  products[0].price.original
                }</span> */}

                <hr />
                <ul className="category-tags pt-10">
                  <li>
                    <span style={{
                      color: "#000"
                    }}>
                      {t('cat')}
                    </span>
                    <span>:</span>
                    {
                      i18n.language === 'tr'
                        ? Data.categories.find(category => category.id === products[0]?.categoryId)?.titleTr
                        : i18n.language === 'ar'
                          ? Data.categories.find(category => category.id === products[0]?.categoryId)?.titleAr
                          : Data.categories.find(category => category.id === products[0]?.categoryId)?.title || 'Default Category'
                    }
                  </li>

                </ul>
              </div>
            </div>
          </div>
          <br />
          <Tab.Container defaultActiveKey={"details"}>
            <Nav className="nav nav-tabs product-information-tab pt-35 mb-25">
              <li>
                <Nav.Link
                  eventKey={"details"}
                  href="#details"
                  data-toggle="tab"
                >
                  {t('d')}
                </Nav.Link>
              </li>
              <li>
                <Nav.Link
                  eventKey={"information"}
                  href="#information"
                  data-toggle="tab"
                >
                  {t('ai')}
                </Nav.Link>
              </li>
              {/* <li>
                <Nav.Link eventKey={"review"} href="#review" data-toggle="tab">
                  Review (05)
                </Nav.Link>
              </li> */}
            </Nav>
            <Tab.Content className="tab-content wow fadeInUp delay-0-2s">
              <Tab.Pane className="tab-pane" eventKey="details">
                <p>
                  <p>
                    {i18n.language === 'tr' ? products[0]?.descriptionTr :
                      i18n.language === 'ar' ? products[0]?.descriptionAr :
                        products[0]?.description || 'Default description'}
                  </p>
                </p>
              </Tab.Pane>
              <Tab.Pane className="tab-pane" eventKey="information">
                <p dangerouslySetInnerHTML={{
                  __html: i18n.language === 'tr'
                    ? products[0]?.additionalInformation?.tr
                    : i18n.language === 'ar'
                      ? products[0]?.additionalInformation?.ar
                      : products[0]?.additionalInformation?.en
                }} />
              </Tab.Pane>
              {/* <Tab.Pane className="tab-pane" eventKey="review">
                <ul className="comment-list">
                  <li>
                    <div className="comment-body">
                      <div className="author-thumb">
                        <img
                          src="assets/images/products/review-author1.jpg"
                          alt="Author"
                        />
                      </div>
                      <div className="comment-content">
                        <div className="name-date">
                          <h6>John F. Medina</h6>
                          <span className="comment-date">25 Feb 2022</span>
                          <div className="ratting">
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                          </div>
                        </div>
                        <p>
                          Quis autem vel eum iure reprehenderit quin voluptate
                          velit esseeso quam nihile molestiae consequatur
                          veillum quolore
                        </p>
                        <a href="#" className="reply-link">
                          Reply <i className="fas fa-long-arrow-alt-right" />
                        </a>
                      </div>
                    </div>
                    <ul className="children">
                      <li>
                        <div className="comment-body">
                          <div className="author-thumb">
                            <img
                              src="assets/images/products/review-author2.jpg"
                              alt="Author"
                            />
                          </div>
                          <div className="comment-content">
                            <div className="name-date">
                              <h6>Somalia D. Silva</h6>
                              <span className="comment-date">25 Feb 2022</span>
                              <div className="ratting">
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                              </div>
                            </div>
                            <p>
                              Quis autem vel eum iure reprehenderit quin
                              voluptate velit esseeso quam nihile molestiae
                              consequatur veillum quolore
                            </p>
                            <a href="#" className="reply-link">
                              Reply{" "}
                              <i className="fas fa-long-arrow-alt-right" />
                            </a>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <div className="comment-body">
                      <div className="author-thumb">
                        <img
                          src="assets/images/products/review-author3.jpg"
                          alt="Author"
                        />
                      </div>
                      <div className="comment-content">
                        <div className="name-date">
                          <h6>Roger A. Torrence</h6>
                          <span className="comment-date">25 Feb 2022</span>
                          <div className="ratting">
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                          </div>
                        </div>
                        <p>
                          Quis autem vel eum iure reprehenderit quin voluptate
                          velit esseeso quam nihile molestiae consequatur
                          veillum quolore
                        </p>
                        <a href="#" className="reply-link">
                          Reply <i className="fas fa-long-arrow-alt-right" />
                        </a>
                      </div>
                    </div>
                  </li>
                </ul>
              </Tab.Pane> */}
            </Tab.Content>
          </Tab.Container>
        </div>
      </section>
      {/* Product Details End */}
      {/* Revidew Form Area Start */}
      {/* <div className="review-form-area pt-65">
        <div className="container">
          <form
            onSubmit={(e) => e.preventDefault()}
            id="review-form"
            className="review-form wow fadeInUp delay-0-2s"
            name="comment-form"
            action="#"
            method="post"
          >
            <div className="section-title mb-15">
              <h3>Leave a Comments</h3>
            </div>
            <div className="ratting mb-40">
              <span>Your Rating</span>
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
            </div>
            <div className="row">
              <div className="col-md-4">
                <div className="form-group">
                  <input
                    type="text"
                    id="full-name"
                    name="full-name"
                    className="form-control"
                    defaultValue=""
                    placeholder="Full Name"
                    required=""
                  />
                </div>
              </div>
              <div className="col-md-4">
                <div className="form-group">
                  <input
                    type="text"
                    id="number"
                    name="number"
                    className="form-control"
                    defaultValue=""
                    placeholder="Phone Number"
                    required=""
                  />
                </div>
              </div>
              <div className="col-md-4">
                <div className="form-group">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="form-control"
                    defaultValue=""
                    placeholder="Email Address"
                    required=""
                  />
                </div>
              </div>
              <div className="col-md-12">
                <div className="form-group">
                  <textarea
                    name="message"
                    id="message"
                    className="form-control"
                    rows={4}
                    placeholder="Write Message"
                    required=""
                    defaultValue={""}
                  />
                </div>
              </div>
              <div className="col-md-12">
                <div className="form-group mb-0">
                  <button type="submit" className="theme-btn">
                    Send Reviews
                    <i className="fas fa-angle-double-right" />
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div> */}
      {/* Revidew Form Area End */}
      {/* Related Products Start */}
      <section className="related-product rel z-1 pt-125 rpt-95 pb-130 rpb-100">
        <div className="container">
          <div className="section-title text-center mb-60">
            <h3>{t('rp')}</h3>
          </div>
          <Slider {...productActiveTwo} className="product-active">
            {
              Data.products.map((product, index) => {
                let productTitle;
                if (i18n.language === 'tr') {
                  productTitle = product.titleTr;
                } else if (i18n.language === 'ar') {
                  productTitle = product.titleAr;
                } else {
                  productTitle = product.title;
                }
                return (
                  <div key={index}>
                    <Link href={product.link + "?product=" + product.id}>
                      <div className={`product-item wow fadeInUp delay-${index * 0.2}s`} style={{
                        fontWeight: 300,
                        cursor: 'pointer'
                      }}>
                        {product.offer && <span style={{
                          fontWeight: 300,
                        }} className={`offer ${product.offer === 'sale' ? 'bg-red' : ''}`}>{product.offer}</span>}
                        <div className="image">
                          <img src={product.image} alt="Product" style={{
                            maxHeight: 250
                          }} />
                        </div>
                        <div className="content" style={{
                          marginTop: 30
                        }}>
                          <div className="ratting">
                            {[...Array(product.rating)].map((_, i) => (
                              <i key={i} className="fas fa-star" />
                            ))}
                          </div>
                          <h5>
                            {productTitle}
                          </h5>

                        </div>
                      </div>
                    </Link>
                  </div>
                )
              })
            }

          </Slider>
        </div>
      </section>
    </Layout>
  );
};
export default ProductDetails;
