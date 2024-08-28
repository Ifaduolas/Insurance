import React from 'react'
import business2 from "../../img/business2.jpg"
//import { Link } from 'react-router-dom'
import "./Business.css"
//import {   Col } from 'react-bootstrap'

function Business() {
    return(
        <div className="business">
            <div className="business-content">
                <img src={business2} alt=""/>
                <div className="business-title">
                    <h3>Save up to 30% when you buy small business insurance in online</h3>
                    
                    {/*<Link to="/" className="btn-contact active">
                        Contact Us
                    </Link>
                    <p>Call Us Today: <br/> +2349050331624</p>*/}
                </div>
            </div>
            
        </div>
    )
}
    

export default Business