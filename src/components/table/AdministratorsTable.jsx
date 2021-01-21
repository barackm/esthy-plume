import React, { Component } from "react";
import AppTable from "../../components/table/Table";
import Button from "reactstrap/lib/Button";
import { Link } from "react-router-dom";
import { IconContext } from "react-icons";
import { FaLink } from "react-icons/fa";
class AdministratorsTable extends Component {
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
      content: (administrator) => {
        return (
          <Button className="btn-round" color="danger">
            Retirer Admin
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
            Effacer
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
    const { administrators, onSort, sortColumn } = this.props;
    return (
      <AppTable
        data={administrators}
        sortColumn={sortColumn}
        onSort={onSort}
        columns={columns}
      />
    );
  }
}

export default AdministratorsTable;
