import React from "react";
import { Link } from "react-router-dom";
import "./Header.css"; // Add styles in this file
import { FaHome, FaUsers, FaUserShield, FaKey } from "react-icons/fa";

const Header = () => {
  return (
    <header className="header">
      <div className="header-title">Admin Panel</div>
      <nav>
        <ul className="header-nav">
          <li>
            <Link to="/">
              <FaHome /> Dashboard
            </Link>
          </li>
          <li>
            <Link to="/users">
              <FaUsers /> Users
            </Link>
          </li>
          <li>
            <Link to="/roles">
              <FaUserShield /> Roles
            </Link>
          </li>
          <li>
            <Link to="/permissions">
              <FaKey /> Permissions
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
