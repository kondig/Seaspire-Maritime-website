import React from 'react';
import slideImg from './aegeanspire.jpg';

// let slidePic = require('./aegeanspire.jpg');

const SlideFour = (props) => {
  let background = {
    backgroundImage: "url(" + slideImg + ")",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundColor: '#1A6D8F',
    backgroundRepeat: 'no-repeat',
  }
  let text = {
    backgroundColor: '#1A6D8F',
    color: '#1A6D8F',
    padding: '0',
    margin: '0',
  }
  let shipTable = {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'stretch',
    alignContent: 'stretch',
    justifyContent: 'flex-start',
    position: 'relative',
    // display: 'inline-block',
  }
  let vesselTable = {
    width: '100%',
    // height: '200px',
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
    // width: '200px',
    padding: '10px 10px',
    textAlign: 'left',
  }
  let spec ={
    backgroundColor: '#1A6D8F',
    color: '#ffffff',
    // width: '200px',
    fontSize: '18px',
    textAlign: 'center',
    padding: '10px 10px',
    width: '50%'
  }
  let bg = { backgroundColor: '#1A6D8F' }
  return (
    <div className="slide bg-sl2">
        <div className="slide-img" style={background}><p> Aegean Spire </p></div>
        <div className='slide-table' style={text} >
            <div className="vesselTable" style={vesselTable}>
              {/*<div className='table_container' style={shipTable}>
                <div className='table_cat' style={cat} > Type </div>
                <div className='table_spec' style={spec}> Open/Box type<br/> bulk carrier </div>
              </div>
              <div className='table_container' style={shipTable}>
                <div className='table_cat' style={cat} > Build by / Year </div>
                <div className='table_spec' style={spec}> Shin Kochiyuko Co. Ltd<br/> Japan / 2008 </div>
              </div>
              <div className='table_container' style={shipTable}>
                <div className='table_cat' style={cat} > Deadweight </div>
                <div className='table_spec' style={spec}> 33.401 dwt<br/><br/></div>
              </div>
              <div className='table_container' style={shipTable}>
                <div className='table_cat' style={cat} > Flag </div>
                <div className='table_spec' style={spec}> Panama tbc Bahamas<br/><br/> </div>
              </div>
              <div className='table_container' style={shipTable}>
                <div className='table_cat' style={cat} > Main Engine </div>
                <div className='table_spec' style={spec}> KOBE DIESEL CO.LTD.<br/> 6UEC52LA </div>
              </div>
              <div className='table_container' style={shipTable}>
                <div className='table_cat' style={cat} > Managed since </div>
                <div className='table_spec' style={spec}> January 2018<br/><br/> </div>
              </div>*/}
              <table className="sliderTable">
                <tr>
                  <td>Type</td>
                  <td>Open/Box type<br/> bulk carrier</td>
                </tr>
                <tr>
                  <td>Build by / Year</td>
                  <td>Shin Kochiyuko Co. Ltd<br/> Japan / 2008</td>
                </tr>
                <tr>
                  <td>Deadweight</td>
                  <td>33.401 dwt</td>
                </tr>
                <tr>
                  <td>Flag</td>
                  <td>Panama tbc Bahamas</td>
                </tr>
                <tr>
                  <td>Main Engine</td>
                  <td>KOBE DIESEL CO.LTD.<br/> 6UEC52LA</td>
                </tr>
                <tr>
                  <td>Managed since</td>
                  <td>January 2018</td>
                </tr>
              </table>
            </div>
          </div>
      </div>

  )
}

export default SlideFour ;
