import React from 'react';
import { Link } from "react-router-dom";

function Button(props) {
  return (
        <Link to={`${props.destination}`} className={props.dark ? "btn btn-dark" : "btn"}>{props.text}</Link>
  );
}

export default Button;