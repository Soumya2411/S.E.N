import './Navbar.css'



import React from 'react'

function Navbar() {
  return (
    <div>
      
  


<nav className="navbar navbar-expand-custom navbar-mainbg">
        <a className="navbar-brand navbar-logo" href="#"></a>
        <button className="navbar-toggler" type="button" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <i className="fas fa-bars text-white"></i>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
                <div className="hori-selector"><div className="left"></div><div className="right"></div></div>
                <li className="nav-item">
                    <a className="nav-link" href=" "><i className="fas fa-tachometer-alt"></i>Hello User!</a>
                </li>
                <li className="nav-item active">
                    <a className="nav-link" href=" "><i className="far fa-address-book"></i>Tell us more questions</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href=" "><i className="far fa-clone"></i>What we do?</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href=" "><i className="far fa-calendar-alt"></i>Contact us</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href=" "><i className="far fa-chart-bar"></i>Intimate Hygiene</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href=" "><i className="far fa-copy"></i>who we are?</a>
                </li>
            </ul>
        </div>
    </nav>
    </div>
  )
}


    export default Navbar