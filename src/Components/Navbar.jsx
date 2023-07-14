// import React, { Component } from 'react';
// import { NavLink } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min.js';
// import { Dropdown } from 'react-bootstrap';
// import People from '../img/people.jpg';
// import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import SearchForm from '../pages/SearchForm';


// /// original

// class Navbar extends Component {
  
//   state = { clicked: false };

//   handleClick = () => {
//     this.setState({ clicked: !this.state.clicked });
//   };
//   /////////////////
  

//   render() {
//     const isLoggedIn = true; // replace with actual login status

//     return (
//       <nav className="navbar navbar-expand-lg navbar-light navbarBackgroundColor hit">
//         {/* <SearchForm onSearch={searchByName} /> */}
        
//         <NavLink className="navbar-brand" to="/">
//           <h6 className="orange-text">Authpoint</h6>
//         </NavLink>
//         <button className="navbar-toggler" type="button" onClick={this.handleClick}>
//           <span className="navbar-toggler-icon"></span>
//         </button>

//         <div className={this.state.clicked ? 'collapse navbar-collapse show' : 'collapse navbar-collapse'}>
//           <ul className="navbar-nav ml-auto h">
//             {isLoggedIn ? (
//               <>
//               <li>
                
//               </li>
//                 <li className="nav-item">
//                   <NavLink className="nav-link orange-text" to="/UploadBook">
//                     Upload Book
//                   </NavLink>
//                 </li>
//                 <li className="nav-item">
//                   <button className="btn btn-link nav-link orange-text">Search</button>
//                 </li>
//                 <li className="nav-item">
//                   <NavLink className="btn btn-link nav-link orange-text" to="/login">
//                     Sign In
//                   </NavLink>
//                 </li>
//                 <li className="nav-item">
//                   <button className="btn btn-link nav-link orange-text">Sign Out</button>
//                 </li>
//                 <li className="nav-item">
//                   <NavLink className="btn btn-link nav-link orange-text" to="/Bidding">
//                     Bidding
//                   </NavLink>
//                 </li>
//                 <li className="nav-item">
//                   <NavLink className="nav-link orange-text" to="/Add">
//                     Add Books
//                   </NavLink>
//                 </li>
//                 <li className="nav-item">
//                   <NavLink className="nav-link orange-text" to="/GigForm">
//                     Gig
//                   </NavLink>
//                 </li>
//                 <li className="nav-item ml-auto">
//                   <Dropdown>
//                     <Dropdown.Toggle variant="success" id="dropdown-basic">
//                       <h6 className="orange-text">Free Books</h6>
//                     </Dropdown.Toggle>

//                     <Dropdown.Menu>
//                       <Dropdown.Item href="/Stories">Stories</Dropdown.Item>
//                       <Dropdown.Item href="/Signup">Programming</Dropdown.Item>
//                       <Dropdown.Item href="/Mainpage">Novels</Dropdown.Item>
//                     </Dropdown.Menu>
//                   </Dropdown>
//                 </li>
//                 <li className="nav-item ml-auto">
//                   <Dropdown>
//                     <Dropdown.Toggle variant="success" id="dropdown-basic">
//                       <button
//                         className="nav-link btn btn-link orange-text"
//                         id="navbarDropdown"
//                         data-toggle="dropdown"
//                         aria-haspopup="true"
//                         aria-expanded="false"
//                       >
//                         <img src={People} alt="Profile" className="people_logo" />
//                       </button>
//                     </Dropdown.Toggle>

//                     <Dropdown.Menu>
//                       <Dropdown.Item href="/UploadBook">Profile</Dropdown.Item>
//                       <Dropdown.Item href="/Signup">Change Password</Dropdown.Item>
//                       <Dropdown.Item href="/Mainpage">Log Out</Dropdown.Item>
//                     </Dropdown.Menu>
//                   </Dropdown>
//                 </li>
//               </>
//             ) : (
//               <>
//                 <li className="nav-item">
//                   <button className="btn btn-link nav-link orange-text">Sign In</button>
//                 </li>
//                 <li className="nav-item">
//                   <button className="btn btn-link nav-link orange-text">Sign Up</button>
//                 </li>
//               </>
//             )}
//           </ul>
//         </div>
//       </nav>
//     );
//   }
// }

// export default Navbar;


//DSFVLSDJCHVSDJHVJHSDH

import React, { useState, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Dropdown } from 'react-bootstrap';
import People from '../img/people.jpg';
import SearchForm from '../pages/SearchForm';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';


const Navbar = ({ onSearch }) => {

  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);



  const [clicked, setClicked] = useState(false);
  const [name, setName] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(name);
    navigate('/search');
  };

  const handleClick = () => {
    setClicked(!clicked);
  };

  const isLoggedIn = true; // replace with actual login status

  return (
    <nav className="navbar navbar-expand-lg navbar-light navbarBackgroundColor hit">
      <NavLink className="navbar-brand" to="/">
      <h3 className="orange-text cool-heading">Authpoint</h3>

      </NavLink>
      <button className="navbar-toggler" type="button" onClick={handleClick}>
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className={clicked ? 'collapse navbar-collapse show' : 'collapse navbar-collapse'}>
        <ul className="navbar-nav ml-auto h">
          {isLoggedIn ? (
            <>
      <li className="nav-item">
        <form className="form-inline" onSubmit={handleSearch}>
          <div className="input-group">
          <div className="search-bar">
        <input
          type="text"
          className="form-control rounded-0"
          placeholder="Search here...."
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{ fontWeight: '',fontSize: '10', height: '27px', backgroundColor: '', color: 'black' }}
        />

        <button type="submit" className="search-button" style={{ color: 'black' , backgroundColor: ''}}>
          <FontAwesomeIcon icon={faSearch} className="search-icon" style={{ color: 'black' }} />
        </button>
      </div>


    </div>
  </form>
</li>
            
              <li className="nav-item">
                <NavLink className="nav-link orange-text mb-3" to="/UploadBook">
                  Upload Book
                </NavLink>
              </li>
              
              <li className="nav-item">
                <NavLink className="btn btn-link nav-link orange-text mb-3" to="/login">
                  Sign In
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="btn btn-link nav-link orange-text mb-3" to="/Bidding">
                  Bidding
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link orange-text mb-3" to="/Add">
                  Add Books
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link orange-text mb-3" to="/GigForm">
                  Gig
                </NavLink>
              </li>
              <li className="nav-item ml-auto">
      <Dropdown>
        <Dropdown.Toggle variant="" id="dropdown-basic" className="mt-3">
          <h6 className="orange-text">Free Books</h6>
        </Dropdown.Toggle>

        <Dropdown.Menu className="mt-0">
          <Dropdown.Item href="/Stories">Stories</Dropdown.Item>
          <Dropdown.Item href="/Signup">Programming</Dropdown.Item>
          <Dropdown.Item href="/Mainpage">Novels</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </li>
              <li className="nav-item ml-auto">
                <Dropdown>
                  <Dropdown.Toggle variant="" id="dropdown-basic">
                    <button
                      className="nav-link btn btn-link orange-text"
                      id="navbarDropdown"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <img src={People} alt="Profile" className="people_logo" />
                    </button>
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item href="/UploadBook">Profile</Dropdown.Item>
                    <Dropdown.Item href="/Signup">Change Password</Dropdown.Item>
                    <Dropdown.Item href="/Mainpage">Log Out</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </li>
            </>
          ) : (
            <>
              <li className="nav-item">
                <button className="btn btn-link nav-link orange-text">Sign In</button>
              </li>
              <li className="nav-item">
                <button className="btn btn-link nav-link orange-text">Sign Up</button>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
