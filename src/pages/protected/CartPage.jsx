import { useContext } from "react";
import CartCard from "../../components/CartCard";
import "./Cartpage.css";
import { useCart } from "../../context/CartProvider";
import { useNavigate } from "react-router-dom";

export function CartPage() {
  const { cartState } = useContext(useCart);

  
  const totalPrice = Math.floor(cartState?.mainCart?.reduce((total,{price, qty})=> qty*(total + price) ,0))

  const navigate = useNavigate()

  const wayToCheckout = () => {
    navigate("/address")
  }


  return (cartState?.cartLoading ? <><h1>...loading</h1></> :<>
    <div className="cartpage">
      <div className="left-cart-area">
        <h1>Your Cart</h1>
        <p>TOTAL [{cartState?.mainCart?.length}] <b>₹{totalPrice}</b></p>
        {cartState?.mainCart?.length ? cartState?.mainCart?.map(({_id,title,description,price, image, qty })=><CartCard id={_id} title={title} description={description} price={price} image={image} qty={qty}/>) : "Your cart is Empty"}
      </div>
      <div className="right-cart-area">
        <button className="btn btn-primary" onClick={wayToCheckout}>PROCEED TO CHECKOUT</button>
        <h2>Order summary</h2>
        <div className="sec1-cart-right">
          <p>{cartState?.mainCart?.length} item</p>
          <p>₹{totalPrice}</p>
        </div>
        <div className="sec2-cart-right">
          <p>Delivery</p>
          <p>FREE</p>
        </div>
        <hr />
        <div className="sec3-cart-right">
          <div>
            <p><b>Total : </b></p>
            <p>[Inclusive of all taxes]</p>
            </div>
            <p>₹{totalPrice}</p>
        </div>
        <hr />
        <div className="payment-logos">
        <img width="50" height="50" src="https://img.icons8.com/ios-filled/100/visa.png" alt="visa"/>
        <img width="50" height="50" src="https://img.icons8.com/ios-filled/100/mastercard-logo.png" alt="mastercard-logo"/>
        <img width="50" height="50" src="https://img.icons8.com/ios-filled/100/rupay.png" alt="rupay"/>
        <img width="50" height="50" src="https://img.icons8.com/ios-filled/100/banknotes.png" alt="banknotes"/>
        <img width="50" height="50" src="https://img.icons8.com/ios-filled/100/bhim-upi.png" alt="bhim-upi"/>
        <img width="50" height="50" src="https://img.icons8.com/ios-filled/100/bank-cards--v1.png" alt="bank-cards--v1"/>
        </div>
      </div>
    </div>
  </>);
}
