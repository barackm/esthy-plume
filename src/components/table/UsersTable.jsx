import React, { Component } from "react";
import AppTable from "../../components/table/Table";
import Button from "reactstrap/lib/Button";
import { Link } from "react-router-dom";
import { IconContext } from "react-icons";
import { FaLink } from "react-icons/fa";

class UsersTable extends Component {
  state = {};
  columns = [
    {
      path: "username",
      label: "Nom",
    },
    {
      path: "email",
      label: "Email",
    },
    {
      path: "isAdmin",
      label: "Admin",
      content: (user) => {
        return (
          <Button
            className="btn-round"
            color={user.isAdmin ? "danger" : "primary"}
          >
            {user.isAdmin ? "Retirer Admin" : "Faire Admin"}
          </Button>
        );
      },
    },
    {
      path: "delete",
      label: "Supprimer",
      content: (user) => {
        return (
          <Button className="btn-round" color="danger">
            Supprimer
          </Button>
        );
      },
    },
    {
      path: "visit",
      label: "Visiter",
      content: (user) => {
        return (
          <Link
            to={`/profile/${user.username}`}
            className="btn btn-primary"
            color="primary"
          >
            <IconContext.Provider value={{}}>
              <FaLink />
            </IconContext.Provider>
          </Link>
        );
      },
    },
  ];
  render() {
    const columns = this.columns;
    const { users, onSort, sortColumn } = this.props;
    return (
      <AppTable
        data={users}
        sortColumn={sortColumn}
        onSort={onSort}
        columns={columns}
      />
    );
  }
}

export default UsersTable;
