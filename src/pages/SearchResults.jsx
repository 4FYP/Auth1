import React from "react";

const SearchResults = ({ results }) => {
  return (
    <>
      {results.map((result) => (
        <div key={result.id}>
          <p>{result.title}</p>
          {/* Display other relevant information */}
        </div>
      ))}
    </>
  );
};

export default SearchResults;
