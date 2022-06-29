import * as React from "react";
import "./Home.css";
import Hero from "/src/components/Hero/Hero";
import ProductGrid from "../ProductGrid/ProductGrid";
//import ShoppingCart from "../ShoppingCart/ShoppingCart";
("/src/components/ProductGrid/ProductGrid");
import { Link } from "react-router-dom";

export default function Home({
  products,
  handleAddItemToCart,
  handleRemoveItemToCart,
}) {
  return (
    <div className="home">
      <Hero />
      <div className="main-content">
        <SubNavbar />
        <CategoryFilterBar />
        <div className="product-area">
          <ProductGrid
            products={products}
            // shoppingCart={shoppingCart}
            // handleAddItemToCart={handleAddItemToCart}
            // handleRemoveItemFromCart={handleRemoveItemFromCart}
          />
        </div>
        <div ClassName="summmary">
          <AboutUs />
          <ContactUs />
        </div>
      </div>
    </div>
  );
}

export function CategoryFilterBar() {
  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.id);
  };
  return (
    <div className="category-filter">
      <ul className="category-filter-bar">
        <li className="is-active">
          <button id="all" onClick={handleCategoryChange}>
            All Categories
          </button>
        </li>
        <li className="is-active">
          <button id="clothing" onClick={handleCategoryChange}>
            Clothing
          </button>
        </li>
        <li className="is-active">
          <button id="food" onClick={handleCategoryChange}>
            Food
          </button>
        </li>
        <li className="is-active">
          <button id="accessories" onClick={handleCategoryChange}>
            Accessories
          </button>
        </li>
        <li className="is-active">
          <button id="tech" onClick={handleCategoryChange}>
            Tech
          </button>
        </li>
      </ul>
    </div>
  );
}

export function SubNavbar() {
  const handleOnTextChange = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <div className="subNavbar">
      <form className="search-bar">
        <input
          type="text"
          id="searchbox-input"
          placeholder="Search"
          onChange={handleOnTextChange}
        ></input>
        <i className="material-icons">search</i>
      </form>
      <div className="links">
        <span className="help">
          <i className="material-icons">help</i>Help
        </span>
        <div className="cart">
          <a href="#">
            My Cart<i className="material-icons">shopping_cart</i>
          </a>
        </div>
      </div>
    </div>
  );
}

export function AboutUs() {
  return (
    <div className="about">
      <h2 className="section-header">About</h2>
      <div className="about-body">
        <div className="about-text">
          <p>
            The codepath student store offers great products at great prices
            from a great team and for a great cause.
          </p>
          <p>
            We've searched far and wide for items that perk the interests of
            even the most eccentric students and decided to offer them all here
            in one place.
          </p>
          <p>
            All proceeds go towards bringing high quality CS education to
            college students around the country.
          </p>
        </div>
        <div className="about-img">
          <Link to="/">
            {
              <img src="https://codepath-student-store-demo.surge.sh/assets/codepath.f1b3e41a.svg" />
            }
          </Link>
        </div>
      </div>
    </div>
  );
}

export function ContactUs() {
  return (
    <div className="contact-us">
      <h2 className="section-header">Contact Us</h2>
      <div className="contactUsBody">
        <div className="contactUsGrid">
          <div className="contactGridItem">Email</div>
          <div className="contactGridItem">code@path.org</div>
          <div className="contactGridItem">Phone</div>
          <div className="contactGridItem">1-800-CODEPATH</div>
          <div className="contactGridItem">Address</div>
          <div className="contactGridItem">
            123 Fake Street, San Francisco, CA
          </div>
          <div className="contactGridItem">Socials</div>
          {/* <img src="https://codepath-student-store-demo.surge.sh/assets/happy_person.517b658d.svg" /> */}
        </div>
      </div>
    </div>
  );
}
