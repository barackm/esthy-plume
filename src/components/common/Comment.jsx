import React, { Component } from "react";

import profile from "assets/img/mike.jpg";
import { Link } from "react-router-dom";

class Comment extends Component {
  state = {};
  render() {
    return (
      <div className="comment-main-container">
        <div className="author-profile">
          <div className="image-wrapper">
            <img src={profile} alt="" srcset="" />
          </div>
        </div>
        <div className="comment-details">
          <div className="details">
            <div className="comment-author">
              <Link to="/">Sora Blogging Tips</Link>
            </div>
            <div className="comment-history">
              <span>April 11, 2020 at 6:37 AM</span>
            </div>
          </div>
          <div className="comment-line"></div>
          <div className="comment-body">
            This Is Second Testing Comment Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Magnam cupiditate aspernatur eos
            possimus aperiam fuga asperiores error adipisci ipsum reprehenderit
            minus accusantium non veritatis rem iusto, aut natus fugiat quis.
          </div>
          <div className="comment-controls">
            <div className="delete-comment">Effacer commentaire</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Comment;
