import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home/index';
import Footer from './components/Footer/index';
import MemberPop from './components/MemPopUp/index';
import Facilities from './pages/Facilities/index';
import SpecialOffers from './pages/SpecialOffers/index';
import Membership from './pages/Membership/index';
import About from './pages/About/index';
import Inquiry from './pages/Inquiry/index';
import Events from './pages/Events/index';
import Navigation from './components/Navigation/Nav';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <>
      <BrowserRouter forceRefresh={true}>
        <ScrollToTop />
        <Navigation />
        <Routes >
          <Route path="/" element={<Home/>} />
          <Route path="/facilities" element={<Facilities/>} />
          <Route path="/offers" element={<SpecialOffers/>} />
          <Route path="/membership" element={<Membership/>} />
          <Route path="/events" element={<Events/>} />
          <Route path="/contact" element={<About/>} />
          <Route path="/inquiry" element={<Inquiry/>} />
        </Routes>
        <Footer/>
        <MemberPop />
      </BrowserRouter>
    </>
  )
}

export default App