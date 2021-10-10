import React from 'react';
import slideImg from './balticspire.jpg';
// let slidePic = require('./balticspire.jpg');

const SlideOne = (props) => {
  let background = {
    backgroundImage: "url(" + slideImg + ")",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    // height: '500px',
    // height: '700px'
  }
  let text = {
    height: '200px',
    width: '100%',
    backgroundColor: '#333',
    // padding: '20px 20px',
    padding: '0',
    margin: '0',
  }
  let shipTable = {
    // width: '700px',
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'stretch',
    alignContent: 'stretch',
    justifyContent: 'flex-start',
    display: 'inline-block',
    // border: '1px solid yellow',
    // width: '250px'
  }
  let vesselTable = {
    width: '100%',
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'stretch',
    alignContent: 'stretch',
    justifyContent: 'center',
    // border: '1px solid red',
    // position: 'absolute',
    // left: '50%',
    // transform:  'translateX(-50%)',
  }
  let cat ={
    backgroundColor: '#333',
    fontWeight: '700',
    fontSize: '20px',
    width: '200px',
    padding: '10px 10px',
    // border: '2px solid #ffffff',
  }
  let spec ={
    backgroundColor: '#333',
    width: '200px',
    fontSize: '18px',
    textAlign: 'center',
    padding: '10px 10px',
    // border: '2px solid #AFBDC5',
  }

  return (
    <div className="slide">
      <div  className="vessel1" style={background} >
      </div>
      <div className='slide1Text' style={text} >
        <p> Baltic Spire </p>
        <div className="vesselTable" style={vesselTable}>
          <div className='table_container' style={shipTable}>
            <div className='table_cat' style={cat} > Type </div>
            <div className='table_spec' style={spec}> Single Decker self-trimmed <br/> bulk carrier / Log-fitted </div>
          </div>
          <div className='table_container' style={shipTable}>
            <div className='table_cat' style={cat} > Build by / Year </div>
            <div className='table_spec' style={spec}> Imabari Shipbuilding Co. Ltd<br/> Japan / 1997 </div>
          </div>
          <div className='table_container' style={shipTable}>
            <div className='table_cat' style={cat} > Deadweight </div>
            <div className='table_spec' style={spec}> 28.545 dwt<br/><br/></div>
          </div>
          <div className='table_container' style={shipTable}>
            <div className='table_cat' style={cat} > Flag </div>
            <div className='table_spec' style={spec}> Bahamas<br/><br/> </div>
          </div>
          <div className='table_container' style={shipTable}>
            <div className='table_cat' style={cat} > Main Engine </div>
            <div className='table_spec' style={spec}> MITSUI B&W 6S42MC<br/><br/> </div>
          </div>
          <div className='table_container' style={shipTable}>
            <div className='table_cat' style={cat} > Managed since </div>
            <div className='table_spec' style={spec}> 2014<br/><br/> </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default SlideOne ;
