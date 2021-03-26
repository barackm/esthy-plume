import React from "react";

import { Table } from "reactstrap";
import TableBody from "./TableBody";
import TableHeader from "./TableHeader";

export default function AppTable({ sortColumn, columns, onSort, data }) {
  return (
    <Table responsive>
      <TableHeader columns={columns} sortColumn={sortColumn} onSort={onSort} />
      <TableBody data={data} columns={columns} />
    </Table>
  );
}
