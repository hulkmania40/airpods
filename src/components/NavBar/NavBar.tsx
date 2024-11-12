import React from "react";
import "./NavBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faApple } from "@fortawesome/free-brands-svg-icons";
import { faBagShopping, faSearch } from "@fortawesome/free-solid-svg-icons";

const NavBar: React.FC = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item">
          <FontAwesomeIcon size={"lg"} icon={faApple} />
        </li>
        <li className="navbar-item">Store</li>
        <li className="navbar-item">Mac</li>
        <li className="navbar-item">iPad</li>
        <li className="navbar-item">iPhone</li>
        <li className="navbar-item">Watch</li>
        <li className="navbar-item">Airpods</li>
        <li className="navbar-item">TV & Home</li>
        <li className="navbar-item">Entertainment</li>
        <li className="navbar-item">Accessories</li>
        <li className="navbar-item">Support</li>
        <li className="navbar-item">
          <FontAwesomeIcon icon={faSearch} />
        </li>
        <li className="navbar-item">
          <FontAwesomeIcon icon={faBagShopping} />
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
