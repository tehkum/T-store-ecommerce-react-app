import { createContext, useEffect, useReducer } from "react";
import { addToCart, removeFromCart, incrementCart, decrementCart, fetchCart, clearCart } from "./utils/CartFunctions";

export const useCart = createContext();

export function CartProvider({ children }) {
  const CartReducer = (cartState, action) => {
    switch (action.type) {

      case "getCart" : return {...cartState, mainCart: action.cart}
  
      case "add-to-cart":
      addToCart(action).then((fullCart) => {
         cartDispatch({ type: "setCart", cart: fullCart });
        });
       break;

      case "setCart": 
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

      case "load" : return {...cartState, cartLoading: true}

      case "unload" : return {...cartState, cartLoading: false}

      case "checkOut" : return {...cartState, checkOutCart: [...cartState?.mainCart]}

      case "clearCart" : clearCart();
      return {...cartState, mainCart: []}

      default:
        return { ...cartState };
    }
  };

  const [cartState, cartDispatch] = useReducer(CartReducer, {
    cartData: [],
    mainCart: [],
    checkOutCart: [],
    cartLoading: false,
  });

  useEffect(()=>{
    fetchCart(cartDispatch);
  },[cartState?.cartData])


  return (
    <useCart.Provider value={{ cartState, cartDispatch }}>
      {children}
    </useCart.Provider>
  );
}
