import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FontAwesome from 'react-fontawesome';
// import Sticky from 'react-stickynode';
// import scrollToComponent from 'react-scroll-to-component';
import logo from '../images/SeaSpire_logo.png';
import map from '../images/seaspire-map.jpg';

import Tooltip from '@material-ui/core/Tooltip';

const useStyles = makeStyles(theme => ({
  footer: {
    backgroundColor: '#000000',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    fontSize: '1em',
    textAlign: 'left',
    color: '#ffffff',
  },
  logo: {
    width: '200px',
    padding: '15px',    
    [theme.breakpoints.down('sm')]: {
      width: '200px',
      overflow: 'hidden',
    },
  },
  map: {
    width: '300px',
    padding: '5px',     
    [theme.breakpoints.down('sm')]: {
      width: '200px',
      overflow: 'hidden',
    }
  },
  link: {
    textDecoration: 'none',
    color: '#1A6D8F',
  },
  icon: {
    width: '40px',
    color: '#1A6D8F',
    alignSelf: 'center',
  },
  cont: {
    display: 'flex',
    justifyContent: 'flex-start'
  }
}));

function Footer() {
  const classes = useStyles();
    return (
      <div>
        <div className={classes.footer}>
          <img src={logo} alt="footer-logo" className={classes.logo} />            
          <div>
            <a className={classes.link} href="https://goo.gl/maps/aXGjQqYLnQzScZqD6" target="_blank" rel="noopener noreferrer">
              <div className={classes.cont}>
                <FontAwesome className={classes.icon} name='building' spin={false} />
                <span>194 Syggrou Avenue, Kallithea,<br/> Athens, 17671, Greece </span>
              </div>
            </a>
            <br/><br/>  
            <a className={classes.link} href="tel:+302100109200" target="_blank" rel="noopener noreferrer">
              <div className={classes.cont}>
                <FontAwesome className={classes.icon} name='phone' spin={false} />
                +30 210 01 09 200
              </div>
            </a>  
            <br/><br/>
            <a className={classes.link} href="mailto:mail@seaspiremaritime.com" target="_blank" rel="noopener noreferrer">
              <div className={classes.cont}>
                <FontAwesome className={classes.icon} name='envelope-open' spin={false} /> 
                mail@seaspiremaritime.com
              </div>
            </a> 
            <br/><br/>
            <a className={classes.link} href='https://www.linkedin.com/company/seaspire-maritime/'  target="_blank" rel="noopener noreferrer">
              <FontAwesome className={classes.icon} name='linkedin-square' size='2x' spin={false} style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}/>
            </a>
          </div>
          <div id="map">
            <a href="https://goo.gl/maps/aXGjQqYLnQzScZqD6" target="_blank" rel="noopener noreferrer">
              <img src={map} alt="map of seaspire maritime" className={classes.map} />
            </a>
          </div>           
        </div>
        <div className="disclaimer" id="disclaimer">
           Seaspire Maritime ©2021
        </div>
      </div>
    )
}

const FooterOld = () => (
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
