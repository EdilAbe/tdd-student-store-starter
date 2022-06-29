import * as React from "react";
import "./ProductDetail.css";
import { useParams } from "react-router-dom";
import axios from "axios";
import ProductView from "/src/components/ProductView/ProductView";
//import NotFound from "/src/components/NotFound/NotFound";

export default function ProductDetail(props) {
  const [chosenproduct, setChosenProduct] = React.useState(null);
  const { productId } = useParams();
  React.useEffect(async () => {
    try {
      const response = await axios.get(
        "https://codepath-store-api.herokuapp.com/store/${productId}"
      );
      setChosenProduct(response.data.products);
      console.log("received this data:", response.data.products);
    } catch (error) {
      console.log(error);
    }
  }, []);

  // const getProductData = async () => {
  //   props.setIsFetching(true);
  //   try {
  //     const response = await axios.get(
  //       `https://codepath-store-api.herokuapp.com/store/${productId}`
  //     );
  //     setProduct(response.data.product);
  //     console.log("received this product data:", response.data.product);
  //   } catch (error) {
  //     props.setError(error);
  //     console.log(props.error);
  //   } finally {
  //     props.setIsFetching(false);
  //   }
  // };

  // React.useEffect(() => {
  //   getProductData();
  // }, []);
  if (chosenproduct === null) {
    return <NotFound />;
  }

  productQuantity = props.shoppingCart.find(
    (item) => item.itemId === product.id
  )
    ? props.shoppingCart.find((item) => item.itemId === product.id).quantity
    : null;

  return (
    <div className="Product-detail">
      <ProductView
        products={chosenproduct}
        //  productId={productId}
        quantity={productQuantity}
        handleAddItemToCart={props.handleAddItemToCart}
        handleRemoveItemFromCart={props.handleRemoveItemFromCart}
        //shoppingCart={props.shoppingCart}
        showDescription={props.showDescription}
      />
    </div>
  );
}
