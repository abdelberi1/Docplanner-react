import React from 'react'



const Galleryitem=(props)=>
    <div className="gallery_item">
        <a href="#"><img className="img_city" src={props.gallery_item.image}/>
          <div className="info">
            <h4 className="city">{props.gallery_item.city}</h4>
            <p className="see-openings">See openings</p>
          </div>
        </a>
    </div>



  export default Galleryitem ;