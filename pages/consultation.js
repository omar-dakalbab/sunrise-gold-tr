import PageBanner from "../src/components/PageBanner";
import Layout from "../src/layout/Layout";
import Data from "../public/JSON/data.json";
import { useTranslation } from "react-i18next";
import ProductSelect from "../src/components/ProductSelect";
import { useState } from "react";

const Consultation = () => {
  const { t, i18n } = useTranslation();
  const [selectedProduct, setSelectedProduct] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const company = document.getElementById("company").value || "N/A";
    const quantity = document.getElementById("quantity").value;
    const message = document.getElementById("message").value || "N/A";
    const products = selectedProduct;

    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("phone", phone);
    formData.append("company", company);
    formData.append("quantity", quantity);
    formData.append("message", message);
    formData.append("products", products);

    // Send data to the PHP script
    fetch("/sendMail.php", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          alert(
            i18n.language === "ar"
              ? "تم إرسال الرسالة بنجاح."
              : i18n.language === "tr"
              ? "Mesaj başarıyla gönderildi."
              : "Message sent successfully."
          );
        } else {
          alert(
            i18n.language === "ar"
              ? "حدث خطأ أثناء إرسال الرسالة."
              : i18n.language === "tr"
              ? "Mesaj gönderilirken bir hata oluştu."
              : "Error sending message."
          );
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("Error sending message.");
      });
  };

  return (
    <Layout>
      <PageBanner pageName={t("c")} />{" "}
      <section className="contact-info-area rel z-1 pt-130 rpt-100">
        <div className="container">
          <div className="section-title contact-title mb-50 wow fadeInUp delay-0-2s">
            <span className="sub-title mb-15">{t("git")}</span>
            <h3>{t("nc")}</h3>
          </div>
          <div className="row">
            <div className="col-xl-4 col-md-6">
              <div className="contact-info-item wow fadeInUp delay-0-4s">
                <img
                  src="/assets/images/location.png"
                  class="w-25 h-25 mr-2"
                  alt="Icon"
                />

                <div className="content">
                  <a href="https://maps.app.goo.gl/StSzpmjEhVqiNEg66">
                    <h4>{t("l")}</h4>
                  </a>
                  <span>Çilek, 139. Cd. 1-1, 33020 Akdeniz/Mersin</span>
                  <br />
                  <br />
                  <p>
                    <a href="https://maps.app.goo.gl/StSzpmjEhVqiNEg66">
                      {t("chfd")}
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="contact-info-item wow fadeInUp delay-0-5s">
                <img
                  src="/assets/images/email.png"
                  alt="Icon"
                  class="w-25 h-25 mr-2"
                />

                <div className="content">
                  <h4>{t("es")}</h4>
                  <a href="mailto:info@sunrisegold-tr.com">
                    info@sunrisegold-tr.com
                  </a>
                  <br />
                  <a href="mailto:bilal@sunrisegold-tr.com">
                    bilal@sunrisegold-tr.com
                  </a>
                  <br />
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="contact-info-item wow fadeInUp delay-0-6s">
                <img
                  src="/assets/images/number.png"
                  alt="Icon"
                  class="w-25 h-25 mr-2"
                />

                <div className="content">
                  <h4>{t("ps")}</h4>
                  <a href="callto:+000(111)345678">+90 536 247 77 30</a>
                  <br />
                  <a href="http://wa.me/905524477306">+90 552 447 73 06</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="contact-shapes">
                    <img
                        className="leafs"
                        src="assets/images/shapes/contact-leafs.png"
                        alt="Leafs"
                    />
                    <img
                        className="pumpkin"
                        src="assets/images/shapes/pumpkin.png"
                        alt="pumpkin"
                    />
                </div> */}
      </section>
      {/* Contact Info End */}
      {/* Contact From Start */}
      <section className="contact-form-area rel z-1 pt-100 rpt-70 pb-130 rpb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <form
                onSubmit={handleSubmit}
                id="contactForm"
                className="contact-form"
              >
                <div className="section-title contact-title mb-55">
                  <span className="sub-title mb-15">{t("raq")}</span>
                  <h3>{t("contact")}</h3>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="form-control"
                        placeholder={t("fullName")}
                        required
                        data-error="Please enter your full name"
                      />
                      <div className="help-block with-errors" />
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="form-control"
                        placeholder={t("email")}
                        required
                        data-error="Please enter a valid email address"
                      />
                      <div className="help-block with-errors" />
                    </div>
                  </div>

                  <div className="col-md-12">
                    <div className="form-group">
                      <input
                        type="text"
                        id="phone"
                        name="phone"
                        className="form-control"
                        placeholder={t("phoneNumber")}
                        required
                        data-error="Please enter your phone number"
                      />
                      <div className="help-block with-errors" />
                    </div>
                  </div>

                  <div className="col-md-12">
                    <div className="form-group">
                      <input
                        type="text"
                        id="company"
                        name="company"
                        className="form-control"
                        placeholder={t("companyName")}
                      />
                      <div className="help-block with-errors" />
                    </div>
                  </div>

                  <ProductSelect
                    Data={Data}
                    t={t}
                    i18n={i18n}
                    name="products"
                    id="products"
                    className="form-control"
                    required
                    onChange={(e) => {
                      // console.log(e.target.value);
                      console.log(e);
                      setSelectedProduct(e);
                    }}
                  />

                  <div className="col-md-12">
                    <div className="form-group">
                      <input
                        type="text"
                        id="quantity"
                        name="quantity"
                        className="form-control"
                        placeholder={t("quantiyRequired")}
                        required
                        data-error="Please enter the quantity"
                      />
                      <div className="help-block with-errors" />
                    </div>
                  </div>

                  <div className="col-md-12">
                    <div className="form-group">
                      <textarea
                        name="message"
                        id="message"
                        className="form-control"
                        rows={4}
                        placeholder={t("message")}
                      />
                      <div className="help-block with-errors" />
                    </div>
                  </div>

                  <div className="col-md-12">
                    <div className="form-group mb-0">
                      <button type="submit" className="theme-btn style-two">
                        {t("sr")}
                        <i className="fas fa-angle-double-right" />
                      </button>
                      <div id="msgSubmit" className="hidden" />
                    </div>
                  </div>
                </div>
              </form>
            </div>
            <div className="col-lg-6">
              <div className="contact-right-image wow fadeInRight delay-0-4s">
                <img
                  src="assets/images/contact/contact-right.png"
                  alt="Contact Form"
                  style={{
                    width: "120%",
                    maxWidth: "140%",
                  }}
                />
                <img
                  className="bg"
                  src="assets/images/contact/contact-right-bg.png"
                  alt="Contact Form BG"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="contact-shapes">
          <img
            className="leaf"
            src="assets/images/shapes/leaf-1.png"
            alt="Leaf"
          />
          <img
            className="shape"
            src="assets/images/shapes/contact-shape.png"
            alt="Shape"
          />
          <img
            className="two-leaf"
            src="assets/images/shapes/two-lear.png"
            alt="Leaf"
          />
        </div>
      </section>
    </Layout>
  );
};
export default Consultation;
