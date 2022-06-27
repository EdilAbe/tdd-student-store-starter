import * as React from "react";
import ProductCard from "/src/components/ProductCard/ProductCard";
import "./ProductView.css";

const ProductView = (props) => 
 {  return (
    <div className="product-view">
      <h1 className="product-id">Product #{props.productId}</h1>
      <ProductCard
        products={props.products}
        productId={props.products.id}
        quantity={props.quantity}
        handleAddItemToCart={props.handleAddItemToCart}
        handleRemoveItemFromCart={props.handleRemoveItemFromCart}
        showDescription={true}
      />
    </div>
  );
}

export default ProductView;