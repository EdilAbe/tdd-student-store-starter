import * as React from "react";
import "./ProductCard.css";
import { Link } from "react-router-dom";

export default function ProductCard({
  products,
  productId,
  showDescription,
  quantity,
  handleAddItemToCart,
  handleRemoveItemFromCart,
}) {
  //console.log(props.data);
  return (
    <div className="product-card">
      <div className="media">
        <Link to={"/products/" + productId}>
          <img src={products.image} />
        </Link>
      </div>
      <div className="product-info">
        <div className="product-name">
          <p>{products.name}</p>
        </div>
        <div className="product-price">
          {/* <p className="product-price">${products.price.toFixed(2)}</p> */}
          <p className="product-price">${products.price}</p>
        </div>

        <div className="product-description">
          <p>{showDescription ? products.description : null}</p>
        </div>

        <div className="itemBtn">
          <button
            className="remove"
            onClick={() => {
              handleRemoveItemFromCart(productId);
            }}
          >
            -
          </button>
          <button
            className="add"
            onClick={() => {
              handleAddItemToCart(productId);
            }}
          >
            +
          </button>
        </div>

        {quantity > 0 ? (
          <div className="product-quantity">
            <span className="amount">{quantity}</span>
          </div>
        ) : null}

        {/* add a strech feature */}
      </div>
    </div>
  );
}
