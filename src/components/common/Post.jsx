import React, { Component } from "react";
import { IconContext } from "react-icons";
import { BsArrowRight } from "react-icons/bs";
import { FaUser } from "react-icons/fa";
import { RiTimeLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import truncatedStr from "../../utils/truncatedStr";

import img from "../../assets/img/9.jpg";

class Post extends Component {
  state = {};
  render() {
    return (
      <div className="post-main-container">
        <div className="left-area">
          <div className="article-images-wrapper">
            <div className="over-lay"></div>
            <span className="article-category">Culture</span>
            <div className="image">
              <img src={img} alt="" />
            </div>
          </div>
        </div>
        <div className="article-main-details">
          <h3 className="title">10 Essential Rules of Good Health</h3>
          <div className="details">
            <IconContext.Provider
              value={{ className: "main-article-user-icon" }}
            >
              <FaUser />
            </IconContext.Provider>
            <span>Sarah Mendelieve</span>

            <div className="details-timing">
              <IconContext.Provider
                value={{ className: "main-article-time-icon" }}
              >
                <RiTimeLine />
              </IconContext.Provider>
              <span>Mars 07,2020</span>
            </div>
          </div>
          <div className="body">
            <p>
              {truncatedStr(
                "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur nulla ea quo cum, reprehenderit, rem architecto similique harum voluptatibus accusantium iure recusandae saepe. Est culpa minus maxime sapiente earum non.",
                80
              )}
            </p>

            <Link to="news/1" className="read-more-btn">
              <span>Voir plus</span>
              <IconContext.Provider
                value={{ className: "main-article-arrow-icon" }}
              >
                <BsArrowRight />
              </IconContext.Provider>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Post;
