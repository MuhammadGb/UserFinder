import GithubContext from "../../context/github/githubContext";
import React, { useContext, useState, useEffect } from "react";
import { Spinner } from "../layout/Spinner";
import { UserItem } from "./UserItem";
import ReactPaginate from "react-paginate";

export const Users = () => {
  const { loading, users } = useContext(GithubContext);
  const [offset, setOffset] = useState(0);
  const [perPage, setPerPage] = useState(0);
  const [pageCount, setPageCount] = useState(0);
  const [currentUsers, setCurrentUsers] = useState(null);
  useEffect(() => {
    setPerPage(15);
    const endOffset = offset + perPage;
    setCurrentUsers(users.slice(offset, endOffset));
    setPageCount(Math.ceil(users.length / perPage));
  }, [offset, perPage, users]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * perPage) % users.length;
    setOffset(newOffset);
  };

  if (loading) {
    return <Spinner />;
  } else {
    return (
      <div>
        <UserItem currentUsers={currentUsers} />
        <ReactPaginate
          nextLabel="next"
          previousLabel="previous"
          breakLabel="..."
          breakClassName={"break-me"}
          pageCount={pageCount}
          onPageChange={handlePageClick}
          marginPagesDisplayed={2}
          pageRangeDisplayed={2}
          containerClassName={"pagination"}
          subContainerClassName={"pages pagination"}
          activeClassName={"active"}
          renderOnZeroPageCount={null}
        />
      </div>
    );
  }
};
