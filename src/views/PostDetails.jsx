import RightSidebar from "components/Sidebar/RightSidebar";
import React, { Component } from "react";
import { IconContext } from "react-icons";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";
import { RiTimeLine } from "react-icons/ri";
import { FaUser } from "react-icons/fa";
import { TiArrowForward } from "react-icons/ti";

import image from "assets/img/1.jpg";
import mark from "assets/img/mike.jpg";
import PostLiked from "components/common/PostLiked";
import Comment from "components/common/Comment";

class PostDetails extends Component {
  state = {};
  render() {
    const postLiked = [
      { id: 1, title: "" },
      { id: 2, title: "" },
      { id: 3, title: "" },
    ];
    const comments = [
      { id: 1, body: "" },
      { id: 2, body: "" },
      { id: 3, body: "" },
    ];
    return (
      <div className="post-details-main-styles">
        <Container className="post-details-main-area">
          <Row>
            <Col xs="8" className="post-details-left-area">
              <div className="header">
                <Link to="/">News</Link>{" "}
                <IconContext.Provider
                  value={{ className: "post-details-icon-chevron" }}
                >
                  <FaChevronRight />
                </IconContext.Provider>
                <Link to="/">Culture</Link>
                <IconContext.Provider
                  value={{ className: "post-details-icon-chevron" }}
                >
                  <FaChevronRight />
                </IconContext.Provider>
                <span>8 Yoga Poses You Can Do in Your Desk Chair</span>
                <div className="post-title-timing-area">
                  <div className="post-title">
                    8 Yoga Poses You Can Do in Your Desk Chair
                  </div>
                  <div className="details">
                    <IconContext.Provider
                      value={{ className: "main-article-user-icon" }}
                    >
                      <FaUser />
                    </IconContext.Provider>
                    <Link to="/">Sarah Mendelieve</Link>

                    <div className="details-timing">
                      <IconContext.Provider
                        value={{ className: "main-article-time-icon" }}
                      >
                        <RiTimeLine />
                      </IconContext.Provider>
                      <span>Mars 07,2020</span>
                      <Link to="/">
                        <IconContext.Provider
                          value={{ className: "post-details-icon-chevron" }}
                        >
                          <TiArrowForward />
                        </IconContext.Provider>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="post-details-line"></div>

              <div className="post-details-image-area">
                <div className="image-wrapper">
                  <img src={image} alt="" srcset="" />
                </div>
              </div>

              <div className="post-details-body-area">
                <div className="first">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
                  pariatur nulla laborum molestiae vero blanditiis repellat,
                  illo placeat praesentium itaque eum? Quaerat error quia vel
                  ipsa! Explicabo fugit id eius, voluptatem obcaecati sit,
                  ullam,
                </div>
                <div className="second">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
                  pariatur nulla laborum molestiae vero blanditiis repellat,
                  illo placeat praesentium itaque eum? Quaerat error quia vel
                  ipsa! Explicabo fugit id eius, voluptatem obcaecati sit,
                  ullam,Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quas pariatur nulla laborum molestiae vero blanditiis
                  repellat, illo placeat praesentium itaque eum? Quaerat error
                  quia vel ipsa! Explicabo fugit id eius, voluptatem obcaecati
                  sit, ullam, <br />
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
                  pariatur nulla laborum molestiae vero blanditiis repellat,
                  illo placeat praesentium itaque eum? Quaerat error quia vel
                  ipsa! Explicabo fugit id eius, voluptatem obcaecati sit,
                  ullam,Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quas pariatur nulla laborum molestiae vero blanditiis
                  repellat, illo placeat praesentium itaque eum? Quaerat error
                  quia vel ipsa! Explicabo fugit id eius, voluptatem obcaecati
                  sit, ullam,
                </div>
                <div className="second">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
                  pariatur nulla laborum molestiae vero blanditiis repellat,
                  illo placeat praesentium itaque eum? Quaerat error quia vel
                  ipsa! Explicabo fugit id eius, voluptatem obcaecati sit,
                  ullam,Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quas pariatur nulla laborum molestiae vero blanditiis
                  repellat, illo placeat praesentium itaque eum? Quaerat error
                  quia vel ipsa! Explicabo fugit id eius, voluptatem obcaecati
                  sit, ullam, <br />
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
                  pariatur nulla laborum molestiae vero blanditiis repellat,
                  illo placeat praesentium itaque eum? Quaerat error quia vel
                  ipsa! Explicabo fugit id eius, voluptatem obcaecati sit,
                  ullam,Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quas pariatur nulla laborum molestiae vero blanditiis
                  repellat, illo placeat praesentium itaque eum? Quaerat error
                  quia vel ipsa! Explicabo fugit id eius, voluptatem obcaecati
                  sit, ullam,
                </div>
              </div>
              <div className="category-details">
                <div className="category">category</div>
                <Link>Culture</Link>
              </div>
              <div className="post-commands">
                <Link className="older-post">
                  <div className="old">
                    <IconContext.Provider
                      value={{ className: "post-details-chevron-icon" }}
                    >
                      <FaChevronLeft />
                    </IconContext.Provider>
                    <span>Ancien artircle</span>
                  </div>
                  <div className="last-post-title">
                    10 Foods That Promote Weight Loss Sora Blogging Tips
                  </div>
                </Link>
                <Link className="newer-post">
                  <div className="newer">
                    <span>Nouvel article</span>
                    <IconContext.Provider
                      value={{ className: "post-details-chevron-icon" }}
                    >
                      <FaChevronRight />
                    </IconContext.Provider>
                  </div>
                  <div className="newer-post-title">
                    8 Yoga Poses You Can Do in Your Desk Chair
                  </div>
                </Link>
              </div>

              <div className="post-you-may-like-area">
                <div className="header">
                  Les publications que vous pourriez aimer
                </div>
                <div className="post-you-may-like-container">
                  {postLiked.map((post) => (
                    <PostLiked />
                  ))}
                </div>
              </div>
              <div className="post-comments-area">
                <div className="header">Ajouter un commentaire</div>

                <div className="number-of-comments-area">
                  <span>3 Commentaires</span>
                </div>

                <div className="comments-container-area">
                  {comments.map((comment) => (
                    <Comment />
                  ))}
                </div>

                <div className="add-comment-area">
                  <div className="left-side">
                    <div className="logo">
                      <div className="image-wrapper">
                        <img src={mark} alt="" srcset="" />
                      </div>
                    </div>
                  </div>
                  <div className="right-side">
                    <div className="comment-header">
                      <div className="comment-author">
                        <div className="name">
                          Commenter entant que: <span>Sora Bloging Tips</span>
                        </div>
                      </div>
                      <div className="logout-btn">Se Deconnecter</div>
                    </div>
                    <div className="comment-area">
                      <textarea
                        name="comment"
                        id=""
                        cols="30"
                        rows="10"
                        placeholder="Ajouter un commentaire..."
                      ></textarea>
                    </div>
                  </div>
                </div>
              </div>
              <div className="publish-comment-area">
                <div className="notify-area">
                  <div className="check-box"></div>
                  <span>Me notifier</span>
                </div>
                <div className="publish-area">
                  <div className="post">Publier</div>
                </div>
              </div>
            </Col>
            <Col xs="4" className="post-details-right-area">
              <RightSidebar />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default PostDetails;
