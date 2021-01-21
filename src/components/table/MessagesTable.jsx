import React, { Component } from "react";
import AppTable from "../../components/table/Table";
import { Button } from "reactstrap";
import { Link } from "react-router-dom";

class MessagesTable extends Component {
  state = {};
  columns = [
    {
      path: "name",
      label: "Nom",
    },
    {
      path: "lastName",
      label: "PostNom",
    },

    {
      path: "createdAt",
      label: "Date",
    },

    {
      path: "delete",
      label: "Supprimer",
      content: (message) => {
        return (
          <Button className="btn-round" color="danger">
            Supprimer
          </Button>
        );
      },
    },
    {
      path: "visiter",
      label: "Voir details",
      content: (message) => {
        return (
          <Link
            to={`/message/${message.id}`}
            className="btn btn-primary"
            color="danger"
          >
            Voir Details
          </Link>
        );
      },
    },
  ];

  render() {
    const columns = this.columns;
    const { messages, onSort, sortColumn } = this.props;
    return (
      <AppTable
        data={messages}
        sortColumn={sortColumn}
        onSort={onSort}
        columns={columns}
      />
    );
  }
}

export default MessagesTable;
