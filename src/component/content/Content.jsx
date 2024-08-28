import React from 'react'
import one from "../../img/one.jpg"
import leadership from "../../img/leadership.jpg"
import business from "../../img/business.jpg"
import travel from "../../img/travel.jpg"
import health from "../../img/health.jpg"
import life from "../../img/life.jpg"
import { Link } from 'react-router-dom';
import HouseIcon from '@mui/icons-material/House';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import BusinessIcon from '@mui/icons-material/Business';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import LocalAirportIcon from '@mui/icons-material/LocalAirport';
import Business from '../business/Business'
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';
import "./Content.css"
import { Container, Col, Row } from 'react-bootstrap'

function Content() {
  return (
    
    <div className="content pt-100 pb--70">
        <div className="">
            <Container>
                <div className="content-title">
                    <span>Our Service</span>
                    <h2>Types of Surety Insurance</h2>
                    <p>Oppor ipsum suspendice consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore mua. Quis ipsum suspendices gravida.</p>
                </div>
                <Row>
                    <Col>
                        <div className="single-content">
                            <img src={one} alt="car insurance"/>
                            <div className="content-service">
                                <DirectionsCarIcon className="material"/>
                                <h3>Car Insurance</h3>
                                <p>Startup ipsum dolor sit amet consuring elised faisism dolor sit amet.</p>
                                <Link to="/" className="sam">
                                    <DoubleArrowIcon className=" arrowIcon"/>
                                </Link>
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <div className="single-content">
                            <img src={leadership} alt="leadership"/>

                            <div className="content-service">
                                <HouseIcon className="material"/>
                                <h3>Leadership Work</h3>
								<p>Leader ipsum dolor sit amet consuring lised faisism dolor sit amet.</p>

                                <Link to="/" className="sam">
                                    <DoubleArrowIcon className=" arrowIcon"/>
                                </Link>
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <div className="single-content">
                            <img src={business} alt="business"/>

                            <div className="content-service">
                                <BusinessIcon className="material"/>
                                <h3>Business Insurance</h3>
								<p>Leader ipsum dolor sit amet consuring lised faisism dolor sit amet.</p>

                                <Link to="/" className="sam">
                                    <DoubleArrowIcon className=" arrowIcon"/>
                                </Link>
                            </div>
                        </div>
                    </Col>
                    </Row>
                    <Row>
                    <Col>
                        <div className="single-content">
                            <img src={travel} alt="travel"/>

                            <div className="content-service">
                                <LocalAirportIcon className="material"/>
                                <h3>Travel Insurance</h3>
								<p>Leader ipsum dolor sit amet consuring lised faisism dolor sit amet.</p>

                                <Link to="/" className="sam">
                                    <DoubleArrowIcon className=" arrowIcon"/>
                                </Link>
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <div className="single-content">
                            <img src={life} alt="life"/>

                            <div className="content-service">
                                <FitnessCenterIcon className="material"/>
                                <h3>Life Insurance</h3>
								<p>Leader ipsum dolor sit amet consuring lised faisism dolor sit amet.</p>

                                <Link to="/" className="sam">
                                    <DoubleArrowIcon className=" arrowIcon"/>
                                </Link>
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <div className="single-content">
                            <img src={health} alt=""/>

                            <div className="content-service">
                                <LocalHospitalIcon className="material"/>
                                <h3>Health Insurance</h3>
								<p>Leader ipsum dolor sit amet consuring lised faisism dolor sit amet.</p>

                                <Link to="/" className="sam">
                                    <DoubleArrowIcon className=" arrowIcon"/>
                                </Link>
                            </div>
                        </div>
                    </Col>
                    </Row>
                    
                
            </Container>
            <Business/>
        </div>
    </div>
   
    
  )
}

export default Content