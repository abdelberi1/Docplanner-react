import React, { Component } from 'react';
import './App.css';
import Navbar from './Components/Header/Navbar';
import Websitedescreption from './Components/Main/Websitedescreption';
import Card from './Components/Main/Websitecards/Card';
import Websiteplatform from './Components/Main/Websiteplatform/Websiteplatform';
import Brands from './Components/Main/Websitebrand/Brands'
import Vision from './Components/Main/Vision'
import Websitegallery from './Components/Main//Websitegallery/Websitegallery'
import Footer from './Components/Footer/Footer'

const cardscontent=[{
  destination: "For patient",
  description:"Find a doctor, book a visit and solve any health-related doubt",
  img:"https://www.docplanner.com/img/screen-marketplace@2x.png",
  showCoutryList: true,
  color: "colorpatient"
},
{
  destination: "For doctors",
  description:"Save time managing visits and cut no-shows by half",
  img:"https://www.docplanner.com/img/screen-saas@2x.png",
  showCoutryList: false,
  color: "colordoctor"
}]




class App extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <Websitedescreption/>
        <div className="services">
        <Card cardList={cardscontent}/>
        </div>
        <Brands/>
        <Websiteplatform/>
        <Vision/>
        <Websitegallery/>
        <Footer/>
      </div>

    );
  }
}

export default App;
