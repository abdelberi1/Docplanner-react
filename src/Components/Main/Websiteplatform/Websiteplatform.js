import React, { Component } from 'react';

import Platforms from './Platforms';
const platformitem=[{
    image:"https://www.docplanner.com/img/flag.png",
    title: "Leader in 10 countries",
    description:"Poland, Turkey, Spain, Italy, Czech Republic, Mexico, Brazil, Colombia, Argentina, and Chile ",
    
  },
  {
    image:"https://www.docplanner.com/img/visits.png",
    title: "1 million  appointments",
    description:"booked last month",
    
  },
  {
    image:"https://www.docplanner.com/img/patients.png",
    title: "30 million unique patients",
    description:"visit us every month",
    
  },
  {
    image:"https://www.docplanner.com/img/doctors.png",
    title: "2 million active doctors",
    description:"trust in our solutions",
    
  },
  ]

class Websiteplatform extends Component {
  render() {
    return (
        <div className="webplatform">
        <div class="platform-col1">
       <h1 class="platform-title">The world's <br/>
            biggest healthcare platform</h1>
       <p className="platforDesc">We work from 6 offices all over the world, bringing Docplanner <br/> Group to life in almost 20 countries. </p>
      <div ><img class="img-star" src="https://www.docplanner.com/img/logo.png"/></div>
     </div>
      <div className="platform-col2">
        <Platforms  Platformlist={platformitem}/>
      </div>
      </div>
    );
  }
}

export default Websiteplatform;
