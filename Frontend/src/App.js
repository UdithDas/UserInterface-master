
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HeroSection from './components/HeroSection';
import Signup from './components/Signup';
import MapComponent from './components/Map';





function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
      <Route path='/' element={<HeroSection/>} ></Route>
      <Route path='/' element={<Footer/>} ></Route>
      <Route path='/sign-up' element={<Signup/>} ></Route>
      <Route path='/map' element={<MapComponent/>} ></Route>
      </Routes>
      <Footer/>
      </BrowserRouter>
  );
}

export default App;