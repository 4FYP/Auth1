import React, { useState } from 'react';
import axios from 'axios';
import { Form, Button } from 'react-bootstrap';

const GigForm = () => {
  const [gigData, setgigData] = useState({
    email:'',
    title: '',
    description: '',
    deliverytime: '',
    price: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setgigData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('http://localhost:8800/api/GigForm', gigData)
      .then((response) => {
        console.log('gig successful');
        // Handle success scenario, e.g., show a success message or redirect
      })
      .catch((error) => {
        console.error('Error processing gig: ', error);
        // Handle error scenario, e.g., display an error message
      });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="email">
        <Form.Label>email</Form.Label>
        <Form.Control
          type="text"
          name="email"
          value={gigData.email}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group controlId="title">
        <Form.Label>Gig title</Form.Label>
        <Form.Control
          type="text"
          name="title"
          value={gigData.title}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group controlId="description">
        <Form.Label>Description</Form.Label>
        <Form.Control
          type="text"
          name="description"
          value={gigData.description}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group controlId="deliverytime">
        <Form.Label>Deliverytime</Form.Label>
        <Form.Control
          type="text"
          name="deliverytime"
          value={gigData.deliverytime}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group controlId="price">
        <Form.Label>Price</Form.Label>
        <Form.Control
          type="NUMBER"
          name="price"
          value={gigData.price}
          onChange={handleChange}
        />
      </Form.Group>
      
      <Button variant="primary" type="submit">Send Request</Button>
    </Form>
  );
};

export default GigForm;