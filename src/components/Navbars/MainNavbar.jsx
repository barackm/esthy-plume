import React, { Component } from "react";
import { IconContext } from "react-icons";
import { FaSearch } from "react-icons/fa";
class MainNavbar extends Component {
  state = {};
  render() {
    return (
      <div className="main-navbar-container">
        <div className="logo-container">
          <h4>LOGO</h4>
        </div>
        <div className="links">
          <ul>
            <li>
              <a href="#1">News</a>
            </li>
            <li>
              <a href="#2">Apropos</a>
            </li>
            <li>
              <a href="#3">Contact</a>
            </li>
          </ul>
        </div>
        <div className="search-container">
          <div className="search-wrapper">
            <input
              type="text"
              name="search"
              id=""
              placeholder="Rechercher..."
            />
            <div className="search-btn">
              <IconContext.Provider value={{ className: "search-icon" }}>
                <FaSearch />
              </IconContext.Provider>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MainNavbar;
