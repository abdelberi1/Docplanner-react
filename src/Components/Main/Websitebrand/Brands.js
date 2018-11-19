import React, { Component } from 'react';

import Brandsitems from './Brandsitems';

const brandstitle=[{
    item:"Znanylekarz",
  },
  {
    item:"Doctoralia",
  },
  {
    item:"Miodottore",
  },
  {
    item:"Doktortakvimi",
  },
  {
    item:"Znamylekar",
  }
]

  class Brands extends Component {
    render() {
      return (
      <div className="brands">
          <div class="brands-col1">
              <h1 class="title"> We are a global company <br/>with local culture</h1> 
          </div>
            <div className="titleBrand">
              <Brandsitems  Branditemlist={brandstitle}/>
            </div>
        </div>
      );
    }
  }
  
  export default Brands;
  