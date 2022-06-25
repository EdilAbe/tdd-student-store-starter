import * as React from "react";
import "./ProductCard.css";
//import { Link } from "react-router-dom";

export default function ProductCard(props) {
  let USDFormat = Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });
  //console.log(props.data);
  return (
    <div className="product-card">
      <div className="media">
        <img src={props.product.image} />
        {/* { <Link to={"/products/" + props.productId}>
          <img src={props.product.image} />
        </Link> } */}
      </div>

      <div className="product-id">
        <h1>{props.product.id}</h1>
      </div>

      <div className="product-name">
        <h1>{props.product.name}</h1>
      </div>
      <div className="product-price">
        <h2>{USDFormat.format(props.product.price)}</h2>
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
      {/* 
      <p>{props.quantity}</p> */}

      {/* <p className="product-quantity">{shoppingCart > 0 : {shoppingCart} : null}</p> */}

      {/* add a strech feature */}
    </div>
  );
}
