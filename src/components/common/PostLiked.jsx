import React, { Component } from "react";
import { Link } from "react-router-dom";
import { IconContext } from "react-icons";
import { RiTimeLine } from "react-icons/ri";
import image from "../../assets/img/1.jpg";

class PostLiked extends Component {
  state = {};
  render() {
    return (
      <Link className="post-liked-main-container" to="/">
        <div className="header">
          <div className="image-wrapper">
            <div className="overlay"></div>
            <img src={image} alt="" />
          </div>
        </div>
        <div className="liked-posts-details-wrapper">
          <div className="category">
            <span>Culture</span>
          </div>
          <div className="post-title">
            8 Yoga Poses You Can Do in Your Desk Chair
          </div>

          <div className="details-timing">
            <IconContext.Provider
              value={{ className: "main-article-time-icon" }}
            >
              <RiTimeLine />
            </IconContext.Provider>
            <span>Mars 07,2020</span>
          </div>
        </div>
      </Link>
    );
  }
}

export default PostLiked;
