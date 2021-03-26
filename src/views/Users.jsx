import React, { Component } from "react";

import _ from "lodash";
import { Card, CardHeader, CardBody, CardTitle, Row, Col } from "reactstrap";
import UsersTable from "../components/table/UsersTable";
import Header from "../components/Navbars/DemoNavbar";
import convertNumber from "../variables/convertNumber";
import paginate from "../components/pagination/paginate";
import Pagination from "../components/pagination/Pagination";
import AppModal from "../components/common/AppModal";
const users = [
  {
    id: 1,
    username: "barack",
    email: "barack@gmail.com",
    password: "11111",
    isAdmin: false,
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
    isAdmin: false,
  },
  {
    id: 4,
    username: "Eben-Ezer",
    email: "ebenezer@gmail.com",
    password: "11111",
    isAdmin: false,
  },
  {
    id: 5,
    username: "Martine",
    email: "martine@gmail.com",
    password: "11111",
    isAdmin: false,
  },
  {
    id: 6,
    username: "Francois",
    email: "francois@gmail.com",
    password: "11111",
    isAdmin: false,
  },
  {
    id: 7,
    username: "Benedicte",
    email: "benedicte@gmail.com",
    password: "11111",
    isAdmin: false,
  },
];

class Users extends Component {
  state = {
    pageCount: 6,
    currentPage: 1,
    sortColumn: { path: "username", order: "asc" },
    users: [],
    searchQuery: "",
    confirmationModaAdminlOpen: false,
    confirmationModaDeletelOpen: false,
    user: "",
  };
  componentDidMount() {
    this.setState({ users });
  }
  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };
  handleSort = (sortColumn) => {
    this.setState({ sortColumn });
  };
  getSearchedData = () => {
    const { users: allUsers, searchQuery } = this.state;
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
    console.log(e.target.value);
    this.setState({ searchQuery: e.target.value });
  };

  handleShowDeleteModal = (user) => {
    console.log(user);
    this.setState({ user, confirmationModaDeletelOpen: true });
  };
  handleToggleDeleteModal = () => {
    this.setState({
      confirmationModaDeletelOpen: !this.state.confirmationModaDeletelOpen,
    });
  };
  handleOpenAdminModal = (user) => {
    console.log(user);
    this.setState({ user, confirmationModaAdminlOpen: true });
  };
  handleToggleAdminModal = () => {
    this.setState({
      confirmationModaAdminlOpen: !this.state.confirmationModaAdminlOpen,
    });
  };

  handleDeleteUser = () => {
    this.setState({ confirmationModaDeletelOpen: false });
  };
  handleMakeAdmin = () => {
    this.setState({ confirmationModaAdminlOpen: false });
  };
  render() {
    const {
      pageCount,
      currentPage,
      sortColumn,
      confirmationModaDeletelOpen,
      confirmationModaAdminlOpen,
      user,
    } = this.state;
    const pagedData = this.getPagedData();
    const usersNumber = 30000;
    return (
      <>
        <Header {...this.props} onSearch={this.handleSearch} />
        <div className="content">
          <Row>
            <Col md="12">
              <Card>
                <CardHeader>
                  <CardTitle tag="h4">
                    Vos Utilisateurs {convertNumber(usersNumber)}
                  </CardTitle>
                </CardHeader>
                <CardBody>
                  <UsersTable
                    sortColumn={sortColumn}
                    users={pagedData}
                    onSort={this.handleSort}
                    onDeleteUser={this.handleShowDeleteModal}
                    onMakeAdmin={this.handleOpenAdminModal}
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
        <AppModal
          onToggleModal={this.handleToggleAdminModal}
          modalOpen={confirmationModaAdminlOpen}
          title="Creation d'un administrateur"
          success="Créer"
          fail="Non"
          body={
            user.isAdmin
              ? `Etes vous sure de vouloir retirer ${user.username} comme administrateur ? `
              : `Etes vous sure de vouloir rendre ${user.username} administrateur ? `
          }
          onSuccess={this.handleMakeAdmin}
        />
        <AppModal
          onToggleModal={this.handleToggleDeleteModal}
          modalOpen={confirmationModaDeletelOpen}
          title="Supression d'utilisateur"
          success="Suprimer"
          fail="Non"
          body={`Etes vous sure de vouloir suprimer ${user.username} ? `}
          onSuccess={this.handleDeleteUser}
        />
      </>
    );
  }
}

export default Users;
