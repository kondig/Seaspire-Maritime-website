/**
* Copyright (c) 2018-present, IQVIA Greece. All rights reserved.
*
* You are hereby granted a non-exclusive, worldwide, royalty-free license to use,
* copy, modify, and distribute this software in source code or binary form for use
* in connection with the web services and APIs provided by Facebook.
**
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
* IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
* FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
* COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
* IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
* CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

var iqPreviousUrl = document.referrer;
var iqviaRegisterProdWs = "https://qiservices.cloudsolutions.imshealth.com/epharmacy/iqviaWS.asmx/GetIQTransaction";
var iqviaRegisterVisitWs = "https://qiservices.cloudsolutions.imshealth.com/epharmacy/iqviaWS.asmx/GetIQVisit";
var iqDomainName = window.location.href;
var iqProductOrders = [];

/// function to submit ordered product to iqvia
function iqRegisterProdAsync() {

    var iqValue = iqOrderToString();

    $.ajax({
        type: "POST",
        url: iqviaRegisterProdWs,
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

    $.ajax({
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
   
    alert(res);
}

/// function to stringify the order
function iqOrderToString() {
    var iqOrderStr = "";
    var iqfLen = iqProductOrders.length;
    iqOrderStr += iqDomainName + '<|>';

    for (i = 0; i < iqfLen; i++) {

        for (var p in iqProductOrders[i]) {

            if (iqProductOrders[i].hasOwnProperty(p)) {
                iqOrderStr += iqProductOrders[i][p] + '|-|';
            }
        }

        iqOrderStr += '<|>';
    }
    return iqOrderStr;
}
