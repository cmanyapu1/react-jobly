import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import UserContext from "../auth/UserContext";
import "./Navigation.css";
import { NavLink } from "react-router-dom";
import { Navbar, Nav, NavItem } from "reactstrap";

function NavBar({ logout }) { //what does logout here do
  const { currentUser } = useContext(UserContext);
  console.debug("Navigation", "currentUser=", currentUser);

  function loggedInNav() {
  return (
    <div>
      <ul><Navbar expand="md">
       <li> <NavLink exact to="/" className="navbar-brand">
        Home       
        </NavLink>
        </li>
        <Nav className="ml-auto" navbar>
        <li>  <NavItem>
            <NavLink to="/companies">Companies</NavLink>
          </NavItem></li>
          <li>  <NavItem>
            <NavLink to="/jobs">Jobs</NavLink>
          </NavItem></li>
          <li>   <NavItem>
            <NavLink to="/profile">profile</NavLink>
          </NavItem></li>
        </Nav>
        <li className="nav-item">
            <Link className="nav-link" to="/" onClick={logout}>
              Log out {currentUser.first_name || currentUser.username}
            </Link>
          </li>
      </Navbar>
      </ul>
    </div>
  );
}

function loggedOutNav() {
  return (
      <ul className="navbar-nav ml-auto">
        <li className="nav-item mr-4">
          <NavLink className="nav-link" to="/login">
            Login
          </NavLink>
        </li>
        <li className="nav-item mr-4">
          <NavLink className="nav-link" to="/signup">
            Sign Up
          </NavLink>
        </li>
      </ul>
  );
}

return (
    <nav className="Navigation navbar navbar-expand-md">
      <Link className="navbar-brand" to="/">
        Jobly
      </Link>
      {currentUser ? loggedInNav() : loggedOutNav()}
    </nav>
);
}

export default NavBar;
