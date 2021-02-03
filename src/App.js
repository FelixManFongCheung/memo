import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import Dashboard from "./components/Dashboard";
import CreateNote from "./components/CreateNote";
import Nav from "./components/Nav";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Route exact path="/" component={Dashboard} />
        <Route path="/create" component={CreateNote} />
      </div>
    </Router>
  );
}

export default App;
