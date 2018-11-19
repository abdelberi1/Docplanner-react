import React from 'react'



const Branditem=(props)=>
    <div className="branditem">
      <a href="#"> <img class="img-brand" src="https://www.docplanner.com/img/logo.png" alt=""/>
        <span className="item">{props.branditem.item}</span></a>
    </div>


  export default Branditem ;