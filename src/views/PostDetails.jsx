import React, { Component } from "react";
import { IconContext } from "react-icons";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";
import { RiTimeLine } from "react-icons/ri";
import { FaUser } from "react-icons/fa";
import { HiPencilAlt } from "react-icons/hi";
import { connect } from "react-redux";
import * as Yup from "yup";

import RightSidebar from "../components/Sidebar/RightSidebar";
import image from "../assets/img/1.jpg";
import mark from "../assets/img/mike.jpg";
import PostLiked from "../components/common/PostLiked";
import Comment from "../components/common/Comment";
import InputForm from "../components/form/InputForm";
import InputField from "../components/form/InputField";
import SubmitBtn from "../components/common/SubmitBtn";
import { addComment, loadComments } from "../store/comments";

class PostDetails extends Component {
  state = {};
  componentDidMount() {
    this.props.loadComments();
  }
  validationSchema = Yup.object().shape({
    comment: Yup.string()
      .min(3, "Le commentaire ne doit pas avoir moins de 3 characteres")
      .required("Votre commentaire est vide !"),
  });
  render() {
    const { categories } = this.props;
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
            <InputForm
              validationSchema={this.validationSchema}
              initialValues={{ comment: "" }}
              onSubmit={(value) => this.props.addComment(value)}
            >
              <Col lg="8" sm="12" className="post-details-left-area">
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
                        <Link to="/edit-article">
                          <IconContext.Provider
                            value={{
                              className: "post-details-icon-edit",
                            }}
                          >
                            <HiPencilAlt />
                          </IconContext.Provider>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="post-details-line"></div>

                <div className="post-details-image-area">
                  <div className="image-wrapper">
                    <img src={image} alt="" />
                  </div>
                </div>

                <div className="post-details-body-area">
                  <p>
                    <strong>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quas pariatur nulla laborum molestiae vero blanditiis
                      repellat, illo placeat praesentium itaque eum? Quaerat
                      error quia vel ipsa! Explicabo fugit id eius, voluptatem
                      obcaecati sit, ullam,
                    </strong>
                  </p>
                  <blockquote>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Excepturi veniam commodi ea ipsam, quaerat repellat officia,
                    vel deserunt provident hic, itaque quo mollitia eveniet.
                    Laborum, placeat quo eveniet. Laborum, placeat quos?
                    Provident, dolorum autem.
                  </blockquote>
                  <p>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;You
                    need to enable JavaScript to run this app.You need toenable
                    JavaScript to run this app.You need to enable JavaScript to
                    run this app.You need to enable JavaScript to run this
                    app.You need toenable JavaScript to run this app.You need to
                    enable JavaScript to ru.
                  </p>
                  <ul>
                    <li>You need to enable JavaScript </li>
                    <li>eed to enable JavaScript to run </li>
                    <li>
                      ble JavaScript to run this app.You need toenable
                      JavaScript to run this app.You need to enable JavaScript
                      to run this app.You need t.
                    </li>
                    <li>You need to enable JavaScript to run this app.</li>
                    <li>You need run this app.</li>
                  </ul>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quas pariatur nulla laborum molestiae vero blanditiis
                    repellat, illo placeat praesentium itaque eum? Quaerat error
                    quia vel ipsa! Explicabo fugit id eius, voluptatem obcaecati
                    sit, ullam,Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Quas pariatur nulla laborum molestiae vero
                    blanditiis repellat, illo placeat praesentium itaque eum?
                    Quaerat error quia vel ipsa! Explicabo fugit id eius,
                    voluptatem obcaecati sit, ullam, <br />
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quas pariatur nulla laborum molestiae vero blanditiis
                    repellat, illo placeat praesentium itaque eum? Quaerat error
                    quia vel ipsa! Explicabo fugit id eius, voluptatem obcaecati
                    sit, ullam,Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Quas pariatur nulla laborum molestiae vero
                    blanditiis repellat, illo placeat praesentium itaque eum?
                    Quaerat error quia vel ipsa! Explicabo fugit id eius,
                    voluptatem obcaecati sit, ullam,
                  </p>
                  <p>
                    <em>
                      Excepturi veniam commodi ea ipsam, quaerat repelcommodi ea
                      ipsam, quaerlat officia, Excepturi veniam commodi ea
                      ipsam, quaerat repellat officiacommodi ea ipsam, quaerat
                      repellat officiacommodi ea ipsam, quaerat repellat
                      officia, Excommodi ea ipsam, quaerat repellat
                      officiapellat officia,Excepturi veniam commodicommodi ea
                      ipsam, quaerat repellat officia{" "}
                    </em>
                  </p>
                  <h1>
                    You need to enable JavaScript to run this app.You need to
                    enable JavaScript to run this app.You need to enable
                    JavaScript to run this app.
                  </h1>
                  <ol>
                    <li>You need to enable JavaScript to run this app.</li>
                    <li>You need to enable JavaScript to run this app.</li>
                    <li>You need to enable JavaScript to run this app.</li>
                    <li>You need to enable JavaScript to run this app.</li>
                    <li>You need to enable JavaScript to run this app.</li>
                  </ol>
                  <p>
                    <u>
                      <em>
                        You need to enable JavaScript to run this app.You need
                        toenable JavaScript to run this app.You need to enable
                        JavaScript to run this app.You need to enable JavaScript
                        to run this app.You need toenable JavaScript to run this
                        app.You need to enable JavaScript to run this app.
                      </em>
                    </u>
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quas pariatur nulla laborum molestiae vero blanditiis
                    repellat, illo placeat praesentium itaque eum? Quaerat error
                    quia vel ipsa! Explicabo fugit id eius, voluptatem obcaecati
                    sit, ullam,Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Quas pariatur nulla laborum molestiae vero
                    blanditiis repellat, illo placeat praesentium itaque eum?
                    Quaerat error quia vel ipsa! Explicabo fugit id eius,
                    voluptatem obcaecati sit, ullam, <br />
                  </p>
                  <h1>
                    <strong>
                      You need to enable JavaScript to run this app.You need
                      toenable JavaScript to run this app.You need to enable
                      JavaScript to run this app.
                    </strong>
                  </h1>

                  <div className="article-details-main-images-area">
                    <div className="article-detail-images-grid">
                      <div className="image-wrapper">
                        <img src={require("../assets/img/1.jpg")} alt="" />
                      </div>
                      <div className="image-wrapper">
                        <img src={require("../assets/img/bg5.jpg")} alt="" />
                      </div>
                      <div className="image-wrapper">
                        <img src={require("../assets/img/bg.jpg")} alt="" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="category-details">
                  <div className="category">category</div>
                  <Link to="/">Culture</Link>
                </div>
                <div className="post-commands">
                  <Link to="/" className="older-post">
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
                  <Link to="/" className="newer-post">
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
                      <PostLiked key={post.id} />
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
                      <Comment key={comment.id} />
                    ))}
                  </div>

                  <div className="add-comment-area">
                    <div className="left-side">
                      <div className="logo">
                        <div className="image-wrapper">
                          <img src={mark} alt="" />
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
                        <InputField
                          name="comment"
                          placeholder="Ajouter un commentaire..."
                          type="textarea"
                          className="comment-text-area"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <br />
                <div className="publish-comment-area">
                  <div className="notify-area">
                    <div className="check-box"></div>
                    <span>Me notifier</span>
                  </div>
                  <div className="publish-area">
                    <SubmitBtn className="post" label="Publier" />
                  </div>
                </div>
              </Col>
            </InputForm>
            <Col lg="4" sm="12" className="post-details-right-area">
              <RightSidebar categories={categories} />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    addComment: (comment) => dispatch(addComment(comment)),
    loadComments: () => dispatch(loadComments("hello")),
  };
};
export default connect(null, mapDispatchToProps)(PostDetails);
