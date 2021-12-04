import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import SwipeableViews from 'react-swipeable-views';
import { useTheme } from '@mui/material/styles';
import { Paper, Button } from '@mui/material';
import Fade from '@mui/material/Fade';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import {Service} from './card';
import useMediaQuery from '@mui/material/useMediaQuery';
import service1 from '../images/service_commercial.jpg';
import service2 from '../images/service_operations2.jpg';
import service3 from '../images/service_technicalmgmt.jpg';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

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
            <Box boxShadow={0} display={{ xs: 'block', md: 'none', lg: 'none', xl: 'none' }} sx={{minWidth:150}}>
                <Paper sx={{backgroundColor:"transparent", height:'100vh', width:'100%', boxShadow: '0',
                            display:'flex', flexDirection:'column', justifyContent:'flex-start'}}>
                    <Fade appear={true} in={true} timeout={2000}>
                      <div className="tab-text color-white">
                          {props.text}
                      </div>
                    </Fade>
                    <Box boxShadow={0} display={{ xs: 'none', md: 'block', lg: 'block', xl: 'block' }} sx={{display:props.show}}>
                      <Card sx={{ display: 'flex', flexDirection:'column', margin: '5px', justifyContent: 'space-between',}}>
                        <Fade appear={true} in={true} timeout={2000}>
                            <CardMedia
                              component="img"
                              sx={{ width: '100%' }}
                              image={props.image}
                              alt={props.service}
                              title={props.service}
                            />
                        </Fade>
                        <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%' }} >
                          <CardContent sx={{  }}>
                            <Typography component="div" variant="h5" sx={{ fontSize:'1em', color: '#1A6D8F', margin: '10px 5px'}}>
                              {props.service}
                            </Typography>
                            <Typography variant="subtitle1" color="text.secondary" component="div" sx={{ fontSize:'0.9em',textAlign: 'left', margin: '5px !important'}}>
                              {props.desc}
                            </Typography>
                          </CardContent>
                        </Box>
                      </Card>
                    </Box>
                </Paper>
            </Box>
            <Box boxShadow={0} display={{ xs: 'none', md: 'block', lg: 'block', xl: 'block' }} sx={{width:'100%'}}>
                <Paper sx={{backgroundColor:"transparent", width:"90%", margin: '0 auto', boxShadow: '0',
                            display:'flex', flexDirection:'row', justifyContent:'flex-end'}}>
                      <Fade appear={true} in={true} timeout={2000}>
                        <div className="tab-text color-white w-50">
                            {props.text}
                        </div>
                      </Fade>
                      <Box display={{ xs: 'block', md: 'none', lg: 'none', xl: 'none' }}>
                        <Card sx={{ display: 'flex', flexDirection: 'column-reverse', margin: '20px auto', justifyContent: 'center', width: '80%'}}>
                            <Box sx={{ display: 'flex', flexDirection: 'column' }} >
                              <CardContent sx={{  }}>
                                <Typography component="div" variant="h5" sx={{ color: '#1A6D8F', margin: '10px 2px', }}>
                                  {props.service}
                                </Typography>
                                <Typography variant="subtitle1" color="text.secondary" component="div"
                                            sx={{ textAlign: 'left', margin: '5px 5px !important', fontSize: '0.7rem'}}>
                                  {props.desc}
                                </Typography>
                              </CardContent>
                            </Box>
                          <CardMedia
                            component="img"
                            sx={{ height: '200px' }}
                            image={props.image}
                            alt={props.service}
                            title={props.service}
                          />
                        </Card>
                      </Box>
                      <Box boxShadow={0} display={{ xs: 'none', md: 'block', lg: 'block', xl: 'block' }} sx={{display:props.show}}>
                          <Card sx={{ display: 'flex', margin: '5px', justifyContent: 'space-between',}}>
                            <Fade appear={true} in={true} timeout={2000}>
                                <CardMedia
                                  component="img"
                                  sx={{ width: '45%' }}
                                  image={props.image}
                                  alt={props.service}
                                  title={props.service}
                                />
                            </Fade>
                            <Box sx={{ display: 'flex', flexDirection: 'column', width: '55%' }} >
                              <CardContent sx={{  }}>
                                <Typography component="div" variant="h5" sx={{ color: '#1A6D8F', margin: '10px 5px'}}>
                                  {props.service}
                                </Typography>
                                <Typography variant="subtitle1" color="text.secondary" component="div" sx={{ textAlign: 'left', margin: '10px 5px !important'}}>
                                  {props.desc}
                                </Typography>
                              </CardContent>
                            </Box>
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
        text: "Seaspire Maritime is committed to providing ship management services of the highest quality while adding value to our stakeholders, our people and the society.",
        show: "none",
    },
    {
        title: "Commercial Management",
        service: "Commercial Management",
        image: service1,
        direction: 'LR',
        desc: "All our vessels are fully capable to offer worldwide ship transportation through all trade routes and of a wide range of cargo types. Seaspire is fixing directly with first class Charterers such as ADMI, Dreyfus, Cofco, SIMS. It is also fixing repeatedly with operators such as Clipper & Itiro. Since 2014, our vessels have carried over 1,000,000 metric tons of all dry bulk cargo types.",
        display: "block",
    },
    {
        title: "Operations",
        service: "Operations",
        image: service2,
        direction: 'RL',
        desc: "All our vessels are fully capable to offer worldwide ship transportation through all trade routes and of a wide range of cargo types. Seaspire is fixing directly with first class Charterers such as ADMI, Dreyfus, Cofco, SIMS. It is also fixing repeatedly with operators such as Clipper & Itiro. Since 2014, our vessels have carried over 1,000,000 metric tons of all dry bulk cargo types."
    },
    {
        title: "Technical Management",
        service: "Technical Management",
        image: service3,
        direction: 'LR',
        desc: "All our vessels are fully capable to offer worldwide ship transportation through all trade routes and of a wide range of cargo types. Seaspire is fixing directly with first class Charterers such as ADMI, Dreyfus, Cofco, SIMS. It is also fixing repeatedly with operators such as Clipper & Itiro. Since 2014, our vessels have carried over 1,000,000 metric tons of all dry bulk cargo types."
    }
];

export default function STabs(props) {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => { setValue(newValue); };
  const handleChangeIndex = (index) => { setValue(index); };
  const secondary = '#ffffff'
  const styles = { tabsview: { width:'100%'}}
  return (
    <Box sx={{ width: {xs:'100vw', md:'100vw', lg:'100%', xl:'100vw'}, height:'100%', overflow:'hidden', cursor:'grab', flexDirection:'row', justifyContent:'center', alignItems:'center',                }}
         display={{ xs: 'flex', md: 'flex', lg: 'flex', xl: 'flex' }}>
      <Tabs value={value} onChange={handleChange} textColor="primary" indicatorColor={secondary} orientation={'vertical'}
                          scrollButtons="auto" sx={{ borderRight: 1, borderColor: 'divider', textAlign:'left', }}>
        <Tab label={items[0].title} {...a11yProps(0)} sx={{ width:'100%', color: '#ffffff', fontSize:{xs:'0.8em',md:'1.2em', lg:'1.4em', xl:'1.6em'}, textShadow:'1px 1px 1px #000', textTransform:'initial', padding:{xs:'15px 5px'}}} />
        <Tab label={items[1].title} {...a11yProps(1)} sx={{ width:'100%', color: '#ffffff', fontSize:{xs:'0.8em',md:'1.2em', lg:'1.4em', xl:'1.6em'}, textShadow:'1px 1px 1px #000', textTransform:'initial', padding:{xs:'15px 5px'}}} />
        <Tab label={items[2].title} {...a11yProps(2)} sx={{ width:'100%', color: '#ffffff', fontSize:{xs:'0.8em',md:'1.2em', lg:'1.4em', xl:'1.6em'}, textShadow:'1px 1px 1px #000', textTransform:'initial', padding:{xs:'15px 5px'}}} />
        <Tab label={items[3].title} {...a11yProps(2)} sx={{ width:'100%', color: '#ffffff', fontSize:{xs:'0.8em',md:'1.2em', lg:'1.4em', xl:'1.6em'}, textShadow:'1px 1px 1px #000', textTransform:'initial', padding:{xs:'15px 5px'}}} />
      </Tabs>
      <SwipeableViews
            axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
            index={value}
            onChangeIndex={handleChangeIndex}
            enableMouseEvents
            style={styles.tabsview}
        >
        <TabPanel value={value} index={0} dir={theme.direction} text={items[0].text} service={items[0].service} image={items[0].image} show={items[0].show}></TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction} desc={items[1].desc} service={items[1].service} image={items[1].image} ></TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction} desc={items[2].desc} service={items[2].service} image={items[2].image} ></TabPanel>
        <TabPanel value={value} index={3} dir={theme.direction} desc={items[3].desc} service={items[3].service} image={items[3].image} ></TabPanel>
      </SwipeableViews>
    </Box>
  );
}
