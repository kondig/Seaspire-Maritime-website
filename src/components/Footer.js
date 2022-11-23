import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
import FontAwesome from 'react-fontawesome';
import logo from '../images/SeaSpire-logo.png';
import bg from '../images/bg-footer.jpeg'
import PropTypes from 'prop-types';
import Fade from '@mui/material/Fade';
import Box from '@mui/material/Box';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import useOnScreen from './showOnScroll';
import { useInView } from 'react-intersection-observer';

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
    const [ref0, inView0] = useInView({ threshold: 0.3 });
    function getYear() {
        return new Date().getFullYear();
    }

    return (
      <div className="section bg bg-desktop" id="contact">
        <div className="bg-cover" ref={ref0}></div>
        {/*<div className={!isVisible ? "bg-cover" : "bg-cover animate"} ref={ref}></div>*/}
        <Box className="App-footer" display={{ xs: 'flex', sm:'none', md: 'none', lg: 'none', xl: 'none' }}
                    sx={{ width: '100%', height:'100%', }}>
          <Fade appear={true} direction="up" in={inView0} timeout={2000}>
            <img src={bg} alt="Seaspire Maritime" className="footer-image" />
          </Fade>
          <div className="footer-row">
            <Fade appear={true} direction="up" in={inView0} timeout={2000}>
                <img src={logo} alt="Seaspire Maritime" className="footer-logo" />
            </Fade>
            <div className="footer-details">
              <a className="footer-link" href="https://goo.gl/maps/aXGjQqYLnQzScZqD6" target="_blank" rel="noopener noreferrer">
                <div className="footer-cont">
                  <div className="icon-cont">
                      <FontAwesome className="footer-icon" size='lg' name='map-marker' spin={false} />
                  </div>
                  194 Syggrou Avenue, Kallithea,<br/> Athens, 17671, Greece
                </div>
              </a>
              <br className="moboff"/>
              <a className="footer-link" href="tel:+302100109200" target="_blank" rel="noopener noreferrer">
                <div className="footer-cont">
                  <div className="icon-cont">
                      <FontAwesome className="footer-icon" size='lg' name='phone' spin={false} />
                  </div>
                  +30 210 01 09 200
                </div>
              </a>
              <br className="moboff"/>
              <a className="footer-link" href="mailto:mail@seaspiremaritime.com" target="_blank" rel="noopener noreferrer">
                <div className="footer-cont">
                  <div className="icon-cont">
                      <FontAwesome className="footer-icon" size='lg' name='envelope' spin={false} />
                  </div>
                  info@seaspiremaritime.com
                </div>
              </a>
            </div>
            <div className="footer-cont ase">
              <a className="footer-link" href='https://www.linkedin.com/company/seaspire-maritime/'  target="_blank" rel="noopener noreferrer">
                <FontAwesome className="footer-icon" name='linkedin-square' size='2x' spin={false} style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}/>
              </a>
            </div>
          </div>
          <div className="disclaimer" id="disclaimer">
            Seaspire Maritime © {getYear()}
          </div>
        </Box>
        <Box className="App-footer-bar" display={{ xs: 'none', sm:'block', md: 'block', lg: 'block', xl: 'block' }} sx={{ width: '100%', }}>
          <Fade appear={true} direction="up" in={inView0} timeout={2000}>
            <img src={logo} alt="Seaspire Maritime" className="footer-logo" />
          </Fade>
          <div className="footer-row">
              <div className="footer-details">
                <a className="footer-link" href="https://goo.gl/maps/aXGjQqYLnQzScZqD6" target="_blank" rel="noopener noreferrer">
                  <div className="footer-cont">
                    <div className="icon-cont">
                        <FontAwesome className="footer-icon" size='lg' name='map-marker' spin={false} />
                    </div>
                    194 Syggrou Avenue, Kallithea,<br/> Athens, 17671, Greece
                  </div>
                </a>
                <br className="moboff"/>
                <a className="footer-link" href="tel:+302100109200" target="_blank" rel="noopener noreferrer">
                  <div className="footer-cont">
                    <div className="icon-cont">
                        <FontAwesome className="footer-icon" size='lg' name='phone' spin={false} />
                    </div>
                    +30 210 01 09 200
                  </div>
                </a>
                <br className="moboff"/>
                <a className="footer-link" href="mailto:mail@seaspiremaritime.com" target="_blank" rel="noopener noreferrer">
                  <div className="footer-cont">
                    <div className="icon-cont">
                        <FontAwesome className="footer-icon" size='lg' name='envelope' spin={false} />
                    </div>
                    info@seaspiremaritime.com
                  </div>
                </a>
                <br className="moboff"/>
                <a className="footer-link" href='https://www.linkedin.com/company/seaspire-maritime/'  target="_blank" rel="noopener noreferrer">
                    <div className="icon-cont-fw">
                        <FontAwesome className="footer-icon" name='linkedin-square' size='2x' spin={false} style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}/>
                    </div>
                </a>
              </div>
          </div>
          <div className="disclaimer" id="disclaimer">
            Seaspire Maritime © {getYear()}
          </div>
        </Box>
      </div>
    )
}

export {Footer}
