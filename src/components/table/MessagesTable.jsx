import React, { Component } from "react";
import AppTable from "components/table/Table";
import { Button } from "reactstrap";

class MessagesTable extends Component {
  state = {};
  columns = [
    {
      path: "name",
      label: "Nom",
    },
    {
      path: "lastname",
      label: "PostNom",
    },
    {
      path: "email",
      label: "Email",
    },
    {
      path: "address",
      label: "Address",
    },
    {
      path: "createdAt",
      label: "Date",
    },
    {
      path: "message",
      label: "Message",
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
