import React, { useState } from "react";
import "./SearchForm.css";


function SearchForm({ searchfor }) {//when do you brackets inside
const [searchTerm, setSearchTerm] = useState("")

function handleSubmit(evt) {
    // take care of accidentally trying to search for just spaces
    evt.preventDefault();
    searchFor(searchTerm.trim() || undefined);
    setSearchTerm(searchTerm.trim());
  }

  function handleChange(evt) {
    setSearchTerm(evt.target.value);
  }

  return (
<form id="search_form" onSubmit={handleSubmit}>
        <label htmlFor="searchbar"> Search</label>
        <div>
            <input 
            name="searchbar" classname="searchbar" autofocus
            id = "searchbar"
            type= "text"
            value={searchTerm}
            onChange={handleSubmit}
/>
    </div>
    <button type="submit"> Submit</button>
</form>
  )
}

export default SearchForm;
