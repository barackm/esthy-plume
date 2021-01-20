import React, { Component } from "react";
import { IconContext } from "react-icons";
import { FaSortDown, FaSortUp } from "react-icons/fa";

class TableHeader extends Component {
  state = {};
  renderSortIcon = (column) => {
    if (column.content) return null;
    const { sortColumn } = this.props;
    if (sortColumn.path === column.path) {
      if (sortColumn.order === "asc") {
        return (
          <IconContext.Provider value={{}}>
            <FaSortUp />
          </IconContext.Provider>
        );
      } else {
        return (
          <IconContext.Provider value={{}}>
            <FaSortDown />
          </IconContext.Provider>
        );
      }
    }
  };
  raseSort = (path) => {
    const sortColumn = { ...this.props.sortColumn };
    if (sortColumn.path === path) {
      sortColumn.order = sortColumn.order === "asc" ? "desc" : "asc";
    } else {
      sortColumn.path = path;
      sortColumn.order = "asc";
    }
    this.props.onSort(sortColumn);
  };
  render() {
    const { columns } = this.props;
    return (
      <thead className="text-primary">
        <tr>
          {columns.map((column) => (
            <th
              key={column.label || column.key}
              onClick={() => this.raseSort(column.path)}
              style={{ cursor: column.content ? "" : "pointer" }}
            >
              {column.label} {this.renderSortIcon(column)}
            </th>
          ))}
        </tr>
      </thead>
    );
  }
}

export default TableHeader;
