import * as React from "react";
//import ProductCard from "/src/components/ProductCard/ProductCard";
import ProductCard from "../ProductCard/ProductCard";
import "./ProductGrid.css";

export default function ProductGrid(props) {
  return (
    <div className="product-grid">
      {props.products.map((product) => {
        return (
          <ProductCard
            key={product.id}
            product={product}
            productId={product.id}
            // handleAddItemToCart={props.handleAddItemToCart}
            // handleRemoveItemFromCart={props.handleRemoveItemFromCart}
            showDescription={false}
          />
        );
      })}
    </div>
  );
}
