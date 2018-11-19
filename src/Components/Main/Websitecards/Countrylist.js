import React from 'react'

class Countrylist extends React.Component{
    render() {
        return (
<div className="selectCountry">
      <a href="#"><select class="countries-list">
        <option> Choose Country</option>
        <option value="">France</option>
        <option value="">USA</option>
        <option value="">Tunisia</option>
        <option value="">Canada</option>  
    </select></a> 
     </div>


        )
    }
}
export default Countrylist