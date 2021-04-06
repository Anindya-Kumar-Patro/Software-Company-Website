import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import about from '../images/about.png'

function About() {
    return (
        <>
        <div id="about">
            <div className="about-image">
                <img src={about} alt=''/>
            </div>
            <div className="about-text">
                <h2>About Us</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt .</p>
            </div>
        </div>
        </>
    )
}

export default About
