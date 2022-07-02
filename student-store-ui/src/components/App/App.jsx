import * as React from "react";
import Navbar from "/src/components/Navbar/Navbar";
import Sidebar from "/src/components/Sidebar/Sidebar";
import Home from "/src/components/Home/Home";
//import Hero from "/src/components/Hero/Hero";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "/src/components/NotFound/Notfound";
import ProductDetail from "/src/components/ProductDetail/ProductDetail";
import axios from "axios";
import Footer from "/src/components/Footer/Footer";
import { useState, useEffect } from "react";

export default function App() {
  const [isFetching, setIsFetching] = useState();
  const [products, setProducts] = useState([]);
  const [isOpen, setIsOpen] = useState("");
  const [error, setError] = useState("");
  const [shoppingCart, setShoppingCart] = useState([]);
  const [checkoutForm, setCheckoutForm] = useState({
    name: "",
    email: "",
  });

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [receipt, setReceipt] = useState([]);

  async function getResults() {
    setError("");
    setIsFetching(true);
    try {
      const response = await axios.get("http://localhost:3001/store");
      setProducts(response.data.products);
      console.log("received this data:", response.data.products);
    } catch (error) {
      console.log(error);
    } finally {
      setIsFetching(false);
    }
  }

  useEffect(() => {
    getResults();
  }, []);

  function handleOnToggle() {
    setIsOpen(!isOpen);
  }

  const handleAddItemToCart = (productId) => {
    for (let i = 0; i < shoppingCart.length; i++) {
      if (shoppingCart[i].productId === productId) {
        shoppingCart[i].quantity++;
        setShoppingCart([...shoppingCart]);
        return;
      }
    }
  };

  const handleRemoveItemFromCart = (productId) => {
    for (var i = 0; i < shoppingCart.length; i++) {
      if (shoppingCart[i].productId === productId) {
        if (shoppingCart[i].quantity === 1) {
          shoppingCart.splice(i, 1);
        } else {
          shoppingCart[i].quantity--;
        }
        setShoppingCartPrice(shoppingCartPrice - price);
        setShoppingCart([...shoppingCart]);
        return;
      }
    }
  };

  function handleOnCheckoutFormChange(name, value) {
    setCheckoutForm({
      ...checkoutForm,
      [name]: value,
    });
  }
  const listOfShoppingCart = () => {
    return shoppingCart.map((item) => {
      return {
        itemId: item.productId,
        quantity: item.quantity,
      };
    });
  };
  const handleOnSubmitCheckoutForm = async (evt) => {
    evt.preventDefault();
    try {
      const response = await axios.post("http://localhost:3001/store", {
        user: checkoutForm,
        shoppingCart: listOfShoppingCart,
      });
      setReceipt(response.data.purchase.receipt);
      console.log(receipt);
    } catch (err) {
      console.log(err);
    }
  };

  const selectedProducts = products.filter((item) => {
    try {
      if (
        item.name.toLowerCase().match(searchQuery) !== null &&
        (selectedCategory === "All Catergories" ||
          selectedCategory === item.category)
      ) {
        return true;
      } else {
        return false;
      }
    } catch {
      return false;
    }
  });

  return (
    <div className="app">
      <BrowserRouter>
        <main>
          <Navbar />
          <Sidebar
            products={products}
            isOpen={isOpen}
            shoppingCart={shoppingCart}
            checkoutForm={checkoutForm}
            handleOnCheckoutFormChange={handleOnCheckoutFormChange}
            handleOnToggle={handleOnToggle}
            handleOnSubmitCheckoutForm={handleOnSubmitCheckoutForm}
            receipt={receipt}
          />
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  products={products}
                  setProducts={setProducts}
                  shoppingCart={shoppingCart}
                  selectedProducts={selectedProducts}
                  searchQuery={searchQuery}
                  setSearchQuery={setSearchQuery}
                  selectedCategory={selectedCategory}
                  setSelectedCategory={setSelectedCategory}
                  handleAddItemToCart={handleAddItemToCart}
                  handleRemoveItemFromCart={handleRemoveItemFromCart}
                />
              }
            />

            <Route
              path="/products/:productId"
              element={
                <ProductDetail
                  products={products}
                  isFetching={isFetching}
                  setIsFetching={setIsFetching}
                  // error={error}
                  setError={setError}
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
