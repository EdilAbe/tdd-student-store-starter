import * as React from "react";
import "./Sidebar.css";
import ShoppingCart from "../ShoppingCart/ShoppingCart";
import CheckoutForm from "../CheckoutForm/CheckoutForm";

export default function Sidebar(props) {
  const sidebarClosed = props.isOpen ? "sidebar hidden" : "sidebar open";
  const sidebarOpen = props.isOpen ? "sidebar open" : "sidebar hidden";


  return (
    <section className="sidebar">
      <section className = {sidebarClosed}>
      <button  onClick={props.handleOnToggle}>
        <i className="material-icons md-48">arrow_forward</i>
      </button> 
      <span className="cart-icon">
                  <i className="material-icons md 48">add_shopping_cart</i>
                </span>
                <span className="cart-icon">
                  <i className="material-icons md 48">monetization_on</i>
                </span>
                <span className="cart-icon">
                  <i className="material-icons md 48">fact_check</i>
                </span>
      </section>
      <section className ={sidebarOpen}>
       <button  onClick={props.handleOnToggle}>
        <i className="material-icons md-48">arrow_backward</i>
      </button> 
      
       <div className="sidebar-contents">
        <section className="sidebar opened">
                  </section>
          </div> 
        <h3>Shopping Cart</h3>
          <ShoppingCart 
          isOpen = {props.isOpen}
          ShoppingCart = {props.ShoppingCart}
          products = {props.products}
          subtotal = {props.subtotal}
          //quantity = {props.ShoppingCart.length}
          />
        <h3>Checkout</h3>

          <CheckoutForm 
          isOpen = {props.handleOnSubmitCheckoutForm}
          ShoppingCart = {props.ShoppingCart}
          CheckoutForm = {props.CheckoutForm}
          //handleOnSubmitCheckoutForm = {props.handleOnSubmitCheckoutForm}
          //handleonCheckoutFormChange = {props.handleOnCheckoutFormChange}
          />
        </section>
        </section>
    
  )}

