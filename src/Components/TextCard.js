import React from 'react';

function TextCard(props) {
  return (
        <div className={props.cordOnBlackBg ? "text-card-container text-card-white" : "text-card-container"}>
            <img src="./images/pattern-divide.svg" alt="Divide Pattern"/>
            <h2>{props.textCardTitle}</h2>
            <p>{props.textCardDesc}</p>
        </div>
    );
}

export default TextCard;