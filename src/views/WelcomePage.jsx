import React, { Component } from "react";

import { Container, Row, Col } from "reactstrap";

import CarouselHome from "./CarouselHome";
import Post from "components/common/Post";
import RightSidebar from "components/Sidebar/RightSidebar";

class WelcomePage extends Component {
  state = {};
  render() {
    const articles = [
      {
        id: 1,
        title: "",
        author: "",
        timing: "",
        body: "",
      },
      {
        id: 2,
        title: "",
        author: "",
        timing: "",
        body: "",
      },
      {
        id: 3,
        title: "",
        author: "",
        timing: "",
        body: "",
      },
      {
        id: 4,
        title: "",
        author: "",
        timing: "",
        body: "",
      },
      {
        id: 5,
        title: "",
        author: "",
        timing: "",
        body: "",
      },
      {
        id: 6,
        title: "",
        author: "",
        timing: "",
        body: "",
      },
      {
        id: 7,
        title: "",
        author: "",
        timing: "",
        body: "",
      },
    ];
    return (
      <div className="welcome-page-main-container">
        <Container className="welcome-area">
          <Row>
            <Col xs="8" className="main-article-feed-area">
              <CarouselHome />
              <div className="news-area">
                <div className="header">
                  <span>Publications recentes</span>
                </div>
                <div className="main-articles-container">
                  {articles.map((article) => (
                    <Post />
                  ))}
                </div>
                <div className="load-morebtn-wrapper">
                  <span>Charger plus</span>
                </div>
              </div>
            </Col>
            <Col xs="4" className="main-right-side-area">
              <RightSidebar />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default WelcomePage;
