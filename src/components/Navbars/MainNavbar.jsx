import React, { Component } from "react";

import { IconContext } from "react-icons";
import { FaSearch, FaUser } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import { Link } from "react-router-dom";
import { AiOutlineDashboard } from "react-icons/ai";

import mike from "../../assets/img/mike.jpg";

class MainNavbar extends Component {
  constructor(props) {
    super(props);
    this.hamburgerRef = React.createRef();
    this.navbarRef = React.createRef();
  }
  state = {
    profileOptionsOpen: false,
    searchQuery: "",
    isNavbarOpen: false,
  };
  handleSearch = (e) => {
    this.setState({ searchQuery: e.target.value });
    this.handleCloseNav();
  };
  handleToggleProfileOptions = () => {
    this.setState({ profileOptionsOpen: !this.state.profileOptionsOpen });
  };
  handleSubmit = () => {
    if (this.state.searchQuery.trim().value === 0) return;
    this.props.onSearch(this.state.searchQuery);
    this.handleCloseNav();
  };
  handleCloseOptions = () => {
    this.handleCloseNav();
    this.setState({ profileOptionsOpen: false });
  };
  handleOpenNavbar = () => {
    this.hamburgerRef.current.classList.toggle("toggled");
    this.navbarRef.current.classList.toggle("open");
  };
  handleCloseNav = () => {
    this.hamburgerRef.current.classList.remove("toggled");
    this.navbarRef.current.classList.remove("open");
  };
  render() {
    const { profileOptionsOpen } = this.state;
    const { searchValue, onSearch, onSubmitSearch } = this.props;

    return (
      <div className="main-navbar-container" ref={this.navbarRef}>
        <div className="header-controls">
          <Link to="/" className="logo-container" onClick={this.handleCloseNav}>
            <img src={require("../../assets/img/logo-esthy.png")} alt="" />
          </Link>
          <div
            className="hamberger-container"
            ref={this.hamburgerRef}
            onClick={this.handleOpenNavbar}
          >
            <div className="burger"></div>
          </div>
        </div>

        <div className="links-container">
          <div className="links">
            <ul>
              <li>
                <Link to="/" onClick={this.handleOpenNavbar}>
                  News
                </Link>
              </li>
              <li>
                <Link to="/about" onClick={this.handleOpenNavbar}>
                  Apropos
                </Link>
              </li>
              <li>
                <Link to="/contact" onClick={this.handleOpenNavbar}>
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
