import React from 'react';
import Button from '../Button';

function Header(props) {
  return (
      <div className="header-wrapper">
        <div className="header-container">
          <img src="./images/logo.svg" alt="Logo" />
          <h1 className="header-title">{props.title}</h1>
          <p className="header-description">{props.description}</p>
          <Button text="book a table" dark={false} destination="booking" />
        </div>
      </div>
  );
}

export default Header;