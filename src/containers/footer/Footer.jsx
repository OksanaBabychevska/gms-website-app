import React from 'react';
import './footer.css';
import logo from '../../assets/logo.svg'

const Footer = () => {
  return (
    <div className='gms__footer section__padding'>

        <div className="gms__footer-header">
          <h3 className="gradient__text">Do you want to step in to the future before others</h3>
          <div className="gms__footer-header-button">
            <p>Request Early Access</p>
          </div>
        </div>

        <div className="gms__footer-links">
          <div className="gms__footer-link_logo">
            <img src={logo} alt="logo" />
            <p>Crechterwoord K12 182 DK Alknjkcb, <br /> All Rights Reserved</p>
          </div>
          <div className="gms__footer-links_component">
            <h4>Links</h4>
            <p>Overons</p>
            <p>Social Media</p>
            <p>Counters</p>
            <p>Contact</p>
          </div>
          <div className="gms__footer-links_component">
            <h4>Company</h4>
            <p>Terms & Conditions </p>
            <p>Privacy Policy</p>
            <p>Contact</p>
          </div>
          <div className="gms__footer-links_component">
            <h4>Get in touch</h4>
            <p>Crechterwoord K12 182 DK Alknjkcb</p>
            <p>085-132567</p>
            <p>info@payme.net</p>
          </div>
        </div>
    <div className="gms__footer-copyright">
      <p>@2022 GMS-3. All rights reserved.</p>
    </div>
    </div>
  )
}

export default Footer;