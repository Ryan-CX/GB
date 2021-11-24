import React from "react";
const Search = ({ handleChange, handleSubmit }) => {
  return (
    <div className="search">
      <form onSubmit={handleSubmit}>
        <input onChange={handleChange} type="text" placeholder="Search books" />

        <button className="btn" type="submit">
          Search
        </button>
      </form>
    </div>
  );
};
export default Search;
