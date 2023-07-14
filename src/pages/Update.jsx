import axios from "axios";
import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";


const Update = () => {
  const [book, setBook] = useState({
    title: "",
    desc: "",
    price: null,
    cover: "",
  });
  const [error,setError] = useState(false)

  const location = useLocation();
  const navigate = useNavigate();

  const bookId = location.pathname.split("/")[2];

  const handleChange = (e) => {
    setBook((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();

    try {
      await axios.put(`http://localhost:8800/books/${bookId}`, book);
      navigate("/books");
    } catch (err) {
      console.log(err);
      setError(true);
    }
  };

  return (
      <div className="back">
        <h1>Update the Book</h1>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Book title"
            name="title"
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <textarea
            rows={5}
            className="form-control"
            placeholder="Book desc"
            name="desc"
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <input
            type="number"
            className="form-control"
            placeholder="Book price"
            name="price"
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Book cover"
            name="cover"
            onChange={handleChange}
          />
        </div>
        <button className="btn btn-primary" onClick={handleClick}>Update</button>
        {error && <div className="text-danger">Something went wrong!</div>}<br/>
        <Link to="/Books" className="btn btn-link">See all books</Link>
      </div>
    );
  

};

export default Update;
