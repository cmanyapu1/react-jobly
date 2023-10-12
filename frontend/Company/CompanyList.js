import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import defaultProps from "./defaultProps"
import CompanyCard from "./companycard"
import searchCompanies from "./api.js"

function Companylist() {
  const [companies, setCompanies] = useState(null);


  async function search(name) {
    let companies = await JoblyApi.getCompanies(name);
    setCompanies(companies);
  }


  useEffect(function getCompaniesOnMount() { //what is this
    console.debug("CompanyList useEffect getCompaniesOnMount");
    search();
  }, []);

  
  return (
<div className="CompanyList col-md-8 offset-md-2">
        <SearchForm searchFor={search} />
        {companies.length
            ? (
    <div className="Companylist"> 
      {companies.map(c => (
              <CompanyCard key={c.name}
              handle={c.handle}
              name={c.name}
              description={c.description}
              logoUrl={c.logoUrl}/>
      ))}
     </div>
     ) : (
                <p className="lead">Sorry, no results were found!</p>
            )}
     </div>
    );
  }

export default DogList;
