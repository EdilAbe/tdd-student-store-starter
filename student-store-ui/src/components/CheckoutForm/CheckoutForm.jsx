import * as React from "react";
import "./CheckoutForm.css";

export default function CheckoutForm({
  receipt,
  checkoutForm = {
    name: "",
    email: "",
  },

  handleOnCheckoutFormChange,
  handleOnSubmitCheckoutForm,
}) {
  return (
    <div className="checkout-form">
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
              handleOnCheckoutFormChange(evt.target.name, evt.target.value)
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
        </div>
      </div>
      {receipt.map((element) => {
        return <p>{element}</p>;
      })}
    </div>
  );
}
