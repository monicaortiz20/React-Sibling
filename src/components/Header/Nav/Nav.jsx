import React, { Component } from "react";
import { Link } from "react-router-dom";

import { userContext } from '../../../context/userContext';


class Nav extends Component {
  render() {
    return <nav className="nav-bar">
      <Link to="/">Home</Link>

      <userContext.Consumer> 
        {({ logout, email }) => email ?
          <span>Hola, {email} <button variant="contained" size="small" onClick={logout}>Logout</button></span>
          : ""
        }
      </userContext.Consumer>
    </nav>;
  }
}

export default Nav;
