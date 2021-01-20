import React, { Component } from "react";

import { IconContext } from "react-icons";
import { FaSearch, FaUser } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import { Link } from "react-router-dom";
import { AiOutlineClose, AiOutlineDashboard } from "react-icons/ai";
import { RiMenu3Line } from "react-icons/ri";

import mike from "assets/img/mike.jpg";

class MainNavbar extends Component {
  state = {
    profileOptionsOpen: false,
    searchQuery: "",
  };
  handleSearch = (e) => {
    this.setState({ searchQuery: e.target.value });
    this.props.onCloseNavbar();
  };
  handleToggleProfileOptions = () => {
    this.setState({ profileOptionsOpen: !this.state.profileOptionsOpen });
  };
  handleSubmit = () => {
    if (this.state.searchQuery.trim().value === 0) return;
    this.props.onSearch(this.state.searchQuery);
    this.props.onCloseNavbar();
  };
  handleCloseOptions = () => {
    this.props.onCloseNavbar();
    this.setState({ profileOptionsOpen: false });
  };
  render() {
    const { profileOptionsOpen } = this.state;
    const {
      searchValue,
      onSearch,
      onSubmitSearch,
      isNavbarOpen,
      onOpenNavbar,
      onCloseNavbar,
    } = this.props;

    return (
      <div
        className={
          isNavbarOpen ? "main-navbar-container open" : "main-navbar-container"
        }
      >
        <div className="header-controls">
          <Link to="/" className="logo-container">
            <img
              src={require("../../assets/img/logo-esthy.png")}
              alt=""
              srcset=""
            />
          </Link>
          <div className="hamberger-container" onClick={onOpenNavbar}>
            <IconContext.Provider value={{ className: "hamberger" }}>
              {isNavbarOpen ? <AiOutlineClose /> : <RiMenu3Line />}
            </IconContext.Provider>
          </div>
        </div>

        <div className="links-container">
          <div className="links">
            <ul>
              <li>
                <Link to="/" onClick={onCloseNavbar}>
                  News
                </Link>
              </li>
              <li>
                <Link to="/about" onClick={onCloseNavbar}>
                  Apropos
                </Link>
              </li>
              <li>
                <Link to="/contact" onClick={onCloseNavbar}>
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="search-container">
            <div className="search-wrapper">
              <input
                type="text"
                name="searchQuery"
                placeholder="Rechercher..."
                onChange={onSearch}
                value={searchValue}
              />
              <div className="search-btn" onClick={onSubmitSearch}>
                <IconContext.Provider value={{ className: "search-icon" }}>
                  <FaSearch />
                </IconContext.Provider>
              </div>
            </div>
          </div>
          <div className="navbar-auth-area">
            {/* <Link
              to="/login"
              className="login-btn-wrapper"
              onClick={onCloseNavbar}
            >
              <span>Se connecter</span>
            </Link> */}
            <div
              className={
                profileOptionsOpen ? "authenticated open" : "authenticated"
              }
              onClick={this.handleToggleProfileOptions}
            >
              <span>En ligne</span>
              <div className="profile-image">
                <img src={mike} alt="" />
              </div>
            </div>
            {profileOptionsOpen && (
              <div className="auth-options">
                <ul>
                  <li>
                    <Link to="/profile/1" onClick={this.handleCloseOptions}>
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
                      onClick={this.handleCloseOptions}
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
                    <Link to="/login" onClick={this.handleCloseOptions}>
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
      </div>
    );
  }
}

export default MainNavbar;
