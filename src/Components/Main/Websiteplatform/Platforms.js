import React from 'react'
import Platform from './Platform';


const Platforms = (props) =>
    props.Platformlist.map((currentplatform, i) =>
        <div key={i} className="platformitem">
        <Platform  platform={currentplatform}/>
        </div>
    )






export default Platforms