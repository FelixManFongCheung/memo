import React, { Component } from "react";
import { Switch } from "react-router-dom";
import FadeIn from "react-fade-in";
import axios from "axios";

class CreateNote extends Component {
  constructor(prop) {
    super(prop);
    this.state = {
      biggerText: "",
      smallerText: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    if (e.target.name === "biggerText") {
      this.setState({ biggerText: e.target.value });
    } else {
      this.setState({ smallerText: e.target.value });
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    if (!this.state.biggerText && !this.state.smallerText) {
      const warning = document.getElementById("warningBox");
      warning.classList = "warning-show";
    } else {
      const note = this.state;
      axios.post("/notes/add", note).then((res) => console.log(res.data));
      this.setState({ biggerText: "", smallerText: "" });
      window.location = "/";
    }
  }

  render() {
    return (
      <FadeIn className="fade-group">
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="exampleFormControlTextarea1">Bigger Text</label>
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
              type="text"
              value={this.state.biggerText}
              onChange={this.handleChange}
              name="biggerText"
            ></textarea>
          </div>
          <div className="form-group">
            <label htmlFor="exampleFormControlTextarea1">Smaller Text</label>
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
              type="text"
              value={this.state.smallerText}
              onChange={this.handleChange}
              name="smallerText"
            ></textarea>
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
          <br />
          <span id="warningBox" className="warning">
            Please enter something in either box
          </span>
        </form>
      </FadeIn>
    );
  }
}

export default CreateNote;
