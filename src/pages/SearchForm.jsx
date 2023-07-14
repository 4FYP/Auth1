import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SearchForm = ({ onSearch }) => {
  const [name, setName] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(name);
    navigate('/search'); // Navigate to the search results route
  };

  return (
    <form onSubmit={handleSearch}>
      <input
        type="text"
        placeholder="Search by name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button type="submit">Search</button>
    </form>
    
  );
};

export default SearchForm;



// import React, { useState } from 'react';
// import { useNavigate } from "react-router-dom";

// const SearchForm = ({ onSearch }) => {
//   const [name, setName] = useState('');

//   const handleSearch = (e) => {
//     e.preventDefault();
//     onSearch(name);
    
//   };

//   return (
//     <form onSubmit={handleSearch}>
//       <input
//         type="text"
//         placeholder="Search by name"
//         value={name}
//         onChange={(e) => setName(e.target.value)}
//       />
//       <button type="submit">Search</button>
//     </form>
//   );
// };

// export default SearchForm;
