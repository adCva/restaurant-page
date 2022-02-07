import React from 'react';

function Button(props) {
  return (
        <button className={props.dark ? "btn btn-dark" : "btn"}>{props.text}</button>
  );
}

export default Button;