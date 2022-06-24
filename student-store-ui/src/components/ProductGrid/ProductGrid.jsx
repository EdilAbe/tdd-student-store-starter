import * as React from "react";
import ProductCard from "/src/components/ProductCard/ProductCard";
import "./ProductGrid.css";

export default function productGrid({ products }) {
  return (
    <div className="product-grid">
      {products.map((product) => {
        return <ProductCard product={product} />;
      })}
    </div>
  );
}
