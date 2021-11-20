import React from 'react';
import slideImg from './saronicspire2.jpg';
// let slideImg = require('./saronicspire2.jpg');

const SlideTwo = (props) => {
  let background = {
    backgroundImage: "url(" + slideImg + ")",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  }
  let text = {
    backgroundColor: '#1A6D8F',
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
    backgroundColor: '#1A6D8F',
  }
  let cat ={
    backgroundColor: '#1A6D8F',
    color: '#ffffff',
    fontWeight: '700',
    fontSize: '20px',
    width: '200px',
    padding: '10px 10px',
  }
  let spec ={
    backgroundColor: '#1A6D8F',
    color: '#ffffff',
    width: '200px',
    fontSize: '18px',
    textAlign: 'center',
    padding: '10px 10px',
  }

  return (
    <div className="slide bg-sl2">
    <div className="slide-img" style={background}><p> Saronic Spire </p></div>
    <div className='slide-table' style={text} >    
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
