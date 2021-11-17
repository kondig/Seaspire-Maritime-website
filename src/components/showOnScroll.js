import React from 'react';
import PropTypes from 'prop-types';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Fade from '@material-ui/core/Fade';

function FadeOnScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger({ target: window });
  return (
    <Fade appear={false} direction="up" in={trigger} timeout={3000}>
      {children}
    </Fade>
  );
}

FadeOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
};

export {FadeOnScroll}
