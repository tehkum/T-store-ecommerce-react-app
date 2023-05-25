import { useContext } from "react";
import "./CartCard.css";
import { useCart } from "../context/CartProvider";
import h2 from "../images/h2.png";

export default function CartCard({
  id,
  title,
  description,
  price,
  image,
  qty,
}) {
  const { cartDispatch } = useContext(useCart);

  return (
    <div className="cart-card" key={id}>
      <img src={image} alt="..." width="200px" height="223.83" />
      <div className="cart-card1">
        <div className="cart-card-part1">
          <h2>{title}</h2>
          <p>{price}</p>
        </div>
        <div className="cart-card-part2">
          <p>{description}</p>
        </div>
        <div className="cart-card-part3">
          <button
          onClick={() => cartDispatch({ type: "incrementCart", id: id })}
          >+</button>
          <p>{qty ?? 1}</p>
          <button
          onClick={() => cartDispatch({ type: "decrementCart", id: id })}
          >-</button>
        </div>
      </div>
      <div className="cart-card-part4">
        <button onClick={() => cartDispatch({ type: "remove-from-cart", id: id})}>
          <img
            width="20"
            height="20"
            src="https://img.icons8.com/ios-filled/100/delete-sign--v1.png"
            alt="delete-sign--v1"
          />
        </button>
        <button>
          <img
            src={h2}
            alt="..."
            // className="wish-logo"
            width="20"
            height="20"
            // onClick={clickHandler}
          />
        </button>
      </div>
    </div>
  );
}
