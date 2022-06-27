import * as React from "react";
import "./Hero.css";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <div className="hero">
      <div className = "item">
      <div className="intro">
        <h1> Welcome!</h1>
        <h1> Find your Merch!</h1>
        <h2>       
           We have all kinds of goodies. Click on any of the items to start
          filling up your shopping cart. Checkout whenever you're ready.
        </h2>
        </div>

        <div className="hero-img">
          {/* <Link to="/">
            {
              <img src="https://codepath-student-store-demo.surge.sh/assets/student_store_icon.18e5d61a.svg" />
            }{" "}
          </Link>{" "} */}
        </div>
      </div>
    </div>
  );
}
