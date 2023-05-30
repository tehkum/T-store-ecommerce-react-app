import "./ProductPageLoad.css";

export default function ProductPageLoad() {
  return (
    <div className="product-page-loader">
      <div className="product-page-loader1">
        <div className="product-img-load"></div>
        <div className="product-img-load"></div>
        <div className="product-img-load"></div>
        <div className="product-img-load"></div>
      </div>
      <div className="product-page-loader2">
        <div className="product-title-load"></div>
        <div className="product-des-load"></div>
        <div className="product-des-load"></div>
        <div className="product-des-load"></div>
        <div className="product-des-load"></div>
      </div>
    </div>
  );
}
