import React from "react";

const SearchComponent = ({searchValue, setSearchValue}) => {
    return (
        <input type = "text"
               className = {"form-control search-input"}
               placeholder={"type to search"}
               value={searchValue}
               onChange={event => setSearchValue(event.target.value)}
        />
    );


};
export default SearchComponent;