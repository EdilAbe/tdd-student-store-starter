import * as React from "react";
import "./Navbar.css";
import Logo from "../Logo/Logo";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <Logo />
      </div>
      <div>
        <NavLinks />
      </div>
    </nav>
  );
}
export function NavLinks() {
  return (
    <nav className="navLinks">
      <div>
        <Link to={"/"} className="singleNavLink">
          Home
        </Link>
        <Link to={"/#about"} className="singleNavLink">
          About us
        </Link>
        <Link to={"/#contact"} className="singleNavLink">
          Contact us
        </Link>
        <Link to={"/#buy"} className="singleNavLink">
          Buy Now
        </Link>
      </div>
    </nav>
  );
}
