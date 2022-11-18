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
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import ServicesIcon from '@mui/icons-material/MiscellaneousServices';
import AboutIcon from '@mui/icons-material/Info';
import FleetIcon from '@mui/icons-material/DirectionsBoat';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import NewsIcon from '@mui/icons-material/Announcement';
import { HashLink } from 'react-router-hash-link';

import logo from '../images/SeaSpire-logo.png';

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
        backgroundColor: trigger ? '#ffffff' : 'transparent',
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

function BurgerMenu() {

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
        <ListItemButton key={'About'} sx={{margin: '20px 0 !important', zIndex:'1000',
                                                '&:hover': { backgroundColor: '#000000', color: '#ffffff', }}} >
          <ListItemIcon><AboutIcon /></ListItemIcon>
          {/*<Link className="mobile-link" href='/#about' underline="none">ABOUT US</Link>*/}
          <HashLink smooth to="/#about" className="mobile-link">ABOUT US</HashLink>
        </ListItemButton>
        <ListItemButton key={'Services'} sx={{margin: '20px 0 !important', zIndex:'1000',
                                                '&:hover': { backgroundColor: '#000000', color: '#ffffff', }}}>
          <ListItemIcon><ServicesIcon /></ListItemIcon>
          {/*<a className="mobile-link" href='/#services'>SERVICES</a>*/}
          {/*<Link className="mobile-link" href='/#services' underline="none">SERVICES</Link>*/}
          <HashLink smooth to="/#services" className="mobile-link">SERVICES</HashLink>
        </ListItemButton>
        <ListItemButton key={'Fleet'} sx={{margin: '20px 0 !important', zIndex:'1000',
                                                '&:hover': { backgroundColor: '#000000', color: '#ffffff', }}}>
          <ListItemIcon><FleetIcon /></ListItemIcon>
          {/*<a className="mobile-link" href='/#fleet' >FLEET</a>*/}
          <HashLink smooth to="/#fleet" className="mobile-link">FLEET</HashLink>
        </ListItemButton>
        <ListItemButton key={'News'} sx={{margin: '20px 0 !important', zIndex:'1000',
                                                '&:hover': { backgroundColor: '#000000', color: '#ffffff', }}}>
          <ListItemIcon><NewsIcon /></ListItemIcon>
          {/*<a className="mobile-link" href='/#news' >NEWS</a>*/}
          <HashLink smooth to="/#news" className="mobile-link">NEWS</HashLink>
        </ListItemButton>
        <ListItemButton key={'Contact'} sx={{margin: '20px 0 !important', zIndex:'1000',
                                                '&:hover': { backgroundColor: '#000000', color: '#ffffff', }}}>
          <ListItemIcon><ContactPhoneIcon /></ListItemIcon>
          {/*<a className="mobile-link" href='/#contact' >CONTACT</a>*/}
          <HashLink smooth to="/#contact" className="mobile-link">CONTACT</HashLink>
        </ListItemButton>
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
            sx={{color: '#3d5ba6'}}
          >
            <MenuIcon sx={{width:'1.5em',height:'1.5em'}} />
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

function Header(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleMenu = (event) => { setAnchorEl(event.currentTarget); };
  const handleClose = () => { setAnchorEl(null); };

  return (
    <div className="header-root">
      <Box display={{ xs: 'block', md: 'none', lg: 'none', xl: 'none' }} sx={{ width: '100%', }}>
          <AppBar position="fixed" sx={{ backgroundColor: 'transparent', height: {xs:'50px', md:'90px', lg:'90px', xl:'90px'}, boxShadow:'0px 0px 0px #000', }} >
            <Toolbar sx={{display:'flex',justifyContent:'space-between'}}>
                 <a href='/' className="contain-img">
                    <img src={logo} className="header-logo" alt="Seaspire Maritime" />
                 </a>
               <BurgerMenu></BurgerMenu>
            </Toolbar>
          </AppBar>
      </Box>
      <Box boxShadow={0} display={{ xs: 'none', md: 'block', lg: 'block', xl: 'block' }}
           sx={{ width: '100%', backgroundColor: 'transparent !important' }}>
        {/*<ElevationScroll {...props}>*/}
          <AppBar position="fixed" sx={{ backgroundColor: 'transparent', boxShadow:'0px 0px 0px #000' }} >
            <Toolbar sx={{display:'flex',justifyContent:'space-between'}}>
               <ShowOnScroll {...props}>
               <a href='/'>
                <img src={logo} className="header-logo" alt="Seaspire Maritime" />
               </a>
               </ShowOnScroll>
                <div className="menu">
                  <ul>
                    <li> <a href='/#about'>ABOUT US</a> </li>
                    <li> <a href='/#fleet'>FLEET</a> </li>
                    <li> <a href='/#services'>SERVICES</a> </li>
                    <li> <a href='/#news'>NEWS</a> </li>
                    <li> <a href='/#contact'>CONTACT</a> </li>
                  </ul>
                </div>
            </Toolbar>
          </AppBar>
        {/*</ElevationScroll>*/}
      </Box>
    </div>
  );
}

export {Header}
