import React from 'react'
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
<nav className="navbar navbar-expand-lg bg-body-tertiary container d-flex justify-content-center">
  <div className="d-flex justify-content-center">
    <Link className="navbar-brand" to="/">Home</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <Link className="navbar-brand" aria-current="page" to="products">Products</Link>
        <Link className="navbar-brand" to="product">Product</Link>
        <Link className="navbar-brand" to="cart">Cart</Link>
      </div>
    </div>
  </div>
</nav>
  )
}

export default Navbar