import { useState } from "react";

const ProductSelect = ({
  Data,
  t,
  i18n,

  onChange,
}) => {
  const [selectedProducts, setSelectedProducts] = useState([]);

  const handleCheckboxChange = (productId) => {
    setSelectedProducts((prev) =>
      prev.includes(productId)
        ? prev.filter((id) => id !== productId)
        : [...prev, productId]
    );

    onChange(selectedProducts);
  };

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="col-md-12" style={{ position: "relative" }}>
      <div
        style={{
          border: "1px solid #ccc",
          padding: "15px 20px",
          borderRadius: "4px",
          cursor: "pointer",
          backgroundColor: "#fff",
          marginBottom: "12px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        {selectedProducts.length > 0 ? selectedProducts.join(", ") : t("sap")}{" "}
        {/* Placeholder translation */}
        {isOpen ? (
          <i className="fa fa-chevron-up" style={{ float: "right" }}></i>
        ) : (
          <i className="fa fa-chevron-down" style={{ float: "right" }}></i>
        )}
      </div>

      {isOpen && (
        <div
          style={{
            position: "absolute",
            top: "100%",
            left: "0",
            width: "100%",
            backgroundColor: "#fff",
            border: "1px solid #ccc",
            borderRadius: "4px",
            maxHeight: "200px",
            overflowY: "auto",
            zIndex: 1000,
            display: "block",
          }}
        >
          {Data?.products?.map((product) => {
            const tit =
              i18n.language === "tr"
                ? product?.titleTr
                : i18n.language === "ar"
                ? product?.titleAr
                : product?.title || "Default Title";

            return (
              <div
                key={product.id}
                style={{
                  display: "flex",
                  alignItems: "center",
                  padding: "6px 10px",
                  borderBottom: "1px solid #eee",
                }}
              >
                <input
                  type="checkbox"
                  checked={selectedProducts.includes(tit)}
                  onChange={() => handleCheckboxChange(tit)}
                  style={{ marginRight: "8px" }}
                />
                <label style={{ marginBottom: "0" }}>{tit}</label>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default ProductSelect;
