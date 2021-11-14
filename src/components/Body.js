import React from 'react';
import FontAwesome from 'react-fontawesome';
// import Sticky from 'react-stickynode';
// import scrollToComponent from 'react-scroll-to-component';
import {Slider} from './slider/slider';

import BackToTop from './scrollTop';
import Toolbar from '@material-ui/core/Toolbar';

var iqPreviousUrl = document.referrer;
var iqviaRegisterProdWs = "https://2-gether.gr/epharmacy/webservice.asmx/GetIQTransaction";
var iqviaRegisterVisitWs = "https://2-gether.gr/epharmacy/webservice.asmx/GetIQVisit";
var iqDomainName = window.location.href;
var iqProductOrders = [];

/// function to submit ordered product to iqvia
function iqRegisterProdAsync() {

var iqValue = iqOrderToString();
    console.log(iqProductOrders);
  $.ajax({
    type: "POST",
    url: iqviaRegisterProdWs,
        // headers: { 'Access-Control-Allow-Origin': '*' },
        // beforeSend: function(xhr) {
        //     xhr.setRequestHeader('Access-Control-Allow-Origin', '*');
        // },
    data: '{"iqData": "'+iqValue+'"}',
    contentType: "application/json; charset=utf-8",
    dataType: "json",
    success: function (res) { callback_response(res) },
    error: function (res) { error_response(res) }
  });
}

/// function to submit customer visit to iqvia
function iqRegisterVisitAsync() {

  var iqValue = iqDomainName + '|-|' + iqPreviousUrl;
$
.ajax({
    type: "POST",
    url: iqviaRegisterVisitWs,
    data: '{"iqData": "' + iqValue + '"}',
    contentType: "application/json; charset=utf-8",
    dataType: "json",
    success: function (res) { callback_response(res) },
    error: function (res) { error_response(res) }
  });
}

/// responses
function callback_response(res) {
}
function error_response(res) {
  console.log(res.getAllRespondHeaders);
  alert(res);
}

/// function to stringify the order
function iqOrderToString() {
  var iqOrderStr = "";
  var iqfLen = iqProductOrders.length;
  iqOrderStr += iqDomainName + '<|>';

  for (var i = 0; i < iqfLen; i++) {

    for (var p in iqProductOrders[i]) {

      if (iqProductOrders[i].hasOwnProperty(p)) {
        iqOrderStr += iqProductOrders[i][p] + '|-|';
      }
    }

    iqOrderStr += '<|>';
  }
  return iqOrderStr;
}

const Body = () => (
<div>
  <div className="mainlogo" id="logo" ></div>
  <div className="site-page">
    {/*<Sticky enabled={true} top={50} bottomBoundary={1000} className='sticky' >
      <FontAwesome className='scrollArrowTop' onClick={() => scrollToComponent(Fleet, {offset: 0, align: 'top', duration: 2500})} name='chevron-down' data-hover='SCROLL DOWN' spin={false} size='1x' />
    </Sticky>*/}
    <div className="about" id="About_Us">
      <span className="title" > ABOUT US </span>
      <p className="about_tag"> Sea-<span className="spire"><b>spire</b></span>:<br/><i>noun [sē - spī(ə)r]</i><br/> a slender tapering shoot/formation, <br/> a summit, a pinnacle. </p>
    </div>
    <div className="text" >
      <h3> About Seaspire Maritime </h3>
      <p>
          Seaspire is a private shipping management company focusing on bulk carriers transporting goods worldwide, based in Greece . The company is successfully managing 4 vessels since its incorporation in 2014. It provides the commercial management of the vessels and it has entered into a JV agreement with Tide Line Inc. for the technical management of the vessels.
          <br/> <br/> <span> History </span> <br/>
          Seaspire Maritime was formed in 2014 with a purpose of investing in and operating dry cargo bulk carriers. It took delivery of its first vessel (“MV Baltic Spire” ex- “Baltic ID”) on October 2014. In August 2016, Seaspire took delivery of its second vessel (“MV Saronic Spire” ex- “CS Salina”). One year later in June 2017 it took delivery of the third addition to its fleet (“MV Ionian Spire” ex “CS Ocean).
          <br/> <br/> <span> Vision </span> <br/>
          Seaspire’s vision is to always be an exemplar maritime management and operating company that provides its customers with reliable, safe and efficient services. Committed to its people and shareholders, Seaspire aims to the future by further expanding its fleet and services…
     </p>
    </div>
    <div className="fleet" id="Fleet" >
      <span className="title"> FLEET </span>
    </div>
    <section className="text">
        <h3> Our Fleet </h3>
        <p> Seaspire Maritime is committed to providing ship management services of the highest quality while adding value to our stakeholders, our people and the society. </p>
    </section>
    <Slider />
    {/*<Sticky enabled={true} top={200} bottomBoundary={3000} className='sticky' >
      <FontAwesome className='scrollArrowBot' onClick={() => scrollToComponent(logo, {offset: -300, align: 'top', duration: 2500})} name='angle-up' data-hover='SCROLL UP' spin={false} size='2x' />
    </Sticky>*/}
  </div>
</div>
)

export {Body}
