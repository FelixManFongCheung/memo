import axios from "axios";
import React, { useState } from "react";
import Draggable from "react-draggable";

function Card(props) {
  const nodeRef = React.useRef(null);

  const setStorage = (e, data) => {
    localStorage.setItem(
      [props.id],
      JSON.stringify({
        x: data.x,
        y: data.y,
      })
    );
  };

  const getStorage = (id) => {
    const data = localStorage.getItem([id]);
    if (data) {
      return JSON.parse(data);
    }
  };

  const onDelete = (id) => {
    axios
      .delete("/notes/" + id)
      .then((res) => {
        console.log(res.data);
      })
      .then((window.location = "/"));
  };

  return (
    <Draggable
      nodeRef={nodeRef}
      onDrag={setStorage}
      defaultPosition={getStorage(props.id)}
    >
      <div ref={nodeRef} className="card-body card draggable-card">
        <h1 className="card-title"> {props.biggerText} </h1>
        <h6 className="card-subtitle mb-2 text-muted">{props.smallerText}</h6>
        <i className="fas fa-trash" onClick={() => onDelete(props.id)}></i>
      </div>
    </Draggable>
  );
}

export default Card;
