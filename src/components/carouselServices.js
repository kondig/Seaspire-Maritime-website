import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@mui/material'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import Fade from '@material-ui/core/Fade';
import {Service} from './card';
import service1 from '../images/service_commercial.jpg';
import service2 from '../images/service_operations2.jpg';
import service3 from '../images/service_technicalmgmt.jpg';

function CarouselServices(props)
{
    var items = [
        {
            title: "Services",
            text: "Seaspire Maritime is committed to providing ship management services of the highest quality while adding value to our stakeholders, our people and the society."
        },
        {
            service: "Commercial Management",
            image: service1,
            direction: 'LR',
            desc: "All our vessels are fully capable to offer worldwide ship transportation through all trade routes and of a wide range of cargo types. Seaspire is fixing directly with first class Charterers such as ADMI, Dreyfus, Cofco, SIMS. It is also fixing repeatedly with operators such as Clipper & Itiro. Since 2014, our vessels have carried over 1,000,000 metric tons of all dry bulk cargo types."
        },
        {
            service: "Operations",
            image: service2,
            direction: 'RL',
            desc: "All our vessels are fully capable to offer worldwide ship transportation through all trade routes and of a wide range of cargo types. Seaspire is fixing directly with first class Charterers such as ADMI, Dreyfus, Cofco, SIMS. It is also fixing repeatedly with operators such as Clipper & Itiro. Since 2014, our vessels have carried over 1,000,000 metric tons of all dry bulk cargo types."
        },
        {
            service: "Technical Management",
            image: service3,
            direction: 'LR',
            desc: "All our vessels are fully capable to offer worldwide ship transportation through all trade routes and of a wide range of cargo types. Seaspire is fixing directly with first class Charterers such as ADMI, Dreyfus, Cofco, SIMS. It is also fixing repeatedly with operators such as Clipper & Itiro. Since 2014, our vessels have carried over 1,000,000 metric tons of all dry bulk cargo types."
        }
    ]

    return (
        <Carousel NextIcon={<ArrowRightAltIcon sx={{ height: '3em', width: '3em'}} />}
                  PrevIcon={<KeyboardArrowLeftIcon sx={{ height: '2em', width: '2em'}}/>}
                  navButtonsAlwaysVisible={true}
                  navButtonsProps={{ style: { backgroundColor: 'transparent', color:'#ffffff', borderRadius:0, height:'2em', width:'2em' } }}
                  navButtonsWrapperProps={{ style: { bottom: '0', top: 'unset', } }}
                  indicatorIconButtonProps={{ style: { padding: '5px',  color: '#1A6D8F' } }}
                  activeIndicatorIconButtonProps={{ style: { backgroundColor: '#ffffff' } }}
                  indicatorContainerProps={{ style: { position:'absolute', bottom:'2%',marginTop: '0px',  textAlign: 'center' } }}
        >
            {
                items.map( (item, i) => <Item key={i} item={item} /> )
            }
        </Carousel>
    )
}

function Item(props)
{
    return (
        <Paper sx={{backgroundColor:"transparent", height:"100vh", width:"90%", margin: '0 auto', boxShadow: '0',
                    display:'flex', flexDirection:'column', justifyContent:'center'}}>
              <Fade appear={true} direction="up" in={true} timeout={2000}>
                <div className="section-text color-white abs-center">
                    <h5> {props.item.title} </h5>
                    {props.item.text}
                </div>
              </Fade>
              <Service image={props.item.image} direction={props.item.direction} service={props.item.service}  desc={props.item.desc} />
        </Paper>
    )
}

export default CarouselServices;
