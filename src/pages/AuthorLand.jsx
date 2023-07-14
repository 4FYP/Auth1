import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import { NavLink } from "react-router-dom";

const AuthorLand = () => {
  return (
    <div className="container">
      <h1 className="text-center mt-5">Authors</h1>
      <div className="row">
        <div className="col-sm-6 col-md-3">
          <div className="card zoom-on-hover">
            <div className="card-body">
              <blockquote className="blockquote">
                <p className="mb-0">"The pen has the power to weave words into worlds, to create characters that live and breathe, and to transport readers to places they've never been. Embrace the magic of writing and unlock the door to limitless possibilities."</p>
                <footer className="blockquote-footer"></footer>
              </blockquote>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-md-3">
          <div className="card zoom-on-hover">
            <div className="card-body">
              <blockquote className="blockquote">
                <p className="mb-0">"Every word you write has the potential to touch a reader's heart, to inspire their imagination, and to ignite their passion for storytelling. Embrace the power of your words and let your stories leave an indelible mark on the world."</p>
                <footer className="blockquote-footer"></footer>
              </blockquote>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-md-3">
          <div className="card zoom-on-hover">
            <div className="card-body">
              <blockquote className="blockquote">
                <p className="mb-0">"Writing is the bridge that connects the depths of your soul to the hearts of your readers. With each stroke of the pen, you have the power to evoke emotions, provoke thoughts, and inspire change. Embrace the art of writing and let your voice resonate in the minds of others."</p>
                <footer className="blockquote-footer"></footer>
              </blockquote>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-md-3">
          <div className="card zoom-on-hover">
            <div className="card-body">
              <blockquote className="blockquote">
                <p className="mb-0">"Authors hold the key to unlocking the mysteries of the human experience. Through your words, you have the ability to captivate minds, challenge beliefs, and shape the world. Embrace the writer within you and embark on a journey that will leave a lasting impact on generations to come."</p>
                <footer className="blockquote-footer"></footer>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center mt-5">
      <NavLink to="/books">
        <button className="btn btn-success btn-lg">Upload Book</button>
      </NavLink>
    </div>
    </div>
  );
};

export default AuthorLand;