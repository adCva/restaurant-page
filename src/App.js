import './App.css';
import "./Scss/style.css";
import { BrowserRouter, Routes, Route}  from 'react-router-dom';

import Home from './Pages/Home';
import Reservation from './Pages/Reservation';




function App() {
  return (
    <BrowserRouter  className="App">
      <Routes>
        <Route exact path="/" element={<Home />}/>
        <Route path="/reservation" element={<Reservation />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
