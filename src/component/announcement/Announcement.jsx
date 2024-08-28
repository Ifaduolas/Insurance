import React from 'react'
import "./Announcement.css"
//import { Link } from 'react-router-dom';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';

function Announcement() {
  return (
    <div className="header-area">
      <div className="header-top">
          <h4 className="header-title">Welcome To Surety Insurance!</h4>
          <ul className="header-content-right">
            <li >
              
                  <PhoneInTalkIcon className="icon"/> call Us: 09050332416
             
              
            </li>
            <li>
              <MailOutlineIcon className="icon"/> Email: hello@surety.com
            </li>
          </ul>
      </div>
    </div>
  )
}

export default Announcement