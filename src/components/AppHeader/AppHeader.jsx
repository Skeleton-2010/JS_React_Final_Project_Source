import { React } from "react";
import { Link } from "react-router-dom";
import "./AppHeader.css";

export const AppHeader = () => {
  return (
    <header className="app-header-main">
      <img src="/img/ForecastLogo.png" alt="logo" className="header-logo" />
      <nav className="header-nav">
        <Link to="/about" className="nav-link">
          Who are we
        </Link>
        <Link to="/contacts" className="nav-link">
          Contacts
        </Link>
        <Link to="/home" className="nav-link">
          Home
        </Link>
      </nav>
      <div className="header-user-main">
        <Link to="/signup">
          <button className="user-signup-btn fc-btn">Sign Up</button>
        </Link>
        <img src="/img/ManIcon.png" alt="icon" className="user-icon-img" />
      </div>
    </header>
  );
};
