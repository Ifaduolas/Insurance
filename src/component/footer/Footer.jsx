import React from 'react'
import "./Footer.css"
import InstagramIcon from "@mui/icons-material/Instagram"
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import home from "../../img/home.png"
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="footer">
      <div className="content">
        <div className="top">
          <div className="logo-details">
            <Link to="/">
              <img src={home} alt=""/>
            </Link>
          </div>
          <div className="media-icons">
            <Link to="/"><FacebookIcon/></Link>
            <Link to="/"><XIcon/></Link>
            <Link to="/"><InstagramIcon/></Link>
            <Link to="/"><LinkedInIcon/></Link>
          </div>
        </div>
        <div className="link-boxes">
          <ul className="box">
            <li className="link_name">Company</li>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/">About</Link>
                </li>
                <li>
                  <Link to="/">Clam</Link>
                </li>
                <li>
                  <Link to="/">Blog</Link>
                </li>
                <li>
                  <Link to="/">Come</Link>
                </li>
          </ul>
          <ul className="box input-box">
            <li className="link_name">Subscribe</li>
            <li><input type="text" placeholder="Enter your email"/></li>
            <li><input type="button" value="Subscribe"/></li>
          </ul>
        </div>
      </div>
      <div className="bottom-details">
        <div className="bottom_text">
          <span className="copyright_text">Copyright © 2024 <Link to="/">CodeWave.</Link>All rights reserved</span>
          <span className="policy_terms">
            <Link to="/">Privacy Policy</Link>
            <Link to="/">Terms & condition</Link>
          </span>
        </div>
      </div>
    </footer>
    
  )
}

export default Footer