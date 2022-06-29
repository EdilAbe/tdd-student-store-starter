import * as React from "react";
//import ProductCard from "/src/components/ProductCard/ProductCard";
import ProductCard from "../ProductCard/ProductCard";
import "./ProductGrid.css";

export default function ProductGrid({
  products,
  handleAddItemToCart,
  shoppingCart,
  handleRemoveItemFromCart,
}) {
  return (
    <div className="product-grid">
      {products.map((item) => {
        return (
          <ProductCard
            key={item.id}
            product={item}
            productId={item.id}
            // quantity={quantity}
            handleAddItemToCart={handleAddItemToCart}
            handleRemoveItemFromCart={handleRemoveItemFromCart}
            showDescription={false}
          />
        );
      })}
    </div>
  );
}
