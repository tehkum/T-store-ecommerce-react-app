import "./ProductCard.css";
import { Link } from "react-router-dom";
import h1 from "../images/h1.png";
import { useContext } from "react";
import { useWishlist } from "../context/WishlistProvider";

export default function WishlistProductCard({ id, image, title, price, category }) {

  const { wishlistDispatch } = useContext(useWishlist);

  const data = {
    _id: id,
    image: image,
    title: title,
    price: price,
    category: category
  }

  return (
    <div className="product-container">
      <div className="product-img">
      <Link to={`/product/${id}`} >
      <img className="img-display" src={image} alt={title} />
       </Link>
      <img src={h1} alt="..." className="wish-logo" width="20px" height="20px" onClick={()=>wishlistDispatch({type: "remove-from-wishlist", data: data})}/> 
      <p className="price-product">{price}</p>
      </div>
      <p className="title-product">{title}</p>
      <p className="category-product">{category}</p>
    </div>
  );
}
