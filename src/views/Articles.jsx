import React, { Component } from "react";
import _ from "lodash";
import paginate from "../components/pagination/paginate";
import { Card, CardHeader, CardBody, CardTitle, Row, Col } from "reactstrap";
import Pagination from "../components/pagination/Pagination";
import ArticlesTable from "../components/table/ArticlesTable";
import Header from "../components/Navbars/DemoNavbar";
import convertNumber from "../variables/convertNumber";
import { Link } from "react-router-dom";

const articles = [
  {
    id: 1,
    title: "barack",
    body: "",
    authorId: 1,
    createdAt: "Mars 22, 2021",
  },
  {
    id: 2,
    title: "lorem lorem",
    body: "",
    authorId: 2,
    createdAt: "Mars 22, 2021",
  },
  {
    id: 3,
    title: "lorem lorem",
    body: "",
    authorId: 1,
    createdAt: "Mars 22, 2021",
  },
  {
    id: 4,
    title: "lorem lorem",
    body: "",
    authorId: 1,
    createdAt: "Mars 22, 2021",
  },
  {
    id: 5,
    title: "lorem lorem",
    body: "",
    authorId: 2,
    createdAt: "Mars 22, 2021",
  },
  {
    id: 6,
    title: "lorem lorem",
    body: "",
    authorId: 2,
    createdAt: "Mars 22, 2021",
  },
  {
    id: 7,
    title: "lorem lorem",
    body: "",
    authorId: 1,
    createdAt: "Mars 22, 2021",
  },
];
class Articles extends Component {
  state = {
    pageCount: 6,
    currentPage: 1,
    sortColumn: { path: "title", order: "asc" },
    articles: [],
    searchQuery: "",
  };
  componentDidMount() {
    this.setState({ articles });
  }
  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };
  handleSort = (sortColumn) => {
    this.setState({ sortColumn });
  };
  getSearchedData = () => {
    const { articles: allArticles, searchQuery } = this.state;
    return allArticles.filter((article) => article.title.includes(searchQuery));
  };
  getSortedData = () => {
    const { sortColumn } = this.state;
    return _.orderBy(
      this.getSearchedData(),
      [sortColumn.path],
      [sortColumn.order]
    );
  };
  getPagedData = () => {
    const { currentPage, pageCount } = this.state;
    return paginate(this.getSortedData(), currentPage, pageCount);
  };

  handleSearch = (e) => {
    console.log(e.target.value);
    this.setState({ searchQuery: e.target.value });
  };
  render() {
    const { pageCount, currentPage, sortColumn } = this.state;
    const pagedData = this.getPagedData();
    const articlesNumber = 60000;
    return (
      <>
        <Header {...this.props} onSearch={this.handleSearch} />
        <div className="content">
          <Row>
            <Col md="12">
              <Card>
                <CardHeader
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <CardTitle tag="h4">
                    Vos Articles {convertNumber(articlesNumber)}
                  </CardTitle>
                  <Link
                    to="/edit-article"
                    className="btn btn-primary add-article-btn"
                  >
                    Rediger un article
                  </Link>
                </CardHeader>
                <CardBody>
                  <ArticlesTable
                    sortColumn={sortColumn}
                    articles={pagedData}
                    onSort={this.handleSort}
                  />
                </CardBody>
              </Card>
            </Col>
            <Col>
              <Pagination
                pageCount={pageCount}
                pageItems={this.getSearchedData()}
                onPageChange={this.handlePageChange}
                currentPage={currentPage}
              />
            </Col>
          </Row>
        </div>
      </>
    );
  }
}

export default Articles;
