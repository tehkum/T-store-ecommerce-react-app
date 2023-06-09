import { createContext, useReducer } from "react";
import { addToCart, removeFromCart, incrementCart, decrementCart, clearCart } from "./utils/CartFunctions";

export const useCart = createContext();

const incrementCartHandler = async (action, cartDispatch) => {
  try {
    const res = await incrementCart(action)
    cartDispatch({type: "getCart", cart: res.data.cart})
  }catch(error){
    console.log(error);
  }
}

const decrementCartHandler = async (action, cartDispatch) => {
  try {
    const res = await decrementCart(action)
    cartDispatch({type: "getCart", cart: res.data.cart})
  }catch(error){
    console.log(error);
  }
}

const addToCartHandler = async (action, cartDispatch) => {
  try {
    const res = await addToCart(action)
    cartDispatch({type: "getCart", cart: res.data.cart})
  }catch(error){
    console.log(error);
  }
}

export function CartProvider({ children }) {
  const CartReducer = (cartState, action) => {
  
    switch (action.type) {

      case "getCart" : return {...cartState, mainCart: action.cart}
  
      case "add-to-cart":
      addToCart(action).then((fullCart) => {
         cartDispatch({ type: "getCart", cart: fullCart });
        });
       break;

      // case "setCart": 
      // return {...cartState, cartData: action.cart}

      case "remove-from-cart" : 
      removeFromCart(action).then((fullCart)=>{
        cartDispatch({ type: "getCart", cart: fullCart});
      })
      break;

      // case "incrementCart" : incrementCart(action).then((fullCart)=>{
      //   cartDispatch({ type: "setCart", cart: fullCart});
      // })
      // break;

      // case "decrementCart" : decrementCart(action).then((fullCart)=>{
      //   cartDispatch({ type: "setCart", cart: fullCart});
      // })
      // break;

      // case "incrementCart" : 
      //   incrementCartHandler(action,cartDispatch)
      // break;

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
    // cartData: [],
    mainCart: [],
    checkOutCart: [],
    cartLoading: false,
  });

  

  // useEffect(()=>{
  //   fetchCart(cartDispatch);
  // },[cartState?.cartData])


  return (
    <useCart.Provider value={{ cartState, cartDispatch, incrementCartHandler, decrementCartHandler, addToCartHandler }}>
      {children}
    </useCart.Provider>
  );
}
