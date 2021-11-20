import React from 'react';
// import {SmTimeline} from './timeline';
import {SmAccordion} from './accordion';
import {Footer} from './Footer';

// <button onClick={iqRegisterProdAsync}>Default</button>


const News = (props) => (
    <div className="scroll-container">
        <div className="news section" id="News">
          <span className="title">NEWS</span>
        </div>
        {/*<div className="section-text">
          <SmTimeline />
        </div>*/}
        <div className="news-container section">
          <SmAccordion />
        </div>
        <Footer />
    </div>
)

export {News}
