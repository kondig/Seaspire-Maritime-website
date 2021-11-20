import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FontAwesome from 'react-fontawesome';
import logo from '../images/SeaSpire_logo.png';
import map from '../images/seaspire-map.jpg';
import PropTypes from 'prop-types';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Fade from '@material-ui/core/Fade';
import Tooltip from '@material-ui/core/Tooltip';

const useStyles = makeStyles(theme => ({
  footer: {
    backgroundColor: '#000000',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    fontSize: '1.3em',
    textAlign: 'left',
    color: '#ffffff',
    scrollSnapAlign: 'center',
    height: 'calc(100vh)',
    width: '100%',
    paddingTop: '10vmin',
    [theme.breakpoints.down('sm')]: {
      // height: 'calc(100vh - 40px)',
      fontSize: '1em',
    },
  },
  logo: {
    width: '200px',
    padding: '5px',
    [theme.breakpoints.down('sm')]: {
      width: '200px',
      overflow: 'hidden',
      padding: '2px',
    },
  },
  map: {
    width: '260px',
    padding: '5px',
    [theme.breakpoints.down('sm')]: {
      width: '200px',
      overflow: 'hidden',
      margin: '30px 5px',
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
    display: 'flex',
    justifyContent: 'center'
  },
  cont: {
    display: 'flex',
    justifyContent: 'flex-start',
    [theme.breakpoints.down('sm')]: {
        margin: '15px 2px',
    },
  },
  row: {
    display: 'flex',
    flexDirection:'row',
    justifyContent:'space-around',
    width: '100%',
    [theme.breakpoints.down('sm')]: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
  }
}));

function ShowOnScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger({ target: window });
  return (
    <Fade appear={false} direction="up" in={trigger} timeout={3000}>
      {children}
    </Fade>
  );
}

ShowOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
};

function Footer(props) {
  const classes = useStyles();
    return (
      <div className="section">
        <div className={classes.footer} id="contact">
            <Fade appear={true} direction="up" in={true} timeout={2000}>
                <img src={logo} alt="footer-logo" className={classes.logo} />
            </Fade>
          <div className={classes.row}>
              <div>
                <a className={classes.link} href="https://goo.gl/maps/aXGjQqYLnQzScZqD6" target="_blank" rel="noopener noreferrer">
                  <div className={classes.cont}>
                    <FontAwesome className={classes.icon} size='1x' name='map-marker' spin={false} />&nbsp;&nbsp;
                    <span>194 Syggrou Avenue, Kallithea, Athens, 17671, Greece </span>
                  </div>
                </a>
                <br/>
                <a className={classes.link} href="tel:+302100109200" target="_blank" rel="noopener noreferrer">
                  <div className={classes.cont}>
                    <FontAwesome className={classes.icon} size='1x' name='phone' spin={false} />&nbsp;&nbsp;
                    +30 210 01 09 200
                  </div>
                </a>
                <br/>
                <a className={classes.link} href="mailto:mail@seaspiremaritime.com" target="_blank" rel="noopener noreferrer">
                  <div className={classes.cont}>
                    <FontAwesome className={classes.icon} size='1x' name='envelope' spin={false} />&nbsp;&nbsp;
                    mail@seaspiremaritime.com
                  </div>
                </a>

              </div>
              <div className={classes.cont}>
                {/*<a href="https://goo.gl/maps/aXGjQqYLnQzScZqD6" target="_blank" rel="noopener noreferrer">
                  <img src={map} alt="map of seaspire maritime" className={classes.map} />
                  <FontAwesome className={classes.icon} name='map-marker' size='2x' spin={false} style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}/>
                </a>
                <br/>*/}
                <a className={classes.link} href='https://www.linkedin.com/company/seaspire-maritime/'  target="_blank" rel="noopener noreferrer">
                  <FontAwesome className={classes.icon} name='linkedin-square' size='2x' spin={false} style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}/>
                </a>
              </div>
          </div>
          <div className="disclaimer" id="disclaimer">
             Seaspire Maritime ©2021
          </div>
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
