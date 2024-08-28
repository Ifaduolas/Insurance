import React from 'react'
import "./Home.css"
import Section from '../../component/section/Section';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom'

function Home() {
  return (
    <>
    <div className="main-banner">
        <Container>
            <Row>
                <Col>
                    <div className="banner-text">
                        <span>Investment Retirement Insurance</span>
                        <h1>Take The Worry Out of Life with Insurance Protection</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum.</p>
                        <div className="banner-btn">
                            <Link to="#" className="default">
                                Get Started
                            </Link>
                                    
                            <Link to="#" className="default-1 active">
                                Fine An Agent
                            </Link>
                        </div>
                    </div>
                </Col>
                <div className="col-lg-6 pr-0">
                    <div className="banner-img"></div>
                </div>
            </Row>
        </Container>
    </div>
    <Section/>
    </>
  )
}

export default Home