import './Reset.css';
import "./Scss/style.css";
import { BrowserRouter, Routes, Route}  from 'react-router-dom';
import Home from './Pages/Home';
import Booking from './Pages/Booking';


function App() {
  return (
    <BrowserRouter basename={window.location.pathname || ''} className="App">
      <Routes>
        <Route exact path="/" element={<Home />}/>
        <Route path="/booking" element={<Booking />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;