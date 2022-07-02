import * as React from "react";
import ProductCard from "/src/components/ProductCard/ProductCard";
import "./ProductView.css";

const ProductView = (
  products,
  productId,
  quantity,
  handleAddItemToCart,
  handleRemoveItemFromCart
) => {
  return (
    <div className="product-view">
      <h1 className="product-id">Product #{productId}</h1>
      <ProductCard
        products={products}
        productId={productId}
        quantity={quantity}
        handleAddItemToCart={handleAddItemToCart}
        handleRemoveItemFromCart={handleRemoveItemFromCart}
        showDescription={true}
      />
    </div>
  );
};

export default ProductView;
