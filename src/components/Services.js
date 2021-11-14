import React from 'react';
import {Service} from './card';
// import {ScrollTop} from './scrollTop';
// import Fab from '@material-ui/core/Fab';
// import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import service1 from '../images/service_commercial.jpg';
import service2 from '../images/service_operations2.jpg';
import service3 from '../images/service_technicalmgmt.jpg';

const Services = (props) => (
    <div>
        <div className="services" id="Services">
          <span className="title" > SERVICES </span>
        </div>
        <section className="services_text">
            {/*<span className="services_subtitle"> Seaspire Maritime Services </span>*/}
            <br/>
            Seaspire Maritime is committed to providing ship management services of the highest quality while adding value to our stakeholders, our people and the society.
        </section>
        <br/> <br/>
        <Service image={service1} direction={`LR`} service={'Commercial Management'}  desc={`All our vessels are fully capable to offer worldwide ship transportation through all trade routes and of a wide range of cargo types. Seaspire is fixing directly with first class Charterers such as ADMI, Dreyfus, Cofco, SIMS. It is also fixing repeatedly with operators such as Clipper & Itiro. Since 2014, our vessels have carried over 1,000,000 metric tons of all dry bulk cargo types.`} />
        <Service image={service2} direction={`RL`} service={'Operations'}  desc={`Praesent ullamco distinctio vel nemo bibendum perspiciatis minus autem odit tempore a occaecati! Lobortis pellentesque quisque. Ornare! Accusantium necessitatibus purus interdum! Tristique conubia ducimus mollis pellentesque interdum natus cupiditate, perferendis minim venenatis! Autem praesentium ornare voluptatum cubilia, molestias purus fringilla sollicitudin nostrud minim quod, modi ut at.`} />
        <Service image={service3} direction={`LR`} service={'Technical Management'}  desc={`Seaspire’s management team in close cooperation with Tide Line, have managed to lower the operating expenses of the vessels by focusing on specific technical aspects and well-planned maintenance schedules, while at the same time keeping a high-quality profile.`} />
    </div>
)

export {Services}