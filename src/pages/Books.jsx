import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS

const Books = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchAllBooks = async () => {
      try {
        const res = await axios.get("http://localhost:8800/books");
        setBooks(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchAllBooks();
  }, []);

  console.log(books);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8800/books/${id}`);
      window.location.reload()
    } catch (err) {
      console.log(err);
    }
  };

  return (
<div className="container">
  <h4 className="text-center text-white">Authpoint Books Record</h4>
  <div className="row row-cols-3 justify-content-center">
    {books.map((book) => (
      <div key={book.id} className="col mb-4">
        <div className="card h-100 bg-dark">
          <img src={book.cover} className="card-img-top text-white" alt="No Pic" />

          <div className="card-body">
            <h4 className="card-title text-white">Title: {book.title}</h4>
            <h6 className="card-subtitle mb-2 text-muted text-white">Description:</h6>
            <p className="card-text text-white">{book.desc}</p>
            <h5 className="text-white">Price: <span className="text-white">${book.price}</span></h5>
            <br/>
            <button className="btn btn-primary text-white">
              <Link to={`/update/${book.id}`} className="text-white">
                Update
              </Link>
            </button>
            <br/><br/>
            <button className="btn btn-danger text-white" onClick={() => handleDelete(book.id)}>
              Delete
            </button>
            <br/><br/>
          </div>
        </div>
      </div>  
    ))}
  </div>
  <div className="text-center">
    <button className="btn btn-primary text-white">
      <Link to="/add" className="text-white">
        Add new book
      </Link>
    </button>
  </div>
</div>


  );
};

export default Books;
