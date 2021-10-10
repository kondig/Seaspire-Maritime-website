import React from 'react';
import FontAwesome from 'react-fontawesome';
import Sticky from 'react-stickynode';
import scrollToComponent from 'react-scroll-to-component';
import {Slider} from './slider/slider';
import {Carousel} from './carousel/carousel';

import {Service} from './card';

import {ScrollTop} from './scrollTop';
import Fab from '@material-ui/core/Fab';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';

import service1 from '../images/service_commercial.jpg';
import service2 from '../images/service_operations2.jpg';
import service3 from '../images/service_technicalmgmt.jpg';

const Body = (props) => (
<div>
  <div className="mainlogo" id="logo" ref={(section) => {logo=section;}}></div>
  <div className="site-page">
    {/*<Sticky enabled={true} top={50} bottomBoundary={1000} className='sticky' >
      <FontAwesome className='scrollArrowTop' onClick={() => scrollToComponent(Fleet, {offset: 0, align: 'top', duration: 2500})} name='chevron-down' data-hover='SCROLL DOWN' spin={false} size='1x' />
    </Sticky>*/}
    <div className="news-section">
      <p className="news-title"></p>
    </div>
    <div className="about" id="About_Us">
      <section className="about_title" > ABOUT US </section>
      <p className="about_tag"> Sea-<span className="spire"><b>spire</b></span>:<br/><i>noun [sē - spī(ə)r]</i><br/> a slender tapering shoot/formation, <br/> a summit, a pinnacle. </p>
    </div>
    <div className="about_text" >
      <strong> About Seaspire Maritime </strong>
      <p>
          Seaspire is a private shipping management company focusing on bulk carriers transporting goods worldwide, based in Greece . The company is successfully managing 4 vessels since its incorporation in 2014. It provides the commercial management of the vessels and it has entered into a JV agreement with Tide Line Inc. for the technical management of the vessels.
          <br/> <br/> <span> History </span> <br/>
          Seaspire Maritime was formed in 2014 with a purpose of investing in and operating dry cargo bulk carriers. It took delivery of its first vessel (“MV Baltic Spire” ex- “Baltic ID”) on October 2014. In August 2016, Seaspire took delivery of its second vessel (“MV Saronic Spire” ex- “CS Salina”). One year later in June 2017 it took delivery of the third addition to its fleet (“MV Ionian Spire” ex “CS Ocean).
          <br/> <br/> <span> Vision </span> <br/>
          Seaspire’s vision is to always be an exemplar maritime management and operating company that provides its customers with reliable, safe and efficient services. Committed to its people and shareholders, Seaspire aims to the future by further expanding its fleet and services…
     </p>
    </div>
    <div className="services" id="Services">
      <span className="services_title" > SERVICES </span>
    </div>
    <br/> <br/>
    <Service image={service1} direction={`LR`} service={'Commercial Management'}  desc={`All our vessels are fully capable to offer worldwide ship transportation through all trade routes and of a wide range of cargo types. Seaspire is fixing directly with first class Charterers such as ADMI, Dreyfus, Cofco, SIMS. It is also fixing repeatedly with operators such as Clipper & Itiro. Since 2014, our vessels have carried over 1,000,000 metric tons of all dry bulk cargo types.`} />
    <Service image={service2} direction={`RL`} service={'Operations'}  desc={`Praesent ullamco distinctio vel nemo bibendum perspiciatis minus autem odit tempore a occaecati! Lobortis pellentesque quisque. Ornare! Accusantium necessitatibus purus interdum! Tristique conubia ducimus mollis pellentesque interdum natus cupiditate, perferendis minim venenatis! Autem praesentium ornare voluptatum cubilia, molestias purus fringilla sollicitudin nostrud minim quod, modi ut at.`} />
    <Service image={service3} direction={`LR`} service={'Technical Management'}  desc={`Seaspire’s management team in close cooperation with Tide Line, have managed to lower the operating expenses of the vessels by focusing on specific technical aspects and well-planned maintenance schedules, while at the same time keeping a high-quality profile.`} />
    <section className="services_text">
        <span className="services_subtitle"> Seaspire Maritime Services </span>
        <p> Seaspire Maritime is committed to providing ship management services of the highest quality while adding value to our stakeholders, our people and the society. </p>
    </section>
    <Carousel />
    <div className="fleet" id="Fleet" ref={(section) => {Fleet=section;}}>
      <span className="fleet_title"> FLEET </span>
    </div>
    <section className="fleet_text">
        <strong> Our Fleet </strong>
        <p> Seaspire Maritime is committed to providing ship management services of the highest quality while adding value to our stakeholders, our people and the society. </p>
    </section>
    <Slider />
    <div className="other" id="News">
      <span className="other_title" > NEWS </span>
    </div>
    <section className="other_text">
    </section>
    {/*<Sticky enabled={true} top={200} bottomBoundary={3000} className='sticky' >
      <FontAwesome className='scrollArrowBot' onClick={() => scrollToComponent(logo, {offset: -300, align: 'top', duration: 2500})} name='angle-up' data-hover='SCROLL UP' spin={false} size='2x' />
    </Sticky>*/}
    <ScrollTop {...props}>
        <Fab size="small" aria-label="scroll back to top" className="scroll-top">
            <KeyboardArrowUpIcon />
        </Fab>
    </ScrollTop>
  </div>
</div>
)

export {Body}
