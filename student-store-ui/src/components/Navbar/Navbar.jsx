import * as React from "react";
import "./Navbar.css";
import Logo from "../Logo/Logo";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="items">
        <Logo />

        <NavLinks />
      </div>
    </nav>
  );
}
export function NavLinks() {
  return (
    <nav className="navlinks">
      <div>
        <Link to={"/"} className="nav-link">
          Home
        </Link>
        <Link to={"/#about"} className="nav-link">
          About us
        </Link>
        <Link to={"/#contact"} className="nav-link">
          Contact us
        </Link>
        <Link to={"/#buy"} className="nav-link">
          Buy Now
        </Link>
      </div>
    </nav>
  );
}
