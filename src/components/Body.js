import React from 'react';
import FontAwesome from 'react-fontawesome';
import Slide from '@mui/material/Slide';
import Fade from '@mui/material/Fade';
import logo from '../images/SeaSpire-logo.png';
import sm from '../images/SeaSpire-Maritime.png';
import {Footer} from './Footer';
import CarouselAboutUs from './carouselAbout.js';
import CarouselServices from './carouselServices.js';
import FleetAccordion from './accordionFleet';
import {SmAccordion} from './accordion';
import Toolbar from '@mui/material/Toolbar';
import Ktabs from './tabsAbout.js';
import STabs from './tabsServices.js';
import useScrollTrigger from '@mui/material/useScrollTrigger';
// import useOnScreen from './showOnScroll';
import { useInView } from 'react-intersection-observer';


function Body(props) {
    const [ref0, inView0] = useInView({ threshold: 0.6 });
    const [ref1, inView1] = useInView({ threshold: 0.6 });
    const [ref2, inView2] = useInView({ threshold: 0.6 });
    // const ref0 = React.useRef();
    // const ref1 = React.useRef();
    // const ref2 = React.useRef();
    // //would only be considered onScreen if more than 100px of element is visible
    // const isVisible0 = useOnScreen(ref0);
    // const isVisible1 = useOnScreen(ref1,"-100px");
    // const isVisible2 = useOnScreen(ref2,"-100px");

    return (
        <div className="scroll-container">
          <Toolbar id="back-to-top-anchor" />
          <div className="section bg bg-a1" >
              <div className="about" ref={ref0}>
                <div className="logo-container">
                    <img src={logo} alt="Seaspire Maritime" className="seaspire-logo" />
                </div>
                <Fade in={inView0} timeout={2000} style={{ transitionDelay: '1000ms' }}>
                    <img src={sm} alt="Seaspire Maritime" className="sm-official" />
                </Fade>
                <Fade in={inView0} timeout={2000} style={{ transitionDelay: '2000ms' }}>
                    <p className="about_tag" >
                        <span className="sea">Sea</span>-<span className="spire">spire</span>:
                        <br/><i>noun [sē - spī(ə)r]</i>
                        <br/>a slender tapering
                        <br/>shoot/formation,
                        <br/>a summit, a pinnacle
                    </p>
                </Fade>
              </div>
          </div>
          <div className="section bg bg-a3" id="about" >
            <Ktabs />
            <div className={!inView1 ? "bg-cover cover1" : "bg-cover cover1 animate"} ref={ref1}></div>
          </div>
          <div className="section bg bg-s1" id="fleet">
            <FleetAccordion  />
          </div>
          <div className="section bg bg-a2" id="services">
            <div className={!inView2 ? "bg-cover cover3" : "bg-cover cover3 animate"} ref={ref2}></div>
            <STabs />
          </div>
          <div className="section bg bg-n" id="news">
              <Fade in={true} appear={true} timeout={2000}>
                <p className="news-title">NEWS</p>
              </Fade>
              <div className="news-container">
                <SmAccordion />
              </div>
          </div>
          <Footer />
        </div>
)};

export {Body}
