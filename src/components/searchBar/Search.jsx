import React from "react";
import './Search.css';
const Search = ({ handleSearch }) => {
    return (
        <div className="searchcontainer">
        <div className="same-line">
            <input 
                className="text-cont" 
                id="search-bar" 
                type="text" 
                placeholder="Search for projects" 
                onChange={(e) => handleSearch(e.target.value)} 
            />
            <div className="search-icon">
                <img src="./src/assets/svg/search.svg" alt="Search Icon" />
            </div>
        </div>
        </div>
    );
};

export default Search;