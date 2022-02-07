import React from 'react';
import Footer from '../Components/Footer/Footer';
import DecorationSection from '../Components/ReservationPage/DecorationSection';
import MainRSV from '../Components/ReservationPage/MainRSV';

function Reservation() {
  return (
        <div>
            <main>
                <MainRSV />
                <DecorationSection />
            </main>
            <footer>
                <Footer />
            </footer>
        </div>
  );
}

export default Reservation;