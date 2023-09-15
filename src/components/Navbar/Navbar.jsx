import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineRestaurantMenu } from "react-icons/md";

import images from "../../constants/images";

import "./Navbar.css";

const Navbar = () => (
  <nav className="app__navbar">
    <div className="app__navbar-logo">
      <img src={images.gericht} alt="app logo" />
    </div>
    <ul className="app__navbar-links">
      <li className="p__opensans">
        <a href="#home">Home</a>
      </li>
      <li className="p__opensans">
        <a href="#pages">Pages</a>
      </li>
      <li className="p__opensans">
        <a href="#contact">Contact</a>
      </li>
      <li className="p__opensans">
        <a href="#blog">Blog</a>
      </li>
      <li className="p__opensans">
        <a href="#landing">Landing</a>
      </li>
    </ul>
    <div className="app__navbar-login">
      <a href="#" className="p__opensans">
        Login/Register
      </a>
      <a href="/" className="p__opensans">
        Book Table
      </a>
    </div>
  </nav>
);

export default Navbar;
