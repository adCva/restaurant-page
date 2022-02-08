import React from 'react';
import Footer from '../Components/Footer';
import Decoration from '../Components/BookingPage/Decoration';
import Content from '../Components/BookingPage/Content';

function Booking() {
  return (
        <div>
            <main>
                <Content />
                <Decoration />
            </main>
            <footer>
                <Footer />
            </footer>
        </div>
  );
}

export default Booking;