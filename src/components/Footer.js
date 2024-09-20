import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    
    <footer className="bg-lightblue text-dark mt-5">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
          </div>
          <div className="col-md-4">
            <section>
              <ul className="list-unstyled d-flex justify-content-center mb-2">
                <li className="mx-2">
                  <Link to="/" className="text-decoration-none fs-4 text-dark">Home</Link>
                </li>
                <li className="mx-2">
                  <Link to="/products" className="text-decoration-none  fs-4 text-dark">Products</Link>
                </li>
                <li className="mx-2">
                  <Link to="/cart" className="text-decoration-none fs-4 text-dark">Cart</Link>
                </li>
              </ul>
            </section>
            <div className="icons d-flex justify-content-center">
              <span className="mx-2">
                <a href="/" className="text-dark">
                  <i className="fab fa-facebook-square"></i>
                </a>
              </span>
              <span className="mx-2">
                <a href="/" className="text-dark">
                  <i className="fab fa-instagram"></i>
                </a>
              </span>
              <span className="mx-2">
                <a href="/" className="text-dark">
                  <i className="fab fa-pinterest"></i>
                </a>
              </span>
              <span className="mx-2">
                <a href="/" className="text-dark">
                  <i className="fab fa-twitter"></i>
                </a>
              </span>
            </div>
          </div>
        </div>

       
      </div>
    </footer>
  );
};

export default Footer;