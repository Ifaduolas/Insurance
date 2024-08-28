import React, { useState } from 'react'
import Announcement from '../announcement/Announcement'
import "./Navbar.css"
import home from "../../img/home.png"
import MenuIcon from "@mui/icons-material/Menu"
import CloseIcon from "@mui/icons-material/Close"
import { Link } from 'react-router-dom'



function Navbar() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  return (
    <>
      <Announcement/>
    <div className="navbar">
        <div className="navbar-container">
            <Link to="/" className="navbar-logo">
              <img src={home} alt=""/>
            </Link>
            <ul className={ click ? "navbar-menu active" : "navbar-menu"}>
              <li className="navbar-item">
              <Link to="/" activeclassname="active" className="navbar-links" onClick={handleClick}>Home</Link>
              </li>
              <li className="navbar-item">
                <Link to="/about" className="navbar-links" onClick={handleClick}>About</Link>
              </li>
             
              <li className="navbar-item">
                <Link to="/claim" className="navbar-links" onClick={handleClick}>ClaimForm</Link>
              </li>
              <li className="navbar-item">
                <Link to="/claimList" className="navbar-links" onClick={handleClick}>ClaimList</Link>
              </li>
              <li className="navbar-item">
                <Link to="/contact" className="navbar-links" onClick={handleClick}>Contact</Link>
              </li>
              <div className="right">
                <Link to="/quote" className="btn">Get A Quote</Link>
              </div>
            </ul>
            <div className="navbar-icon" onClick={handleClick}>
              { click ? (
                <span className="icon">
                  <MenuIcon/>{" "}
                </span>
              ) : (
                <span className="icon">
                  <CloseIcon/>
                </span>

              )}
            </div>
        </div>
    </div>
    </>
  )
}


export default Navbar