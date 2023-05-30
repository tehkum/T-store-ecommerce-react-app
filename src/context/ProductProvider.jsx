import { createContext, useEffect, useState } from "react";

export const useProducts = createContext();

export function ProductProvider({ children }) {
  const [productData, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchDetails = async () => {
    try {
      setLoading(true)
      setTimeout(async () => {
        const data = await fetch("/api/products");
        const fullData = await data.json();
        setProduct(fullData.products);
        setLoading(false);
      },2000)
    } catch (error) {
      console.log(error);
    }
  };

  const clickHandler = async () => {
    try {
      const data = await fetch("/api/products");
      const fullData = await data.json();
      setLoading(false)
      return fullData.products;
    } catch (error) {
      console.log(error);
    } 
  };

  useEffect(() => {
    fetchDetails();
  }, []);

  return (
    <useProducts.Provider value={{ productData, clickHandler, loading }}>
      {children}
    </useProducts.Provider>
  );
}
