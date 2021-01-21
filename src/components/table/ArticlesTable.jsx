import React, { Component } from "react";

import Button from "reactstrap/lib/Button";
import { Link } from "react-router-dom";
import { IconContext } from "react-icons";
import { FaLink } from "react-icons/fa";

import AppTable from "../../components/table/Table";

const admins = [
  { id: 1, name: "Freddy", lastName: "Mukelenga" },
  { id: 2, name: "Alexender", lastName: "Dommy" },
];
class ArticlesTable extends Component {
  state = {};
  columns = [
    {
      path: "title",
      label: "Titre",
    },
    {
      path: "createdAt",
      label: "Publication",
    },
    {
      path: "authorId",
      label: "Redacteur",
      content: (article) => {
        return `${
          admins.filter((admin) => admin.id === article.authorId)[0].name
        } ${
          admins.filter((admin) => admin.id === article.authorId)[0].lastName
        }`;
      },
    },
    {
      path: "delete",
      label: "Supprimer",
      content: (article) => {
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
      content: (article) => {
        return (
          <Link
            to={`/news/${article.id}`}
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
    const { articles, onSort, sortColumn } = this.props;
    return (
      <AppTable
        data={articles}
        sortColumn={sortColumn}
        onSort={onSort}
        columns={columns}
      />
    );
  }
}

export default ArticlesTable;
