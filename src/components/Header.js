import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
import Link from '@mui/material/Link';
import AppBar from '@mui/material/AppBar';
// import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import PropTypes from 'prop-types';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Fade from '@mui/material/Fade';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import ServicesIcon from '@mui/icons-material/MiscellaneousServices';
import AboutIcon from '@mui/icons-material/Info';
import FleetIcon from '@mui/icons-material/DirectionsBoat';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import NewsIcon from '@mui/icons-material/Announcement';

import logo from '../images/SeaSpire-logo.png';

// const useStyles = makeStyles((theme) => ({
//   root: {
//     flexGrow: 1,
//     width: '100%',
//     [theme.breakpoints.down('sm')]: {
//       flexGrow: 0,
//     }
//   },
//   menuButton: {
//     marginRight: theme.spacing(2),
//   },
//   title: {
//     flexGrow: 1,
//     fontSize: '1em',
//   },
//   logo: {
//     width: '45px !important',
//     height: '77px',
//     padding: '5px',
//     marginTop: '0px !important',
//     [theme.breakpoints.down('sm')]: {
//         width: '20px !important',
//         height: '34px',
//         padding: '2px',
//     }
//   },
//   bar: {
//     backgroundColor: '#ffffff',
//     [theme.breakpoints.down('sm')]: {
//       height: '50px',
//     }
//   },
//   mi: {
//     margin: '20px 0 !important',
//     zIndex:'1000',
//     '&:hover': {
//       backgroundColor: '#000000',
//       color: '#ffffff',
//     }
//   },
//   burger: {
//     color: '#1864ac',
//   }
// }));
function ElevationScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
    style: {
        color: trigger ? '#000000' : '#666666',
        backgroundColor: trigger ? 'red' : 'transparent',
    }
  });
}
ElevationScroll.propTypes = {
  children: PropTypes.element.isRequired,
};

function ShowOnScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger({ target: window });
  return (
    <Fade appear={true} direction="right" in={true}>
      {children}
    </Fade>
  );
}

ShowOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
};

function SwipeableTemporaryDrawer() {
  // const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <ListItem button key={'About us'} sx={{margin: '20px 0 !important', zIndex:'1000', '&:hover': { backgroundColor: '#000000', color: '#ffffff', }}} >
          <ListItemIcon><AboutIcon /></ListItemIcon>
          <a className="mobile-link" href='#about' >ABOUT US</a>
        </ListItem>
        <ListItem button key={'Services'} sx={{margin: '20px 0 !important', zIndex:'1000', '&:hover': { backgroundColor: '#000000', color: '#ffffff', }}}>
          <ListItemIcon><ServicesIcon /></ListItemIcon>
          <a className="mobile-link" href='#services'>SERVICES</a>
        </ListItem>
        <ListItem button key={'Fleet'} sx={{margin: '20px 0 !important', zIndex:'1000', '&:hover': { backgroundColor: '#000000', color: '#ffffff', }}}>
          <ListItemIcon><FleetIcon /></ListItemIcon>
          <a className="mobile-link" href='#fleet' >FLEET</a>
        </ListItem>
        <ListItem button key={'Fleet'} sx={{margin: '20px 0 !important', zIndex:'1000', '&:hover': { backgroundColor: '#000000', color: '#ffffff', }}}>
          <ListItemIcon><NewsIcon /></ListItemIcon>
          <a className="mobile-link" href='#news' >NEWS</a>
        </ListItem>
        <ListItem button key={'Fleet'} sx={{margin: '20px 0 !important', zIndex:'1000', '&:hover': { backgroundColor: '#000000', color: '#ffffff', }}}>
          <ListItemIcon><ContactPhoneIcon /></ListItemIcon>
          <a className="mobile-link" href='#contact' >CONTACT</a>
        </ListItem>
      </List>
      <Divider />
    </Box>
  );

  return (
    <div>
      {['right'].map((anchor) => (
        <React.Fragment key={anchor}>
          {/*<Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>*/}
          <IconButton
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={toggleDrawer(anchor, true)}
            sx={{color: '#1864ac'}}
          >
            <MenuIcon />
          </IconButton>
          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            {list(anchor)}
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </div>
  );
}

function MenuAppBar(props) {
  // const classes = useStyles();
  // const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  // const handleChange = (event) => {
  //   setAuth(event.target.checked);
  // };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="header-root">
      <Box display={{ xs: 'block', md: 'none', lg: 'none', xl: 'none' }} sx={{ flexGrow: 1, width: '100%', }}>
        <ElevationScroll {...props}>
          <AppBar position="fixed" sx={{ backgroundColor: 'transparent', height: {xs:'50px', md:'90px', lg:'90px', xl:'90px'} }} >
            <Toolbar sx={{display:'flex',justifyContent:'space-between'}}>
                {/*<ShowOnScroll {...props}>*/}
                 <img src={logo} className="header-logo" alt="Seaspire Maritime" />
                {/*</ShowOnScroll>*/}
               <SwipeableTemporaryDrawer></SwipeableTemporaryDrawer>
            </Toolbar>
          </AppBar>
        </ElevationScroll>
      </Box>
      <Box boxShadow={0} display={{ xs: 'none', md: 'block', lg: 'block', xl: 'block' }}
           sx={{ flexGrow: 1, width: '100%', backgroundColor: 'transparent !important' }}>
        <ElevationScroll {...props}>
          <AppBar position="fixed" sx={{ backgroundColor: 'transparent' }} >
            <Toolbar sx={{display:'flex',justifyContent:'space-between'}}>
               <ShowOnScroll {...props}>
                <img src={logo} className="header-logo" alt="Seaspire Maritime" />
               </ShowOnScroll>
                <div className="menu">
                  <ul>
                    <li> <a href='#about'>ABOUT US</a> </li>
                    <li> <a href='#fleet'>FLEET</a> </li>
                    <li> <a href='#services'>SERVICES</a> </li>
                    <li> <a href='#news'>NEWS</a> </li>
                    <li> <a href='#contact'>CONTACT</a> </li>
                  </ul>
                </div>
            </Toolbar>
          </AppBar>
        </ElevationScroll>
      </Box>
    </div>
  );
}

const Header = () => {
  // const classes = useStyles();
  return (
    <div>
      <MenuAppBar />
    </div>
  )
}


const HeaderOld = () => (
  <div>
    <Menu>
      <a id="home" className="menu-item" href="/">Home</a>
      <a id="about" className="menu-item" href="#About_Us">About</a>
      <a className="menu-item" href="#Fleet"><FontAwesome name='ship'/> &nbsp; Fleet</a>
      <a className="menu-item" href="#contact">Contact</a>
    </Menu>
    <header className="App-header">
      <div className="header">
        <div className="menu">
          <ul>
            <li> <a href='#About_Us'>ABOUT US</a> </li>
            <li> <a href='#Fleet'>FLEET</a> </li>
            <li> <a href='#Services'>SERVICES</a> </li>
            <li> <a href='#History'>NEWS</a> </li>
            <li> <a href='#contact'>CONTACT</a> </li>
          </ul>
        </div>
      </div>
    </header>
  </div>
)

export {Header}
