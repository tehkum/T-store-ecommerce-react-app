import { createContext, useReducer } from "react";
import { filterReducer } from "./utils/filterFunctions";

export const useFilter = createContext();

export function FilterContext({ children }) {

    const initialFilterValue = {
        radioFilter : false,
        priceFilterValue: "",
        starFilter : false,
        starFilterValue: "",
        searchFilterValue: "",
        showFilter: false,
        rangeValue: "2000",
        clearFilter: false
    }

    const [ filterState, filterDispatch ] = useReducer(filterReducer, initialFilterValue) 
  
  return (
    <useFilter.Provider value={{ filterState, filterDispatch }}>
      {children}
    </useFilter.Provider>
  );
}
