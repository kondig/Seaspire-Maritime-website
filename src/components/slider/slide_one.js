import React from 'react';
import slideImg from './balticspire.jpg';
// let slidePic = require('./balticspire.jpg');

const SlideOne = (props) => {
  let background = {
    backgroundImage: "url(" + slideImg + ")",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  }
  let text = {
    width: '100%',
    backgroundColor: '#333',
    padding: '0',
    margin: '0',
  }
  let shipTable = {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'stretch',
    alignContent: 'stretch',
    justifyContent: 'flex-start',
    display: 'inline-block',
  }
  let vesselTable = {
    width: '100%',
    // height: '250px',
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'stretch',
    alignContent: 'stretch',
    justifyContent: 'center',
    backgroundColor: '#333',
  }
  let cat ={
    backgroundColor: '#333',
    color: '#ffffff',
    fontWeight: '700',
    fontSize: '20px',
    width: '200px',
    padding: '10px 10px',
  }
  let spec ={
    backgroundColor: '#333',
    width: '200px',
    color: '#ffffff',
    fontSize: '18px',
    textAlign: 'center',
    padding: '10px 10px',
  }

  return (
    <div className="slide bg-sl1">
      <div className="slide-img" style={background}><p> Baltic Spire </p></div>
      <div className='slide-table' style={text} >
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
