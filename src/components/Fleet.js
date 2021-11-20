import React from 'react';
import {Slider} from './slider/slider';
import {Footer} from './Footer';

const Fleet = () => (
    <div className="scroll-container">
        <div className="fleet section" id="Fleet" >
          <span className="title">FLEET</span>
        </div>
        <div className="section bg bg-s1">
            <div className="section-text color-white w-80">
                Seaspire Maritime is committed<br/> to providing<br/> ship management services<br/> of the highest quality<br/>
                while adding value to<br/> our stakeholders, our people and the society.
            </div>
        </div>
        <Slider />
        <Footer />
    </div>
)

export {Fleet}
