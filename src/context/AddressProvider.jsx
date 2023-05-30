import { createContext, useReducer } from "react";
// import { addToCart, removeFromCart } from "./utils/CartFunctions";
// import { CartReducer } from "../reducers/CartReducer";

export const useAddress = createContext();

export function AddressProvider({ children }) {

    const addressInit = {
        addressData: [],
        currAddress: {
            addOne: "",
            addTwo: "",
            landmark: "",
            city: "",
            country: "",
            postal: ""
        }
    }

    const addressReducer = (addressState, action) => {
        switch(action.type){
            case "addAddressDetails" : 
            addressState.currAddress[action.addressType] = action.data;
            return {...addressState}

            case "addAddressClick" : 
            localStorage.setItem("address", JSON.stringify([...addressState.addressData , {...addressState.currAddress}]))
            return { ...addressState, addressData: JSON.parse(localStorage.getItem("address") ?? [])}

            default: return {...addressState}
        }
    }

    const [ addressState , addressDispatch ] = useReducer(addressReducer, addressInit)

  return (
    <useAddress.Provider value={{addressState, addressDispatch}}>
      {children}
    </useAddress.Provider>
  );
}
