import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import SwipeableViews from 'react-swipeable-views';
import { Paper, Button } from '@mui/material';
import Slide from '@mui/material/Slide';
import Fade from '@mui/material/Fade';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import {Service} from './card';
import useMediaQuery from '@mui/material/useMediaQuery';
import service1 from '../images/service-chartering.jpg';
import service2 from '../images/service-operations.jpeg';
import service3 from '../images/service-technical.jpeg';
import service4 from '../images/service-crew.jpeg';

function TabPanel(props) {
  const theme = useTheme();
  const { children, value, index, ...other } = props;
  const containerRef = React.useRef(null);
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <div>
            <Box boxShadow={0} display={{ xs: 'block', sm:'none', md: 'none', lg: 'none', xl: 'none' }} sx={{minWidth:150}}>
                <Paper sx={{backgroundColor:"transparent", height:'100%', width:'100%', boxShadow: '0', paddinTop:'15vh',
                             alignSelf:'flex-start'}}>
                    <Fade appear={true} in={true} timeout={2000}>
                      <div className="tab-text color-white asc" style={{display:props.distext}}>
                          {props.text}
                      </div>
                    </Fade>
                    <Box boxShadow={0} display={{ xs: 'none', md: 'block', lg: 'block', xl: 'block' }} sx={{display:props.discard, justifyContent:'center', overflow:'hidden'}}>
                      <Card sx={{ display: 'flex', flexDirection:'column', margin: '5px', justifyContent: 'space-between', backgroundColor:'transparent', boxShadow:'0px 0px'}}>
                        <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%', backgroundColor:'transparent' }} >
                          <CardContent sx={{ padding: '5px', paddingBottom: '5px !important' }}>
                            <Typography component="div" variant="h5" sx={{ fontSize:'1em', color:theme.palette.primary.main, fontWeight: '700', margin: '0px 5px'}}>
                              {props.service}
                            </Typography>
                            <Typography variant="subtitle1" color="text.secondary" component="div"
                                        sx={{ color:'#ffffff', fontSize: '0.8rem', textShadow: '1px 1px 1px #000', textAlign: 'left', margin: '5px !important'}}>
                              {props.desc}
                            </Typography>
                          </CardContent>
                        </Box>
                        <Fade appear={true} in={true} timeout={2000}>
                            <CardMedia
                              component="img"
                              sx={{ width: '100%' }}
                              image={props.image}
                              alt={props.service}
                              title={props.service}
                            />
                        </Fade>
                      </Card>
                    </Box>
                </Paper>
            </Box>
            <Box boxShadow={0} display={{ xs: 'none', sm:'block', md: 'block', lg: 'block', xl: 'block' }} sx={{width:'100%'}}>
                <Paper sx={{backgroundColor:"transparent", width:"90%", margin: '0 auto', boxShadow: '0',
                            display:'flex', flexDirection:'row', justifyContent:'flex-end'}}>
                      <Fade appear={true} in={true} timeout={2000}>
                        <Box className="tab-text color-white" sx={{display:props.distext, justifyContent: 'flex-end', flexBasis:{sm:'40%',md:'35%',lg:'30%'}}}>
                            {props.text}
                        </Box>
                      </Fade>
                      <Box boxShadow={0} display={{ xs: 'none', sm:props.discard, md:props.discard, lg:props.discard, xl:props.discard }} sx={{ justifyContent: 'flex-end' }} ref={containerRef}>
                          <Card sx={{ display: 'flex', flexDirection:'column', justifyContent: 'space-between', alignItems: 'center', 
                                      width: {xs:'90%',sm:'80%',md:'70%',lg:'50%',xl:'45%'},
                                      backgroundColor:'transparent', boxShadow:'0px 0px', }}>
                            <Box sx={{ display: 'flex', flexDirection: 'column', backgroundColor:'transparent' }} >
                              <CardContent sx={{ padding: '5px', paddingBottom: '5px !important' }}>
                                <Typography component="div" variant="h5" sx={{ color:theme.palette.primary.main, fontWeight: '700', margin: '10px 0px'}}>
                                  {props.service}
                                </Typography>
                                <Typography variant="subtitle1" color="text.secondary" component="div"
                                            sx={{ color:'#ffffff', fontSize: {xs:'0.8em',sm:'0.9em',md:'0.9em',lg:'1em',xl:'1.1em'},
                                                  textShadow: '1px 1px 1px #000', textAlign:'center', margin: '10px 0px !important'}}>
                                  {props.desc}
                                </Typography>
                              </CardContent>
                            </Box>
                            <Slide direction="left" container={containerRef.current} appear={true} in={true} timeout={1000}>
                                {/*<CardMedia
                                  component="img"
                                  sx={{ width: {xs:'90%',sm:'80%',md:'450px',lg:'500px',xl:'550px'}, borderRadius: '10px', }}
                                  image={props.image}
                                  alt={props.service}
                                  title={props.service}
                                />*/}
                                <Box sx={{ display: 'flex', justifyContent:'space-around', flexDirection:'column', alignItems:'center', width: '100%',
                                           backgroundSize:'cover', backgroundRepeat:'no-repeat', backgroundPosition:'center',
                                           height:{sm:300,md:300,lg:370,xl:420},
                                           backgroundImage: `url(${props.image})`,
                                }}>
                               </Box>
                            </Slide>
                          </Card>
                      </Box>
                </Paper>
            </Box>
        </div>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

const items = [
    {
        title: "Services",
        text: "Seaspire Maritime is committed in providing the full spectrum of the highest quality ship management services",
        discard: 'none',
    },
    {
        title: "Chartering",
        service: "Chartering",
        image: service1,
        direction: 'LR',
        desc: "Our chartering department uses its extensive global network that provides unique access to first class and reputable charterers. A very dynamic and experienced team is continuously monitoring all market developments implementing a flexible decision-making strategy. Its approach focuses not only on each vessel’s characteristics and position, but also on the fleet as a whole.",
        display: "block",
        discard: 'flex',
        disText: 'none',
    },
    {
        title: "Operations",
        service: "Operations",
        image: service2,
        direction: 'LR',
        desc: "Our very experienced team is responsible for coordinating all vessels’ operations from navigation and bunkering to various port and cargo operations also dealing with all the commercial issues that arise. It also makes sure that the best practices are followed for the safe, reliable, and punctual transportation of all goods up to their final destination.",
        discard: 'flex',
        disText: 'none',
    },
    {
        title: "Technical",
        service: "Technical",
        image: service3,
        direction: 'LR',
        display: "block",
        desc: "Our technical team consists of highly skilled engineers with seagoing experience and naval architects. We constantly monitor our vessels for optimal performance and maintenance to ensure that our fleet is kept at the highest standards. Our goal is that vessels can trade globally even in the most demanding parts of the world, always in a cost-efficient manner. Budgets are strictly monitored and compliance with all international and local port regulations is ensured.",
        discard: 'flex',
        disText: 'none',
    },
    {
        title: "Crew",
        service: "Crew",
        image: service4,
        direction: 'LR',
        display: "block",
        desc: "In Seaspire, we aim to maintain a pool of highly trained and competent seafarers that share our vision and culture. Our crew department implements our very strict recruitment and on-board policies in order to attract quality seafarers and achieve a high level of retention. It always remains in close cooperation with the other departments for all crew-related matters.",
        discard: 'flex',
        disText: 'none',
    }
];

export default function STabs(props) {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => { setValue(newValue); };
  const handleChangeIndex = (index) => { setValue(index); };
  const styles = { tabsview: { width:'100%', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', }}
  return (
    <Box sx={{ width: {xs:'100vw', md:'100vw', lg:'100vw', xl:'100vw'}, height:'100%', overflow:'hidden', cursor:'grab', flexDirection:'row', justifyContent:'center', alignItems:'center', zIndex:'1000' }}
         display={{ xs: 'flex', md: 'flex', lg: 'flex', xl: 'flex' }}>
      <Tabs value={value} onChange={handleChange} textColor="primary" orientation={'vertical'}
                          scrollButtons="auto" sx={{ width:{xs:'35vw',sm:'30vw', md:'25vw', lg:'20vw', xl:'15vw'}, borderRight: 1, borderColor: 'divider', textAlign:'left',
                                                     marginTop:{xs:'15vh', sm:0, md:0, lg:0, xl:0}, alignSelf: {xs:'flex-start', sm:'center',md:'center', lg:'center', xl:'center'} }}>
        <Tab label={items[0].title} {...a11yProps(0)} sx={{ width:'100%', color: '#ffffff', fontSize:{xs:'0.8em',sm:'1em', md:'1.2em', lg:'1.4em', xl:'1.6em'}, textTransform:'initial', padding:{xs:'15px 5px'}}} />
        <Tab label={items[1].title} {...a11yProps(1)} sx={{ width:'100%', color: '#ffffff', fontSize:{xs:'0.8em',sm:'1em', md:'1.2em', lg:'1.4em', xl:'1.6em'}, textTransform:'initial', padding:{xs:'15px 5px'}}} />
        <Tab label={items[2].title} {...a11yProps(2)} sx={{ width:'100%', color: '#ffffff', fontSize:{xs:'0.8em',sm:'1em', md:'1.2em', lg:'1.4em', xl:'1.6em'}, textTransform:'initial', padding:{xs:'15px 5px'}}} />
        <Tab label={items[3].title} {...a11yProps(2)} sx={{ width:'100%', color: '#ffffff', fontSize:{xs:'0.8em',sm:'1em', md:'1.2em', lg:'1.4em', xl:'1.6em'}, textTransform:'initial', padding:{xs:'15px 5px'}}} />
        <Tab label={items[4].title} {...a11yProps(2)} sx={{ width:'100%', color: '#ffffff', fontSize:{xs:'0.8em',sm:'1em', md:'1.2em', lg:'1.4em', xl:'1.6em'}, textTransform:'initial', padding:{xs:'15px 5px'}}} />
      </Tabs>
      <SwipeableViews
            axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
            index={value}
            onChangeIndex={handleChangeIndex}
            enableMouseEvents
            style={styles.tabsview}
            containerStyle={{transitionDuration: '1s'}}
            springConfig={{duration: '1s', easeFunction: 'cubic-bezier(0.15, 0.3, 0.25, 1)', delay: '0s'}}
            className="tabs-services"
        >
        <TabPanel value={value} index={0} dir={theme.direction} text={items[0].text} service={items[0].service} image={items[0].image} discard={items[0].discard} distext={'flex'} ></TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction} desc={items[1].desc} service={items[1].service} image={items[1].image} discard={items[1].discard} distext={'none'} ></TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction} desc={items[2].desc} service={items[2].service} image={items[2].image} discard={items[2].discard} distext={'none'} ></TabPanel>
        <TabPanel value={value} index={3} dir={theme.direction} desc={items[3].desc} service={items[3].service} image={items[3].image} discard={items[3].discard} distext={'none'} ></TabPanel>
        <TabPanel value={value} index={4} dir={theme.direction} desc={items[4].desc} service={items[4].service} image={items[4].image} discard={items[4].discard} distext={'none'} ></TabPanel>
      </SwipeableViews>
    </Box>
  );
}
