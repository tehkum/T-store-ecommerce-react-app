import { createContext, useEffect, useState } from "react";

export const useProducts = createContext();

export function ProductProvider({ children }) {
  const [productData, setProduct] = useState([]);

  const fetchDetails = async () => {
    try {
      const data = await fetch("/api/products");
      const fullData = await data.json();
      setProduct(fullData.products);
    } catch (error) {
      console.log(error, "kendsnaodn");
    }
  };

  const clickHandler = async () => {
    const data = await fetch("/api/products");
    const fullData = await data.json();
    return fullData.products;
  };

  useEffect(() => {
    fetchDetails(); 
  }, []);

  return (
    <useProducts.Provider value={{ productData, clickHandler }}>
      {children}
    </useProducts.Provider>
  );
}
