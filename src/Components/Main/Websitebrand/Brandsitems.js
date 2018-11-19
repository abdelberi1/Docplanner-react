import React from 'react'
import Branditem from './Branditem';


const Brandsitems = (props) =>
    props.Branditemlist.map((currentitem, i) =>
        <div key={i} className="Brandsitem">
        <Branditem  branditem={currentitem}/>
        </div>
    )






export default Brandsitems
