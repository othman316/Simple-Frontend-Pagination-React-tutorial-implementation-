import React from 'react'

const Paginations = ({ postsPerPage, totalPosts, paginate, currentPage }) => {
  const pageNumbers = []

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i)
  }
  return (
    <nav className="align-self-center">
      <ul className="pagination">
        {pageNumbers.map(number => (
          <li
            key={number}
            className={`page-item ${currentPage === number ? 'active' : ''}`}
          >
            <a onClick={() => paginate(number)} href="!#" className="page-link">
              {number}{' '}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Paginations
