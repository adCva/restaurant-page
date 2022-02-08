import React from 'react';
import Header from "../Components/MainPage/Header";
import About from '../Components/MainPage/About';
import Highlights from '../Components/MainPage/Highlights';
import Facilities from '../Components/MainPage/Facilities';
import PreFooter from '../Components/MainPage/PreFooter';
import Footer from '../Components/Footer';

function Home() {
  return (
      <div>
        <header>
          <Header title="Exquisite dining since 1989" description="Experience our seasonal menu in beautiful country surroundings. Eat the freshest produce from the comfort of our farmhouse."/>
        </header>
        <main>
          <About />
          <Highlights />
          <Facilities />
          <PreFooter />
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
  );
}

export default Home;