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
import useOnScreen from './showOnScroll';


function Body(props) {
    const ref1 = React.useRef();
    const ref2 = React.useRef();
    const ref3 = React.useRef();
    const ref4 = React.useRef();
    //would only be considered onScreen if more than 300px of element is visible
    const isVisible1 = useOnScreen(ref1,"-100px");
    const isVisible2 = useOnScreen(ref2,"-100px");
    const isVisible3 = useOnScreen(ref3,"-100px");
    const isVisible4 = useOnScreen(ref4,"-100px");

    // const scrollRef = React.useRef();
    // const executeScroll = () => scrollRef.current.scrollIntoView({ behavior: 'smooth' });
    // React.useEffect(() => {
    //     if(isVisible1) { const knode = ref1.current; knode.style.opacity = "0.2"; knode.style.top = '28%'; }
    //     if(isVisible2) { const knode = ref2.current; knode.style.opacity = "0.2"; knode.style.top = '28%'; }
    //     if(isVisible3) { const knode = ref3.current; knode.style.opacity = "0.2"; knode.style.top = '28%'; }
    //     if(isVisible4) { const knode = ref4.current; knode.style.opacity = "0.2"; knode.style.top = '28%'; }
    // });
    // const [scroll, setScroll] = React.useState(0)
    // React.useEffect(() => {
    //     document.addEventListener("scroll", () => {
    //       const scrollCheck = window.scrollY > 700
    //       console.log(scroll);
    //       if (scrollCheck !== scroll) {
    //         setScroll(scrollCheck)
    //       }
    //     })
    //   })
    return (
        <div className="scroll-container">
          <Toolbar id="back-to-top-anchor" />
          <div className="section bg bg-a1">
              <div className="about">
                {/*<Slide in={true} appear={true} direction="up" timeout={3000} mountOnEnter unmountOnExit container={containerRef.current}>*/}
                    <div className="logo-container">
                        <img src={logo} alt="Seaspire Maritime" className="seaspire-logo" />
                    </div>
                {/*</Slide>*/}
                <Fade in={true} appear={true} timeout={3000} style={{ transitionDelay: '3000ms' }}>
                    {/*<span className="title">Seaspire<br/>Maritime</span>*/}
                    <img src={sm} alt="Seaspire Maritime" className="sm-official" />
                </Fade>
                <p className="about_tag"> <span className="sea">Sea</span>-<span className="spire">spire</span>:
                <br/><i>noun [sē - spī(ə)r]</i>
                <br/>a slender tapering shoot/formation,
                <br/>a summit, a pinnacle.</p>
              </div>
          </div>
          <div className="section bg bg-a3" id="about" >
            <Ktabs />
            <div className={!isVisible1 ? "bg-cover cover1" : "bg-cover cover1 animate"} ref={ref1}></div>
          </div>
          <div className="section bg bg-s1" id="fleet">
            <div className={!isVisible2 ? "bg-cover cover2" : "bg-cover cover2 animate"} ref={ref2}></div>
            <FleetAccordion  />
          </div>
          <div className="section bg bg-a2 pt-2" id="services">
            <div className={!isVisible3 ? "bg-cover cover3" : "bg-cover cover3 animate"} ref={ref3}></div>
            <STabs />
          </div>
          <div className="section bg bg-n pt-2" id="news">
              <div className={!isVisible4 ? "bg-cover cover4" : "bg-cover cover4 animate"} ref={ref4}></div>
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
