import React, {Component} from 'react';
import Slider from 'react-slick';
import FontAwesome from 'react-fontawesome';
// import "~slick-carousel/slick/slick.css";
import service1 from './service_commercial.jpg';
import service2 from './service_operations2.jpg';
import service3 from './service_technicalmgmt.jpg';
// let service1 = require('./service_commercial.jpg');
// let service2 = require('./service_operations2.jpg');
// let service3 = require('./service_technicalmgmt.jpg');

function NextArrow(props) {
  const {className, style, onClick} = props;
  return (
    <div className={className}
         style={{...style,
                position: 'absolute',
                 top:'50%',
                 right:'45%',
                 display: 'block',
                 background: 'black',
                 borderRadius: '100px',
                 color: 'black',
                 zIndex: '1'}}
         onClick={onClick}></div>
  )
};
function PrevArrow(props) {
  const {className, style, onClick} = props;
  return (
    <div className='prevArrow'>
       <div className={className}
         style={{...style,
                 display:'block',
                 zIndex: '1'}}
         onClick={onClick}>
      </div>
    </div>
  )
};

const DigPrevArrow = (props) => {
  const {onClick, style} = props;
  return (
    <div className='prevArrow'
         style={{...style,
                   position: 'absolute',
                   top:'50%',
                   left:'2%',
                   display: 'block',
                   zIndex:'1'}}
         onClick={onClick}>
        <FontAwesome className='backButton' name='angle-left' size='4x' spin={false} />
    </div>
  )
}
const DigNextArrow = (props) => {
  const {onClick, style} = props;
  return (
    <div className='nextArrow'
         style={{...style,
                   position: 'absolute',
                   top:'50%',
                   right:'2%',
                   display: 'block'}}
         onClick={onClick}>
        <FontAwesome className='rightButton' name='angle-right' size='4x' spin={false} />
    </div>
  )
}



class Carousel extends Component {
  render() {
    let settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToScroll: 1,
      nextArrow: <DigNextArrow />,
      prevArrow: <DigPrevArrow />,
    };
    let background1 = {
      backgroundImage:'url(' + service1 + ')',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      flexGrow:'2',
      height:'720px',
      width:'500px',
      margin:'0px',
    };
    let background2 = {
      backgroundImage:'url(' + service2 + ')',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      height:'720px',
      flexGrow:'2',
      width:'500px',
      margin:'0px',
    };
    let background3 = {
      backgroundImage:'url(' + service3 + ')',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      height:'720px',
      flexGrow:'2',
      width:'500px',
      margin:'0px',
    };
    let column2 = {
      width:'300px',
      height:'720px',
      backgroundColor: '#AFBDC5',
      textAlign: 'center',
      margin:'0px',
      padding: '0px 35px',
      // marginTop:'10px',
    }
    let combo = {
      display: 'flex',
      flexWrap:'wrap',
      justifyContent: 'space-evenly',
      alignContent:'stretch',
      margin:'0',
      padding:'0',
    }
    let paragraph = {
      position: 'relative',
      top: '10%',
      padding: '25px',
    }
    return (
      <div className="carousel-div">

        <Slider {...settings} >
          <div style={combo} className="combo1">
            <div style={background1} className='ser1pic'></div>
            <div style={column2} className='ser1text'>
              <h1> Commercial Management</h1>
              <p style={paragraph}>
                All our vessels are fully capable to offer worldwide ship transportation through all trade routes and of a wide range of cargo types. Seaspire is fixing directly with first class Charterers such as ADMI, Dreyfus, Cofco, SIMS. <br/><br/> It is also fixing repeatedly with operators such as Clipper & Itiro. Since 2014, our vessels have carried over 1,000,000 metric tons of all dry bulk cargo types.
              </p>
            </div>
          </div>
          <div style={combo}>
            <div style={background2} className='ser1pic'></div>
            <div style={column2} className='ser1text'>
              <h1> Operations </h1>
              <p style={paragraph}>
                Praesent ullamco distinctio vel nemo bibendum perspiciatis minus autem odit tempore a occaecati! Lobortis pellentesque quisque. Ornare! Accusantium necessitatibus purus interdum! Tristique conubia ducimus mollis pellentesque interdum natus cupiditate, perferendis minim venenatis! Autem praesentium ornare voluptatum cubilia, molestias purus fringilla sollicitudin nostrud minim quod, modi ut at. Ligula porro in gravida iaculis odit. Platea metus! Pulvinar facere mauris ornare.
              </p>
            </div>
          </div>
          <div style={combo}>
            <div style={background3} className='ser1pic'>  <span className="service1"> Techninal <br/> Management </span>  </div>
            <div style={column2} className='ser1text'>
             <h1> Technical Management </h1>
             <p style={paragraph}>
                Seaspire’s management team in close cooperation with Tide Line, have managed to lower the operating expenses of the vessels by focusing on specific technical aspects and well-planned maintenance schedules, while at the same time keeping a high-quality profile.
             </p>
            </div>
          </div>
        </Slider>
      </div>
    )
  }
}

export {Carousel};
