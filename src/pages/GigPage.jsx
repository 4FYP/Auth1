import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
const GigPage = () => {
  const [gigs, setGigs] = useState([]);

  useEffect(() => {
    // Fetch gig data from the backend server
    fetch('http://localhost:8800/api/gigs')
      .then(response => response.json())
      .then(data => setGigs(data))
      .catch(error => console.log(error));
  }, []);

  return (
    <div className="gig-container">
      {gigs.map(gig => (
        <div key={gig.email} className="gig-card border rounded p-3 mb-3">
          <h2>Title: {gig.title}</h2>
          <p>Description: {gig.description}</p>
          <p>Delivery Time: {gig.deliverytime}</p>
          <p>Price: {gig.price}</p>
          <Link to={`/bidding/${gig.email}`}>
          <button variant="success" className="bg-success  text-white font-weight-bold rounded-pill py-2 px-4">Submit a Proposal</button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default GigPage;
