import React, { Component } from "react";
import { IconContext } from "react-icons";
import { FaChevronRight } from "react-icons/fa";
import PopularPost from "../components/common/PopularPost";

class Footer extends Component {
  state = {};
  render() {
    const posts = [
      { id: 1, title: "" },
      { id: 2, title: "" },
      { id: 3, title: "" },
    ];
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
    return (
      <div className="footer-main-container" id="footer">
        <div className="header-line"></div>
        <div className="main-container">
          <div className="footer-posts">
            <div className="left-posts-area">
              <div className="left-header">
                <span>Recentes publications</span>
              </div>
              <div className="posts-container">
                {posts.map((post) => (
                  <PopularPost page="footer" key={post.id} />
                ))}
              </div>
            </div>
            <div className="footer-categories-area">
              <div className="left-header">Categories</div>
              <div className="categories-wrapper">
                {categories.map((category) => (
                  <div className="footer-category-item" key={category.id}>
                    <div className="category-name">
                      <IconContext.Provider
                        value={{ className: "footer-chevron-icon" }}
                      >
                        <FaChevronRight />
                      </IconContext.Provider>
                      {category.name}
                    </div>
                    <div className="posts-size">
                      <span>10</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="right-posts-area">
              <div className="left-header">Recentes en Culture</div>
              <div className="posts-container">
                {posts.map((post) => (
                  <PopularPost page="footer" key={post.id} />
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="footer-links">
          <div className="footer-credentials">
            <span>
              copyright {new Date().getFullYear()} Esthy Plume | Powered by{" "}
              <a
                href="http://fidbagraphics.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Fidba Graphics
              </a>
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
