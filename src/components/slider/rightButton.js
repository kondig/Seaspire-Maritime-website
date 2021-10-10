import React from 'react';
import FontAwesome from 'react-fontawesome';

const RightButton = (props) => {
  return (
    <div className='nextButton' onClick={props.nextPic} style={{cursor: 'pointer'}} >
      <FontAwesome className='rightButton' name='angle-right' size='4x'/>
    </div>
  )
}

export default RightButton;
