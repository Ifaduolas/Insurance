import React from 'react'
import "./About.css"
import christina from "../../img/christina.jpg"
import ceo from "../../img/ceo.jpg"
import IT from "../../img/IT.jpg"
import HR from "../../img/HR.jpg"
import Underwriter from "../../img/Underwriter.jpg"
import ali from "../../img/ali.jpg"

function About() {
  return (
    <div className="about">
      <div className="about-section">
      <h1>About Us Page</h1>
      <p>Some text about who we are and what we do.</p>
      <p>Resize the browser window to see that this page is responsive by the way.</p>
      </div>
      <h2 className="about-h2">Our Team</h2>
      <div className="row">
        <div className="column">
          <div className="card">
            <img src={ceo} alt="" />
            <div className="container">
              <h2>Jane Doe</h2>
              <p className="title">CEO & Founder</p>
              <p>Some text that describes me lorem ipsum ipsum lorem.</p>
              <p>jane@surety.com</p>
              <p><button className="button">Contact</button></p>
            </div>
          </div>
        </div>
        <div className="column">
          <div className="card">
            <img src={christina} alt=""  />
            <div className="container">
              <h2>Christina Ross</h2>
              <p className="title">Head of Risk</p>
              <p>Some text that describes me lorem ipsum ipsum lorem.</p>
              <p>Christina@surety.com</p>
              <p><button className="button">Contact</button></p>
            </div>
          </div>
        </div>
        <div className="column">
          <div className="card">
            <img src={ali} alt=""  />
            <div className="container">
              <h2>John Mike</h2>
              <p className="title">Head of Marketing </p>
              <p>Some text that describes me lorem ipsum ipsum lorem.</p>
              <p>john@surety.com</p>
              <p><button className="button">Contact</button></p>
            </div>
          </div>
        </div>
        <div className="column">
          <div className="card">
            <img src={IT} alt=""  />
            <div className="container">
              <h2>Elizabeth Smith</h2>
              <p className="title">Head of IT </p>
              <p>Some text that describes me lorem ipsum ipsum lorem.</p>
              <p>Elizabeth@surety.com</p>
              <p><button className="button">Contact</button></p>
            </div>
          </div>
        </div>
        <div className="column">
          <div className="card">
            <img src={HR} alt=""  />
            <div className="container">
              <h2>Smith Joe</h2>
              <p className="title">Head of HR </p>
              <p>Some text that describes me lorem ipsum ipsum lorem.</p>
              <p>Smith@surety.com</p>
              <p><button className="button">Contact</button></p>
            </div>
          </div>
        </div>
        <div className="column">
          <div className="card">
            <img src={Underwriter} alt=""  />
            <div className="container">
              <h2>Amelia Cold</h2>
              <p className="title">Head of Underwriter </p>
              <p>Some text that describes me lorem ipsum ipsum lorem.</p>
              <p>Amelia@surety.com</p>
              <p><button className="button">Contact</button></p>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  )
}

export default About