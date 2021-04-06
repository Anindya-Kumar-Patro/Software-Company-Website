import React from 'react'
import { Container , Row , Col, Card ,Button} from 'react-bootstrap'
import CardComp from './CardComp'
import wd from '../images/wd.jpeg'
import {FaDesktop} from 'react-icons/fa'
import {FaMobileAlt} from 'react-icons/fa'
import {GrDeploy} from 'react-icons/gr'
import {IoIosGlobe} from 'react-icons/io'
import {BiClipboard} from 'react-icons/bi'

function Services() {
    return (
        <>
        <div className="services py-5">
            <div className="container py-5">
                <h1 className="text-center pb-5">Services</h1>
                <div className="row pb-3">
                    <div className="col-lg-4 mb-3">
                        <div className="card text-center">
                            <div className="card-body">
                                <div className="circle">
                                    <span><FaDesktop/></span>
                                </div>
                                <h4 className="font-weight-bold pb-2">UI/UX Design</h4>
                                <p>
                                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 

                                </p>
                            </div>
                        </div>
      
                        
                    </div>
                    <div className="col-lg-4 mb-3">
                        <div className="card text-center">
                            <div className="card-body">
                                <div className="circle">
                                    <span><FaMobileAlt/></span>
                                </div>
                                <h4 className="font-weight-bold pb-2">Mobile Developement</h4>
                                <p>
                                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 

                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 mb-3">
                        <div className="card text-center">
                            <div className="card-body">
                                <div className="circle">
                                    <span><IoIosGlobe/></span>
                                </div>
                                <h4 className="font-weight-bold pb-2">Web Developement</h4>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 

                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 mb-3">
                        <div className="card text-center">
                            <div className="card-body">
                                <div className="circle">
                                    <span><GrDeploy/></span>
                                </div>
                                <h4 className="font-weight-bold pb-2">Deployment and Maintainence</h4>
                                <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 mb-3">
                        <div className="card text-center">
                            <div className="card-body">
                                <div className="circle">
                                    <span><BiClipboard/></span>
                                </div>
                                <h4 className="font-weight-bold pb-2">Software Developement</h4>
                                <p>
                                 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                                 Lorem ipsum dolor sit amet,consectetur adipiscing elit

                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </>
    )
}

export default Services
