import React from 'react'
import '../../App.css'
class Navbar extends React.Component{
    render() {
        return (
<div className="navBar">
<div className="logo"><a href="#"><img src="https://www.docplanner.com/img/logo-default-group-en.svg?v=1" className="websiteLogo"/></a></div>
<nav className="navigation">
<ul className="user-nav">
           <li className="about"><a href="#">About us</a></li>
           <li className="career"><a href="#">Career</a></li>
           <li className="departement-list"><a href="#">Departement</a></li>
</ul>
</nav>
</div>
)
    }
}
export default Navbar