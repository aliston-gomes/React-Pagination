import React from "react";

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPosts.length / postsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <section id="numbers">
      <ul>
        {pageNumbers.map((numbers, index) => {
          return (
            <li key={index + 1}>
              <a onClick={() => paginate(numbers)}>{numbers}</a>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Pagination;
