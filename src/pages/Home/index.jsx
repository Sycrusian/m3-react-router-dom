import { ProductList } from "../../components/ProductList";
import { PurchaseCart } from "../../components/PurchaseCart";
import { ProductProvider } from "../../providers/ProductContext";
import { CartProvider } from "../../providers/CartContext";

export const Home = ({ user }) => {
  return (
    <>
      <h1>{user ? `Bem vindo, ${user.name}!` : "HomePage"}</h1>
      <ProductProvider>
        <CartProvider>
          <ProductList />
          <PurchaseCart />
        </CartProvider>
      </ProductProvider>
    </>
  );
}