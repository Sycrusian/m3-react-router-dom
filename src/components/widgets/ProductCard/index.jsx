import { useContext } from "react";
import { CartContext } from "../../../providers/CartContext";

export const ProductCard = ({ product }) => {
  const { addProduct } = useContext(CartContext);

  const purchaseItem = () => {
    addProduct(product);
  }

  return (
    <li>
      <h2>{product.name}</h2>
      <img src={product.image} alt={product.name} />
      <h3>{`Preço: ${product.price.toLocaleString("pt-BR", { style: "currency", currency: "BRL"})}`}</h3>
      <p>{product.description}</p>
      <button onClick={purchaseItem}>Comprar</button>
    </li>
  );
}