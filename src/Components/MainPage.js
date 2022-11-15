import React from "react";
import Header from './headerComponent';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
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
      <Router >
        <Header/>
          <Switch>
            <Route path='/home' component={()=> <Home />} />
            <Route path='/education' component={()=> <OurWork />} />
            <Route path='/about' component={()=> <About /> }/>
            <Route path='/team' component={()=> <Team/>} />
            <Route path='/health-and-sanitation' component={()=> <Sport />} />
            <Route path='/social-economic-integration' component={()=> <Cooperative />} />
            <Route path='/sports' component={()=> <Sanitation />} />
            <Route path='/history' component={()=> <History />}/>
            <Route exact path='/contact' component={() => <Contact  />} />       
            <Route exact path='/gallery' component={() => <Gallery  />} />       
            <Route path='/fundraising' component={()=> <Fundraise />} />
            <Route path='/compaign' component={()=> <Compaign />} />
            <Route path='/donate' component={()=> <Donate />} />
            <Redirect to='/home'/>
          </Switch>
        <Footer/>
      </Router>
    );
  }
}
export default MainPage
