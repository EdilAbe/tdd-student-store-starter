import * as React from "react";
import Navbar from "/src/components/Navbar/Navbar";
import Sidebar from "/src/components/Sidebar/Sidebar";
import Home from "/src/components/Home/Home";
import Hero from "/src/components/Hero/Hero";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "/src/components/NotFound/Notfound";
import ProductDetail from "/src/components/ProductDetail/ProductDetail";
import axios from "axios";
import Footer from "/src/components/Footer/Footer";

export default function App() {
  const [isFetching, setIsFetching] = React.useState();
  const [products, setProducts] = React.useState([]);
  const [isOpen, setIsOpen] = React.useState("");
  // const [error, setError] = React.useState("");
  const [shoppingCart, setShoppingCart] = React.useState([]);
  const [checkoutForm, setCheckoutForm] = React.useState("");

  function handleOnToggle() {
    setIsOpen(!isOpen);
  }

  const handleAddItemToCart = (productId) => {
    for (var i = 0; i < shoppingCart.length; i++) {
      /* write code here */
    }
  };

  const handleRemoveItemFromCart = (productId) => {
    for (var i = 0; i < shoppingCart.length; i++) {
      /* write code here */
    }
  };

  function handleOnCheckoutFormChange(name, value) {
    setCheckoutForm([name, value]);
  }

  //function handleOnSubmitCheckoutForm() {}

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
            // products={products}
            isOpen={isOpen}
            shoppingCart={shoppingCart}
            checkoutForm={checkoutForm}
            handleOnCheckoutFormChange={handleOnCheckoutFormChange}
            handleOnToggle={handleOnToggle}
          />
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  products={products}
                  shoppingCart={shoppingCart}
                  handleAddItemToCart={handleAddItemToCart}
                  handleRemoveItemFromCart={handleRemoveItemFromCart}
                />
              }
            />

            <Route
              path="/products/:productId"
              element={
                <ProductDetail
                  isFetching={isFetching}
                  setIsFetching={setIsFetching}
                  // error={error}
                  // setError={setError}
                  shoppingCart={shoppingCart}
                  handleAddItemToCart={handleAddItemToCart}
                  handleRemoveItemFromCart={handleRemoveItemFromCart}
                />
              }
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </main>
      </BrowserRouter>
    </div>
  );
}
