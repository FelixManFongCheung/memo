import React, { Component } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";

class Nav extends Component {
  constructor(prop) {
    super(prop);
    this.state = {
      toggle: false,
      link: "",
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState((prev) => ({ toggle: !prev.toggle }));
    this.state.toggle === true
      ? this.setState({ link: "/create" })
      : this.setState({ link: "/" });
  }

  render() {
    return (
      <Link
        to={this.state.link}
        className="fas fa-bars fa-2x"
        onClick={this.handleClick}
      ></Link>
    );
  }
}

export default Nav;
