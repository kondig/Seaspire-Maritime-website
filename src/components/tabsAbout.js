import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import SwipeableViews from 'react-swipeable-views';
import { useTheme } from '@mui/material/styles';

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
        <Box sx={{ p: 3 }}>
          <Typography style={{color:"#ffffff" }}
                      sx={{ textShadow:'1px 1px 1px #000',
                            textAlign:{xs:'center', md:'center', lg:'center', xl:'center'},
                            fontSize:{xs:'1em',md:'1.1em', lg:'1.2em', xl:'1.2em'},  }}>
            {children}
          </Typography>
        </Box>
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
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const items = [
    {
        name: "About",
        text: "Seaspire is a private ship management company, based in Athens, Greece specialized in operating dry bulk carriers globally."
    },
    {
        name: "Vision",
        text: "Seaspire’s vision is to always be an exemplary maritime management and operating company that provides its customers with the most reliable, safe and beneficially efficient (or beneficial and efficient) services. Committed to the holistic interests of its people and shareholders, Seaspire always operates at the highest ethical standards. Our goal is to always be a step ahead at the forefront of the industry incorporating and further developing innovative techniques and policies, while ensuring growth and environmental sustainability."
    },
    {
        name: "Mission",
        text: "Seaspire aims for the future by further expanding its fleet and services and by constantly creating increasing value to its business partners. Our goal is to achieve our high-standard demanding targets in the most responsible and environmentally friendly manner. We focus on offering excellent ship-management services, while ensuring a pro-active policy regarding the increasingly complex challenges of the maritime industry."
    }
];

export default function KTabs(props) {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => { setValue(newValue); };
  const handleChangeIndex = (index) => { setValue(index); };
  const secondary = '#ffffff'
  return (
    <Box sx={{ width: {xs:'95vw', md:'50vw', lg:'50vw', xl:'40vw'}, position:'absolute', left:'50%', transform:'translateX(-50%)', zIndex:'1000',
               top: {xs:'15vh', md:'25vh', lg:'25vh', xl:'15vh'}, cursor:'grab'  }}
         display={{ xs: 'block', md: 'block', lg: 'block', xl: 'block' }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider', backgroundColor: 'transparent', }}>
          <Tabs value={value} onChange={handleChange} textColor="primary" variant="fullWidth">
            <Tab label={items[0].name} {...a11yProps(0)} sx={{ color: '#ffffff', fontSize:{xs:'1em',md:'1.2em', lg:'1.4em', xl:'1.6em'}, textShadow:'1px 1px 1px #000','&:selected': { color: 'red', backgroundColor: 'white' }, }} />
            <Tab label={items[1].name} {...a11yProps(1)} sx={{ color: '#ffffff', fontSize:{xs:'1em',md:'1.2em', lg:'1.4em', xl:'1.6em'}, textShadow:'1px 1px 1px #000','&:selected': { color: 'red', backgroundColor: 'white' }, }} />
            <Tab label={items[2].name} {...a11yProps(2)} sx={{ color: '#ffffff', fontSize:{xs:'1em',md:'1.2em', lg:'1.4em', xl:'1.6em'}, textShadow:'1px 1px 1px #000','&:selected': { color: 'red', backgroundColor: 'white' }, }} />
          </Tabs>
        </Box>
        <SwipeableViews
            axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
            index={value}
            onChangeIndex={handleChangeIndex}
            enableMouseEvents
            containerStyle={{transitionDuration: '1s'}}
            springConfig={{duration: '1s', easeFunction: 'cubic-bezier(0.15, 0.3, 0.25, 1)', delay: '0s'}}
        >
            <TabPanel value={value} index={0} dir={theme.direction}>
              {items[0].text}
            </TabPanel>
            <TabPanel value={value} index={1} dir={theme.direction}>
              {items[1].text}
            </TabPanel>
            <TabPanel value={value} index={2} dir={theme.direction}>
              {items[2].text}
            </TabPanel>
        </SwipeableViews>
    </Box>
  );
}
