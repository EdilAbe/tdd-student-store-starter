import * as React from "react";
import "./ProductCard.css";
import { Link } from "react-router-dom";

export default function ProductCard(props) {
  let USDFormat = Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });
  //console.log(props.data);
  return (
    <div className="product-card">
      <div className="media">
        {/* <img src={props.product.image} /> */}
          <Link to={"/products/" + props.productId}>
          <img src={props.product.image} />
        </Link> 
      </div>
        <div className="product-info">
      
      <div className="product-name">
        <p>{props.product.name}</p>
      </div>
      <div className="product-price">
        <p>{USDFormat.format(props.product.price)}</p>
      </div>

      <div className="product-description">
        <p>{props.showDescription ? props.product.description : null}</p>
      </div>

      <div className="itemBtn">
        <button
          className="remove"
          onClick={() => props.handleRemoveItemFromCart(props.productId)}
        >
          -
        </button>
        <button
          className="add"
          onClick={() => props.handleAddItemToCart(props.productId)}
        >
          +
        </button>
      </div>
      
      {props.quantity

      ? ( <p className="product-quantity">{props.quantity}</p> ):null}

      {/* add a strech feature */}
    </div>
    </div>
  );
}
