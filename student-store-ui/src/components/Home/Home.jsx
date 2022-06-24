import * as React from "react";
import "./Home.css";
import "../Hero/Hero";
import "/src/components/ProductGrid/ProductGrid";

export default function Home({
  products,
  shoppingCart,
  handleAddIteToCart,
  handleRemoveItemToCart,
}) {
  return (
    <div className="home">
      <Hero />
      <ProductGrid products={products} shoppingCart={shoppingCart} />
      <p>Home</p>
    </div>
  );
}
