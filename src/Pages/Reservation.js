import React from 'react';
import Footer from '../Components/Footer/Footer';
import MainRSV from '../Components/ReservationPage/MainRSV';

function Reservation() {
  return (
        <div>
            <main>
                <MainRSV />
            </main>
            <footer>
                <Footer />
            </footer>
        </div>
  );
}

export default Reservation;