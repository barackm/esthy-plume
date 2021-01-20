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
    const { categories, onChangeCategory, selectedCategory } = this.props;
    const popularPosts = [
      { id: 1, title: "", createdAt: "" },
      { id: 2, title: "", createdAt: "" },
      { id: 3, title: "", createdAt: "" },
      { id: 4, title: "", createdAt: "" },
    ];

    return (
      <div className="right-sidebar-main-container">
        <div className="component">
          <div className="categories-area">
            <div className="header">Categories</div>
            <div className="categories-container">
              {categories.map((category) => (
                <div
                  key={category.id}
                  className={
                    selectedCategory && selectedCategory.id === category.id
                      ? "category-item active"
                      : "category-item"
                  }
                  onClick={() => onChangeCategory(category)}
                >
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
                <PopularPost key={post.id} />
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
      </div>
    );
  }
}

export default RightSidebar;
