import "./ProductCard.css";
import { Link } from "react-router-dom";
import h1 from "../images/h1.png";
import { useContext, useState } from "react";
import { useWishlist } from "../context/WishlistProvider";
import { useCart } from "../context/CartProvider";
import AlertBox from "./AlertBox";

export default function WishlistProductCard({ id, image, title, price, category, description }) {

  const [ cartLoading, setCartLoading] = useState(false);
  const [ btnClicked, setClicked ] = useState({
    clicked: false,
    message: ""
  })
  const { cartDispatch } = useContext(useCart);
  const { wishlistDispatch } = useContext(useWishlist);

  const data = {
    _id: id,
    image: image,
    title: title,
    price: price,
    category: category,
    description: description
  }

  const cartHandler = async () => {
    setClicked({clicked: !btnClicked.clicked, message: "Added to Cart"})
    setCartLoading(true)
    await cartDispatch({type:"add-to-cart", data: data});
    setTimeout(async () => {
      setCartLoading(false)
    },1500)
  }

  return (
    <div className="product-container">
      <div className="product-img">
      <Link to={`/product/${id}`} >
      <img className="img-display" src={image} alt={title} />
       </Link>
      <img src={h1} alt="..." className="wish-logo" width="20px" height="20px" onClick={()=>wishlistDispatch({type: "remove-from-wishlist", data: data})}/>
      <button className="add-to-cart-btn hide-cart" disabled={cartLoading} onClick={cartHandler} >Add to Cart</button> 
      <p className="price-product">{price}</p>
      </div>
      <p className="title-product">{title}</p>
      <p className="category-product">{category}</p>
      <AlertBox alertMessage={btnClicked.message} clicked={btnClicked.clicked}/>
    </div>
  );
}
