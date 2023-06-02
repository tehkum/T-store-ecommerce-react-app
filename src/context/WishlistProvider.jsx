import { createContext, useEffect, useReducer } from "react";
import { AddToWishlist, RemoveFromWishlist, fetchDetails } from "./utils/WIshlistFunctions";

export const useWishlist = createContext();

export function WishlistContext({ children }) {

    const initialWishlistValue = {
        wishlistData: [],
        mainWish: [],
        wishlistLoad: false
    }

    const wishlistReducer = (wishlistState,action) => {
        switch(action.type){
            
            case "getWish" : return {...wishlistState, mainWish: action.wishlist}

            case "add-to-wishlist": AddToWishlist(action).then(fullWishlist => {
              wishlistDispatch({type: "setWishlist", wishData: fullWishlist})
            }); 
            break;

            case "remove-from-wishlist": RemoveFromWishlist(action).then(fullWishlist => {
              wishlistDispatch({type: "setWishlist", wishData: [...fullWishlist]})
            }); 
            break;

            case "setWishlist": 
            return {...wishlistState, wishlistData: action.wishData}

            case "load":
              return {...wishlistState, wishlistLoad: true}
            
            case "unload":
              return {...wishlistState, wishlistLoad: false}
  
            default: return {...wishlistState}
        }
    }

    const [ wishlistState, wishlistDispatch ] = useReducer(wishlistReducer, initialWishlistValue) 

    useEffect(()=>{
      fetchDetails(wishlistDispatch);
    },[wishlistState?.wishlistData])
  
  return (
    <useWishlist.Provider value={{ wishlistState, wishlistDispatch }}>
      {children}
    </useWishlist.Provider>
  );
}
