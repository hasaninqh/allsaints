import React, { Component } from 'react';
import {BrowserRouter,Route} from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer"
import Home from "./components/Home";
import Earlyyears from "./components/Earlyyears";
import Ofested from "./components/Ofested";
import Funding from "./components/Funding";
import Testimonials from "./components/Testimonials";
import Fundraising from "./components/Fundraising";
import Gallery from "./components/Gallery";
import TermDates from "./components/TermDates";
import ContactUs from "./components/ContactUs";

class App extends Component {
  render() {
    return <BrowserRouter>
        <div className="App">
          <div className="row blue lighten-5">
            <Header />

       
            <div className="container s12 m6 l8 white">
              <Route exact path="/" component={Home} />
              <Route path="/Earlyyears" component={Earlyyears} />
              <Route path="/Ofested" component={Ofested} />
              <Route path="/Funding" component={Funding} />
              <Route path="/Testimonials" component={Testimonials} />
              <Route path="/Fundraising" component={Fundraising} />
              <Route path="/Gallery" component={Gallery} />
              <Route path="/TermDates" component={TermDates} />
              <Route path="/ContactUs" component={ContactUs} />
            </div>
       
            <Footer />
          </div>
        </div>
      </BrowserRouter>; 
  }
}

export default App;
