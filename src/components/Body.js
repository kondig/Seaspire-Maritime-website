import React from 'react';
import FontAwesome from 'react-fontawesome';
import Slide from '@mui/material/Slide';
import Fade from '@mui/material/Fade';
import logo from '../images/SeaSpire_logo.png';
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
                <Fade in={true} appear={true} timeout={2000} style={{ transitionDelay: '4000ms' }}>
                    <span className="title">Seaspire<br/>Maritime</span>
                </Fade>
                <p className="about_tag"> Sea-<span className="spire"><b>spire</b></span>:<br/><i>noun [sē - spī(ə)r]</i><br/> a slender tapering shoot/formation, <br/> a summit, a pinnacle. </p>
              </div>
          </div>
          <div className="section bg bg-a3" id="about" >        
            <Ktabs />
            <div className={isVisible1 ? "bg-cover" : "bg-cover animate"} ref={ref1}></div>
          </div>
          {/*<div className="section bg bg-a2">
            <div className="bg-cover" ></div>
            <CarouselAboutUs />
          </div>*/}
          <div className="section bg bg-s1" id="fleet">
            <div className={isVisible2 ? "bg-cover" : "bg-cover animate"} ref={ref2}></div>
            <FleetAccordion  />
          </div>
          <div className="section bg bg-a2 pt-2" id="services">
            <div className={isVisible3 ? "bg-cover" : "bg-cover animate"} ref={ref3}></div>
            <STabs />
          </div>
          {/*<div className="section bg bg-a2">
            <CarouselServices />
          </div>*/}
          <div className="section bg bg-n pt-2" id="news">
              <div className={isVisible4 ? "bg-cover" : "bg-cover animate"} ref={ref4}></div>
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

// old about us
// <div className="section bg bg-a2">
//   <div className="section-text color-white">
//     Seaspire is a<br/> private ship management company,<br/>based in Athens, Greece<br/>specialized in operating<br/> dry bulk carriers globally.
//   </div>
// </div>
// <div className="section bg bg-a2">
//   <div className="section-text color-white w-80">
//     <Fade appear={true} direction="up" in={true} timeout={2000}>
//       <h5> Vision </h5>
//     </Fade>
//     Seaspire’s vision is to always be an exemplar maritime management and operating company that provides its customers with the most reliable, safe and efficient services. Committed to its people and shareholders Seaspire always operates at the highest ethical standards.
//   </div>
// </div>
// <div className="section bg bg-a2">
//   <div className="section-text color-white w-80">
//     <Fade appear={true} direction="up" in={true} timeout={2000}>
//       <h5> Mission </h5>
//     </Fade>
//     Seaspire aims to the future by further expanding its fleet and services and by constantly creating value to its shareholders and to its people. Our goal is to achieve our targets in the most responsible and environmentally friendly manner.
//   </div>
// </div>











// var iqPreviousUrl = document.referrer;
// var iqviaRegisterProdWs = "https://2-gether.gr/epharmacy/webservice.asmx/GetIQTransaction";
// var iqviaRegisterVisitWs = "https://2-gether.gr/epharmacy/webservice.asmx/GetIQVisit";
// var iqDomainName = window.location.href;
// var iqProductOrders = [];
//
// /// function to submit ordered product to iqvia
// function iqRegisterProdAsync() {
//
// var iqValue = iqOrderToString();
//     console.log(iqProductOrders);
//   $.ajax({
//     type: "POST",
//     url: iqviaRegisterProdWs,
//     data: '{"iqData": "'+iqValue+'"}',
//     contentType: "application/json; charset=utf-8",
//     dataType: "json",
//     success: function (res) { callback_response(res) },
//     error: function (res) { error_response(res) }
//   });
// }
//
// /// function to submit customer visit to iqvia
// function iqRegisterVisitAsync() {
//
//   var iqValue = iqDomainName + '|-|' + iqPreviousUrl;
// $
// .ajax({
//     type: "POST",
//     url: iqviaRegisterVisitWs,
//     data: '{"iqData": "' + iqValue + '"}',
//     contentType: "application/json; charset=utf-8",
//     dataType: "json",
//     success: function (res) { callback_response(res) },
//     error: function (res) { error_response(res) }
//   });
// }
//
// /// responses
// function callback_response(res) {
// }
// function error_response(res) {
//   console.log(res.getAllRespondHeaders);
//   alert(res);
// }
//
// /// function to stringify the order
// function iqOrderToString() {
//   var iqOrderStr = "";
//   var iqfLen = iqProductOrders.length;
//   iqOrderStr += iqDomainName + '<|>';
//
//   for (var i = 0; i < iqfLen; i++) {
//
//     for (var p in iqProductOrders[i]) {
//
//       if (iqProductOrders[i].hasOwnProperty(p)) {
//         iqOrderStr += iqProductOrders[i][p] + '|-|';
//       }
//     }
//
//     iqOrderStr += '<|>';
//   }
//   return iqOrderStr;
// }
