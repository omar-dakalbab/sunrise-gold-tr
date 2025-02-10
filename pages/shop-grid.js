import Link from "next/link";
import PageBanner from "../src/components/PageBanner";
import Pagination from "../src/components/Pagination";
import Layout from "../src/layout/Layout";
import Data from "../public/JSON/data.json";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const ShopGrid = () => {
  const { t, i18n } = useTranslation();
  const [qu, setQu] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    // Get the 'q' query parameter from the URL
    const query = new URLSearchParams(window.location.search);
    const token = query.get("q"); // This will be the category ID
    setQu(token);

    // Filter products based on the category ID
    if (token) {
      const filtered = Data.products.filter(
        (product) => product.categoryId === parseInt(token, 10)
      );
      setFilteredProducts(filtered);
    } else {
      // If no query parameter is present, show all products
      setFilteredProducts(Data.products);
    }
  }, []);

  return (
    <Layout>
      <PageBanner
        pageName={t("pre")}
        pageImage={"assets/images/banner/2.jpg"}
      />
      <section className="shop-page rel z-1 pt-120 rpt-90 pb-130 rpb-100">
        <div className="container">
          <div className="row show-grid-row">
            {filteredProducts.map((product, index) => {
              let productTitle;
              if (i18n.language === "tr") {
                productTitle = product.titleTr;
              } else if (i18n.language === "ar") {
                productTitle = product.titleAr;
              } else {
                productTitle = product.title;
              }

              return (
                <div key={index} className="col-xl-3 col-lg-4 col-sm-6">
                  <Link href={`${product.link}?product=${product.id}`}>
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
                        <img src={product.image} alt="Product" />
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
          </div>
          <ul className="pagination flex-wrap justify-content-center pt-10">
            <Pagination
              paginationCls={".show-grid-row .col-xl-3"}
              defaultSort={8}
            />
          </ul>
        </div>
      </section>
    </Layout>
  );
};

export default ShopGrid;
