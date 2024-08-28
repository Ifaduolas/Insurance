import React from 'react'
import { Link } from "react-router-dom"
import "./Section.css"
import about from "../../img/about.jpg"
import banner from "../../img/banner.jpg"
import QuickreplyIcon from '@mui/icons-material/Quickreply';
import QrCodeScannerIcon from '@mui/icons-material/QrCodeScanner';
import CancelPresentationIcon from '@mui/icons-material/CancelPresentation';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import Diversity2Icon from '@mui/icons-material/Diversity2';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Content from '../content/Content'
import care from "../../img/care.png"
import social from "../../img/social.png"
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

function Section() {
  return (
    <>
    <div className="pt-100 pb-70">
        <Container>
         <div className="section-title">
            <span>Our Features</span>
            <h2>We are Award Wining Company</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.</p>
        </div> 
       
        <Row>
            <Col>
                <div className="single-choose">
                    <Diversity2Icon className="flat"/>
                    <h3>Trustworthy Company</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
                    <Link to="/" className="sure">
                        <ArrowRightAltIcon className="t5"/>
                    </Link>
                </div>
            </Col>
            
            <Col>
                <div className="single-choose">
                    <AccountBalanceWalletIcon className="flat"/>
                    <h3>Money Back Guarantee</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
                    <Link to="/" className="sure">
                        <ArrowRightAltIcon className="t5"/>
                    </Link>
                </div>
            </Col>
            <Col>
                <div className="single-choose">
                    <QrCodeScannerIcon className="flat"/>
                    <h3>Quick Response</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
                    <Link to="/" className="sure">
                        <ArrowRightAltIcon className="t5"/>
                    </Link>
                </div>
            </Col>
            </Row>
            <Row>
            <Col>
                <div className="single-choose">
                <SupportAgentIcon className="flat"/>
                    <h3>Awesome Support</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
                    <Link to="/" className="sure">
                        <ArrowRightAltIcon className="t5"/>
                    </Link>
                </div>
            </Col>
            <Col>
                <div className="single-choose">
                <CancelPresentationIcon className="flat"/>
                    <h3>Anytime Cancellation</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
                    <Link to="/" className="sure">
                        <ArrowRightAltIcon className="t5"/>
                    </Link>
                </div>
            </Col>
            <Col>
                <div className="single-choose">
                    <QuickreplyIcon className="flat"/>
                    <h3>Quick Response</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
                    <Link to="/" className="sure">
                        <ArrowRightAltIcon className="t5"/>
                    </Link>
                </div>
            </Col>
        </Row>
        </Container>
        
    </div>
    
    <section className="about-area ptb-100">
			<Container>
				
					
						<div className="about-content">
							<span>About Us</span>
							<h2>Insurance Always Ready to Protect your Life & Business</h2>

							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. consectetur adipiscing 
                                elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. QuisQuis</p>	

							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum 
                                suspendisse ultrices gravida. Risus aliqua suspendris consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna 
                                aliqua. Quis ipsum suspendisse ultrices gravida. Risus aliqua.</p>

							<div className="about-list">
								<Row>
									<Col>
										<div class="about-single-list">
                                            <img src={care} alt=""/>
											
                                        <span className="span">We are always Care about Client Satisfy</span>
                                            
										</div>
                                        </Col>
                                        <Col>
										<div className="about-single-list">
                                            <img src={social} alt=""/>
											
                                        <span className="span">100+ Community Involvement</span>
                                            
										</div>
									</Col>
								</Row>
							</div>

							<Link to="/"  className="btn-1">
								Know Details
							</Link >
						</div>
					<Row>

					<Col>
						<div className="about-img-3" >
							<img src={banner} alt=""/>
							<div class="about-img-2">
								<img src={about} alt=""/>
							</div>
						</div>
					</Col>
				</Row>
			</Container>
		</section>
        <Content/>
    </>
  )
}

export default Section