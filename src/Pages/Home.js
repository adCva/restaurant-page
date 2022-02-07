import React from 'react';
import Header from "../Components/Header/Header";
import About from '../Components/About';
import Highlights from '../Components/Highlights';
import Gatherings from '../Components/Gatherings';
import PreFooter from '../Components/PreFooter/PreFooter';
import Footer from '../Components/Footer/Footer';

function Home() {
  return (
      <div>
        <header>
          <Header title="Exquisite dining since 1989" description="Experience our seasonal menu in beautiful country surroundings. Eat the freshest produce from the comfort of our farmhouse."/>
        </header>
        <main>
          <About />
          <Highlights />
          <Gatherings />
          <PreFooter />
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
  );
}

export default Home;