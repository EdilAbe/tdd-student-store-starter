import * as React from "react"
import "./Navbar.css"
//import {} from "react-router-dom"
//import Logo from

export default function Navbar() {
  return (
    <nav className="navbar">
      <p>Navbar</p>
      <div>

      </div>
    </nav>
  )
}
 export function NavLinks(){
  return(
    <nav className = "navlinks">
      <div> 
        <Link to ={"/Home"} className = "nav-link" >Home</Link>
        <Link to ={"/About"} className = "nav-link" >Home</Link>
        <Link to ={"/Contact"} className = "nav-link" >Home</Link>
        <Link to ={"/Buy"} className = "nav-link" >Home</Link>
      </div>
    </nav>
  )
 }