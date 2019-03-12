import React from "react";
import { Pagination, PaginationItem, PaginationLink } from "reactstrap";

const PaginationMain = props => {
  return (
    <Pagination style={{display:'flex',justifyContent:'center'}}>
      <PaginationItem>
        <PaginationLink href="#">1</PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href="#">2</PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href="#">3</PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href="#">4</PaginationLink>
      </PaginationItem>
    </Pagination>
  );
};

export default PaginationMain;
