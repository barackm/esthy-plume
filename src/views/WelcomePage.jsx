import React, { Component } from "react";

import { Container, Row, Col } from "reactstrap";

import CarouselHome from "./CarouselHome";
import Post from "../components/common/Post";
import RightSidebar from "../components/Sidebar/RightSidebar";
import SearchNavbar from "../components/Navbars/SearchNavbar";

class WelcomePage extends Component {
  state = {};
  render() {
    const {
      articles,
      selectedCategory,
      onChangeCategory,
      categories,
      onShowAllCategories,
      searchQuery,
      search,
    } = this.props;
    return (
      <div className="welcome-page-main-container">
        <Container className="welcome-area">
          <Row>
            <Col lg="8" sm="12" className="main-article-feed-area">
              {selectedCategory || search ? (
                <SearchNavbar
                  search={search}
                  searchQuery={searchQuery}
                  onShowAllCategories={onShowAllCategories}
                  selectedCategory={selectedCategory}
                />
              ) : (
                <CarouselHome />
              )}
              <div className="news-area">
                {!selectedCategory ||
                  (search && (
                    <div className="header">
                      <span>Publications recentes</span>
                    </div>
                  ))}
                <div className="main-articles-container">
                  {articles.map((article) => (
                    <Post key={article.id} />
                  ))}
                </div>
                <div className="load-morebtn-wrapper">
                  <span>Charger plus</span>
                </div>
              </div>
            </Col>
            <Col lg="4" sm="12" className="main-right-side-area">
              <RightSidebar
                onChangeCategory={onChangeCategory}
                categories={categories}
                selectedCategory={selectedCategory}
              />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default WelcomePage;
