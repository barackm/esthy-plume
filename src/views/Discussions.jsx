import Header from "components/Navbars/DemoNavbar";
import paginate from "components/pagination/paginate";
import Pagination from "components/pagination/Pagination";
import MessagesTable from "components/table/MessagesTable";
import _ from "lodash";
import React, { Component } from "react";
import { Card, CardHeader, CardBody, CardTitle, Row, Col } from "reactstrap";
import convertNumber from "variables/convertNumber";

const messages = [
  {
    id: 1,
    name: "barack",
    lastName: "Mark",
    email: "jeanmark@gmail.com",
    address: "katindo Goma",
    createdAt: "Mars 12, 2021",
    message:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam modi vel excepturi hic perferendis dolores ad! Placeat, excepturi est. Officia,",
  },
  {
    id: 2,
    name: "Jean",
    lastName: "Mark",
    email: "jeanmark@gmail.com",
    address: "katindo Goma",
    createdAt: "Mars 12, 2021",

    message:
      "Lorem ipsum dolor, sit amet consectetuibusdam modi vel excepturi hic perferendis dolores ad! Placeat, excepturi est. Officia,",
  },
  {
    id: 3,
    name: "Jean",
    lastName: "Mark",
    email: "jeanmark@gmail.com",
    address: "katindo Goma",
    createdAt: "Mars 12, 2021",

    message:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam modi vel excepturi hic perferendis dolores ad! Placeat, excepturi est. Officia,",
  },
  {
    id: 4,
    name: "Jean",
    lastName: "Mark",
    email: "jeanmark@gmail.com",
    address: "katindo Goma",
    createdAt: "Mars 12, 2021",

    message:
      "Lorem ipsum dolor, el excepturi hic perferendis dolores ad! Placeat, excepturi est. Officia,",
  },
  {
    id: 5,
    name: "Jean",
    lastName: "Mark",
    email: "jeanmark@gmail.com",
    address: "katindo Goma",
    createdAt: "Mars 12, 2021",

    message:
      " Quibusdam modi vel excepturi hic perferendis dolores ad! i est. Officia,",
  },
  {
    id: 6,
    name: "Jean",
    lastName: "Mark",
    email: "jeanmark@gmail.com",
    address: "katindo Goma",
    createdAt: "Mars 12, 2021",

    message: " excepturi est. Officia,",
  },
  {
    id: 7,
    name: "Jean",
    lastName: "Mark",
    email: "jeanmark@gmail.com",
    address: "katindo Goma",
    createdAt: "Mars 12, 2021",

    message:
      " Quibusdam modi vel excepturi hic perferendis dolores ad! Placeat, excepturi est. Officia,",
  },
];

class Discussions extends Component {
  state = {
    pageCount: 6,
    currentPage: 1,
    sortColumn: { path: "username", order: "asc" },
    messages: [],
    searchQuery: "",
  };
  componentDidMount() {
    this.setState({ messages });
  }
  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };
  handleSort = (sortColumn) => {
    this.setState({ sortColumn });
  };
  getSearchedData = () => {
    const { messages: allMessages, searchQuery } = this.state;
    return allMessages.filter(
      (message) =>
        message.name.includes(searchQuery) ||
        message.email.includes(searchQuery) ||
        message.lastName.includes(searchQuery)
    );
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
    this.setState({ searchQuery: e.target.value });
  };
  render() {
    const { pageCount, currentPage, sortColumn } = this.state;
    const pagedData = this.getPagedData();
    const messsagesNumber = 30000;
    return (
      <>
        <Header {...this.props} onSearch={this.handleSearch} />
        <div className="content">
          <Row>
            <Col md="12">
              <Card>
                <CardHeader>
                  <CardTitle tag="h4">
                    Les Utilisateurs {convertNumber(messsagesNumber)}
                  </CardTitle>
                </CardHeader>
                <CardBody>
                  <MessagesTable
                    sortColumn={sortColumn}
                    messages={pagedData}
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

export default Discussions;
