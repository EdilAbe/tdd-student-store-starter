import * as React from "react";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import Home from "../Home/Home";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "../NotFound/Notfound";
import ProductDetail from "../ProductDetail/ProductDetail";
import axios from "axios";

export default function App() {
  const [isFetching, setIsFetching] = React.useState();
  const [products, setProducts] = React.useState([]);
  const [isOpen, setIsOpen] = React.useState("");
  const [error, setError] = React.useState("");
  const [shoppingCart, setShoppingCart] = React.useState([]);
  const [checkoutForm, setCheckoutForm] = React.useState("");

  function handleOnToggle() {
    setIsOpen(!isOpen);
  }
  function handleAddItemToCart(productId) {}
  function handleRemoveItemFromCart() {}
  function handleOnCheckoutFormChange() {}
  function handleOnSubmitCheckoutForm() {}

  React.useEffect(async () => {
    setIsFetching(true);
    try {
      const response = await axios.get(
        "https://codepath-store-api.herokuapp.com/store"
      );
      setProducts(response.data.products);
      console.log("received this data:", response.data.products);
    } catch (error) {
      console.log(error);
    } finally {
      setIsFetching(false);
    }
  }, []);

  return (
    <div className="app">
      <BrowserRouter>
        <main>
          <Navbar />
          <Sidebar
            id="sidenav"
            products={products}
            isOpen={isOpen}
            shoppingCart={shoppingCart}
          />
          <Routes>
            <Route
              path="/home"
              element={<Home products={products} shoppingCart={shoppingCart} />}
            />

            <Route
              path="/products/:productId"
              element={
                <ProductDetail
                  isFetching={isFetching}
                  setIsFetching={setIsFetching}
                  error={error}
                  setError={setError}
                  shoppingCart={shoppingCart}
                />
              }
            />

            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}
