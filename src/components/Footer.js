import React from 'react';
import FontAwesome from 'react-fontawesome';
// import Sticky from 'react-stickynode';
// import scrollToComponent from 'react-scroll-to-component';
import logo from '../images/SeaSpire_logo.png';
import map from '../images/seaspire-map.jpg';

const Footer = () => (
  <div className="site-footer">
    <div id="logo">
      <img src={logo} alt="footer-logo" className="footer-logo" />
    </div>
    <div id="map">
      <a className="address" href="https://www.google.com/maps/place/Filellinon+1,+Pireas+185+36/@37.9387478,23.6405914,16.92z/data=!4m5!3m4!1s0x14a1bbdda98171d7:0xe14089d98d0db11d!8m2!3d37.9393459!4d23.6416857" target="_blank" rel="noopener noreferrer">
        <img src={map} alt="map of seaspire maritime" className="map" />
      </a>
    </div>
    <div id="contact" >
      <h3>
        <a className="address" href="https://www.google.com/maps/place/Filellinon+1,+Pireas+185+36/@37.9387478,23.6405914,16.92z/data=!4m5!3m4!1s0x14a1bbdda98171d7:0xe14089d98d0db11d!8m2!3d37.9393459!4d23.6416857" target="_blank" rel="noopener noreferrer">
          <FontAwesome className='addressIcon' name='building' spin={false} /> &nbsp;<span className='addresstext'> Filellinon 1-3, Piraeus, Attiki, Greece </span><br/><br/>
        </a>
        <FontAwesome className='phone' name='phone' spin={false} /> &nbsp;<a className="phone" href="tel:+302104293577"> +30 210 42 93 577</a> <br/><br/>
        <FontAwesome className='email' name='envelope-open' spin={false} /> &nbsp;<span className='emailtext'> mail@seaspiremaritime.com </span> <br/><br/>
        <a href='https://www.linkedin.com/company/seaspire-maritime/' className='linkedin' target="_blank" rel="noopener noreferrer">
          <FontAwesome className='linkedinIcon' name='linkedin-square' size='4x' spin={false} style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}/>
        </a>
      </h3>
    </div>
    <div className="disclaimer" id="disclaimer">
       Seaspire Maritime ©2018
    </div>
  </div>

)

export {Footer}
