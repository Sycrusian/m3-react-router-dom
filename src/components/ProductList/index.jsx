import { useContext, useEffect } from "react";
import { ProductContext, ProductProvider } from "../../providers/ProductContext";
import { ProductCard } from "../widgets/ProductCard";

export const ProductList = () => {
  const { products, loadProducts } = useContext(ProductContext);

  useEffect(() => {
    loadProducts();
  }, []);

  return (
    <ul>
      {products?.map(product => <ProductCard key={product.id} product={product} />)}
    </ul>
  );
}