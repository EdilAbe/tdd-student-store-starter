import * as React from "react";
import "./CheckoutForm.css";

export default function CheckoutForm({
  isOpen = false,
  shoppingCart = [],
  checkoutForm = {
    name: "",
    email: "",
  },
  handleOnCheckoutFormChange = () => {},
  handleOnSubmitCheckoutForm = () => {},
  checkoutMessage = "",
  purchaseOrder = {},
  setPurchaseOrder = () => {},
}) {
  function handleExitCurrentPurchase() {
    setPurchaseOrder({});
  }
  return (
    <div className={isOpen ? "checkout-form" : "checkout-form closed"}>
      <h3>
        Payment Info
        <span>
          <i className="material-icons md-48">monetization_on</i>
        </span>
      </h3>
      <div className="input-field">
        <label className="label">Name</label>
        <div className="control">
          <input
            name="name"
            className="checkout-form-input"
            type="text"
            placeholder="Student Name"
            value={checkoutForm.name}
            onChange={(evt) =>
              handleOnCheckoutFormChange("name", evt.target.value)
            }
          />
        </div>
      </div>
      <div className="input-field">
        <label className="label">Email</label>
        <div className="control">
          <input
            name="email"
            className="checkout-form-input"
            type="email"
            placeholder="student@codepath.org"
            value={checkoutForm.email}
            onChange={(evt) =>
              handleOnCheckoutFormChange("email", evt.target.value)
            }
          />
        </div>
      </div>

      <div className="field">
        <div className="control">
          <label className="checkbox">
            <input name="termsAndConditions" type="checkbox" />
            <span className="label">
              {"I agree to the "}
              <a
                className="terms"
                href="https://codepath-student-store-demo.surge.sh/#terms-and-conditions"
              >
                terms and conditions
              </a>
            </span>
          </label>
        </div>
      </div>
      <p className="che"></p>
      <div className="checkoutBtn">
        <div className="control">
          <button
            className="button checkout-button"
            onClick={() => handleOnSubmitCheckoutForm()}
          >
            Checkout
          </button>
          <CheckoutInfo
            purchaseOrder={purchaseOrder}
            handleExitCurrentPurchase={handleExitCurrentPurchase}
            checkoutMessage={checkoutMessage}
          />
        </div>
      </div>
    </div>
  );
}
export function CheckoutInfo({
  purchaseOrder = {},
  handleExitCurrentPurchase = () => {},
  checkoutMessage = "",
}) {
  if (checkoutMessage === "Success!" && purchaseOrder?.receipt) {
    return (
      <div className="checkout-info">
        <p className="success">Success!</p>
        <div className="receipt">
          <p>
            Showing receipt for {purchaseOrder?.name} available at{" "}
            {purchaseOrder?.email}
          </p>
        </div>
        <ul className="receipt-list">
          {purchaseOrder.receipt.map((receiptEntry, index) => {
            return <li key={index}>{receiptEntry}</li>;
          })}
        </ul>

        <button
          className="exit-purchase-button"
          onClick={handleExitCurrentPurchase}
        >
          Exit
        </button>
      </div>
    );
  } else {
    return (
      <div className="checkout-info">
        <p>
          A confirmation email will be sent to you so that you can confirm this
          order. Once you have confirmed the order, it will be delivered to your
          dorm room.
        </p>
      </div>
    );
  }
}
