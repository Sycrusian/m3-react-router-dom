import { useContext } from "react";
import { CartContext } from "../../providers/CartContext";
import { CartItem } from "../widgets/CartItem";

export const PurchaseCart = () => {
  const { productCart, cartTotal } = useContext(CartContext);

  return (
    <div>
      <h2>Carrinho de Compras</h2>
      {productCart?.map(purchase => <CartItem key={purchase.purchaseId} purchase={purchase} />)}
      <h2>{`Total: ${cartTotal.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}`}</h2>
    </div>
  );
}