import React, { Component } from "react";

import _ from "lodash";
import { Card, CardHeader, CardBody, CardTitle, Row, Col } from "reactstrap";
import UsersTable from "../components/table/UsersTable";
import Header from "../components/Navbars/DemoNavbar";
import convertNumber from "../variables/convertNumber";
import paginate from "../components/pagination/paginate";
import Pagination from "../components/pagination/Pagination";
import AppModal from "components/common/AppModal";

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
    user: {},
    confirmationModaAdminlOpen: false,
    confirmationModaDeletelOpen: false,
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

  handleShowDeleteModal = (user) => {
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
  handleRemoveAdmin = () => {
    this.setState({ confirmationModaAdminlOpen: false });
  };
  render() {
    const {
      pageCount,
      currentPage,
      sortColumn,
      confirmationModaAdminlOpen,
      confirmationModaDeletelOpen,
      user,
    } = this.state;
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
          body={`Etes vous sure de vouloir retirer ${user.username} comme administrateur ? `}
          onSuccess={this.handleRemoveAdmin}
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

export default Admins;
