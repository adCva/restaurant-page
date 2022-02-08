import React from 'react';
import Button from '../Button';

function PreFooter() {
  return (
      <div className="preFooter-wrapper">
          <div className="preFooter-container">
              <h2>Ready to make a reservation?</h2>
              <Button text="book a table" dark={false} destination="reservation" />
          </div>
      </div>
  );
}

export default PreFooter;