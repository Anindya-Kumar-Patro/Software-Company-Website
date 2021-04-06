import React from 'react'
import Navbar from './Navbar'

function Header() {
    return (
        <div id="main">
            <Navbar/>
            <div className="name">
                <h1><span>Launch Your App</span> With Confidence and Creativity</h1>
              <p className="details">
                This is made by Anindya Kumar Patro
                </p>
                <a href="#" className="cv-btn">Contact</a>
            </div>
        </div>
    )
}

export default Header
