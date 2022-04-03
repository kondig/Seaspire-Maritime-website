import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
import FontAwesome from 'react-fontawesome';
import logo from '../images/SeaSpire-logo.png';
import map from '../images/seaspire-map.jpg';
import bg from '../images/bg-footer.jpeg'
import PropTypes from 'prop-types';
import Fade from '@mui/material/Fade';
import Box from '@mui/material/Box';
// import Tooltip from '@mui/material/Tooltip';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import useOnScreen from './showOnScroll';

// const useStyles = makeStyles(theme => ({
//   footer: {
//     backgroundColor: '#000000',
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//     fontSize: '1.3em',
//     textAlign: 'left',
//     color: '#ffffff',
//     scrollSnapAlign: 'center',
//     height: 'calc(100vh)',
//     width: '100%',
//     paddingTop: '10vmin',
//     [theme.breakpoints.down('sm')]: {
//       // height: 'calc(100vh - 40px)',
//       fontSize: '1em',
//     },
//   },
//   logo: {
//     width: '200px',
//     padding: '5px',
//     [theme.breakpoints.down('sm')]: {
//       width: '200px',
//       overflow: 'hidden',
//       padding: '2px',
//     },
//   },
//   map: {
//     width: '260px',
//     padding: '5px',
//     [theme.breakpoints.down('sm')]: {
//       width: '200px',
//       overflow: 'hidden',
//       margin: '30px 5px',
//     }
//   },
//   link: {
//     textDecoration: 'none',
//     color: '#1864ac',
//   },
//   icon: {
//     width: '40px',
//     color: '#1864ac',
//     alignSelf: 'center',
//     display: 'flex',
//     justifyContent: 'center'
//   },
//   cont: {
//     display: 'flex',
//     justifyContent: 'flex-start',
//     [theme.breakpoints.down('sm')]: {
//         margin: '15px 2px',
//     },
//   },
//   row: {
//     display: 'flex',
//     flexDirection:'row',
//     justifyContent:'space-around',
//     width: '100%',
//     [theme.breakpoints.down('sm')]: {
//         flexDirection: 'column',
//         justifyContent: 'center',
//         alignItems: 'center',
//     },
//   }
// }));

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
    const ref = React.useRef();
    //would only be considered onScreen if more than 300px of element is visible
    const isVisible = useOnScreen(ref,"-100px");
    function getYear() {
        return new Date().getFullYear();
    }

    return (
      <div className="section bg bg-desktop" id="contact">
        <div className={!isVisible ? "bg-cover" : "bg-cover animate"} ref={ref}></div>
        <Box display={{ xs: 'block', md: 'none', lg: 'none', xl: 'none' }} sx={{ width: '100%', }}>
            <div className="App-footer">
              <Fade appear={true} direction="up" in={true} timeout={2000}>
                <img src={bg} alt="Seaspire Maritime" className="footer-image" />
              </Fade>
              <div className="footer-row">
                  <Fade appear={true} direction="up" in={true} timeout={2000}>
                      <img src={logo} alt="Seaspire Maritime" className="footer-logo" />
                  </Fade>
                  <div className="footer-details">
                    <a className="footer-link" href="https://goo.gl/maps/aXGjQqYLnQzScZqD6" target="_blank" rel="noopener noreferrer">
                      <div className="footer-cont">
                        <div className="icon-cont">
                            <FontAwesome className="footer-icon" size='lg' name='map-marker' spin={false} />
                        </div>
                        194 Syggrou Avenue, Kallithea, Athens, 17671, Greece
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
                        mail@seaspiremaritime.com
                      </div>
                    </a>
                  </div>
                  <div className="footer-cont">
                    <a className="footer-link" href='https://www.linkedin.com/company/seaspire-maritime/'  target="_blank" rel="noopener noreferrer">
                      <FontAwesome className="footer-icon" name='linkedin-square' size='2x' spin={false} style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}/>
                    </a>
                  </div>
              </div>
              <div className="disclaimer" id="disclaimer">
                 Seaspire Maritime © {getYear()}
              </div>
            </div>
        </Box>
        <Box display={{ xs: 'none', md: 'block', lg: 'block', xl: 'block' }} sx={{ width: '100%', }}>
            <div className="App-footer-bar">
            <Fade appear={true} direction="up" in={true} timeout={2000}>
                <img src={logo} alt="Seaspire Maritime" className="footer-logo" />
            </Fade>
              <div className="footer-row">
                  <div className="footer-details">
                    <a className="footer-link" href="https://goo.gl/maps/aXGjQqYLnQzScZqD6" target="_blank" rel="noopener noreferrer">
                      <div className="footer-cont">
                        <div className="icon-cont">
                            <FontAwesome className="footer-icon" size='lg' name='map-marker' spin={false} />
                        </div>
                        194 Syggrou Avenue, Kallithea, Athens, 17671, Greece
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
                        mail@seaspiremaritime.com
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
            </div>
        </Box>
      </div>
    )
}

export {Footer}
