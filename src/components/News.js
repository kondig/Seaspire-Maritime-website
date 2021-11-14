import React from 'react';
// import {SmTimeline} from './timeline';
import {SmAccordion} from './accordion';

// import {ScrollTop} from './scrollTop';
// import Fab from '@material-ui/core/Fab';
// import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';

const News = (props) => (
    <div>
        <div className="other" id="News">
          <span className="title" > NEWS </span>
        </div>
        <div className="section-text">
          {/*<SmTimeline />*/}
          {/*<button onClick={iqRegisterProdAsync}>Default</button>*/}
        </div>
        <div className="news-container">
          <SmAccordion />
        </div>
    </div>
)

export {News}
