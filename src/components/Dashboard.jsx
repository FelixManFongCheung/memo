import React, { Component } from "react";
import axios from "axios";
import Card from "./Card";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [],
    };
  }

  componentDidMount() {
    axios
      .get("/notes")
      .then((res) => {
        this.setState({ notes: res.data });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  noteList() {
    return this.state.notes.map((note) => {
      return (
        <Card
          key={note._id}
          id={note._id}
          biggerText={note.biggerText}
          smallerText={note.smallerText}
        />
      );
    });
  }

  render() {
    return <div>{this.noteList()}</div>;
  }
}

export default Dashboard;
