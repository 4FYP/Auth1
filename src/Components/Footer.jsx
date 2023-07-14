import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter, faGoogle } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
<footer className="bg-dark text-white">
  <div className="container py-5">
    <div className="row">
      <div className="col-md-4">
        <h6 className="text-uppercase" style={{ color: 'orange' }}>TOP TRENDING STORIES</h6>
        <ul className="list-unstyled">
          <li>
            <a href="#" className="text-white text-decoration-none">The Millennium Wolves</a>
          </li>
          <li>
            <a href="#" className="text-white text-decoration-none">The Arrangement</a>
          </li>
          <li>
            <a href="#" className="text-white text-decoration-none">The Lycan's Queen</a>
          </li>
          <li>
            <a href="#" className="text-white text-decoration-none">Gideon</a>
          </li>
          <li>
            <a href="#" className="text-white text-decoration-none">Mason</a>
          </li>
          <li>
            <a href="#" className="text-white text-decoration-none">Kidnapped by My Mate</a>
          </li>
          <li>
            <a href="#" className="text-white text-decoration-none">The Alpha and Aurora</a>
          </li>
          <li>
            <a href="#" className="text-white text-decoration-none">The Lost Princess</a>
          </li>
        </ul>
      </div>
      <div className="col-md-4">
        <h6 className="text-uppercase" style={{ color: 'orange' }}>NEWEST COLLECTIONS</h6>
        <ul className="list-unstyled">
          <li>
            <a href="#" className="text-white text-decoration-none">The Millennium Wolves</a>
          </li>
          <li>
            <a href="#" className="text-white text-decoration-none">The Arrangement</a>
          </li>
          <li>
            <a href="#" className="text-white text-decoration-none">The Lycan's Queen</a>
          </li>
          <li>
            <a href="#" className="text-white text-decoration-none">Gideon</a>
          </li>
          <li>
            <a href="#" className="text-white text-decoration-none">Mason</a>
          </li>
          <li>
            <a href="#" className="text-white text-decoration-none">The Lost Princess</a>
          </li>
        </ul>
      </div>
      <div className="col-md-4">
        <h6 className="text-uppercase" style={{ color: 'orange' }}>POPULAR COLLECTIONS</h6>
        <ul className="list-unstyled">
          <li>
            <a href="#" className="text-white text-decoration-none">Gideon</a>
          </li>
          <li>
            <a href="#" className="text-white text-decoration-none">Mason</a>
          </li>
          <li>
            <a href="#" className="text-white text-decoration-none">Kidnapped by My Mate</a>
          </li>
          <li>
            <a href="#" className="text-white text-decoration-none">The Alpha and Aurora</a>
          </li>
          <li>
            <a href="#" className="text-white text-decoration-none">The Lost Princess</a>
          </li>
        </ul>
      </div>
    </div>
    <div className="row mt-5">
      <div className="col-md-6">
        <h6 className="text-uppercase" style={{ color: 'orange' }}>ABOUT US</h6>
        <p className="authpoint_about">
          Authpoint is a platform that promotes talent and allows readers to explore various books in different categories. Writers can upload their books on this website to reach a wider audience.
        </p>
      </div>
      <div className="col-md-3">
        <h6 className="text-uppercase" style={{ color: 'orange' }}>AUTHPOINT FOR WRITERS</h6>
        <ul className="list-unstyled">
          <li>
            <a href="#" className="text-white text-decoration-none">Story Book</a>
          </li>
          <li>
            <a href="#" className="text-white text-decoration-none">Novels</a>
          </li>
          <li>
            <a href="#" className="text-white text-decoration-none">Programming</a>
          </li>
          <li>
            <a href="#" className="text-white text-decoration-none">Movies</a>
          </li>
        </ul>
      </div>
      <div className="col-md-3">
        <h6 className="text-uppercase" style={{ color: 'orange' }}>AUTHPOINT FOR READERS</h6>
        <ul className="list-unstyled">
          <li>
            <a href="#" className="text-white text-decoration-none">Your Account</a>
          </li>
          <li>
            <a href="#" className="text-white text-decoration-none">Contact</a>
          </li>
          <li>
            <a href="#" className="text-white text-decoration-none">Support</a>
          </li>
          <li>
            <a href="#" className="text-white text-decoration-none">Help</a>
          </li>
        </ul>
      </div>
    </div>
    <div className="row mt-5">
      <div className="col text-center">
        <a href="https://www.facebook.com/"><FontAwesomeIcon icon={faFacebook} className="social_icon mx-2" /></a>
        <a href="https://www.instagram.com/"><FontAwesomeIcon icon={faInstagram} className="social_icon mx-2" /></a>
        <a href="https://twitter.com/"><FontAwesomeIcon icon={faTwitter} className="social_icon mx-2" /></a>
        <a href="https://mail.google.com/"><FontAwesomeIcon icon={faGoogle} className="social_icon mx-2" /></a>
      </div>
    </div>
  </div>
  <div className="bg-dark text-white py-3 text-center">
    &copy; {new Date().getFullYear()} Authpoint. All rights reserved.
  </div>
</footer>

  
  );
};

export default Footer;
