import React from "react";
import Header from './headerComponent';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from "./homeComponent";
import Footer from "./footerComponent"
import  OurWork  from "./OurWork";
import { About } from "./aboutUs";
import History from "./History.js";
import Contact from "../pages/ContactUs"
import Team from "./Team";
import Sport from "./Sport";
import Sanitation from "./Sanit";
import AOS from 'aos';
// import 'aos/dist/aos.css'; 
import Cooperative from "./Cooperative";
import Fundraise from "./fundraise";
import Compaign from "./compaign";
import Donate from "./donate";
import Gallery from "../pages/Gallery"
// import Notfound from "./Notfound";
AOS.init();

 class MainPage extends React.Component {
  render() {
    
    return (
      <Router>
        <Header/>
        <Routes>
          <Route path='/home' element={<Home />} />
          <Route path='/education' element={<OurWork />} />
          <Route path='/about' element={<About />} />
          <Route path='/team' element={<Team />} />
          <Route path='/health-and-sanitation' element={<Sport />} />
          <Route path='/social-economic-integration' element={<Cooperative />} />
          <Route path='/sports' element={<Sanitation />} />
          <Route path='/history' element={<History />} />
          <Route path='/contact' element={<Contact />} />       
          <Route path='/gallery' element={<Gallery />} />       
          <Route path='/fundraising' element={<Fundraise />} />
          <Route path='/compaign' element={<Compaign />} />
          <Route path='/donate' element={<Donate />} />
          <Route path='*' element={<Navigate to='/home' replace />} />
        </Routes>
        <Footer/>
      </Router>
    );
  }
}
export default MainPage
