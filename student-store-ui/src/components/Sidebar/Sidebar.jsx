import * as React from "react";
import "./Sidebar.css";
import ShoppingCart from "../ShoppingCart/ShoppingCart";
import CheckoutForm from "../CheckoutForm/CheckoutForm";

export default function Sidebar(props) {
  const sidebarClassOpen = props.isOpen ? "sidebar" : "sidebar hidden";

  return (
    <section className={sidebarClassOpen}>
      <button className="toggle-button" onClick={props.handleOnToggle}>
        <i className="material-icons md-48">arrow_forward</i>
      </button>
      <div className="sidebar-contents">
        <section className="sidebar opened">
          <div className="wrapper">
            {/* <button className="toggle-button">
              <i className="material-icons md-48">arrow_backward</i>
            </button> */}
            <div className="shopping-cart">
              <div className="cart-icons">
                <span className="cart-icon">
                  <i className="material-icons md 48">add_shopping_cart</i>
                </span>
                <span className="cart-icon">
                  <i className="material-icons md 48">monetization_on</i>
                </span>
                <span className="cart-icon">
                  <i className="material-icons md 48">fact_check</i>
                </span>
              </div>
            </div>
          </div>
        </section>

        <section class="sidebar opened">
          <div class="wrapper"></div>
        </section>

        {/* <h3>Shopping Cart</h3>
        <ShoppingCart
          isOpen={props.isOpen}
          products={props.products}
          shoppingCart={props.shoppingCart}
        />
        <h3>Checkout</h3>
        <CheckoutForm /> */}
      </div>
    </section>
  );
}
