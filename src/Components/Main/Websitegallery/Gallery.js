import React from 'react'
import Galleryitem from './Galleryitem';



  const Gallery = (props) =>
    props.galleryList.map((galitem, i)=>
    <div key={i} className="galleryItem">
        <Galleryitem  gallery_item={galitem}/>
    </div>
    )

    export default Gallery;