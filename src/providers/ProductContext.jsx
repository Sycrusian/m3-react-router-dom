import { createContext, useState } from "react";
import { fakeFashion } from "../services/api";

export const ProductContext = createContext({});

export const ProductProvider = ({ children }) => {
  const [ products, setProducts ] = useState([]);

  const loadProducts = async () => {
    try {
      const { data } = await fakeFashion.get("/products");
      setProducts(data);
    } catch (error) {
      console.error(error.message);
    }
  }

  return (
    <ProductContext.Provider value={{ products, loadProducts }}>
      {children}
    </ProductContext.Provider>
  );
}