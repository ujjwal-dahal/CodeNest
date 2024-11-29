import { NavLink, useNavigate, useLocation } from "react-router-dom";
import "../NavBar/Navbar.scss";
import { FaSun, FaMoon } from "react-icons/fa";
import { useState, useEffect } from "react";
import Sorting from "../Sorting/Sorting";

function Navbar({ isLogin, setIsLogin, isDark, setIsDark, isAscending, setIsAscending, isClickedOrder, setIsClickedOrder }) {
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    setIsLogin(false); 
    navigate("/"); 
  };
  
  const handleMode = () => {
    setIsDark(!isDark);
    localStorage.setItem("darkMode", JSON.stringify(!isDark));
  };

  const navigateToLogin = () => {
    navigate("/signup");
  };

  
  const isCountryPage = location.pathname === "/country";

  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li>
          <NavLink to="/" className={(e) => (e.isActive ? "active-link" : null)}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" className={(e) => (e.isActive ? "active-link" : null)}>
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/services" className={(e) => (e.isActive ? "active-link" : null)}>
            Services
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" className={(e) => (e.isActive ? "active-link" : null)}>
            Contact
          </NavLink>
        </li>
        <li>
          <NavLink to="/toolbox" className={(e) => (e.isActive ? "active-link" : null)}>
            Toolbox
          </NavLink>
        </li>
        <li>
          <NavLink to="/country" className={(e) => (e.isActive ? "active-link" : null)}>
            Country Details
          </NavLink>
        </li>
        {isLogin ? (
          <li>
            <button className="login-link" onClick={handleLogout}>
              Logout
            </button>
          </li>
        ) : (
          <>
            <li>
              <button className="signup-link" onClick={navigateToLogin}>
                Signup
              </button>
            </li>
            <li>
              <button className="login-link" onClick={() => navigate("/login")}>
                Login
              </button>
            </li>
          </>
        )}
      </ul>
      {isCountryPage && (
        <>
          <Sorting 
            isAscending={isAscending} 
            setIsAscending={setIsAscending} 
            isClickedOrder={isClickedOrder} 
            setIsClickedOrder={setIsClickedOrder} 
          />
          <button className="dark-mode-btn" onClick={handleMode}>
            {isDark ? <FaSun className="icon-size" /> : <FaMoon className="icon-size" />}
            {isDark ? "Light Mode" : "Dark Mode"}
          </button>
        </>
      )}
    </nav>
  );
}

export default Navbar;
