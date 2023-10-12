import React from "react";
import JobCard from "./jobcard";


function JobCardList({ jobs, apply }) { //why do you have to use apply
    console.debug("JobCardList", "jobs=", jobs);
  
    return (
        <div className="JobCardList">
          {jobs.map(job => (
              <JobCard
                  key={job.id}
                  id={job.id}
                  title={job.title}
                  salary={job.salary}
                  equity={job.equity}
                  companyName={job.companyName}
              />
          ))}
        </div>
    );
  }
  
  export default JobCardList;
  