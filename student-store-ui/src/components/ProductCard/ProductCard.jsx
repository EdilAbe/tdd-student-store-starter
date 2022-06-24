import * as React from "react";
import "./ProductCard.css";
import { Link } from "react-router-dom";

export default function ProductCard(props) {
  return (
    <div className="product-card">
      <Link to={"/products/"}>
        <img src={props.product.image} />
      </Link>
    </div>
  );
}
