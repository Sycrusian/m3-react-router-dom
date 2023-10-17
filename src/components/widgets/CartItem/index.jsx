import { useContext } from "react";
import { CartContext } from "../../../providers/CartContext";

export const CartItem = ({ purchase }) => {
  const { removeProduct } = useContext(CartContext);

  const cancel = () => {
    removeProduct(purchase.purchaseId);
  }

  return (
    <li>
      <h3>{purchase.name}</h3>
      <h3>{`Preço: ${purchase.price.toLocaleString("pt-BR", { style: "currency", currency: "BRL"})}`}</h3>
      <button onClick={cancel}>Cancelar</button>
    </li>
  );
}