import React, { Component } from 'react';
import Gallery from './Gallery';
const galleryitem=[{
    image:"https://www.docplanner.com/images/warsaw.png",
    city: "Warsaw",
  },
  {image:"https://www.docplanner.com/images/barcelona.png",
  city: "Barcelona",
},
 { image:"https://www.docplanner.com/images/istanbul.png",
    city: "Istanbul",
  },
  {image:"https://www.docplanner.com/images/rome.png",
    city: "Rome",
  },
  {image:"https://www.docplanner.com/images/mexico-city.png",
    city: "Mexico City",
  },
  {image:"https://www.docplanner.com/images/curitiba.png",
    city: "Curitiba",
  },
  ]

  class Websitegallery extends Component {
    render() {
      return (
          <div className="webgallery">
          <Gallery  galleryList={galleryitem}/>
        </div>
      );
    }
  }
  
  export default Websitegallery;
  