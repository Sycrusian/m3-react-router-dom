import { createContext, useState } from "react";

export const CartContext = createContext({});

export const CartProvider = ({ children }) => {
  const [ productCart, setProductCart ] = useState([]);

  const addProduct = product => {
    setProductCart([...productCart, {...product, purchaseId: crypto.randomUUID() }]);
  }

  const removeProduct = purchaseId => {
    setProductCart(productCart.filter(purchase => purchase.purchaseId !== purchaseId));
  }

  const cartTotal = productCart.reduce((total, item) => total + item.price, 0);

  return (
    <CartContext.Provider value={{ productCart, cartTotal, addProduct, removeProduct }}>
      {children}
    </CartContext.Provider>
  );
}