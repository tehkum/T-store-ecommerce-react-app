import { useContext, useEffect } from "react";
import "./OrderReview.css";
import { useCart } from "../../context/CartProvider";
import FinalPageCard from "../../components/FinalPageCard";

export default function OrderReview() {
  const { cartState } = useContext(useCart);

  const totalPrice = Math.floor(
    cartState?.checkOutCart?.reduce(
      (total, { price, qty }) => qty * (total + price),
      0
    )
  );

  useEffect(() => {
    window.scrollTo({
      top: 100,
      left: 100,
      behavior: "smooth",
    });
  }, []);

  return (
    <div className="order-section">
      <div className="order-section1">
        <h1>Thankyou for Order</h1>
        <h3>
          Order Id:{" "}
          {(Math.floor(Math.random() * 10000) + 10000).toString().substring(1)}
        </h3>
      </div>
      <div className="order-section2">
        {cartState?.checkOutCart?.map(
          ({ _id, title, description, price, image, qty }) => (
            <FinalPageCard
              id={_id}
              title={title}
              description={description}
              totalPrice={totalPrice}
              image={image}
              qty={qty}
            />
          )
        )}
      </div>
      <h3>Total Price Paid: {totalPrice}</h3>
    </div>
  );
}
