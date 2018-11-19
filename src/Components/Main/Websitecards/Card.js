import React from 'react'
import Countrylist from './Countrylist';


const Card = (props) =>
    props.cardList.map((card, i) =>
        <div key={i} className={`${card.color} cardDes `}>
            <span className="dest">{card.destination}</span>
            <p className="descp">{card.description}</p>
            {card .showCoutryList && <Countrylist/>}
            <img className="image" src={card.img} />
        </div>
    )






export default Card