import * as React from "react";
import "./ProductDetail.css";
import { useParams } from "react-router-dom";
import axios from "axios";
import ProductView from "/src/components/ProductView/ProductView";
//import NotFound from "/src/components/NotFound/NotFound";

export default function ProductDetail(props) {
  const [product, setProduct] = React.useState([]);
  const { productId } = useParams();

  const getProductData = async () => {
    props.setIsFetching(true);
    try {
      const response = await axios.get(
        `https://codepath-store-api.herokuapp.com/store/${productId}`
      );
      setProduct(response.data.product);
      console.log("received this product data:", response.data.product);
    } catch (error) {
      props.setError(error);
      console.log(props.error);
    } finally {
      props.setIsFetching(false);
    }
  };

  React.useEffect(() => {
    getProductData();
  }, []);

  return (
    <div className="Product-detail">
      <ProductView
        products={products}
        productId={productId}
        // quantity={productQuantity}
        handleAddItemToCart={props.handleAddItemToCart}
        handleRemoveItemFromCart={props.handleRemoveItemFromCart}
        shoppingCart={props.shoppingCart}
      />
    </div>
  );
}
