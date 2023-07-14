import axios from "axios";
import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Add = () => {
  const [book, setBook] = useState({
    title: "",
    desc: "",
    price: null,
    cover: "",
  });
  const [error,setError] = useState(false)

  const navigate = useNavigate();

  const handleChange = (e) => {
    setBook((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8800/books", book);
      navigate("/books");
    } catch (err) {
      console.log(err);
      setError(true)
    }
  };

  return (
<div className="add_form">
  <h4 className="mb-4 text-center fw-bold">Add New Book</h4>
  <div className="form-group">
    <label htmlFor="title" className="mb-2 fw-bold">Title</label>
    <input
      type="text"
      className="form-control"
      placeholder="Book title"
      name="title"
      onChange={handleChange}
    />
  </div>
  <div className="form-group">
    <label htmlFor="desc" className="mb-2 fw-bold">Description</label>
    <textarea
      rows={5}
      className="form-control"
      placeholder="Book description"
      name="desc"
      onChange={handleChange}
    ></textarea>
  </div>
  <div className="form-group">
    <label htmlFor="price" className="mb-2 fw-bold">Price</label>
    <div className="input-group">
      <span className="input-group-text">$</span>
      <input
        type="number"
        className="form-control"
        placeholder="Book price"
        name="price"
        onChange={handleChange}
      />
    </div>
  </div>
  <div className="form-group">
    <label htmlFor="cover" className="mb-2 fw-bold">Cover</label>
    <input
      type="text"
      className="form-control"
      placeholder="Book cover"
      name="cover"
      onChange={handleChange}
    />
  </div>
  <div className="text-center">
    <button onClick={handleClick} className="btn btn-primary mt-3">Add</button>
    {error && <div className="text-danger mt-2 fw-bold">Something went wrong!</div>}
    <Link to="/books" className="btn btn-link mt-3 fw-bold">See all books</Link>
  </div>
</div>

  );
};

export default Add;
