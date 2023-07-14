import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';

function DarklightMode() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    if (theme === 'light3') {
      setTheme('dark3');
    } else {
      setTheme('light3');
    }
  };

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <div className={`App ${theme}`}>
      <button onClick={toggleTheme}>
        {theme === 'light' ? (
          <FontAwesomeIcon icon={faMoon} />
        ) : (
          <FontAwesomeIcon icon={faSun} />
        )}
        
      </button>
    </div>
  );
}

export default DarklightMode;
