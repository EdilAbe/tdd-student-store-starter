import * as React from "react";
import "./CheckoutForm.css";

/*
  Things to note about how this form works:

    1. Make sure to prevent default behavior when submitting a form so that the page does not reload
    2. Make sure to add a name to ALL your inputs so that they can be uniquely identified from the form data
    3. You can access named inputs from the argument (event/evt/e would be good names) so that you can do something with them


function getFormElemValue(formElem) {
  return [...new FormData(formElem).entries()].reduce((obj, [k, v]) => {
    obj[k] = v;
    return obj;
  }, {});
}*/

 export default function CheckoutForm(props) {
//   const handleSubmit = (event) => {
//     // 1. READ - prevent default behavior, which is to reload the page on submit
//     event.preventDefault();
//     // 2. READ - the event argument ultimately contains all the data that users enter in the form
//     var data = getFormElemValue(event.target);
//     // the following line stringifies the data object and replaces the contents of the jumbotron
//     document.getElementById("jumbotron").innerHTML = JSON.stringify(data);
//   };
  return (

<div className={props.isOpen ? "checkout-form" : "checkout-form closed"}>
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
      <p className="is-danger"></p>
      <div className="field">
        <div className="control">
          <button className="button checkout-button">Checkout</button>
        </div>
      </div>
      <div className="checkout-success">
        <h3>
            Checkout Info
       
        <span className="icon">
            <i className="material-icons md-48">fact_check</i>
        </span>
        </h3>
        <div className="content">
            <p>
                A confirmation email will be sent to you to confirm receipt of this order.</p>
                <p>
                Once confirmed, the order will be delivered to your residence
            </p>

        </div>
      </div>
    </div>

    // <>
    //   <form onSubmit={handleSubmit}>
    //     <h1>Favorites Form</h1>
    //     <label htmlFor="fruit">Fruit:</label>
    //     <br />
    //     <input type="text" id="fruit-input" name="fruit" />
    //     <br />
    //     <label htmlFor="vehicle">Vehicle:</label>
    //     <br />
    //     <input type="text" id="vehicle-input" name="vehicle" />
    //     <br />
    //     <br />
    //     <button type="submit">Submit</button>
    //   </form>
    //   <h2 id="jumbotron" />
    // </>
  )
}
