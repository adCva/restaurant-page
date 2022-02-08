import React from 'react';

function Footer() {
  return (
    <div className="footer-container">
        <img src="./images/logo.svg" alt="Logo" />
        <div className="footer-group">
            <p>Marthwaite, Sedbergh</p>
            <p>Cumbria</p>
            <p>+00 44 123 4567</p>
        </div>
        <div className="footer-group">
            <p>Open Times</p>
            <p>Mon - Fri: 09:00 AM - 10:00 PM</p>
            <p>Sat - Sun: 09:00 AM - 11:30 PM</p>
        </div>
    </div>
  );
}

export default Footer;