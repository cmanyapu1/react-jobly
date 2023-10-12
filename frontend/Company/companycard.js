import React, { useState } from "react";
import { Redirect, Link } from 'react-router-dom'; // Import Redirect and Link

import { Link, Redirect } from "react-router-dom";


function CompanyCard({name, description, logoUrl, handle}) { //name, description, logoUrl, handle
    if (!company) return <Redirect to="/companies"/>

  return (
    <Link to={`"/companies/${handle}"`}>
  <div>
      <h1>{name} </h1>
      <p>{description}</p>
      <img src = {logoUrl}></img>
    </div>      </Link>
  );
}

export default CompanyCard;
