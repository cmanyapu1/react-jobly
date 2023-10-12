import React from "react";
import { Link } from 'react-router-dom';
import UserContext from "../auth/UserContext";


function Home() {
  const { currentuser } = useContext(UserContext);

  return (
    <div className="Homepage">

      <p>Jobly</p>
      <p>All the jobs in one, convenient place.</p>
      {currentuser ? (
      <p> Welcome back {currentuser.name}</p>
       ) : ( 
      <p>
        <Link to="/login">
          <button>Log in </button>
            </Link>
            <Link to="/signup"><button>Sign up </button>
            </Link>
            </p>
            )}
            </div>

  );
}

export default Home;
