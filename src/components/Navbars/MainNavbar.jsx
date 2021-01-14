import React, { Component } from "react";

import { IconContext } from "react-icons";
import { FaSearch, FaUser } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import { Link } from "react-router-dom";
import { AiOutlineDashboard } from "react-icons/ai";

import mike from "assets/img/mike.jpg";

class MainNavbar extends Component {
  state = {
    profileOptionsOpen: false,
  };
  handleToggleProfileOptions = () => {
    this.setState({ profileOptionsOpen: !this.state.profileOptionsOpen });
  };
  render() {
    const { profileOptionsOpen } = this.state;
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
        <div className="navbar-auth-area">
          {/* <div className="login-btn-wrapper">
            <span>Se connecter</span>
          </div> */}
          <div
            className="authenticated"
            onClick={this.handleToggleProfileOptions}
          >
            <span>En ligne</span>
            <div className="profile-image">
              <img src={mike} alt="" srcset="" />
            </div>
          </div>
          {profileOptionsOpen && (
            <div className="auth-options">
              <ul>
                <li>
                  <Link
                    to="/profile/1"
                    onClick={this.handleToggleProfileOptions}
                  >
                    <IconContext.Provider
                      value={{ className: "navbar-icon-user" }}
                    >
                      <FaUser />
                    </IconContext.Provider>{" "}
                    Voir profile
                  </Link>
                </li>
                <li>
                  <Link
                    to="/admin/dashboard"
                    onClick={this.handleToggleProfileOptions}
                  >
                    <IconContext.Provider
                      value={{ className: "navbar-icon-user" }}
                    >
                      <AiOutlineDashboard />
                    </IconContext.Provider>{" "}
                    Dashboard
                  </Link>
                </li>
                <li>
                  <Link to="/" onClick={this.handleToggleProfileOptions}>
                    {" "}
                    <IconContext.Provider
                      value={{ className: "navbar-icon-user" }}
                    >
                      <FiLogOut />
                    </IconContext.Provider>{" "}
                    Se deconnecter
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default MainNavbar;
