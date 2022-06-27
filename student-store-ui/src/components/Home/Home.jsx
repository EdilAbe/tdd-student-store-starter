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
  shoppingCart,

}) {
  return (
    <div className="home">
      <Hero />
      {/* <Searchbar className  = "Searchbar"/>
      <CategoryFilterBar className = "categoryFilterBar" /> */}
      <div className="main-content">
        <div className="product-area">
          
          <ProductGrid
            products={products}
             shoppingCart={shoppingCart}
             handleAddItemToCart={handleAddItemToCart}
            handleRemoveItemToCart={handleRemoveItemToCart}
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

export function Searchbar() {
  return (
    <div  className="search-bar">
      <input type="text" id="searchbox-input" className="search-input"> placeholder="Search"</input>
      <i className = "material-icons">search</i>
  

     <div className = "links">
     <span className = "help">
      <i className = "material-icons">help</i>
        help
        </span>
    
     <div className = "cart">
     <a href = "/">
     <i className = "material-icons">shopping_cart</i>
     
     </a>
   </div> 
   </div>
   </div>
  );
}

export function CategoryFilterBar() {
  return (
    <div className="category-filter-bar">
      <CategoryFilter />
       <div class="row">
        <div class="hamburger-menu">
        <i class="material-icons">menu</i>
        </div>
        <ul class="category-menu open">
          <li class="is-active">
          <button>All Categories</button></li>
          <li class="">
            <button>Clothing</button></li>
            <li class="">
              <button>Food</button></li>
              <li class="">
                <button>Accessories</button>
                </li>
                <li class=""><button>Tech</button>
                </li>
                </ul></div> 
    </div>
  );
}

export function CategoryFilter(props) {
  return <button className="buttonClassName">{props.label}</button>;
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
        <div className="contactUsGridItem">
          <div className="contactGridItem">Email</div>
          <div className="contactGridItem">code@path.org</div>
          <div className="contactGridItem">Phone</div>
          <div className="contactGridItem">1-800-CODEPATH</div>
          <div className="contactGridItem">Address</div>
          <div className="contactGridItem">
            123 Fake Street, San Francisco, CA
          </div>
          {/* <div className="media"><img src ="https://codepath-student-store-demo.surge.sh/assets/happy_person.517b658d.svg"/></div> */}
        </div>
      </div>
    </div>
  );
}
