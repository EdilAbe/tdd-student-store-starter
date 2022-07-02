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
  console.log("products: ", products);
  console.log("shopping cart", shoppingCart);
  return (
    <div className="product-grid">
      {products.map((item) => {
        var purchasedQuantity = shoppingCart.find(
          (element) => element.itemId === item.id
        );
        var quantity = purchasedQuantity ? purchasedQuantity.quantity : 0;
        return (
          <ProductCard
            key={item.id}
            products={item}
            productId={item.id}
            quantity={quantity}
            handleAddItemToCart={handleAddItemToCart}
            handleRemoveItemFromCart={handleRemoveItemFromCart}
            showDescription={false}
          />
        );
      })}
    </div>
  );
}
