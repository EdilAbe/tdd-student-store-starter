import * as React from "react";
import "./ShoppingCart.css";

export default function ShoppingCart({
  isOpen = false,
  products = [],
  shoppingCart = [],
}) {
  console.log(shoppingCart);

  if (shoppingCart.length == 0) {
    return (
      <div className="shopping-cart">
        <p className="notification">
          No items added to cart yet. Start shopping now!
        </p>
      </div>
    );
  }

  return (
    <div className="shoppingCart">
      <table className="shopping-cart-table">
        <thead>
          <th>Name</th>
          <th>Quantity</th>
          <th>Cost</th>
        </thead>
        {shoppingCart.map((item) => (
          <tr className="cart-row" key={item.itemId}>
            <td className="cart-product-name">
              {products.find((product) => product.id === item.itemId).name}
            </td>
            <td className="cart-product-quantity">{item.quantity}</td>
            <td className="cart-product-cost">
              {products.find((product) => product.id === item.itemId).price *
                item.quantity}
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
}
