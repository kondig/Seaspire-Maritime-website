import React from 'react';
import PropTypes from 'prop-types';
// import { makeStyles } from '@material-ui/core/styles';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Zoom from '@mui/material/Zoom';
import Fab from '@mui/material/Fab';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

// const useStyles = makeStyles((theme) => ({
//   root: {
//     position: 'absolute',
//     bottom: theme.spacing(2),
//     right: theme.spacing(2),
//     zIndex: 1000,
//   },
// }));

function ScrollTop(props) {
  const { children } = props;
  // const classes = useStyles();
  const trigger = useScrollTrigger({
    target: window,
    disableHysteresis: false,
    threshold: 100,
  });

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector('#back-to-top-anchor');
    console.log(anchor);
    if (anchor) {
      anchor.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <Zoom in={true} style={{ transitionDelay: '4000ms' }}>
      <div onClick={handleClick} role="presentation" className="scrollTop">
        {children}
      </div>
    </Zoom>
  );
}

ScrollTop.propTypes = {
  children: PropTypes.element.isRequired,
};

export default function BackToTop(props) {
  // const classes = useStyles();
  return (
    <div>
      <ScrollTop {...props}>
        <Fab className="scrollTopCircle" size="small" aria-label="scroll back to top" >
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </div>
  );
}
