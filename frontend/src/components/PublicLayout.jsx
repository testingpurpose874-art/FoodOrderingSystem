import React from 'react';
import { FaHome, FaSignInAlt, FaTruck, FaUserShield, FaUtensils } from "react-icons/fa";
import { Link } from "react-router-dom";
import "../assets/styles/layout.css";

const PublicLayout = ({children}) => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <Link className="navbar-brand font-weight-bold" to="#"><FaUtensils className="me-1" /> Food Ordering System</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item mx-1">
                <Link className="nav-link" to="#"><FaHome className="me-1" />Home</Link>
              </li>
              <li className="nav-item mx-1">
                <Link className="nav-link" to="#"><FaUtensils className="me-1" />Menu</Link>
              </li>
              <li className="nav-item mx-1">
                <Link className="nav-link" to="#"><FaTruck className="me-1" />Track</Link>
              </li>
              <li className="nav-item mx-1">
                <Link className="nav-link" to="/register"><FaSignInAlt className="me-1" />Register</Link>
              </li>
              <li className="nav-item mx-1">
                <Link className="nav-link" to="#"><FaSignInAlt className="me-1" />Login</Link>
              </li>
              <li className="nav-item mx-1">
                <Link className="nav-link" to="#"><FaUserShield className="me-1" />Admin</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div>{children}</div>

      <footer className="text-center py-3 mt-5">
        <div className="container">
          <p>&copy; 2026 Food Ordering System. All rights reserved</p>
        </div>
      </footer>
    </div>
  )
}

export default PublicLayout;