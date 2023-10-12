import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import JoblyApi from "./api";
import { Link, Redirect } from "react-router-dom";


function CompanyDetail() { 
 const { handle } = useParams();
 const [company, setCompany] = useState(null);

 useEffect(function getCompanyAndJobsForUser() {
   async function getCompany() {
     setCompany(await JoblyApi.getCompany(handle));
    }
    getCompany();
 }, [handle]);
  
  
  return <div>
      <h1>{company.name} </h1>
      <h2>{company.description}</h2>
      <div className="Jobs">
      <JobCardList jobs={company.jobs} />
     </div>
      </div>;
}

export default CompanyDetail;
