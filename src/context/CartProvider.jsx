import { createContext, useReducer } from "react";
import { addToCart, removeFromCart, incrementCart, decrementCart } from "./utils/CartFunctions";
// import { CartReducer } from "../reducers/CartReducer";

export const useCart = createContext();

export function CartProvider({ children }) {
  const CartReducer = (cartState, action) => {
    switch (action.type) {
  
      case "add-to-cart":
      addToCart(action).then((fullCart) => {
         cartDispatch({ type: "setCart", cart: fullCart });
        });
       break;

      case "setCart": 
      // localStorage.setItem("cart", JSON.stringify(action.cart));
      return {...cartState, cartData: action.cart}

      case "remove-from-cart" : 
      removeFromCart(action).then((fullCart)=>{
        cartDispatch({ type: "setCart", cart: fullCart});
      })
      break;

      case "incrementCart" : incrementCart(action).then((fullCart)=>{
        cartDispatch({ type: "setCart", cart: fullCart});
      })
      break;

      case "decrementCart" : decrementCart(action).then((fullCart)=>{
        cartDispatch({ type: "setCart", cart: fullCart});
      })
      break;

      default:
        return { ...cartState };
    }
  };

  const [cartState, cartDispatch] = useReducer(CartReducer, {
    cartData: [],
  });

  return (
    <useCart.Provider value={{ cartState, cartDispatch }}>
      {children}
    </useCart.Provider>
  );
}
