import "./ProductCard.css";
import { Link } from "react-router-dom";
import light from "../images/h2.png";
import dark from "../images/h1.png";
import { useContext, useState } from "react";
import { useWishlist } from "../context/WishlistProvider";
import AlertBox from "./AlertBox";
import { useCart } from "../context/CartProvider";

export default function ProductCard({ id, image, title, price, category, description }) {
  const [showButton, setButton] = useState(false);
  const [ cartLoading, setCartLoading] = useState(false);
  const [ btnClicked, setClicked ] = useState({
    clicked: false,
    message: ""
  })

  const { wishlistDispatch, wishlistState } = useContext(useWishlist);
  const { cartDispatch } = useContext(useCart);

  const clickAddHandler = async () => {
    setClicked({clicked: !btnClicked.clicked, message: "Added to wishlist"})
    setButton(true);
    await wishlistDispatch({ type: "add-to-wishlist", data: data });
    setTimeout(async () => {
      setButton(false);
    }, 1500);
  };

  const clickRemoveHandler = async () => {
    setClicked({clicked: !btnClicked.clicked, message: "Removed from wishlist"})
    setButton(true);
    await wishlistDispatch({ type: "remove-from-wishlist", data: data });
    setTimeout(async () => {
      setButton(false);
    }, 1500);
  };

  const data = {
    _id: id,
    image: image,
    title: title,
    price: price,
    category: category,
    description: description
  };

  const wishButton = wishlistState?.mainWish?.find(
    ({ _id }) => _id === data._id
  ) ? (
    <img
      src={dark}
      alt="..."
      className="wish-logo"
      width="20px"
      height="20px"
      onClick={clickRemoveHandler}
    />
  ) : (
    <img
      src={light}
      alt="..."
      className="wish-logo"
      width="20px"
      height="20px"
      onClick={clickAddHandler}
    />
  )

  const cartHandler = async () => {
    setClicked({clicked: !btnClicked.clicked, message: "Added to Cart"})
    setCartLoading(true)
    await cartDispatch({type:"add-to-cart", data: data});
    setTimeout(async () => {
      setCartLoading(false)
    },1500)
  }


  return (<>
    <div className="product-container">
      <div className="product-img">
        <Link to={`/product/${id}`}>
          <img className="img-display" src={image} alt={title} />
        </Link>
        {showButton ? <></> : wishButton }
        <button className="add-to-cart-btn hide-cart" disabled={cartLoading} onClick={cartHandler} >Add to Cart</button>
        <p className="price-product">{price}</p>
      </div>
      <p className="title-product">{title}</p>
      <p className="category-product">{category}</p>
    </div>
    <AlertBox clicked={btnClicked.clicked} alertMessage={btnClicked.message}/>
  </>);
}
