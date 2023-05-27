import "./ProductCard.css";
import { Link } from "react-router-dom";
import light from "../images/h2.png";
import dark from "../images/h1.png";
import { useContext, useState } from "react";
import { useWishlist } from "../context/WishlistProvider";

export default function ProductCard({ id, image, title, price, category }) {
  const [showButton, setButton] = useState(false);

  const { wishlistDispatch, wishlistState } = useContext(useWishlist);

  const clickAddHandler = async () => {
    setButton(true);
    await wishlistDispatch({ type: "add-to-wishlist", data: data });
    setTimeout(async () => {
      setButton(false);
    }, 1500);
  };

  const clickRemoveHandler = async () => {
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

  console.log(localStorage.getItem('encodedToken') ? "true" : "f")

  return (
    <div className="product-container">
      <div className="product-img">
        <Link to={`/product/${id}`}>
          <img className="img-display" src={image} alt={title} />
        </Link>
        {showButton ? <></> : wishButton }
        <p className="price-product">{price}</p>
      </div>
      <p className="title-product">{title}</p>
      <p className="category-product">{category}</p>
    </div>
  );
}
