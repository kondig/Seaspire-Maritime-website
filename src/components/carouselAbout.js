import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@mui/material'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import Fade from '@mui/material/Fade';

function CarouselAboutUs(props)
{
    var items = [
        {
            name: "",
            text: "Seaspire is a private ship management company, based in Athens, Greece specialized in operating dry bulk carriers globally."
        },
        {
            name: "Vision",
            text: "Seaspire’s vision is to always be an exemplar maritime management and operating company that provides its customers with the most reliable, safe and efficient services. Committed to its people and shareholders Seaspire always operates at the highest ethical standards."
        },
        {
            name: "Mission",
            text: "Seaspire aims to the future by further expanding its fleet and services and by constantly creating value to its shareholders and to its people. Our goal is to achieve our targets in the most responsible and environmentally friendly manner."
        }
    ]

    return (
        <Carousel NextIcon={<ArrowRightAltIcon className='nav-arrow' sx={{ height: {xs:'2em',md:'1.5em',lg:'2em', xl:'3em'}, width: {xs:'2em',md:'1.5em',lg:'2em', xl:'3em'}}} />}
                  PrevIcon={<KeyboardArrowLeftIcon className='nav-arrow' sx={{ height: '2em', width: '2em'}}/>}
                  navButtonsAlwaysVisible={true}
                  navButtonsProps={{ className:'navBtnContainer', style: { backgroundColor: 'transparent', color:'#ffffff', borderRadius:0, height:'2em', width:'2em' } }}
                  navButtonsWrapperProps={{ style: { bottom: '0', top: 'unset', } }}
                  indicatorIconButtonProps={{ style: { padding: '5px',  color: '#1A6D8F' } }}
                  activeIndicatorIconButtonProps={{ style: { backgroundColor: '#ffffff', borderRadius: '25px' } }}
                  indicatorContainerProps={{ style: { position:'absolute', bottom:'4%',marginTop: '0px',  textAlign: 'center' } }}
                  autoPlay={false}
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
        <Paper sx={{backgroundColor:"transparent", height:"100vh", width:"60%", margin: '0 auto', boxShadow: '0',
                    display:'flex', flexDirection:'column', justifyContent:'center'}}>
            <div className="section-text color-white">
              <Fade appear={true} direction="up" in={true} timeout={2000}>
                <h5> {props.item.name} </h5>
              </Fade>
              {props.item.text}
            </div>
        </Paper>
    )
}

export default CarouselAboutUs;
