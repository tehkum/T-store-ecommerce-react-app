import { useContext, useState } from "react";
import "./CartCard.css";
import { useCart, useWishlist } from "..";
import light from "../images/h2.png";
import dark from "../images/h1.png";
import AlertBox from "./AlertBox";

export default function CartCard({
  id,
  title,
  description,
  price,
  image,
  qty,
}) {
  const { cartDispatch, incrementCartHandler, decrementCartHandler } = useContext(useCart);
  // const [showButton, setButton] = useState(false);
  const [ btnClicked, setClicked ] = useState({
    clicked: false,
    message: ""
  })

  const { wishlistDispatch, wishlistState } = useContext(useWishlist);

  const data = {
    _id: id,
    image: image,
    title: title,
    price: price
  };

  const clickAddHandler = async () => {
    setClicked({clicked: !btnClicked?.clicked, message: "Added to wishlist"})
    // setButton(true);
    await wishlistDispatch({ type: "add-to-wishlist", data: data });
    // setTimeout(async () => {
    //   setButton(false);
    // }, 1500);
  };

  const clickRemoveHandler = async () => {
    setClicked({clicked: !btnClicked?.clicked, message: "Removed from wishlist"})
    // setButton(true);
    await wishlistDispatch({ type: "remove-from-wishlist", data: data });
    // setTimeout(async () => {
    //   setButton(false);
    // }, 1500);
  };


  const wishButton = wishlistState?.mainWish?.find(
    ({ _id }) => _id === data._id
  ) ? (
    <img
      src={dark}
      alt="..."
      // className="wish-logo"
      width="20px"
      height="20px"
      onClick={clickRemoveHandler}
    />
  ) : (
    <img
      src={light}
      alt="..."
      // className="wish-logo"
      width="20px"
      height="20px"
      onClick={clickAddHandler}
    />
  )

  return (
    <div className="cart-card" key={id}>
      <img src={image} alt="..." width="200px" height="223.83" className="cart-main-img"/>
      <div className="cart-card1">
        <div className="cart-card-part1">
          <h2>{title}</h2>
          <p>₹{price}</p>
        </div>
        <div className="cart-card-part2">
          <p>{description}</p>
        </div>
        <div className="cart-card-part3">
          <button
          onClick={() => incrementCartHandler({ type: "incrementCart", id: id }, cartDispatch)}
          >+</button>
          <p>{qty ?? 1}</p>
          <button
          onClick={() => decrementCartHandler({ type: "decrementCart", id: id }, cartDispatch)}
          >-</button>
        </div>
      </div>
      <div className="cart-card-part4">
        <button onClick={() =>cartDispatch({ type: "remove-from-cart", id: id})}>
          <img
            width="20"
            onClick={()=>setClicked({clicked: !btnClicked.clicked, message: "Item removed"})}
            height="20"
            src="https://img.icons8.com/ios-filled/100/delete-sign--v1.png"
            alt="delete-sign--v1"
          />
        </button>
        <button>
          {wishButton}
        </button>
      </div>
      <AlertBox alertMessage={btnClicked?.message} clicked={btnClicked?.clicked}/>
    </div>
  );
}
