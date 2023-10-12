import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import defaultProps from "./defaultProps"
import JobCard from "./companycard"
import JoblyApi from "../api/api";
import JobCardList from "./jobcardlist"

function Joblist() {
  const [jobs, setJobs] = useState(null);


  async function search(title) {
    let jobs = await JoblyApi.getJobs(title);
    setJobs(jobs);
  }


  useEffect(function getJobsOnMount() { //what is this
    console.debug("CompanyList useEffect getCompaniesOnMount");
    search();
  }, []);

  
  return (
<div className="CompanyList col-md-8 offset-md-2">
        <SearchForm searchFor={search} />
        {jobs.length
            ? <JobCardList jobs={jobs} />
      :  <p className="lead">Sorry, no results were found!</p>
            }
     </div>
    );
  }

export default Joblist;
