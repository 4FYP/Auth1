import React, { useState } from "react";

function Sortby() {
  const [books, setBooks] = useState([
    {
      title: "Book D",
      author: "Author D",
      date: "2022-01-01",
    },
    {
      title: "Book C",
      author: "Author C",
      date: "2021-12-01",
    },
    {
      title: "Book B",
      author: "Author B",
      date: "2021-11-01",
    },
    {
      title: "Book A",
      author: "Author A",
      date: "2021-10-01",
    },
  ]);
  const [sortBy, setSortBy] = useState("date");

  const handleSortByChange = (event) => {
    setSortBy(event.target.value);
  };

  const sortedBooks = [...books].sort((a, b) => {
    if (sortBy === "date") {
      return new Date(b.date) - new Date(a.date);
    } else if (sortBy === "letters") {
      return a.title.localeCompare(b.title);
    } else {
      return 0;
    }
  });

  return (
    <>
      <label htmlFor="sort-by">Sort by:</label>
      <select id="sort-by" value={sortBy} onChange={handleSortByChange}>
        <option value="date">Date</option>
        <option value="letters">Letters</option>
      </select>
      <ul>
        {sortedBooks.map((book) => (
          <li key={book.title}>
            <h3>{book.title}</h3>
            <p>Author: {book.author}</p>
            <p>Date: {book.date}</p>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Sortby;
