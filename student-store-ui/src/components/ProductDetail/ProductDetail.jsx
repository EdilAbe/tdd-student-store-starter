import * as React from "react";
import "./ProductDetail.css";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import ProductView from "/src/components/ProductView/ProductView";
//import NotFound from "/src/components/NotFound/NotFound";

export default function ProductDetail({
  isFetching,
  setIsFetching,
  handleAddItemToCart,
  handleRemoveItemFromCart,
  shoppingCart,
  setError,
}) {
  let { productId } = useParams();
  const [products, setProducts] = useState({});

  async function getSelectedProduct() {
    setError("");
    setIsFetching(true);
    try {
      const response = await axios.get(
        `http://localhost:3001/store/${productId}`
      );

      if (response?.data?.products) {
        setProducts(response.data.products);
      } else {
        setError("Cannot find product");
      }
      console.log("received this product data:", response.data.products);
    } catch (error) {
      console.log(error);
      setError("error");
    }

    setIsFetching(false);
  }

  useEffect(() => {
    getSelectedProduct();
  }, []);
  console.log("product-detail:", products);

  // if (selectedProduct === null) {
  //   return <NotFound />;
  // }

  // productQuantity = shoppingCart.find((item) => item.itemId === products.id)
  //   ? shoppingCart.find((item) => item.itemId === products.id).quantity
  //   : null;
  // if (isFetching) {
  //   return <h1 className="loading">Loading...</h1>;
  // }
  return (
    <div className="Product-detail">
      <ProductView
        products={products}
        productsId={productsId}
        //quantity={productQuantity}
        handleAddItemToCart={handleAddItemToCart}
        handleRemoveItemFromCart={handleRemoveItemFromCart}
        shoppingCart={shoppingCart}
        //showDescription={showDescription}
      />
    </div>
  );
}
