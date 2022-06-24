import * as React from "react";
import "./ProductDetail.css";

export default function ProductDetail(props) {
  const [product, setProduct] = React.useState([]);
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
      <p>{product}</p>
    </div>
  );
}
