import paginate from "components/pagination/paginate";
import Pagination from "components/pagination/Pagination";
import React, { Component } from "react";

import _ from "lodash";
import { Card, CardHeader, CardBody, CardTitle, Row, Col } from "reactstrap";
import UsersTable from "../components/table/UsersTable";
import Header from "components/Navbars/DemoNavbar";
import convertNumber from "variables/convertNumber";

const admins = [
  {
    id: 1,
    username: "barack",
    email: "barack@gmail.com",
    password: "11111",
    isAdmin: true,
  },
  {
    id: 2,
    username: "Alexender",
    email: "alexender@gmail.com",
    password: "11111",
    isAdmin: true,
  },
  {
    id: 3,
    username: "Jean-mark",
    email: "jeanmark@gmail.com",
    password: "11111",
    isAdmin: true,
  },
  {
    id: 4,
    username: "Eben-Ezer",
    email: "ebenezer@gmail.com",
    password: "11111",
    isAdmin: true,
  },
  {
    id: 5,
    username: "Martine",
    email: "martine@gmail.com",
    password: "11111",
    isAdmin: true,
  },
  {
    id: 6,
    username: "Francois",
    email: "francois@gmail.com",
    password: "11111",
    isAdmin: true,
  },
  {
    id: 7,
    username: "Benedicte",
    email: "benedicte@gmail.com",
    password: "11111",
    isAdmin: true,
  },
];

class Admins extends Component {
  state = {
    pageCount: 6,
    currentPage: 1,
    sortColumn: { path: "username", order: "asc" },
    admins: [],
    searchQuery: "",
  };
  componentDidMount() {
    this.setState({ admins });
  }
  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };
  handleSort = (sortColumn) => {
    this.setState({ sortColumn });
  };
  getSearchedData = () => {
    const { admins: allUsers, searchQuery } = this.state;
    return allUsers.filter(
      (user) =>
        user.username.includes(searchQuery) || user.email.includes(searchQuery)
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
    const adminsNumber = 30000;
    return (
      <>
        <Header {...this.props} onSearch={this.handleSearch} />
        <div className="content">
          <Row>
            <Col md="12">
              <Card>
                <CardHeader>
                  <CardTitle tag="h4">
                    Vos Administrateurs {convertNumber(adminsNumber)}
                  </CardTitle>
                </CardHeader>
                <CardBody>
                  <UsersTable
                    sortColumn={sortColumn}
                    users={pagedData}
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

export default Admins;
