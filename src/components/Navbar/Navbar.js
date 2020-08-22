import React from "react";
import { NavLink, BrowserRouter as Router } from "react-router-dom";
import logo from "../../Assets/img/logo.jpeg";
import Profile from "../../Assets/img/profile.jpeg";
import Home from "../../Assets/img/home.jpeg";
import Settings from "../../Assets/img/settings.jpeg";

export default function Navbar() {
  return (
    <div className="navbar">
      <img className="logo" alt="logo" src={logo} />
      <Router>
        <NavLink className="nav-item" activeClassName="nav-active" exact to="/">
          <img className="nav-icon" alt="home" src={Home} /> <p>Home</p>
        </NavLink>
        <NavLink
          className="nav-item"
          activeClassName="nav-active"
          exact
          to="/profile"
        >
          <img className="nav-icon" alt="profile" src={Profile} /> <p>Profile</p>
        </NavLink>
        <NavLink
          className="nav-item"
          activeClassName="nav-active"
          exact
          to="/settings"
        >
          <img className="nav-icon" alt="settings" src={Settings} /> <p>Settings</p>
        </NavLink>
      </Router>
    </div>
  );
}
