import React from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import Home from "./components/Home/Home";
import Profile from "./components/Profile/Profile";
import Settings from "./components/Settings/Settings";
import Navbar from "./components/Navbar/Navbar";
import './App.scss';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/settings" component={Settings} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
