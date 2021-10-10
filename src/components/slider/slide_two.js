import React from 'react';
import slideImg from './saronicspire2.jpg';
// let slideImg = require('./saronicspire2.jpg');

const SlideTwo = (props) => {
  let background = {
    backgroundImage: "url(" + slideImg + ")",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    // height: '700px'
  }
  let text = {
    height: '200px',
    backgroundColor: '#ffffff',
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
    backgroundColor: '#ffffff',
    fontWeight: '700',
    fontSize: '20px',
    width: '200px',
    padding: '10px 10px',
    // border: '2px solid #ffffff',
  }
  let spec ={
    backgroundColor: '#ffffff',
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
      <div className='slideText' style={text} >
        <p> Saronic Spire </p>
        <div className="vesselTable" style={vesselTable}>
          <div className='table_container' style={shipTable}>
            <div className='table_cat' style={cat} > Type </div>
            <div className='table_spec' style={spec}> Open/Box type<br/> bulk carrier </div>
          </div>
          <div className='table_container' style={shipTable}>
            <div className='table_cat' style={cat} > Build by / Year </div>
            <div className='table_spec' style={spec}> Kanda Yard<br/>Japan / 2004 </div>
          </div>
          <div className='table_container' style={shipTable}>
            <div className='table_cat' style={cat} > Deadweight </div>
            <div className='table_spec' style={spec}> 32.355 dwt<br/><br/> </div>
          </div>
          <div className='table_container' style={shipTable}>
            <div className='table_cat' style={cat} > Flag </div>
            <div className='table_spec' style={spec}> Bahamas<br/><br/> </div>
          </div>
          <div className='table_container' style={shipTable}>
            <div className='table_cat' style={cat} > Main Engine </div>
            <div className='table_spec' style={spec}> KOBE DIESEL CO.LTD.<br/> 6UEC52LA </div>
          </div>
          <div className='table_container' style={shipTable}>
            <div className='table_cat' style={cat} > Managed since </div>
            <div className='table_spec' style={spec}> 2016<br/><br/> </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default SlideTwo;
