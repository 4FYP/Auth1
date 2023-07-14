import React, { useState } from 'react';
import axios from 'axios';
import { Form, Button } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
const UpworkForm = () => {
  const { useremail } = useParams();
  console.log(useremail)
  const [bidData, setbidData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    jobtitle: '',
    skills: '',
    hourlyrate: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setbidData((prevData) => ({
      ...prevData,
      [name]: value,
      useremail: useremail,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    
    axios.post('http://localhost:8800/api/Bidding', bidData)
      .then((response) => {
        console.log('bid successful');
        // Handle success scenario, e.g., show a success message or redirect
      })
      .catch((error) => {
        console.error('Error processing bid: ', error);
        // Handle error scenario, e.g., display an error message
      });
  };

  return (
    
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="firstname">
        <Form.Label>First Name</Form.Label>
        <Form.Control
          type="text"
          name="firstname"
          value={bidData.firstname}
          onChange={handleChange}
        />
      </Form.Group>
     
      <Form.Group controlId="lastname">
        <Form.Label>Lastname</Form.Label>
        <Form.Control
          type="text"
          name="lastname"
          value={bidData.lastname}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group controlId="email">
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="text"
          name="email"
          value={bidData.email}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group controlId="jobtitle">
        <Form.Label>Job Title</Form.Label>
        <Form.Control
          type="text"
          name="jobtitle"
          value={bidData.jobtitle}
          onChange={handleChange}
        />
      </Form.Group>
      

      <Form.Group controlId="skills">
        <Form.Label>Skills</Form.Label>
        <Form.Control
          type="text"
          name="skills"
          value={bidData.skills}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group controlId="hourlyrate">
        <Form.Label>Hourly rate</Form.Label>
        <Form.Control
          type="number"
          name="hourlyrate"
          value={bidData.hourlyrate}
          onChange={handleChange}
        />
      </Form.Group>


      <Button variant="primary" type="submit">Send Bid</Button>
    </Form>
  );
};

export default UpworkForm;