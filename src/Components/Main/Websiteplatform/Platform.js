import React from 'react'



const Platform=(props)=>
    <div className="platform">
        <img className="flag" src={props.platform.image}/>
         <h3 className="platformTitle">{props.platform.title}</h3>
         <p className="platforDesc">{props.platform.description}</p>
    </div>


  export default Platform ;