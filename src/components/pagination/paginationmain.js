import React from "react";
import { Pagination, PaginationItem, PaginationLink } from "reactstrap";

const PaginationMain = props => {
  const Pages = [];
  for (let i = 1; i <= props.totalPages; i++) {
    Pages.push(
      <PaginationItem key={i} onClick={() => props.getPage(i)}>
        <PaginationLink href="#">{i}</PaginationLink>
      </PaginationItem>
    );
  }
  return (
    <Pagination
      style={{ display: "flex", justifyContent: "center", marginTop: "3rem" }}
    >
      {Pages}
    </Pagination>
  );
};

export default PaginationMain;
