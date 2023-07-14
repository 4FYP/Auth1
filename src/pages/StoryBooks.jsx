import { NavLink } from 'react-router-dom'
import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';


const StoryBooks = (props) => {

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


  return (
    <div>
    <div className={`App ${theme}`}>
      <button onClick={toggleTheme}>
        {theme === 'light' ? (
          <FontAwesomeIcon icon={faMoon} />
        ) : (
          <FontAwesomeIcon icon={faSun} />
        )}
        
      </button>
    </div>
    <div className='row'>
    { props.Data.map( (ele) => {
        return (
        <div key={ele.id} className="col-3" style={{margin: "30px"}}>
            <NavLink to={`getdata/${ele.id}`} >     
                <img src={ele.image} /> <br/>
                <span>{ele.name}</span> <br/>
                <span>{ele.price}</span> <br/>
            </NavLink>
        </div>
        )
        }
    )}
    </div>
    </div>
  )
  
}

export default StoryBooks