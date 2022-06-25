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

export default function CheckoutForm() {
  const handleSubmit = (event) => {
    // 1. READ - prevent default behavior, which is to reload the page on submit
    event.preventDefault();
    // 2. READ - the event argument ultimately contains all the data that users enter in the form
    var data = getFormElemValue(event.target);
    // the following line stringifies the data object and replaces the contents of the jumbotron
    document.getElementById("jumbotron").innerHTML = JSON.stringify(data);
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <h1>Favorites Form</h1>
        <label htmlFor="fruit">Fruit:</label>
        <br />
        <input type="text" id="fruit-input" name="fruit" />
        <br />
        <label htmlFor="vehicle">Vehicle:</label>
        <br />
        <input type="text" id="vehicle-input" name="vehicle" />
        <br />
        <br />
        <button type="submit">Submit</button>
      </form>
      <h2 id="jumbotron" />
    </>
  );
}
