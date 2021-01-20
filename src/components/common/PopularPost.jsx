import React, { Component } from "react";
import { IconContext } from "react-icons";
import { BsClock } from "react-icons/bs";
import { Link } from "react-router-dom";
import truncatedStr from "utils/truncatedStr";

import img1 from "../../assets/img/bg5.jpg";

class PopularPost extends Component {
  state = {};
  render() {
    const { page } = this.props;
    return (
      <Link to="/news/1" className="popular-post-main-container">
        <div className="image-wrapper">
          <div className="img">
            <img src={img1} alt="" />
          </div>
        </div>
        <div className="article-details">
          <span className="article-title" style={{ color: page && "#fff" }}>
            {truncatedStr(
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus placeat amet eaque eum sit dolor reiciendis cumque cupiditate accusantium, mollitia nesciunt esse illo sed officiis facilis. Inventore corrupti commodi sunt optio vitae, voluptatibus unde quidem consequuntur, blanditiis voluptas saepe? Ipsa!",
              40
            )}
          </span>
          <div className="article-timing">
            <IconContext.Provider
              value={{
                className: "article-clock-icon",
                color: page && "#ebebeb",
              }}
            >
              <BsClock />
            </IconContext.Provider>
            <span style={{ color: page && "#ebebeb" }}>Mars 17, 2020</span>
          </div>
        </div>
      </Link>
    );
  }
}

export default PopularPost;
