import { Link } from "react-router-dom";
import "./ProductCard.css";

export default function FinalPageCard({
  id,
  image,
  title,
  totalPrice,
  category,
  description,
  qty
}) {
  return (
    <div className="product-container">
      <div className="product-img">
        <Link to={`/product/${id}`}>
          <img className="img-display" src={image} alt={title} />
        </Link>
      </div>
      <p className="title-product">{title}</p>
      <p className="category-product">{category}</p>
      <p style={{marginLeft:"0.5rem"}}>Qantity: {qty}</p>
    </div>
  );
}
