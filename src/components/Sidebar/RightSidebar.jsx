import PopularPost from "components/common/PopularPost";
import React, { Component } from "react";
import { IconContext } from "react-icons";
import {
  FaChevronRight,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";

class RightSidebar extends Component {
  state = {};
  render() {
    const categories = [
      {
        id: "1",
        name: "Culture",
      },
      {
        id: "2",
        name: "Politique",
      },
      {
        id: "3",
        name: "Agriculture",
      },
      {
        id: "4",
        name: "Enseignement",
      },
      {
        id: "5",
        name: "Culture",
      },
      {
        id: "6",
        name: "Culture",
      },
      {
        id: "7",
        name: "Culture",
      },
      {
        id: "8",
        name: "Innovation",
      },
    ];
    const popularPosts = [
      { id: 1, title: "", createdAt: "" },
      { id: 2, title: "", createdAt: "" },
      { id: 3, title: "", createdAt: "" },
      { id: 4, title: "", createdAt: "" },
    ];
    return (
      <div className="right-sidebar-main-container">
        <div className="categories-area">
          <div className="header">Categories</div>
          <div className="categories-container">
            {categories.map((category) => (
              <div className="category-item">
                <div className="icon-wrapper-category">
                  <IconContext.Provider
                    value={{ className: "category-sidebar-icon" }}
                  >
                    <FaChevronRight />
                  </IconContext.Provider>
                </div>
                <span>{category.name}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="popular-posts-area">
          <div className="header">Publications populaires</div>

          <div className="popular-post-container">
            {popularPosts.map((post) => (
              <PopularPost />
            ))}
          </div>
        </div>
        <div className="social-media-area">
          <div className="header">Suivez nous </div>
          <div className="links-container">
            <a className="single-link" href="#1">
              <IconContext.Provider
                value={{ className: "right-sidebar-facebook-icon" }}
              >
                <FaFacebookF />
              </IconContext.Provider>
            </a>
            <a className="single-link" href="#1">
              <IconContext.Provider
                value={{ className: "right-sidebar-facebook-icon" }}
              >
                <FaWhatsapp />
              </IconContext.Provider>
            </a>
            <a className="single-link" href="#1">
              <IconContext.Provider
                value={{ className: "right-sidebar-facebook-icon" }}
              >
                <FaTwitter />
              </IconContext.Provider>
            </a>
            <a className="single-link" href="#1">
              <IconContext.Provider
                value={{ className: "right-sidebar-facebook-icon" }}
              >
                <FaInstagram />
              </IconContext.Provider>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default RightSidebar;
