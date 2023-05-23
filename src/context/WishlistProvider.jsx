import { createContext, useReducer } from "react";
import { AddToWishlist, RemoveFromWishlist } from "./utils/WIshlistFunctions";

export const useWishlist = createContext();

export function WishlistContext({ children }) {

    const initialWishlistValue = {
        wishlistData: []
    }

    const wishlistReducer = (wishlistState,action) => {
        switch(action.type){
            case "add-to-wishlist": AddToWishlist(action).then(fullWishlist => {
              wishlistDispatch({type: "setWishlist", wishData: [...fullWishlist]})
            }); 
            break;

            case "remove-from-wishlist": RemoveFromWishlist(action).then(fullWishlist => {
              wishlistDispatch({type: "setWishlist", wishData: [...fullWishlist]})
            }); 
            break;

            case "setWishlist": 
            return {...wishlistState, wishlistData: action.wishData}
            
  
            default: return {...wishlistState}
        }
    }

    const [ wishlistState, wishlistDispatch ] = useReducer(wishlistReducer, initialWishlistValue) 
  
  return (
    <useWishlist.Provider value={{ wishlistState, wishlistDispatch }}>
      {children}
    </useWishlist.Provider>
  );
}
